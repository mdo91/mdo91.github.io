import { FormSection } from "@/components/form-section"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { JoinersSection } from "@/components/joiners-section"
import { AboutMissionSection } from "@/components/about-mission-section"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection />
      <div
        className="w-[65vw] mx-auto my-8"
        style={{
          height: '4px',
          borderRadius: '999px',
          background: 'linear-gradient(90deg, transparent 0%, #a78bfa 40%, #8b5cf6 50%, #a78bfa 60%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
        }}
      />
      <AboutMissionSection />
      <FormSection />
      <JoinersSection />
      <Footer />
    </main>
  )
}
