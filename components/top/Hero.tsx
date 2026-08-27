import Illustration from "./Illustration";

const scatterCopy = [
  { text: "好きなことを\n仕事にしたい", top: "0%", left: "42%" },
  { text: "向いてる仕事が\n分からない", top: "0%", left: "88%" },
  { text: "未経験からでも\n間に合う？", top: "42%", left: "92%" },
  { text: "ちゃんと将来に\nつながる仕事がしたい", top: "72%", left: "90%" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-warm-white overflow-hidden"
    >
      <div className="wrap relative py-10 md:py-5 w-full">
        {/* PC scattered captions */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          {scatterCopy.map((item) => (
            <p
              key={item.text}
              className="absolute text-[13px] leading-[1.5] text-text-sub font-medium whitespace-pre-line text-right"
              style={{ top: item.top, left: item.left }}
            >
              {item.text}
            </p>
          ))}
        </div>

        <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-start md:gap-6">
          <div className="relative z-10 md:pl-2">
            <h1
              className="font-extrabold text-navy"
              style={{
                fontSize: "clamp(56px, 9.5vw, 118px)",
                lineHeight: 0.98,
                letterSpacing: "-0.04em",
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
              href="#career"
              className="underline-swipe inline-block mt-6 text-[15px] font-semibold text-navy"
            >
              自分の未来を探してみる →
            </a>
          </div>

          <div className="relative w-full max-w-[440px] mx-auto aspect-[774/769] md:mx-0 md:max-w-none md:w-[min(50vw,760px)] md:-mt-4">
            <Illustration
              src="/images/exceed-career/hero/hero-career-exploration.png"
              alt="PCの前で未来を考える女性と、背後へ伸びる道のイラスト"
              sizes="(min-width: 768px) 55vw, 90vw"
              priority
            />
          </div>
        </div>

        {/* SP scattered captions — only the essentials */}
        <div className="md:hidden mt-8 flex flex-col gap-3">
          <p className="text-[13px] text-text-sub font-medium whitespace-pre-line">
            好きなことを仕事にしたい
          </p>
          <p className="text-[13px] text-text-sub font-medium whitespace-pre-line">
            向いてる仕事が分からない
          </p>
          <p className="text-[13px] text-text-sub font-medium whitespace-pre-line">
            未経験からでも間に合う？
          </p>
        </div>
      </div>
    </section>
  );
}
