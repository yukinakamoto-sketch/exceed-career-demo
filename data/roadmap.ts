export type RoadmapStep = {
  label: string;
  title: string;
  description: string;
};

export const roadmapSteps: RoadmapStep[] = [
  { label: "START", title: "現在地を知る", description: "自分の得意・興味を整理しよう" },
  { label: "GOAL", title: "望む未来を考える", description: "気になる方向性を思い描く" },
  { label: "EXPERIENCE", title: "まず働き始める", description: "いろんな経験をしてみる" },
  { label: "ON THE JOB", title: "現場経験を積む", description: "仕事を通じて強みを見つける" },
  { label: "TRAINING", title: "必要なことを学ぶ", description: "スキルや知識を身につける" },
  { label: "DISCOVERY", title: "適性を深く知る", description: "自分らしさに気づく" },
  { label: "NEXT CAREER", title: "次のキャリアへ進む", description: "選んだ道を進み出す" },
  { label: "BEYOND", title: "リーダー・管理職・独立等、その先へ", description: "理想の未来へ" },
];
