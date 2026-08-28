"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { careerMapQuestions } from "@/data/careerMapQuestions";
import { futureDirections } from "@/data/careers";
import Illustration from "@/components/top/Illustration";

const RESULT_STORAGE_KEY = "career-map-result";

// Per-position sizing/offset so the four options read as an edited
// magazine layout rather than a uniform 2x2 grid. Applies by option
// index, independent of question content.
const OPTION_LAYOUT = [
  { imgW: 170, mt: "", row: false, text: "text-[22px] md:text-[26px]" },
  { imgW: 106, mt: "md:mt-16", row: true, text: "text-[18px] md:text-[20px]" },
  { imgW: 84, mt: "md:mt-10", row: false, text: "text-[17px] md:text-[19px]" },
  { imgW: 176, mt: "md:-mt-2", row: false, text: "text-[20px] md:text-[24px]" },
];

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
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-14 md:py-16">
        <div key={step} className="step-enter">
          <span className="text-[13px] font-semibold text-accent tracking-[0.02em] mb-6 md:mb-8 block">
            {step + 1} / {total}
          </span>

          <h1 className="font-extrabold text-navy text-[30px] md:text-[44px] leading-[1.3] mb-12 md:mb-16 max-w-[720px]">
            {question.question.map((line, i) => (
              <span key={i}>
                {line}
                {i < question.question.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 md:gap-y-10">
            {question.options.map((option, i) => {
              const selected = answers[step] === option.key;
              const layout = OPTION_LAYOUT[i];

              const numberEl = (
                <span
                  className={`block text-[13px] font-semibold tracking-[0.02em] mb-3 transition-colors ${
                    selected ? "text-accent" : "text-text-sub"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              );

              const textEl = (
                <p
                  className={`font-extrabold leading-[1.35] mb-3 transition-colors ${layout.text} ${
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
              );

              const underlineEl = (
                <span
                  className={`block h-[2px] bg-accent mb-5 transition-all duration-200 ${
                    selected ? "w-[36px] opacity-100" : "w-[22px] opacity-0 group-hover:w-[36px] group-hover:opacity-100"
                  }`}
                />
              );

              const imageEl = (
                <div
                  className="relative shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-[3px]"
                  style={{ width: `${layout.imgW}px`, aspectRatio: option.imageAspect }}
                >
                  <Illustration src={option.image} alt="" sizes={`${layout.imgW}px`} />
                </div>
              );

              return (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => handleSelect(option.key)}
                  aria-pressed={selected}
                  className={`group text-left transition-colors ${layout.mt} ${
                    selected ? "bg-pale-blue/20" : ""
                  }`}
                >
                  {layout.row ? (
                    <div className="flex items-center gap-6">
                      <div className="min-w-0">
                        {numberEl}
                        {textEl}
                        {underlineEl}
                      </div>
                      {imageEl}
                    </div>
                  ) : (
                    <>
                      {numberEl}
                      {textEl}
                      {underlineEl}
                      {imageEl}
                    </>
                  )}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleBack}
            disabled={step === 0}
            className={`mt-14 md:mt-16 text-[13px] font-semibold text-navy transition-opacity ${
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
