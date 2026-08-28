import Link from "next/link";
import Illustration from "@/components/top/Illustration";

export default function CareerMapLinePage() {
  return (
    <section className="bg-pale-blue/40 min-h-screen">
      <div className="wrap py-14 md:py-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <span className="eyebrow text-text-sub mb-6 block">LINE</span>

          <h1 className="font-extrabold text-navy text-[32px] md:text-[48px] leading-[1.2] mb-5">
            キャリアマップを、
            <br />
            持ち歩こう。
          </h1>

          <p className="text-[14px] leading-[1.9] text-text-sub max-w-[440px] mb-8">
            LINEでつながると、
            <br />
            あなたのキャリアマップをいつでも見返せます。
          </p>

          <Link
            href="/career-map/result"
            className="underline-swipe inline-block text-[15px] font-semibold text-navy"
          >
            ← 結果にもどる
          </Link>
        </div>

        <div className="relative w-[220px] md:w-[280px] mx-auto aspect-[830/1378]">
          <Illustration
            src="/images/exceed-career/line/line-career-map-phone.png"
            alt="MY CAREER MAPアプリ画面を表示するスマートフォン"
            sizes="280px"
          />
        </div>
      </div>
    </section>
  );
}
