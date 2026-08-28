"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { careerMapQuestions } from "@/data/careerMapQuestions";
import { futureDirections } from "@/data/careers";
import Illustration from "@/components/top/Illustration";

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
      <div className="max-w-[1160px] mx-auto px-6 md:px-10 py-14 md:py-16">
        <div key={step} className="step-enter">
          <span className="text-[13px] font-semibold text-accent tracking-[0.02em] mb-6 block">
            {step + 1} / {total}
          </span>

          <h1 className="font-extrabold text-navy text-[30px] md:text-[44px] leading-[1.3] mb-9 md:mb-10">
            {question.question.map((line, i) => (
              <span key={i}>
                {line}
                {i < question.question.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-0">
            {question.options.map((option, i) => {
              const selected = answers[step] === option.key;
              return (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => handleSelect(option.key)}
                  aria-pressed={selected}
                  className={`group text-left py-6 md:py-0 transition-colors ${
                    i > 0 ? "border-t md:border-t-0 border-border" : ""
                  } ${selected ? "bg-pale-blue/20 md:bg-transparent" : ""}`}
                >
                  <span
                    className={`block text-[13px] font-semibold tracking-[0.02em] mb-2 transition-colors ${
                      selected ? "text-accent" : "text-text-sub"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <p
                    className={`font-extrabold leading-[1.35] text-[19px] md:text-[21px] mb-1 transition-colors ${
                      selected ? "text-accent" : "text-navy group-hover:text-accent"
                    }`}
                  >
                    {option.lines.map((line, li) => (
                      <span key={li}>
                        {line}
                        {li < option.lines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>

                  <span
                    className={`block h-[2px] bg-accent mt-2 mb-4 transition-all duration-200 ${
                      selected ? "w-[28px] opacity-100" : "w-[20px] opacity-0 group-hover:opacity-100"
                    }`}
                  />

                  <div className="relative w-full aspect-square transition-transform duration-200 ease-out group-hover:-translate-y-[3px]">
                    <Illustration src={option.image} alt="" sizes="(min-width: 768px) 25vw, 60vw" />
                  </div>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleBack}
            disabled={step === 0}
            className={`mt-12 md:mt-14 text-[13px] font-semibold text-navy transition-opacity ${
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
