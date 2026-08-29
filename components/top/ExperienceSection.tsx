import Illustration from "./Illustration";
import Reveal from "./Reveal";

const foundationSkills = [
  "コミュニケーション",
  "顧客理解",
  "PCスキル",
  "業務遂行力",
  "営業力",
  "チームワーク",
  "自分の適性を知る経験",
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-warm-white py-14 md:py-16">
      <div className="wrap">
        <div className="flex flex-col text-text-sub mb-3 leading-tight">
          <span className="top-label">08</span>
          <span className="top-label">EXPERIENCE</span>
        </div>

        <h2 className="font-extrabold text-navy text-[32px] md:text-[48px] leading-[1.2] mb-5">
          積む
        </h2>

        <p className="text-[15px] font-semibold text-navy leading-[1.8] mb-4">
          なぜ、最初から希望職種ではないのか。
        </p>

        <p className="text-[14px] leading-[1.9] text-text-sub max-w-[560px] mb-10 md:mb-12">
          販売、営業、接客、事務、顧客対応。多くの人が、最初は希望や関心とは違う仕事から
          キャリアをスタートしています。それは最終ゴールではなく、キャリア形成の入口です。
        </p>

        <div className="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-0">
          <Reveal className="flex-1 flex flex-col items-start md:items-center text-left md:text-center">
            <div className="relative w-[64px] aspect-square mb-3">
              <Illustration
                src="/images/exceed-career/career/career-people-hr.png"
                alt="接客・販売・事務など現場で働く人のイラスト"
                sizes="64px"
              />
            </div>
            <p className="font-bold text-navy text-[14px] leading-[1.5] max-w-[220px]">
              現場経験
              <br />
              販売・営業・接客・事務など
            </p>
          </Reveal>

          <div className="flex items-center justify-center px-4 py-2 md:py-0 text-text-sub text-[20px] shrink-0">
            <span className="rotate-90 md:rotate-0 inline-block">→</span>
          </div>

          <Reveal delay={80} className="flex-[1.6] flex flex-col justify-center">
            <p className="font-bold text-navy text-[14px] mb-3">基礎力が身につく</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {foundationSkills.map((skill) => (
                <li key={skill} className="text-[13px] font-semibold text-text-sub">
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="flex items-center justify-center px-4 py-2 md:py-0 text-text-sub text-[20px] shrink-0">
            <span className="rotate-90 md:rotate-0 inline-block">→</span>
          </div>

          <Reveal delay={160} className="flex-1 flex flex-col items-start md:items-center text-left md:text-center justify-center">
            <p className="font-bold text-navy text-[14px] leading-[1.6] max-w-[200px]">
              自分の適性が分かる
            </p>
          </Reveal>

          <div className="flex items-center justify-center px-4 py-2 md:py-0 text-text-sub text-[20px] shrink-0">
            <span className="rotate-90 md:rotate-0 inline-block">→</span>
          </div>

          <Reveal delay={240} className="flex-1 flex flex-col items-start md:items-center text-left md:text-center justify-center">
            <p className="font-bold text-accent text-[14px] leading-[1.6] max-w-[200px]">
              次のキャリアへつながる
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
