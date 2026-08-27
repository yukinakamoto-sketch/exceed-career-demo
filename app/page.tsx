import Header from "@/components/top/Header";
import Hero from "@/components/top/Hero";
import IntroSection from "@/components/top/IntroSection";
import InterestSection from "@/components/top/InterestSection";
import CareerSection from "@/components/top/CareerSection";
import RoadmapSection from "@/components/top/RoadmapSection";
import CareerStorySection from "@/components/top/CareerStorySection";
import CareerAcademySection from "@/components/top/CareerAcademySection";
import DiagnosisSection from "@/components/top/DiagnosisSection";
import LineSection from "@/components/top/LineSection";
import AboutFooter from "@/components/top/AboutFooter";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <IntroSection />
        <InterestSection />
        <CareerSection />
        <RoadmapSection />
        <CareerStorySection />
        <CareerAcademySection />
        <DiagnosisSection />
        <LineSection />
      </main>
      <AboutFooter />
    </>
  );
}
