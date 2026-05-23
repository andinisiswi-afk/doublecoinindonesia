import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutInnovation } from "@/components/about/about-innovation"
import { AboutTimeline } from "@/components/about/about-timeline"
import { CTASection } from "@/components/home/cta-section"

export const metadata = {
  title: "Tentang Kami | Double Coin Indonesia",
  description:
    "Kenali Double Coin - merek ban internasional dengan lebih dari 30 tahun pengalaman menghasilkan ban berkualitas tinggi yang dipercaya di seluruh dunia.",
}

export default function TentangKamiPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <AboutStory />
      <AboutInnovation />
      <AboutTimeline />
      <CTASection />
      <Footer />
    </main>
  )
}
