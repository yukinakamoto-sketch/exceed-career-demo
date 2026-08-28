import Illustration from "./Illustration";

export default function Hero() {
  return (
    <section id="top" className="relative bg-warm-white overflow-hidden">
      <div className="wrap relative py-10 md:py-6 w-full">
        <div className="relative grid gap-6 md:grid-cols-[58%_1fr] md:items-center md:gap-0">
          <div className="relative z-10 md:pl-2">
            <h1
              className="font-extrabold text-navy"
              style={{
                fontSize: "clamp(60px, 11.5vw, 150px)",
                lineHeight: 0.94,
                letterSpacing: "-0.045em",
              }}
            >
              この先、
              <br />
              何に
              <br />
              なろう。
            </h1>

            <p className="mt-5 md:mt-6 text-[14px] md:text-[15px] leading-[1.8] text-text-sub max-w-[420px]">
              まだ、やりたい仕事が決まっていなくてもいい。
              <br />
              <br />
              好きなこと、得意なこと、気になる未来。
              <br />
              そこから、自分のキャリアを探していこう。
            </p>

            <a
              href="#current"
              className="underline-swipe inline-block mt-6 text-[15px] font-semibold text-navy"
            >
              自分の未来を探してみる →
            </a>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-[500px] mx-auto aspect-[774/769] md:mx-0 md:max-w-none md:w-[min(54vw,845px)] md:-ml-16 md:-mt-2 md:-translate-x-[7%]">
              <Illustration
                src="/images/exceed-career/hero/hero-career-exploration.png"
                alt="PCの前で未来を考える女性と、背後へ伸びる道のイラスト"
                sizes="(min-width: 768px) 60vw, 90vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
