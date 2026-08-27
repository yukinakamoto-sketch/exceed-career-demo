import sharp from "sharp";

const files = [
  "public/images/exceed-career/story/career-story-main.png",
  "public/images/exceed-career/academy/academy-sns-marketing.png",
  "public/images/exceed-career/academy/academy-hr-work.png",
  "public/images/exceed-career/academy/academy-esports-career.png",
  "public/images/exceed-career/academy/academy-it-beginner.png",
  "public/images/exceed-career/diagnosis/diagnosis-future-path.png",
  "public/images/exceed-career/line/line-career-map-phone.png",
];

for (const file of files) {
  const img = sharp(file).trim({ threshold: 10 });
  const buf = await img.png().toBuffer();
  const meta = await sharp(buf).metadata();
  await sharp(buf).toFile(file);
  console.log(file, "->", meta.width, "x", meta.height);
}
