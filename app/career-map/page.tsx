import Link from "next/link";
import Illustration from "@/components/top/Illustration";

export default function CareerMapStartPage() {
  return (
    <section className="bg-warm-white min-h-[100svh] flex items-center overflow-hidden">
      <div className="wrap w-full py-14 md:py-16 text-center">
        <span className="eyebrow text-text-sub mb-6 block">
          キャリアマップ診断
        </span>

        <h1 className="font-extrabold text-navy text-[32px] md:text-[46px] leading-[1.3] mb-6 max-w-[720px] mx-auto">
          4つの質問から、
          <br />
          今の自分に近い未来を見つける。
        </h1>

        <p className="text-[14px] md:text-[15px] leading-[1.9] text-text-sub max-w-[480px] mx-auto mb-10 md:mb-12">
          まだやりたい仕事が決まっていなくても大丈夫。
          <br />
          興味や今の気持ちから、これからの方向を整理します。
        </p>

        <div
          className="relative mx-auto aspect-[1625/873] mb-6 md:mb-8"
          style={{ width: "min(760px, 70vw)" }}
        >
          <Illustration
            src="/images/exceed-career/diagnosis/diagnosis-future-path.png"
            alt="分岐した道の先にいくつもの未来があるイラスト"
            sizes="(min-width: 768px) 70vw, 90vw"
          />
        </div>

        <span className="eyebrow text-text-sub mb-4 block">約1分　全4問</span>

        <Link
          href="/career-map/questions"
          className="group inline-flex items-center gap-3 border-b-[2px] border-accent pb-1"
        >
          <span className="font-bold text-[17px] md:text-[18px] text-navy group-hover:text-accent transition-colors">
            診断をはじめる
          </span>
          <span className="text-accent text-[17px] transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>

        <p className="mt-4 text-[12px] text-text-sub">
          答えは、あとから変えても大丈夫です。
        </p>
      </div>
    </section>
  );
}
