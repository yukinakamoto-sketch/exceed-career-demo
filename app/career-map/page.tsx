import Link from "next/link";
import Illustration from "@/components/top/Illustration";

export default function CareerMapStartPage() {
  return (
    <section className="bg-warm-white min-h-[100svh] flex items-start overflow-hidden">
      <div className="wrap w-full pt-[10vh] md:pt-[13vh] pb-10">
        <div className="grid gap-10 md:grid-cols-[46%_54%] md:items-center md:gap-8">
          <div>
            <span className="eyebrow text-text-sub mb-6 block">
              キャリアマップ診断
            </span>

            <h1 className="font-extrabold text-navy text-[34px] md:text-[58px] leading-[1.2] mb-5 md:mb-6">
              4つの質問から、
              <br />
              今の自分に近い未来を
              <br className="hidden md:block" />
              見つける。
            </h1>

            <p className="text-[14px] md:text-[15px] leading-[1.9] text-text-sub max-w-[400px] mb-8">
              まだやりたい仕事が決まっていなくても大丈夫。
              <br />
              興味や今の気持ちから、これからの方向を整理します。
            </p>

            <span className="eyebrow text-text-sub mb-3 block">約1分・全4問</span>

            <Link
              href="/career-map/questions"
              className="group inline-flex items-center gap-3 border-l-[3px] border-accent pl-5 py-3 -ml-px"
            >
              <span className="font-bold text-[18px] md:text-[19px] text-navy group-hover:text-accent transition-colors">
                診断をはじめる
              </span>
              <span className="text-accent text-[18px] transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

            <p className="mt-3 text-[12px] text-text-sub">
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
