"use client";

import { futureDirections } from "@/data/careers";
import { useJourney } from "./JourneyContext";
import Illustration from "./Illustration";

export default function FutureSection() {
  const { future, setFuture } = useJourney();

  return (
    <section id="career" className="bg-white py-14 md:py-16">
      <div className="wrap">
        <div className="flex items-baseline gap-2 text-text-sub mb-6">
          <span className="eyebrow text-[13px]">03</span>
          <span className="eyebrow text-[13px]">FUTURE</span>
        </div>

        <h2 className="font-extrabold text-navy text-[32px] md:text-[48px] leading-[1.2] mb-4">
          未来を見つける
        </h2>

        <p className="text-[15px] md:text-[16px] font-semibold text-navy mb-10 md:mb-12">
          どんな未来が、少し気になる？
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {futureDirections.map((item) => {
            const selected = future?.id === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  setFuture({ id: item.id, label: item.lines.join("") })
                }
                aria-pressed={selected}
                className="group flex flex-col text-left"
              >
                <span
                  className={`font-extrabold leading-none tracking-[-0.02em] transition-colors ${
                    selected ? "text-accent" : "text-navy"
                  }`}
                  style={{ fontSize: "clamp(34px, 4.4vw, 62px)" }}
                >
                  {item.number}
                </span>

                <div className="relative aspect-[6/5] mt-1 mb-3">
                  <Illustration
                    src={item.image}
                    alt={item.lines.join("")}
                    sizes="(min-width: 768px) 24vw, 45vw"
                    objectPosition="center bottom"
                  />
                </div>

                <span
                  className={`font-bold text-[17px] md:text-[19px] leading-[1.4] transition-colors ${
                    selected ? "text-accent" : "text-navy group-hover:text-accent"
                  }`}
                >
                  {item.lines[0]}
                  <br />
                  {item.lines[1]}
                </span>

                <span className="mt-3 text-[12px] text-text-sub leading-[1.8]">
                  {item.tags.join(" / ")}
                </span>

                <span
                  className={`mt-3 h-[2px] w-[32px] bg-accent transition-opacity ${
                    selected
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
