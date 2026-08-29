"use client";

import { futureDirections } from "@/data/careers";
import { useJourney } from "./JourneyContext";
import Illustration from "./Illustration";
import Reveal from "./Reveal";

export default function FutureSection() {
  const { future, setFuture } = useJourney();

  return (
    <section id="career" className="bg-white pt-7 pb-12 md:pt-8 md:pb-14">
      <div className="wrap">
        <div className="flex flex-col text-text-sub mb-3 leading-tight">
          <span className="top-label">03</span>
          <span className="top-label">CAREER</span>
        </div>

        <h2 className="font-extrabold text-navy text-[32px] md:text-[48px] leading-[1.2] mb-4">
          広がる
        </h2>

        <p className="text-[14px] md:text-[15px] leading-[1.9] text-text-sub max-w-[520px] mb-8 md:mb-10">
          あなたの「好き」や「興味」から、
          <br />
          経験と学びを積んだ先にある、未来の方向性を広げていこう。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {futureDirections.map((item, i) => {
            const selected = future?.id === item.id;
            return (
              <Reveal key={item.id} delay={i * 75} distance={16} className="w-full">
                <button
                  type="button"
                  onClick={() =>
                    setFuture({ id: item.id, label: item.lines.join("") })
                  }
                  aria-pressed={selected}
                  className="group w-full flex flex-col text-left"
                >
                  <span
                    className={`font-extrabold leading-none tracking-[-0.02em] transition-colors ${
                      selected ? "text-accent" : "text-navy"
                    }`}
                    style={{ fontSize: "clamp(34px, 4.4vw, 62px)" }}
                  >
                    {item.number}
                  </span>

                  <div className="relative aspect-[6/5] mt-1 mb-3 transition-transform duration-[250ms] ease-out group-hover:-translate-y-[3px]">
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
