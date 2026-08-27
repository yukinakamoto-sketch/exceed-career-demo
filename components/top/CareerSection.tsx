import { careerFields } from "@/data/careers";
import Illustration from "./Illustration";

export default function CareerSection() {
  return (
    <section id="career" className="bg-white py-14 md:py-16">
      <div className="wrap">
        <div className="flex items-baseline gap-2 text-text-sub mb-3">
          <span className="eyebrow text-[13px]">04</span>
          <span className="eyebrow text-[13px]">CAREER</span>
        </div>

        <p className="eyebrow text-text-sub mb-2">YOUR POSSIBLE FUTURE</p>
        <h2 className="font-extrabold text-navy text-[28px] md:text-[40px] leading-[1.25] mb-8 md:mb-10 max-w-[560px]">
          その興味は、
          <br />
          こんな未来につながっている。
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-x-8">
          {careerFields.map((field) => (
            <div key={field.number} className="flex flex-col">
              <span className="font-extrabold text-navy text-[36px] md:text-[46px] leading-none tracking-[-0.02em]">
                {field.number}
              </span>

              <div className="relative aspect-[4/3] mt-1 mb-2">
                <Illustration
                  src={field.image}
                  alt={field.title}
                  sizes="(min-width: 768px) 22vw, 45vw"
                  objectPosition="center bottom"
                />
              </div>

              <p className="font-bold text-navy text-[15px] md:text-[16px] leading-[1.5]">
                {field.title}
              </p>

              <p className="mt-2 text-[12px] text-text-sub leading-[1.8]">
                {field.tags.join("　")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
