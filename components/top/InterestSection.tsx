import Illustration from "./Illustration";

export default function InterestSection() {
  return (
    <section id="interest" className="relative bg-pale-blue/40 py-14 md:py-16 overflow-hidden">
      <div className="wrap relative">
        <div className="flex items-baseline gap-2 text-text-sub mb-10 md:mb-0 md:absolute md:top-0 md:left-0">
          <span className="eyebrow text-[13px]">03</span>
          <span className="eyebrow text-[13px]">INTEREST</span>
        </div>

        <div className="text-center mb-12 md:mb-0 md:absolute md:top-[6%] md:left-1/2 md:-translate-x-1/2">
          <p className="eyebrow text-text-sub mb-2">WHAT ARE YOU INTO?</p>
          <h2 className="font-extrabold text-navy text-[28px] md:text-[38px] leading-tight whitespace-nowrap">
            いま、何が気になる？
          </h2>
          <span className="block h-[2px] w-full bg-accent mt-2" />
        </div>

        <div className="grid grid-cols-2 gap-8 md:block md:h-[420px] relative">
          <p className="font-extrabold text-navy text-[22px] md:text-[34px] leading-tight md:absolute md:top-[16%] md:left-[2%]">
            人と
            <br />
            関わりたい
          </p>

          {/* 会話する2人のイラスト */}
          <div className="hidden md:block absolute top-[38%] left-[1%] w-[20%] aspect-[1360/848]">
            <Illustration
              src="/images/exceed-career/career/career-people-hr.png"
              alt="会話する2人のイラスト"
              sizes="20vw"
            />
          </div>

          <p className="font-extrabold text-blue text-[22px] md:text-[32px] leading-tight md:absolute md:top-[50%] md:left-[27%]">
            好きなことを
            <br />
            仕事にしたい
          </p>

          {/* ギターのイラスト（画像素材 未配置） */}
          <div className="hidden md:block absolute top-[68%] left-[30%] w-[10%] aspect-square" />

          <p className="font-extrabold text-navy text-[20px] md:text-[30px] leading-tight text-right md:absolute md:top-[4%] md:right-[6%]">
            専門性を
            <br />
            身につけたい
          </p>

          {/* ノート・ペンのイラスト（画像素材 未配置） */}
          <div className="hidden md:block absolute top-[36%] right-[2%] w-[16%] aspect-[4/3]" />

          <p className="font-extrabold text-navy text-[20px] md:text-[28px] leading-tight md:absolute md:top-[80%] md:left-[38%]">
            誰かを
            <br />
            支えたい
          </p>

          {/* 手・ハートのイラスト（画像素材 未配置） */}
          <div className="hidden md:block absolute top-[62%] left-[36%] w-[9%] aspect-square" />

          <p className="font-extrabold text-navy text-[20px] md:text-[28px] leading-tight text-right md:absolute md:top-[76%] md:right-[16%]">
            まだ、
            <br />
            よく分からない
          </p>

          {/* 座って考える人物のイラスト（画像素材 未配置） */}
          <div className="hidden md:block absolute top-[38%] right-[20%] w-[12%] aspect-[3/4]" />
        </div>
      </div>
    </section>
  );
}
