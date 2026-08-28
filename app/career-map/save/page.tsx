"use client";

import { useState } from "react";
import Illustration from "@/components/top/Illustration";

export default function CareerMapSavePage() {
  const [saved, setSaved] = useState(false);

  return (
    <section className="bg-pale-blue/40 min-h-screen">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <span className="eyebrow text-text-sub mb-8 md:mb-10 block">05 LINE</span>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h1 className="font-extrabold text-navy text-[32px] md:text-[48px] leading-[1.2] mb-6">
              未来を持ち歩こう。
            </h1>

            <p className="text-[14px] md:text-[15px] leading-[1.9] text-text-sub max-w-[420px] mb-10">
              あなたのキャリアマップをLINEに保存すると、
              <br />
              いつでも続きを考えられます。
            </p>

            <button
              type="button"
              onClick={() => setSaved(true)}
              className="inline-block bg-accent text-white text-[15px] font-semibold px-8 py-4 hover:opacity-90 transition-opacity"
            >
              LINEで保存する（デモ）
            </button>

            <p
              className={`mt-5 text-[14px] font-semibold text-navy transition-opacity ${
                saved ? "opacity-100" : "opacity-0"
              }`}
              aria-live="polite"
            >
              ✓ キャリアマップを保存しました
            </p>
          </div>

          <div className="relative w-[220px] md:w-[280px] mx-auto aspect-[830/1378]">
            <Illustration
              src="/images/exceed-career/line/line-career-map-phone.png"
              alt="MY CAREER MAPアプリ画面を表示するスマートフォン"
              sizes="280px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
