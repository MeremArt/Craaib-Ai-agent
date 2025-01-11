import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Statistics } from "./components/Statistics";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0B13]">
      <Header />
      <main>
        <HeroSection />
        <Statistics />
      </main>
    </div>
  );
}
