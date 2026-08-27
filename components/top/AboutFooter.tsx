import Image from "next/image";

const aboutLinks = ["ABOUT", "CAREER", "JOB", "FAQ"];
const footerNavLinks = [
  { label: "CAREER", href: "#career" },
  { label: "ACADEMY", href: "#academy" },
  { label: "STORY", href: "#story" },
  { label: "ABOUT", href: "#about" },
  { label: "JOB", href: "#about" },
  { label: "FAQ", href: "#about" },
];

export default function AboutFooter() {
  return (
    <footer id="about" className="bg-navy text-white">
      <div className="wrap py-12 md:py-14 grid md:grid-cols-[1fr_1fr] gap-8 border-b border-white/15">
        <h2 className="font-extrabold text-[24px] md:text-[32px] leading-[1.35]">
          キャリアの
          <br />
          スタートラインをつくる会社。
        </h2>

        <div className="flex flex-col gap-4">
          <p className="font-bold text-[18px] tracking-[0.02em]">EXCEED JAPAN</p>
          <p className="text-[13px] leading-[1.9] text-light-blue max-w-[420px]">
            一人ひとりの「まだ分からない」に向き合い、
            経験と学びを通じてキャリアを描く手助けをしています。
          </p>
          <div className="flex items-center gap-3 mt-2">
            {aboutLinks.map((label, i) => (
              <span key={label} className="flex items-center gap-3">
                {i > 0 && <span className="text-white/25">|</span>}
                <a
                  href={label === "CAREER" || label === "JOB" ? "#career" : "#about"}
                  className="text-[13px] font-semibold hover:text-accent-soft"
                >
                  {label}
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap py-10 md:py-14">
        <div className="relative w-full max-w-[1200px] aspect-[1660/412]">
          <Image
            src="/images/exceed-career/footer/footer-lettering.png"
            alt="FIND YOUR NEXT. WHAT'S NEXT?"
            fill
            sizes="(min-width: 768px) 62vw, 100vw"
            style={{ objectFit: "contain", objectPosition: "left center" }}
          />
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-wrap items-center gap-3">
            {footerNavLinks.map((link, i) => (
              <span key={link.label} className="flex items-center gap-3">
                {i > 0 && <span className="text-white/25">・</span>}
                <a
                  href={link.href}
                  className="text-[13px] font-semibold hover:text-accent-soft"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[12px] text-light-blue">
              © EXCEED JAPAN Co., Ltd. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
