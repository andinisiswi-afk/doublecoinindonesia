import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TireSearchHero } from "@/components/tire-search/tire-search-hero"
import { TireSearchFormV2 } from "@/components/tire-search/tire-search-form-v2"

export default function TireSearchPage() {
  return (
    <main className="min-h-screen bg-dc-body">
      <Navbar />
      <TireSearchHero />
      <TireSearchFormV2 />
      <Footer />
    </main>
  )
}
