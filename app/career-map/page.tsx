"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { careerMapQuestions } from "@/data/careerMapQuestions";
import { futureDirections } from "@/data/careers";

const RESULT_STORAGE_KEY = "career-map-result";

function computeTopDirections(scoreTotals: Record<string, number>) {
  return [...futureDirections]
    .sort((a, b) => (scoreTotals[b.id] ?? 0) - (scoreTotals[a.id] ?? 0))
    .slice(0, 3)
    .map((direction) => direction.id);
}

export default function CareerMapPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(careerMapQuestions.length).fill(null)
  );
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
    };
  }, []);

  const question = careerMapQuestions[step];
  const isLast = step === careerMapQuestions.length - 1;

  const handleSelect = (optionKey: string) => {
    const next = [...answers];
    next[step] = optionKey;
    setAnswers(next);

    advanceTimer.current = setTimeout(() => {
      if (!isLast) {
        setStep((s) => s + 1);
        return;
      }

      const totals: Record<string, number> = {};
      careerMapQuestions.forEach((q, qi) => {
        const chosenKey = next[qi];
        const option = q.options.find((o) => o.key === chosenKey);
        if (!option) return;
        Object.entries(option.scores).forEach(([id, value]) => {
          totals[id] = (totals[id] ?? 0) + (value ?? 0);
        });
      });

      const topIds = computeTopDirections(totals);
      sessionStorage.setItem(RESULT_STORAGE_KEY, JSON.stringify(topIds));
      router.push("/career-map/result");
    }, 260);
  };

  const handleBack = () => {
    if (step === 0) return;
    setStep((s) => s - 1);
  };

  return (
    <section className="bg-white min-h-screen">
      <div className="wrap py-14 md:py-20">
        <div className="flex items-baseline gap-2 text-text-sub mb-6">
          <span className="eyebrow text-[13px]">01</span>
          <span className="eyebrow text-[13px]">CAREER MAP</span>
        </div>

        <h1 className="font-extrabold text-navy text-[32px] md:text-[48px] leading-[1.2] mb-4">
          未来を、
          <br />
          少しずつ見つける。
        </h1>

        <p className="text-[14px] leading-[1.9] text-text-sub max-w-[480px] mb-14 md:mb-16">
          まだ答えが決まっていなくても大丈夫。
          <br />
          今の気持ちから、これからの方向を探してみよう。
        </p>

        <div key={step} className="step-enter max-w-[640px]">
          <div className="flex items-center justify-between mb-6">
            <span className="eyebrow text-accent">QUESTION {question.number}</span>
            <span className="eyebrow text-text-sub">
              {String(step + 1).padStart(2, "0")} / {String(careerMapQuestions.length).padStart(2, "0")}
            </span>
          </div>

          <h2 className="font-extrabold text-navy text-[24px] md:text-[32px] leading-[1.35] mb-8 md:mb-10">
            {question.question.map((line, i) => (
              <span key={i}>
                {line}
                {i < question.question.length - 1 && <br />}
              </span>
            ))}
          </h2>

          <div className="border-t border-border">
            {question.options.map((option) => {
              const selected = answers[step] === option.key;
              return (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => handleSelect(option.key)}
                  aria-pressed={selected}
                  className={`group w-full flex items-center gap-5 md:gap-8 py-5 md:py-6 border-b border-border text-left transition-colors ${
                    selected ? "bg-pale-blue/40" : ""
                  }`}
                >
                  <span className="eyebrow text-text-sub w-[24px] shrink-0">
                    {option.key}
                  </span>

                  <span
                    className={`font-extrabold leading-[1.3] text-[19px] md:text-[24px] transition-colors ${
                      selected ? "text-accent" : "text-navy group-hover:text-accent"
                    }`}
                  >
                    {option.lines.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < option.lines.length - 1 && <br />}
                      </span>
                    ))}
                  </span>

                  <span
                    className={`ml-auto shrink-0 h-[2px] w-[24px] bg-accent transition-opacity ${
                      selected
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleBack}
            disabled={step === 0}
            className={`mt-8 text-[13px] font-semibold text-navy transition-opacity ${
              step === 0 ? "opacity-0 pointer-events-none" : "opacity-100 hover:text-accent"
            }`}
          >
            ← BACK
          </button>
        </div>
      </div>
    </section>
  );
}
