import Header from "@/components/top/Header";
import Hero from "@/components/top/Hero";
import IntroSection from "@/components/top/IntroSection";
import FutureSection from "@/components/top/FutureSection";
import RoadmapSection from "@/components/top/RoadmapSection";
import DiagnosisSection from "@/components/top/DiagnosisSection";
import CareerAcademySection from "@/components/top/CareerAcademySection";
import CareerStorySection from "@/components/top/CareerStorySection";
import ExperienceSection from "@/components/top/ExperienceSection";
import LineSection from "@/components/top/LineSection";
import StartSection from "@/components/top/StartSection";
import AboutFooter from "@/components/top/AboutFooter";
import { JourneyProvider } from "@/components/top/JourneyContext";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <JourneyProvider>
          <IntroSection />
          <FutureSection />
          <RoadmapSection />
          <DiagnosisSection />
        </JourneyProvider>
        <CareerAcademySection />
        <CareerStorySection />
        <ExperienceSection />
        <LineSection />
        <StartSection />
      </main>
      <AboutFooter />
    </>
  );
}
