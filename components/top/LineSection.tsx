import Illustration from "./Illustration";
import Reveal from "./Reveal";

const savedItems = [
  "診断結果",
  "思考・成長スタイル",
  "キャリアマップ",
  "Career Academy",
  "Career Story",
  "興味を持った求人",
  "キャリア相談",
];

export default function LineSection() {
  return (
    <section id="line" className="bg-pale-blue/40 py-14 md:py-16">
      <div className="wrap grid md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-center">
        <div>
          <div className="flex flex-col text-text-sub mb-3 leading-tight">
            <span className="top-label">09</span>
            <span className="top-label">LINE</span>
          </div>

          <h2 className="font-extrabold text-navy text-[32px] md:text-[48px] leading-[1.2] mb-4">
            つながる
          </h2>

          <p className="text-[14px] leading-[1.9] text-text-sub max-w-[420px] mb-5">
            LINEは応募の窓口ではありません。
            <br />
            あなただけの「個人キャリアナビ」として、
            見つけた道をいつでも続きから考えられるように。
          </p>

          <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5 mb-6 max-w-[420px]">
            {savedItems.map((item) => (
              <li key={item} className="text-[13px] font-semibold text-navy">
                ✓ {item}
              </li>
            ))}
          </ul>

          <a
            href="#line"
            className="inline-block bg-[#06C755] text-white text-[14px] md:text-[15px] font-semibold px-6 py-3.5"
          >
            LINEでキャリアナビを始める →
          </a>
        </div>

        <Reveal
          distance={12}
          className="relative w-[220px] md:w-[280px] aspect-[830/1378] justify-self-center"
        >
          <Illustration
            src="/images/exceed-career/line/line-career-map-phone.png"
            alt="MY CAREER MAPアプリ画面を表示するスマートフォン"
            sizes="260px"
          />
        </Reveal>
      </div>
    </section>
  );
}
