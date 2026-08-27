export type CareerField = {
  number: string;
  title: string;
  tags: string[];
  image: string;
};

export const careerFields: CareerField[] = [
  {
    number: "01",
    title: "eスポーツ・配信・クリエイティブ",
    tags: ["配信", "大会", "SNS", "クリエイティブ"],
    image: "/images/exceed-career/career/career-esports-creative.png",
  },
  {
    number: "02",
    title: "人材・採用・キャリア支援",
    tags: ["採用", "人材", "育成", "キャリア支援"],
    image: "/images/exceed-career/career/career-people-hr.png",
  },
  {
    number: "03",
    title: "オフィス・管理部門専門職",
    tags: ["人事", "労務", "経理", "総務", "広報"],
    image: "/images/exceed-career/career/career-office-professional.png",
  },
  {
    number: "04",
    title: "IT・Web・SNS",
    tags: ["エンジニア", "Web制作", "SNS運用", "マーケティング"],
    image: "/images/exceed-career/career/career-it-web-sns.png",
  },
];
