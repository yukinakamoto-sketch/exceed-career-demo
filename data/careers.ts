export type FutureDirection = {
  number: string;
  id: string;
  lines: string[];
  tags: string[];
  image: string;
};

export const futureDirections: FutureDirection[] = [
  {
    number: "01",
    id: "creative",
    lines: ["好きなことを", "企画や発信につなげる"],
    tags: ["配信", "SNS", "クリエイティブ", "eスポーツ"],
    image: "/images/exceed-career/career/career-esports-creative.png",
  },
  {
    number: "02",
    id: "support-growth",
    lines: ["人の成長や", "キャリアを支える"],
    tags: ["採用", "人材", "育成", "キャリア支援"],
    image: "/images/exceed-career/career/career-people-hr.png",
  },
  {
    number: "03",
    id: "office-expertise",
    lines: ["仕事を支える", "専門性を身につける"],
    tags: ["人事", "労務", "経理", "総務"],
    image: "/images/exceed-career/career/career-office-professional.png",
  },
  {
    number: "04",
    id: "digital-expertise",
    lines: ["デジタル領域で", "専門性をつくる"],
    tags: ["IT", "Web", "SNS", "マーケティング"],
    image: "/images/exceed-career/career/career-it-web-sns.png",
  },
];
