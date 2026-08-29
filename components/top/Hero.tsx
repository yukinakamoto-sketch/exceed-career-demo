import Illustration from "./Illustration";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-warm-white"
    >
      <div className="wrap relative w-full pb-6 pt-[72px] md:pb-4 md:pt-[76px]">
        <div className="relative grid gap-6 md:grid-cols-[58%_1fr] md:items-center md:gap-0 md:-translate-y-[7vh]">
          <div className="relative z-10 md:pl-2">
            <Reveal as="h1" delay={0} distance={18} className="font-extrabold text-navy" style={{
                fontSize: "clamp(28px, 4.2vw, 68px)",
                lineHeight: 1.3,
                letterSpacing: "-0.03em",
              }}>
              今できる仕事だけで、
              <br />
              未来を決めなくていい。
            </Reveal>

            <Reveal
              as="p"
              delay={70}
              distance={16}
              className="mt-5 md:mt-6 text-[14px] md:text-[15px] leading-[1.8] text-text-sub max-w-[420px]"
            >
              今の自分を知り、学び、経験を積みながら、
              <br />
              理想のキャリアへつながる道を、一緒に描いていこう。
            </Reveal>

            <Reveal as="div" delay={140} distance={14} className="flex flex-col items-start gap-4 mt-6">
              <a
                href="#diagnosis"
                className="inline-block bg-navy text-white text-[14px] md:text-[15px] font-semibold px-6 py-3.5"
              >
                キャリアマップ診断を始める →
              </a>
              <a
                href="#career"
                className="underline-swipe inline-block text-[14px] font-semibold text-navy"
              >
                4つの未来を見る →
              </a>
            </Reveal>
          </div>

          <div className="relative">
            <Reveal axis="x" delay={200} distance={18}>
              <div className="relative -z-10 mx-auto aspect-[774/769] w-full max-w-[500px] md:mx-0 md:-ml-24 md:-mt-2 md:w-[min(56vw,860px,calc(100svh-96px))] md:max-w-none md:-translate-x-[22%]">
                <Illustration
                  src="/images/exceed-career/hero/hero-career-exploration.png"
                  alt="PCの前で未来を考える女性と、背後へ伸びる道のイラスト"
                  sizes="(min-width: 768px) 60vw, 90vw"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
