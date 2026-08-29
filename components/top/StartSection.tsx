import Reveal from "./Reveal";

const startLinks = [
  {
    title: "今から始められる求人を見る",
    description: "まずは、どんな仕事があるのか見てみる。",
    href: "#career",
  },
  {
    title: "キャリア相談をする",
    description: "経験豊富なキャリアアドバイザーが、あなたの悩みや不安をサポート。",
    href: "#line",
  },
];

export default function StartSection() {
  return (
    <section id="start" className="bg-white py-14 md:py-16">
      <div className="wrap">
        <div className="flex flex-col text-text-sub mb-3 leading-tight">
          <span className="top-label">10</span>
          <span className="top-label">START</span>
        </div>

        <h2 className="font-extrabold text-navy text-[32px] md:text-[48px] leading-[1.2] mb-4">
          始める
        </h2>

        <p className="text-[14px] leading-[1.9] text-text-sub max-w-[480px] mb-8 md:mb-10">
          道が見えたら、最初の一歩を。今すぐ決めることも、
          じっくり考えることも、どちらも未来への行動の一つ。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[720px]">
          {startLinks.map((link, i) => (
            <Reveal key={link.title} delay={i * 60} distance={12}>
              <a
                href={link.href}
                className="group block border-t border-border pt-5"
              >
                <p className="font-bold text-navy text-[16px] leading-[1.5] mb-2 group-hover:text-accent transition-colors">
                  {link.title}
                </p>
                <p className="text-[13px] leading-[1.8] text-text-sub mb-3">
                  {link.description}
                </p>
                <span className="underline-swipe inline-block text-[13px] font-semibold text-navy">
                  見る{" "}
                  <span className="inline-block transition-transform duration-[250ms] group-hover:translate-x-[4px]">
                    →
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
