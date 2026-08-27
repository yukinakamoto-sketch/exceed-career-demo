export default function IntroSection() {
  return (
    <section id="intro" className="bg-white py-20 md:py-32">
      <div className="wrap grid md:grid-cols-[60px_1fr_1fr] gap-6 md:gap-10">
        <div className="flex md:flex-col items-baseline md:items-start gap-2 md:gap-1 text-text-sub">
          <span className="eyebrow text-[13px]">02</span>
          <span className="eyebrow text-[13px]">INTRO</span>
        </div>

        <h2 className="font-extrabold text-navy text-[36px] md:text-[52px] leading-[1.15] tracking-[-0.02em]">
          <span className="underline decoration-accent decoration-[3px] underline-offset-[6px]">
            求人を見る、
          </span>
          <br />
          その前に。
        </h2>

        <div className="md:pt-2">
          <p className="text-[15px] md:text-[17px] font-semibold text-navy leading-[1.8]">
            仕事を選ぶ前に、
            <br />
            どんな未来を歩きたいか考えてみる。
          </p>
          <p className="mt-6 text-[14px] leading-[2] text-text-sub max-w-[440px]">
            今できることだけで、
            これから先のキャリアを決めなくていい。
            <br />
            <br />
            働いて、経験して、学んで、
            その中で自分の得意なことや
            好きなことを見つけていく。
          </p>
        </div>
      </div>
    </section>
  );
}
