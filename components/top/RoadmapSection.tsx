"use client";

import Image from "next/image";
import { roadmapSteps } from "@/data/roadmap";
import { useJourney } from "./JourneyContext";
import Reveal from "./Reveal";

const roadmapImage = "/images/exceed-career/roadmap/career-roadmap-journey.png";

export default function RoadmapSection() {
  const { current, future } = useJourney();
  const showJourneyIntro = Boolean(current && future);

  return (
    <section id="roadmap" className="bg-navy py-10 md:py-12 text-white overflow-hidden">
      <div className="wrap flex gap-4">
        <div className="w-[2px] bg-white/25 shrink-0 self-stretch" />
        <div>
          <div className="flex flex-col text-light-blue mb-2 leading-tight">
            <span className="top-label text-[13px]">04</span>
            <span className="top-label text-[13px]">ROADMAP</span>
          </div>

          <Reveal as="h2" delay={0} distance={14} className="font-extrabold text-[32px] md:text-[48px] leading-[1.2] mb-3">
            進む
          </Reveal>

          <p className="text-[14px] md:text-[15px] leading-[1.8] text-light-blue mb-2">
            興味が見つかっても、
            <br />
            いきなりそこがスタートとは限らない。
          </p>

          {showJourneyIntro && (
            <p className="text-[13px] font-semibold text-accent-soft">
              あなたの現在地から、気になる未来まで。
            </p>
          )}
        </div>
      </div>

      {/* PC: full-bleed road illustration with a single compact step row beneath it */}
      <div className="hidden md:block relative w-full max-w-[1800px] mx-auto px-8 md:mt-6">
        <Reveal delay={90} distance={20} className="relative w-full" style={{ aspectRatio: "1902 / 624" }}>
          <Image
            src={roadmapImage}
            alt="山頂へ向かって曲がりながら伸びていく道のイラスト"
            fill
            sizes="100vw"
            style={{ objectFit: "contain" }}
          />
        </Reveal>

        <div className="flex items-start mt-1">
          {roadmapSteps.map((step, i) => (
            <Reveal
              key={step.label}
              delay={260 + i * 70}
              distance={10}
              className="flex items-start flex-1 min-w-0"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="block w-[7px] h-[7px] rounded-full bg-accent-soft shrink-0" />
                  <p className="top-label text-accent-soft whitespace-nowrap">
                    {i + 1}. {step.label}
                  </p>
                </div>
                <p className="mt-1 font-bold text-[13px] leading-[1.4]">{step.title}</p>
              </div>
              {i < roadmapSteps.length - 1 && (
                <span className="text-white/30 text-[12px] mx-2 mt-[1px] shrink-0">
                  -----&gt;
                </span>
              )}
            </Reveal>
          ))}
        </div>
      </div>

      {/* SP: full road illustration, scaled down but never cropped */}
      <Reveal
        delay={80}
        distance={18}
        className="md:hidden relative w-full mt-8 mb-8"
        style={{ aspectRatio: "1902 / 624" }}
      >
        <Image
          src={roadmapImage}
          alt="山頂へ向かって曲がりながら伸びていく道のイラスト"
          fill
          sizes="100vw"
          style={{ objectFit: "contain" }}
        />
      </Reveal>

      <div className="wrap">
        <div className="md:hidden relative pl-6">
          <div className="absolute left-[4px] top-[6px] bottom-[6px] w-[1px] bg-white/25" />
          <div className="flex flex-col gap-6">
            {roadmapSteps.map((step, i) => (
              <Reveal key={step.label} delay={i * 60} distance={10} className="relative">
                <span className="absolute left-[-24px] top-[4px] w-[9px] h-[9px] rounded-full bg-accent-soft" />
                <p className="top-label text-accent-soft mb-1">
                  {i + 1}. {step.label}
                </p>
                <p className="font-bold text-[15px] leading-[1.5]">{step.title}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
