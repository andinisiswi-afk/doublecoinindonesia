import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata = {
  title: "Hubungi Kami | Double Coin Indonesia",
  description:
    "Hubungi Double Coin Indonesia untuk konsultasi, penawaran, atau informasi produk ban truk, OTR, dan industri. Tim kami siap membantu Anda.",
}

export default function KontakPage() {
  return (
    <main>
      <Navbar />
      <ContactHero />
      <div className="py-12 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
