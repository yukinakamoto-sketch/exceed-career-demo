import { academyArticles } from "@/data/academy";
import Illustration from "./Illustration";

export default function CareerAcademySection() {
  return (
    <section id="academy" className="bg-warm-white py-14 md:py-16">
      <div className="wrap">
        <div className="flex items-baseline justify-between mb-6 md:mb-8">
          <div>
            <div className="flex items-baseline gap-2 text-text-sub mb-3">
              <span className="eyebrow text-[13px]">07</span>
              <span className="eyebrow text-[13px]">CAREER ACADEMY</span>
            </div>
            <h2 className="font-extrabold text-navy text-[26px] md:text-[36px] leading-[1.3]">
              未来のために、
              <br />
              今から学べる。
            </h2>
          </div>

          <a
            href="#academy"
            className="hidden md:inline-block underline-swipe text-[13px] font-semibold text-navy whitespace-nowrap"
          >
            VIEW ALL →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 md:gap-6">
          {academyArticles.map((article) => (
            <a key={article.title} href={article.href} className="group flex flex-col">
              <div className="relative aspect-[4/3] w-[73%]">
                <Illustration
                  src={article.image}
                  alt={article.title}
                  sizes="(min-width: 768px) 19vw, 80vw"
                  objectPosition="center bottom"
                />
              </div>
              <p className="mt-2 min-h-[45px] font-bold text-navy text-[14px] leading-[1.6] group-hover:text-accent transition-colors">
                {article.title}
              </p>
              <p className="mt-2 text-[12px] font-semibold text-text-sub">
                READ MORE →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
