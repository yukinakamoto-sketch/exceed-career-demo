export type CareerMapOption = {
  key: "A" | "B" | "C" | "D";
  lines: string[];
  scores: Partial<Record<string, number>>;
};

export type CareerMapQuestion = {
  number: string;
  question: string[];
  options: CareerMapOption[];
};

export const careerMapQuestions: CareerMapQuestion[] = [
  {
    number: "01",
    question: ["今の自分に、", "一番近いのは？"],
    options: [
      {
        key: "A",
        lines: ["やりたいことが", "まだ分からない"],
        scores: { "support-growth": 1 },
      },
      {
        key: "B",
        lines: ["好きなことを", "仕事につなげたい"],
        scores: { creative: 2 },
      },
      {
        key: "C",
        lines: ["興味のある仕事は", "なんとなくある"],
        scores: { "office-expertise": 1, "digital-expertise": 1 },
      },
      {
        key: "D",
        lines: ["今の仕事から", "次へ進みたい"],
        scores: { "digital-expertise": 1 },
      },
    ],
  },
  {
    number: "02",
    question: ["仕事で大事にしたいのは？"],
    options: [
      {
        key: "A",
        lines: ["好きなことに関わる"],
        scores: { creative: 2 },
      },
      {
        key: "B",
        lines: ["人と関わる"],
        scores: { "support-growth": 2 },
      },
      {
        key: "C",
        lines: ["専門性を身につける"],
        scores: { "office-expertise": 1, "digital-expertise": 1 },
      },
      {
        key: "D",
        lines: ["安定して働く"],
        scores: { "office-expertise": 2 },
      },
    ],
  },
  {
    number: "03",
    question: ["今、少し気になるのは？"],
    options: [
      {
        key: "A",
        lines: ["SNS・動画・配信"],
        scores: { creative: 2 },
      },
      {
        key: "B",
        lines: ["人材・採用・キャリア"],
        scores: { "support-growth": 2 },
      },
      {
        key: "C",
        lines: ["オフィス・管理部門"],
        scores: { "office-expertise": 2 },
      },
      {
        key: "D",
        lines: ["IT・Web"],
        scores: { "digital-expertise": 2 },
      },
    ],
  },
  {
    number: "04",
    question: ["これからどうなれたら、", "少し嬉しい？"],
    options: [
      {
        key: "A",
        lines: ["好きなことを", "仕事に近づけたい"],
        scores: { creative: 2 },
      },
      {
        key: "B",
        lines: ["誰かを支える", "仕事をしたい"],
        scores: { "support-growth": 2 },
      },
      {
        key: "C",
        lines: ["自分の強みを", "つくりたい"],
        scores: { "office-expertise": 1, "digital-expertise": 1 },
      },
      {
        key: "D",
        lines: ["次のキャリアへ", "進みたい"],
        scores: { "support-growth": 1 },
      },
    ],
  },
];
