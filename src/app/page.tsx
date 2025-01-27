import { CategorySection } from "@/components/sections/CategorySection";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <CategorySection/>
      </main>
    </div>
  );
}
