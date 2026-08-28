import { careerStory } from "@/data/story";
import Illustration from "./Illustration";

export default function CareerStorySection() {
  return (
    <section id="story" className="bg-white py-12 md:py-14">
      <div className="wrap">
        <div className="flex items-baseline gap-2 text-text-sub mb-2">
          <span className="eyebrow text-[13px]">06</span>
          <span className="eyebrow text-[13px]">CAREER STORY</span>
        </div>

        <h2 className="font-extrabold text-navy text-[32px] md:text-[48px] leading-[1.2] mb-7 md:mb-9">
          歩いた人を見る
        </h2>

        <p
          className="font-extrabold text-navy leading-[0.98] mb-8 md:mb-10 tracking-[-0.02em]"
          style={{ fontSize: "clamp(25px, 4vw, 48px)" }}
        >
          {careerStory.subheadline[0]}
          <br />
          {careerStory.subheadline[1]}
        </p>

        <div className="grid md:grid-cols-[38%_1fr] gap-8 md:gap-10 md:items-start">
          <div
            className="relative w-[260px] md:w-[74%] mx-auto md:mx-0 md:ml-auto aspect-[1107/1376]"
          >
            <Illustration
              src={careerStory.image}
              alt="採用担当として働く主人公の写真"
              sizes="(min-width: 768px) 38vw, 300px"
            />
          </div>

          <div className="flex flex-col gap-8 md:gap-14 md:pt-3">
            <p className="eyebrow text-accent">{careerStory.name}</p>

            <div className="relative pt-4">
              <div className="absolute left-0 right-0 top-[8px] h-[1px] bg-border hidden md:block" />
              <div className="absolute left-[4px] top-[4px] bottom-[4px] w-[1px] bg-border md:hidden" />
              <div className="flex flex-col gap-5 md:flex-row md:gap-0 md:justify-between">
                {careerStory.timeline.map((step) => (
                  <div key={step.label} className="relative pl-5 md:pl-0 md:text-center">
                    <span className="absolute left-0 top-[4px] w-[7px] h-[7px] rounded-full bg-accent md:static md:inline-block md:mb-2" />
                    <p className="font-bold text-navy text-[13px]">{step.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[14px] leading-[2.1] text-text-sub max-w-[680px]">
              {careerStory.quote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
