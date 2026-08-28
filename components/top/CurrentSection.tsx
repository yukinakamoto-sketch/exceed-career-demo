"use client";

import { useJourney } from "./JourneyContext";
import Illustration from "./Illustration";

const currentOptions = [
  {
    id: "unsure-what",
    lines: ["やりたいことが", "まだ分からない"],
    image: "/images/exceed-career/interest/interest-thinking.png",
    imageAspect: "384/436",
  },
  {
    id: "connect-like",
    lines: ["好きなことを", "仕事につなげたい"],
    image: "/images/exceed-career/interest/interest-guitar.png",
    imageAspect: "1/1",
  },
  {
    id: "vague-interest",
    lines: ["興味のある仕事は", "なんとなくある"],
    image: "/images/exceed-career/interest/interest-books.png",
    imageAspect: "319/247",
  },
  {
    id: "next-step",
    lines: ["今の仕事から", "次へ進みたい"],
    image: "/images/exceed-career/roadmap/career-roadmap-journey.png",
    imageAspect: "1902/624",
  },
];

export default function CurrentSection() {
  const { current, setCurrent } = useJourney();

  return (
    <section id="current" className="bg-white py-14 md:py-16">
      <div className="wrap">
        <span className="top-label text-text-sub mb-3 block">02</span>

        <h2 className="font-extrabold text-navy text-[32px] md:text-[48px] leading-[1.2] mb-4">
          今の自分から始める
        </h2>

        <p className="text-[15px] md:text-[16px] font-semibold text-navy mb-8 md:mb-10">
          今のあなたに近いのは？
        </p>

        <div className="border-t border-border">
          {currentOptions.map((option, i) => {
            const selected = current?.id === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() =>
                  setCurrent({ id: option.id, label: option.lines.join("") })
                }
                aria-pressed={selected}
                className="group relative w-full flex items-center gap-6 md:gap-10 py-6 md:py-7 border-b border-border text-left transition-colors overflow-hidden"
              >
                <span className="top-label text-text-sub w-[28px] shrink-0">
                  0{i + 1}
                </span>

                <span className="min-w-0">
                  <span
                    className={`block font-extrabold leading-[1.3] text-[22px] md:text-[30px] transition-colors duration-[250ms] ${
                      selected ? "text-accent" : "text-navy group-hover:text-accent"
                    }`}
                  >
                    {option.lines[0]}
                    <br />
                    {option.lines[1]}
                  </span>
                  <span
                    className={`block h-[2px] bg-accent mt-2 transition-all duration-[250ms] ease-out ${
                      selected ? "w-[28px]" : "w-0 group-hover:w-[28px]"
                    }`}
                  />
                </span>

                {/* hover時のみ表示する小さな手描きイラスト */}
                <div
                  className="hidden md:block absolute right-[70px] top-1/2 w-[64px] pointer-events-none opacity-0 -translate-y-1/2 translate-x-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0"
                  style={{ aspectRatio: option.imageAspect }}
                >
                  <Illustration src={option.image} alt="" sizes="64px" />
                </div>

                <span
                  className={`ml-auto shrink-0 text-accent text-[20px] md:text-[24px] transition-all duration-[250ms] ${
                    selected
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 group-hover:translate-x-[5px] group-focus-visible:translate-x-[5px]"
                  }`}
                >
                  →
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
