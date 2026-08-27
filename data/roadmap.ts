export type RoadmapStep = {
  label: string;
  title: string;
  description: string;
};

export const roadmapSteps: RoadmapStep[] = [
  { label: "START", title: "今の自分を知る", description: "自分の得意・興味を整理しよう" },
  { label: "EXPERIENCE", title: "まず働いてみる", description: "いろんな経験をしてみる" },
  { label: "TRAINING", title: "必要なことを学ぶ", description: "スキルや知識を身につける" },
  { label: "DISCOVERY", title: "得意・適性を知る", description: "自分らしさに気づく" },
  { label: "NEXT CAREER", title: "次の仕事へ進む", description: "選んだ道を進み出す" },
  { label: "FUTURE", title: "専門職・リーダー・管理職・独立", description: "理想の未来へ" },
];
