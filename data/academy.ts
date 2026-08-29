export type AcademyArticle = {
  kind: "COURSE";
  title: string;
  description: string;
  image: string;
  href: string;
};

export const academyArticles: AcademyArticle[] = [
  {
    kind: "COURSE",
    title: "社会人の基礎力",
    description: "ビジネスマナー・報連相・チームで働く土台をつくる。",
    image: "/images/exceed-career/interest/interest-thinking.png",
    href: "#academy",
  },
  {
    kind: "COURSE",
    title: "人材・採用・キャリア",
    description: "採用の仕組みと人の可能性に向き合う仕事を知る。",
    image: "/images/exceed-career/academy/academy-hr-work.png",
    href: "#academy",
  },
  {
    kind: "COURSE",
    title: "オフィス専門スキル",
    description: "経理・人事・総務など専門性を積み上げるスキルを学ぶ。",
    image: "/images/exceed-career/career/career-office-professional.png",
    href: "#academy",
  },
  {
    kind: "COURSE",
    title: "IT・Web・SNS",
    description: "未経験からデジタル領域の仕事に近づくための基礎を学ぶ。",
    image: "/images/exceed-career/academy/academy-it-beginner.png",
    href: "#academy",
  },
  {
    kind: "COURSE",
    title: "eスポーツ・配信",
    description: "好きを仕事につなげる、配信・運営まわりの働き方を知る。",
    image: "/images/exceed-career/academy/academy-esports-career.png",
    href: "#academy",
  },
];

export type AcademyFormat = {
  kind: "LECTURE" | "PLAYBOOK" | "PRACTICE";
  title: string;
  description: string;
};

export const academyFormats: AcademyFormat[] = [
  {
    kind: "LECTURE",
    title: "現役社員が教える実践レクチャー",
    description: "現場のリアルな仕事の進め方を学ぶ。",
  },
  {
    kind: "PLAYBOOK",
    title: "仕事で使える実践テンプレート集",
    description: "そのまま使える資料・進め方をまとめて持ち帰る。",
  },
  {
    kind: "PRACTICE",
    title: "課題で学び、現場で試す",
    description: "学んだことを小さな課題で試し、身につける。",
  },
];
