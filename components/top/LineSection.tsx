import Illustration from "./Illustration";
import Reveal from "./Reveal";

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
          <span className="top-label text-text-sub mb-3 block">08</span>
          <h2 className="font-extrabold text-navy text-[32px] md:text-[48px] leading-[1.2] mb-4">
            未来を持ち歩く
          </h2>

          <p className="text-[14px] leading-[1.8] text-text-sub max-w-[360px] mb-5">
            今日決めなくていい。
            <br />
            見つけた未来を、いつでも続きを考えられるように。
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
            className="group underline-swipe inline-block text-[15px] font-semibold text-navy"
          >
            LINEにキャリアマップを保存する{" "}
            <span className="inline-block transition-transform duration-[250ms] group-hover:translate-x-[4px]">
              →
            </span>
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
