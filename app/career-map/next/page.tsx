import Link from "next/link";

function BriefcaseIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="7" width="18" height="12" rx="1" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H12v18H5.5A1.5 1.5 0 0 1 4 19.5v-15Z" />
      <path d="M20 4.5A1.5 1.5 0 0 0 18.5 3H12v18h6.5a1.5 1.5 0 0 0 1.5-1.5v-15Z" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="7" r="3.2" />
      <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 5h16v11H9l-4 3v-3H4V5Z" />
    </svg>
  );
}

const nextSteps = [
  {
    icon: BriefcaseIcon,
    label: "求人を見る",
    eyebrow: "CAREER",
    href: "/#career",
  },
  {
    icon: BookIcon,
    label: "仕事について学ぶ",
    eyebrow: "ACADEMY",
    href: "/#academy",
  },
  {
    icon: PersonIcon,
    label: "歩いた人を見る",
    eyebrow: "STORY",
    href: "/#story",
  },
  {
    icon: ChatIcon,
    label: "LINEにキャリアマップを保存する",
    eyebrow: "LINE",
    href: "/career-map/save",
  },
];

export default function CareerMapNextPage() {
  return (
    <section className="bg-white min-h-screen">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-20 md:py-24">
        <span className="eyebrow text-text-sub mb-8 md:mb-10 block">NEXT STEP</span>

        <h1 className="font-extrabold text-navy text-[28px] md:text-[42px] leading-[1.3] mb-14 md:mb-16 max-w-[600px]">
          まだ決めなくていい。
          <br />
          気になるところから
          <br />
          見てみよう。
        </h1>

        <div className="border-t border-border max-w-[720px]">
          {nextSteps.map((step) => {
            const Icon = step.icon;
            return (
              <Link
                key={step.label}
                href={step.href}
                className="group flex items-center gap-6 py-7 md:py-8 border-b border-border"
              >
                <span className="shrink-0 text-navy group-hover:text-accent transition-colors">
                  <Icon />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block font-bold text-navy text-[17px] md:text-[19px] leading-[1.4] group-hover:text-accent transition-colors">
                    {step.label}
                  </span>
                  <span className="eyebrow text-text-sub">{step.eyebrow}</span>
                </span>

                <span className="shrink-0 text-accent text-[18px] md:text-[20px]">
                  →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
