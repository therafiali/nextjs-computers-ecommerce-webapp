
import { HeroSection } from "@/components/sections/HeroSection"
import { CategorySection } from "@/components/sections/CategorySection"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    
      <main className="flex-grow">
        <HeroSection />
        <CategorySection />
      </main>
     
    </div>
  )
}
