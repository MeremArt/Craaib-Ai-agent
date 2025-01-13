import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Statistics } from "./components/Statistics";
import { SpecializedAgents } from "./components/SpecializedAgents";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0B13]">
      <Header />
      <hr className="bg-white border-1 border-white" />
      <main>
        <HeroSection />
        <Statistics />
        <div>
          <SpecializedAgents />
        </div>
        <div className="">
          <CTASection />
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
