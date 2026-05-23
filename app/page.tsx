import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { TireSearchWidget } from "@/components/home/tire-search-widget"
import { PartnershipSection } from "@/components/home/partnership-section"
import { ProductCategories } from "@/components/home/product-categories"
import { AdvantagesSection } from "@/components/home/advantages-section"
import { StatsSection } from "@/components/home/stats-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TireSearchWidget />
      <PartnershipSection />
      <AdvantagesSection />
      <ProductCategories />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
