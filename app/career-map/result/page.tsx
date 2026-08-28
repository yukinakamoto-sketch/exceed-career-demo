"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Illustration from "@/components/top/Illustration";
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
    router.push("/career-map/questions");
  };

  if (!directions) {
    return <section className="bg-white min-h-screen" />;
  }

  return (
    <section className="bg-white min-h-screen">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-20 md:py-24">
        <span className="eyebrow text-accent mb-8 md:mb-10 block">RESULT</span>

        <h1 className="font-extrabold text-navy text-[32px] md:text-[48px] leading-[1.2] mb-6">
          あなたの未来は、
          <br />
          ひとつじゃない。
        </h1>

        <p className="text-[14px] md:text-[15px] leading-[1.9] text-text-sub max-w-[520px] mb-14 md:mb-16">
          今の回答から、
          <br />
          少し気になりそうな方向を3つ並べました。
        </p>

        <div className="border-t border-border max-w-[840px]">
          {directions.map((direction, i) => (
            <Link
              key={direction.id}
              href="/career-map/next"
              className="group flex items-center gap-6 md:gap-10 py-8 md:py-10 border-b border-border"
            >
              <span
                className="font-extrabold text-navy leading-none tracking-[-0.02em] shrink-0 group-hover:text-accent transition-colors"
                style={{ fontSize: "clamp(28px, 3.4vw, 40px)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative w-[72px] md:w-[92px] aspect-[6/5] shrink-0">
                <Illustration
                  src={direction.image}
                  alt={direction.lines.join("")}
                  sizes="92px"
                  objectPosition="center bottom"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-bold text-navy text-[17px] md:text-[21px] leading-[1.4] group-hover:text-accent transition-colors">
                  {direction.lines[0]}
                  <br />
                  {direction.lines[1]}
                </p>
                <p className="mt-2 text-[12px] text-text-sub leading-[1.7]">
                  {direction.tags.join(" / ")}
                </p>
              </div>

              <span className="shrink-0 text-accent text-[18px] md:text-[20px]">
                →
              </span>
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="mt-14 md:mt-16 text-[14px] font-semibold text-navy hover:text-accent transition-colors"
        >
          もう一度考えてみる →
        </button>
      </div>
    </section>
  );
}
