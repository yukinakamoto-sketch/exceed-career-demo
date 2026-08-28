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

export default function CareerMapQuestionsPage() {
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
  const total = careerMapQuestions.length;

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
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-20 md:py-24">
        <div key={step} className="step-enter">
          <div className="flex items-center justify-between mb-10 md:mb-14">
            <span className="eyebrow text-accent">
              {String(step + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>

          <h1 className="font-extrabold text-navy text-[28px] md:text-[40px] leading-[1.35] mb-10 md:mb-14 max-w-[640px]">
            {question.question.map((line, i) => (
              <span key={i}>
                {line}
                {i < question.question.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <div className="border-t border-border max-w-[720px]">
            {question.options.map((option, i) => {
              const selected = answers[step] === option.key;
              return (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => handleSelect(option.key)}
                  aria-pressed={selected}
                  className={`group w-full flex items-center gap-6 md:gap-10 py-6 md:py-7 border-b border-border text-left transition-colors ${
                    selected ? "bg-pale-blue/40" : ""
                  }`}
                >
                  <span className="eyebrow text-text-sub w-[28px] shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`font-extrabold leading-[1.3] text-[19px] md:text-[24px] transition-colors ${
                      selected ? "text-accent" : "text-navy group-hover:text-accent"
                    }`}
                  >
                    {option.lines.map((line, li) => (
                      <span key={li}>
                        {line}
                        {li < option.lines.length - 1 && <br />}
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
            className={`mt-10 text-[13px] font-semibold text-navy transition-opacity ${
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
