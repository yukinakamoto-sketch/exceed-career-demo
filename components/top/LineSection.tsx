import Illustration from "./Illustration";

const savedItems = [
  "CAREER MAP",
  "ACADEMY",
  "CAREER STORY",
  "JOB",
  "CAREER CONSULTATION",
];

export default function LineSection() {
  return (
    <section id="line" className="bg-pale-blue/40 py-14 md:py-16">
      <div className="wrap grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-center">
        <div>
          <div className="flex items-baseline gap-2 text-text-sub mb-2">
            <span className="eyebrow text-[13px]">09</span>
            <span className="eyebrow text-[13px]">LINE</span>
          </div>
          <p className="eyebrow text-text-sub mb-2">YOUR CAREER NAVI</p>

          <h2 className="font-extrabold text-navy text-[26px] md:text-[34px] leading-[1.3] mb-4">
            見つけた未来を、
            <br />
            持ち歩こう。
          </h2>

          <p className="text-[13px] leading-[1.8] text-text-sub max-w-[360px] mb-5">
            LINEでつながると、
            <br />
            あなたのキャリア履歴がもっと便利に。
          </p>

          <ul className="flex flex-col gap-1.5 mb-5">
            {savedItems.map((item) => (
              <li key={item} className="text-[13px] font-semibold text-navy">
                ✓ {item}
              </li>
            ))}
          </ul>

          <a
            href="#line"
            className="underline-swipe inline-block text-[15px] font-semibold text-navy"
          >
            LINEにキャリアマップを保存する →
          </a>
        </div>

        <div className="relative w-[220px] md:w-[280px] aspect-[830/1378] justify-self-center">
          <Illustration
            src="/images/exceed-career/line/line-career-map-phone.png"
            alt="MY CAREER MAPアプリ画面を表示するスマートフォン"
            sizes="260px"
          />
        </div>

        <div className="hidden md:flex flex-col gap-4 justify-self-end text-right">
          <a href="#about" className="text-[13px] font-semibold text-navy hover:text-accent">
            ABOUT →
          </a>
          <a href="#career" className="text-[13px] font-semibold text-navy hover:text-accent">
            CAREER →
          </a>
          <a href="#career" className="text-[13px] font-semibold text-navy hover:text-accent">
            JOB →
          </a>
          <a href="#about" className="text-[13px] font-semibold text-navy hover:text-accent">
            FAQ →
          </a>
        </div>
      </div>
    </section>
  );
}
