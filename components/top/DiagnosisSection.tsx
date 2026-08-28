"use client";

import Link from "next/link";
import Illustration from "./Illustration";
import Reveal from "./Reveal";
import { useJourney } from "./JourneyContext";

export default function DiagnosisSection() {
  const { current, future } = useJourney();

  return (
    <section id="diagnosis" className="bg-white py-14 md:py-16">
      <div className="wrap grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <div className="flex items-baseline gap-2 text-text-sub mb-4">
            <span className="top-label text-[13px]">05</span>
            <span className="top-label text-[13px]">DIAGNOSIS</span>
          </div>

          <h2 className="font-extrabold text-navy text-[32px] md:text-[48px] leading-[1.2] mb-5">
            自分の道をつくる
          </h2>

          {(current || future) && (
            <div className="flex flex-col gap-1 mb-5 text-[13px] font-semibold text-text-sub">
              {current && (
                <p>
                  <span className="text-accent">今：</span>
                  {current.label}
                </p>
              )}
              {future && (
                <p>
                  <span className="text-accent">未来：</span>
                  {future.label}
                </p>
              )}
            </div>
          )}

          <p className="text-[15px] font-semibold text-navy leading-[1.8] mb-4">
            あなたの場合、
            <br />
            どんな順番で進めばいい？
          </p>

          <p className="text-[14px] leading-[1.9] text-text-sub max-w-[440px]">
            思考・成長スタイルと
            <br />
            興味のある未来から、
            <br />
            これからのキャリアマップを考えます。
          </p>

          {/* PC: CTA follows the body copy directly, as before */}
          <Link
            href="/career-map"
            className="group hidden md:inline-block underline-swipe mt-6 text-[15px] font-semibold text-navy"
          >
            キャリアマップをつくる{" "}
            <span className="inline-block transition-transform duration-[250ms] group-hover:translate-x-[4px]">
              →
            </span>
          </Link>
        </div>

        <Reveal
          delay={60}
          distance={12}
          className="relative w-full max-w-[360px] mx-auto md:mx-0 md:max-w-none md:ml-auto aspect-[1625/873]"
        >
          <Illustration
            src="/images/exceed-career/diagnosis/diagnosis-future-path.png"
            alt="分岐した道の先にいくつもの未来があるイラスト"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </Reveal>

        {/* SP: heading -> body -> illustration -> CTA */}
        <Link
          href="/career-map"
          className="group md:hidden underline-swipe inline-block mt-2 text-[15px] font-semibold text-navy"
        >
          キャリアマップをつくる{" "}
          <span className="inline-block transition-transform duration-[250ms] group-hover:translate-x-[4px]">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
