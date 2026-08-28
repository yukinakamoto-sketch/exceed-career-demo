import Header from "@/components/top/Header";
import Hero from "@/components/top/Hero";
import CurrentSection from "@/components/top/CurrentSection";
import FutureSection from "@/components/top/FutureSection";
import RoadmapSection from "@/components/top/RoadmapSection";
import DiagnosisSection from "@/components/top/DiagnosisSection";
import CareerStorySection from "@/components/top/CareerStorySection";
import CareerAcademySection from "@/components/top/CareerAcademySection";
import LineSection from "@/components/top/LineSection";
import AboutFooter from "@/components/top/AboutFooter";
import { JourneyProvider } from "@/components/top/JourneyContext";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <JourneyProvider>
          <CurrentSection />
          <FutureSection />
          <RoadmapSection />
          <DiagnosisSection />
        </JourneyProvider>
        <CareerStorySection />
        <CareerAcademySection />
        <LineSection />
      </main>
      <AboutFooter />
    </>
  );
}
