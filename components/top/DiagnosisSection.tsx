import Illustration from "./Illustration";

export default function DiagnosisSection() {
  return (
    <section id="diagnosis" className="bg-white py-14 md:py-16">
      <div className="wrap grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <div className="flex items-baseline gap-2 text-text-sub mb-4">
            <span className="eyebrow text-[13px]">08</span>
            <span className="eyebrow text-[13px]">DIAGNOSIS</span>
          </div>

          <h2 className="font-extrabold text-navy text-[28px] md:text-[38px] leading-[1.3] mb-5">
            まだ分からないなら、
            <br />
            一緒に探そう。
          </h2>

          <p className="text-[14px] leading-[1.9] text-text-sub max-w-[440px]">
            性格だけで仕事を決める診断ではありません。
            <br />
            <br />
            あなたの
            <br />
            思考・成長スタイル
            <br />
            ×
            <br />
            興味のある未来
            <br />
            から、
            これからのキャリアマップを考えます。
          </p>

          <a
            href="#diagnosis"
            className="underline-swipe inline-block mt-6 text-[15px] font-semibold text-navy"
          >
            キャリアマップをつくる →
          </a>
        </div>

        <div className="relative w-full md:ml-auto md:max-w-[760px] aspect-[1625/873]">
          <Illustration
            src="/images/exceed-career/diagnosis/diagnosis-future-path.png"
            alt="分岐した道の先にいくつもの未来があるイラスト"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
