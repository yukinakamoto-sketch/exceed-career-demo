import Illustration from "./Illustration";
import Reveal from "./Reveal";

const experienceStages = [
  {
    keyword: "現場経験",
    support: "販売・営業・接客・事務など",
  },
  {
    keyword: "基礎力が身につく",
    support:
      "コミュニケーション・顧客理解・PCスキル・業務遂行力・営業力・チームワーク・自分の適性を知る経験",
    wide: true,
  },
  {
    keyword: "自分の適性が分かる",
    support: "得意なこと、向いていることに気づく",
  },
  {
    keyword: "次のキャリアへつながる",
    support: "選んだ方向へ、次の一歩を踏み出す",
    accent: true,
  },
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

        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-[44px] aspect-square shrink-0">
            <Illustration
              src="/images/exceed-career/career/career-people-hr.png"
              alt="接客・販売・事務など現場で働く人のイラスト"
              sizes="44px"
            />
          </div>
          <p className="text-[15px] font-semibold text-navy leading-[1.8]">
            なぜ、最初から希望職種ではないのか。
          </p>
        </div>

        <p className="text-[14px] leading-[1.9] text-text-sub max-w-[560px] mb-12 md:mb-14">
          販売、営業、接客、事務、顧客対応。多くの人が、最初は希望や関心とは違う仕事から
          キャリアをスタートしています。それは最終ゴールではなく、キャリア形成の入口です。
        </p>

        <div className="relative">
          <div className="hidden md:block absolute left-0 right-0 top-[5px] h-[1px] bg-border" />
          <div className="md:hidden absolute left-[4px] top-[6px] bottom-[6px] w-[1px] bg-border" />

          <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-6">
            {experienceStages.map((stage, i) => (
              <Reveal
                key={stage.keyword}
                delay={i * 80}
                distance={10}
                className="relative pl-6 md:pl-0 md:flex-1 md:min-w-0 md:text-center"
              >
                <span
                  className={`absolute left-0 top-[3px] w-[9px] h-[9px] rounded-full md:static md:inline-block md:mb-3 ${
                    stage.accent ? "bg-accent" : "bg-navy"
                  }`}
                />
                <p
                  className={`font-extrabold leading-[1.3] mb-2 ${
                    stage.accent ? "text-accent" : "text-navy"
                  }`}
                  style={{ fontSize: "clamp(19px, 2.1vw, 24px)" }}
                >
                  {stage.keyword}
                </p>
                <p
                  className={`text-[12.5px] text-text-sub mx-auto ${
                    stage.wide
                      ? "leading-[2.1] md:max-w-[240px] tracking-[0.01em]"
                      : "leading-[1.8] md:max-w-[190px]"
                  }`}
                >
                  {stage.support}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
