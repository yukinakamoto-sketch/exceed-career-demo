import Link from "next/link";
import Illustration from "@/components/top/Illustration";

export default function CareerMapStartPage() {
  return (
    <section className="bg-white min-h-screen">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <span className="eyebrow text-text-sub mb-8 md:mb-10 block">
          01 CAREER MAP
        </span>

        <div className="grid md:grid-cols-[1fr_420px] gap-12 md:gap-16 items-center">
          <div>
            <h1 className="font-extrabold text-navy text-[36px] md:text-[56px] leading-[1.15] mb-6 md:mb-8">
              未来を、
              <br />
              少しずつ
              <br />
              見つける。
            </h1>

            <p className="text-[14px] md:text-[15px] leading-[1.9] text-text-sub max-w-[420px] mb-10 md:mb-12">
              まだ答えが決まっていなくても大丈夫。
              <br />
              今の気持ちから、これからの方向を
              <br />
              探してみよう。
            </p>

            <Link
              href="/career-map/questions"
              className="inline-block bg-accent text-white text-[15px] font-semibold px-8 py-4 hover:opacity-90 transition-opacity"
            >
              診断をはじめる →
            </Link>
          </div>

          <div className="relative w-full max-w-[360px] mx-auto aspect-[1625/873]">
            <Illustration
              src="/images/exceed-career/diagnosis/diagnosis-future-path.png"
              alt="分岐した道の先にいくつもの未来があるイラスト"
              sizes="360px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
