import Link from "next/link";
import Illustration from "@/components/top/Illustration";

export default function CareerMapStartPage() {
  return (
    <section className="bg-warm-white min-h-[100svh] flex items-center overflow-hidden">
      <div className="wrap w-full py-14 md:py-10">
        <div className="grid gap-10 md:grid-cols-[46%_54%] md:items-center md:gap-8">
          <div>
            <span className="eyebrow text-text-sub mb-6 block">
              01 CAREER MAP
            </span>

            <h1 className="font-extrabold text-navy text-[36px] md:text-[52px] leading-[1.2] mb-5 md:mb-6">
              まだ分からなくていい。
            </h1>

            <p className="text-[14px] md:text-[15px] leading-[1.9] text-text-sub max-w-[400px] mb-6">
              4つの質問から、
              <br />
              今の自分に近い未来を見つけます。
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="eyebrow text-text-sub">01 MIN</span>
              <span className="eyebrow text-text-sub">04 QUESTIONS</span>
            </div>

            <Link
              href="/career-map/questions"
              className="underline-swipe inline-block text-[15px] font-semibold text-navy"
            >
              キャリアマップをつくる →
            </Link>

            <p className="mt-4 text-[12px] text-text-sub">
              答えは、あとから変えても大丈夫です。
            </p>
          </div>

          <div className="relative w-full max-w-[780px] mx-auto md:mx-0 aspect-[1625/873]">
            <Illustration
              src="/images/exceed-career/diagnosis/diagnosis-future-path.png"
              alt="分岐した道の先にいくつもの未来があるイラスト"
              sizes="(min-width: 768px) 54vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
