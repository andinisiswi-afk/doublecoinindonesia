import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductHero } from "@/components/products/product-hero"
import { ProductGrid } from "@/components/products/product-grid"
import { ProductCTA } from "@/components/products/product-cta"

export const metadata = {
  title: "Produk Ban | Double Coin Indonesia",
  description:
    "Rangkaian lengkap ban Double Coin untuk truk, bus, OTR, industri, dan kendaraan penumpang. Temukan ban berkualitas untuk setiap kebutuhan Anda.",
}

export default function ProdukPage() {
  return (
    <main>
      <Navbar />
      <ProductHero />
      <ProductGrid />
      <ProductCTA />
      <Footer />
    </main>
  )
}
