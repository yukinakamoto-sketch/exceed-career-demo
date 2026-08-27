import { careerStory } from "@/data/story";
import Illustration from "./Illustration";

export default function CareerStorySection() {
  return (
    <section id="story" className="bg-white py-12 md:py-14">
      <div className="wrap">
        <div className="flex items-baseline gap-2 text-text-sub mb-3">
          <span className="eyebrow text-[13px]">06</span>
          <span className="eyebrow text-[13px]">CAREER STORY</span>
        </div>

        <h2 className="font-extrabold text-navy text-[28px] md:text-[34px] leading-[1.3] mb-5 md:mb-6">
          {careerStory.headline[0]}
          <br className="md:hidden" />
          {careerStory.headline[1]}
        </h2>

        <div className="grid md:grid-cols-[33%_1fr] gap-8 md:gap-8 md:items-start">
          <div className="flex flex-col items-center md:items-start gap-4 md:gap-5">
            <div
              className="relative w-[300px] md:w-[370px] aspect-[1107/1376]"
            >
              <Illustration
                src={careerStory.image}
                alt="採用担当として働く主人公の写真"
                sizes="370px"
              />
            </div>
            <div>
              <p className="eyebrow text-accent mb-1 text-center md:text-left">
                {careerStory.name}
              </p>
              <p className="font-bold text-navy text-[18px] md:text-[20px] leading-[1.4] text-center md:text-left whitespace-nowrap">
                {careerStory.subheadline[0]}
                <br className="md:hidden" />
                {careerStory.subheadline[1]}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
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

            <p className="text-[13px] leading-[1.9] text-text-sub max-w-[520px]">
              {careerStory.quote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
