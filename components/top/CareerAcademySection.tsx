import { academyArticles, academyFormats } from "@/data/academy";
import Illustration from "./Illustration";
import Reveal from "./Reveal";

export default function CareerAcademySection() {
  return (
    <section id="academy" className="bg-warm-white py-12 md:py-14">
      <div className="wrap">
        <div className="flex flex-col text-text-sub mb-2 leading-tight">
          <span className="top-label">06</span>
          <span className="top-label">CAREER ACADEMY</span>
        </div>

        <h2 className="font-extrabold text-navy text-[32px] md:text-[48px] leading-[1.2] mb-4">
          学ぶ
        </h2>

        <p className="text-[14px] md:text-[15px] leading-[1.8] text-text-sub max-w-[520px] mb-8 md:mb-10">
          理想のキャリアには、学びと経験が両方いる。
          <br />
          現場で使えるスキルを、オンラインアカデミーで身につける。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-8 mb-10 md:mb-12">
          {academyArticles.map((article, i) => (
            <Reveal key={article.title} delay={i * 50} distance={12} className="w-full">
              <a href={article.href} className="group w-full flex flex-col">
                <span className="top-label text-accent mb-2 block">{article.kind}</span>
                <div className="relative aspect-[4/3] w-[86%] transition-transform duration-[250ms] ease-out group-hover:-translate-y-[3px]">
                  <Illustration
                    src={article.image}
                    alt={article.title}
                    sizes="(min-width: 768px) 19vw, 45vw"
                    objectPosition="center bottom"
                  />
                </div>
                <p className="mt-3 font-bold text-navy text-[15px] leading-[1.5] group-hover:text-accent transition-colors">
                  {article.title}
                </p>
                <p className="mt-2 text-[12px] leading-[1.7] text-text-sub">
                  {article.description}
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="border-t border-border pt-6 md:pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {academyFormats.map((format) => (
            <div key={format.kind}>
              <span className="top-label text-text-sub mb-2 block">{format.kind}</span>
              <p className="font-bold text-navy text-[14px] leading-[1.5] mb-1">
                {format.title}
              </p>
              <p className="text-[12px] leading-[1.7] text-text-sub">{format.description}</p>
            </div>
          ))}
        </div>

        <a
          href="#academy"
          className="group inline-block underline-swipe mt-8 text-[15px] font-semibold text-navy"
        >
          アカデミーについて詳しく見る{" "}
          <span className="inline-block transition-transform duration-[250ms] group-hover:translate-x-[4px]">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
