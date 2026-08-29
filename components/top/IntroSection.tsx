"use client";

import { useJourney } from "./JourneyContext";
import Illustration from "./Illustration";
import Reveal from "./Reveal";

const interestTags = [
  {
    id: "people",
    label: "人と関わりたい",
    image: "/images/exceed-career/interest/interest-notes.png",
  },
  {
    id: "connect-like",
    label: "好きなことを仕事にしたい",
    image: "/images/exceed-career/interest/interest-guitar.png",
  },
  {
    id: "expertise",
    label: "専門性を身につけたい",
    image: "/images/exceed-career/interest/interest-books.png",
  },
  {
    id: "support",
    label: "誰かを支えたい",
    image: "/images/exceed-career/interest/interest-stars.png",
  },
  {
    id: "unsure",
    label: "まだ、よく分からない",
    image: "/images/exceed-career/interest/interest-thinking.png",
  },
];

export default function IntroSection() {
  const { current, setCurrent } = useJourney();

  return (
    <section id="intro" className="bg-white pt-14 pb-8 md:pt-16 md:pb-9">
      <div className="wrap">
        <div className="flex flex-col text-text-sub mb-3 leading-tight">
          <span className="top-label">02</span>
          <span className="top-label">INTRO</span>
        </div>

        <h2 className="font-extrabold text-navy text-[32px] md:text-[48px] leading-[1.2] mb-6">
          考える
        </h2>

        <Reveal
          as="p"
          className="font-extrabold text-navy leading-[1.35] mb-4"
          style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
        >
          まだ、なりたい仕事が
          <br />
          決まっていなくてもいい。
        </Reveal>

        <p className="text-[14px] md:text-[15px] leading-[1.9] text-text-sub max-w-[480px] mb-10 md:mb-12">
          迷うのは、あなただけじゃない。
          <br />
          まず、今の自分と向き合う。未来のヒントを見つけていこう。
        </p>

        <p className="text-[15px] font-semibold text-navy mb-6 md:mb-8">
          どんな未来に、心が動く？
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-8">
          {interestTags.map((tag, i) => {
            const selected = current?.id === tag.id;
            return (
              <Reveal key={tag.id} delay={i * 60} distance={12}>
                <button
                  type="button"
                  onClick={() => setCurrent({ id: tag.id, label: tag.label })}
                  aria-pressed={selected}
                  className="group flex flex-col items-center text-center w-full"
                >
                  <div className="relative w-[56px] md:w-[72px] aspect-square mb-3 transition-transform duration-[250ms] ease-out group-hover:-translate-y-[3px]">
                    <Illustration src={tag.image} alt="" sizes="64px" />
                  </div>
                  <span
                    className={`text-[12px] md:text-[13px] font-semibold leading-[1.5] transition-colors ${
                      selected ? "text-accent" : "text-navy group-hover:text-accent"
                    }`}
                  >
                    {tag.label}
                  </span>
                  <span
                    className={`mt-2 h-[2px] w-[20px] bg-accent transition-opacity ${
                      selected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
