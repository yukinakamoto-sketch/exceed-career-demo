"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { futureDirections, type FutureDirection } from "@/data/careers";

const RESULT_STORAGE_KEY = "career-map-result";

export default function CareerMapResultPage() {
  const router = useRouter();
  const [directions, setDirections] = useState<FutureDirection[] | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem(RESULT_STORAGE_KEY);
    if (!raw) {
      router.replace("/career-map");
      return;
    }
    try {
      const ids: string[] = JSON.parse(raw);
      const matched = ids
        .map((id) => futureDirections.find((d) => d.id === id))
        .filter((d): d is FutureDirection => Boolean(d));
      if (matched.length === 0) {
        router.replace("/career-map");
        return;
      }
      // Reading sessionStorage must happen after mount to keep the
      // prerendered/SSR output stable, so syncing it into state here
      // (rather than during render) is intentional.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDirections(matched);
    } catch {
      router.replace("/career-map");
    }
  }, [router]);

  const handleReset = () => {
    sessionStorage.removeItem(RESULT_STORAGE_KEY);
    router.push("/career-map");
  };

  if (!directions) {
    return <section className="bg-white min-h-screen" />;
  }

  return (
    <section className="bg-white min-h-screen">
      <div className="wrap py-14 md:py-20">
        <span className="eyebrow text-accent mb-6 block">RESULT</span>

        <h1 className="font-extrabold text-navy text-[32px] md:text-[48px] leading-[1.2] mb-4">
          あなたの未来は、
          <br />
          ひとつじゃない。
        </h1>

        <p className="text-[14px] leading-[1.9] text-text-sub max-w-[520px] mb-14 md:mb-16">
          今の回答から、
          少し気になりそうな方向を並べました。
          <br />
          仕事を決めるためではなく、
          次に見る場所を見つけるためのキャリアマップです。
        </p>

        <div className="border-t border-border max-w-[720px]">
          {directions.map((direction) => (
            <div key={direction.id} className="py-10 md:py-12 border-b border-border">
              <span
                className="block font-extrabold text-navy leading-none tracking-[-0.02em] mb-3"
                style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
              >
                {direction.number}
              </span>

              <p className="font-bold text-navy text-[20px] md:text-[26px] leading-[1.4] mb-3">
                {direction.lines[0]}
                <br />
                {direction.lines[1]}
              </p>

              <p className="text-[12px] text-text-sub leading-[1.8] mb-4">
                {direction.tags.join(" / ")}
              </p>

              <Link
                href="/#career"
                className="underline-swipe inline-block text-[14px] font-semibold text-navy"
              >
                この未来を見る →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 max-w-[720px]">
          <span className="eyebrow text-text-sub mb-3 block">NEXT STEP</span>
          <p className="text-[15px] font-semibold text-navy leading-[1.8] mb-8">
            まだ決めなくていい。
            <br />
            気になるところから見てみよう。
          </p>

          <div className="flex flex-col gap-4 mb-10">
            <Link
              href="/#career"
              className="underline-swipe inline-block self-start text-[14px] font-semibold text-navy"
            >
              求人を見る →
            </Link>
            <Link
              href="/#academy"
              className="underline-swipe inline-block self-start text-[14px] font-semibold text-navy"
            >
              仕事について学ぶ →
            </Link>
            <Link
              href="/#story"
              className="underline-swipe inline-block self-start text-[14px] font-semibold text-navy"
            >
              歩いた人を見る →
            </Link>
          </div>

          <Link
            href="/career-map/line"
            className="underline-swipe inline-block text-[15px] font-semibold text-navy"
          >
            LINEにキャリアマップを保存する →
          </Link>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="mt-16 md:mt-20 text-[13px] font-semibold text-navy hover:text-accent transition-colors"
        >
          もう一度考えてみる →
        </button>
      </div>
    </section>
  );
}
