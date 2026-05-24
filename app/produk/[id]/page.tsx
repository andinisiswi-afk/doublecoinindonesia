import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/products/product-detail"
import { products } from "@/components/products/product-data"
import { notFound } from "next/navigation"

export const metadata = {
  title: "Detail Produk Ban | Double Coin Indonesia",
  description: "Spesifikasi teknis lengkap dan informasi detail produk ban Double Coin.",
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  return (
    <main>
      <Navbar />
      <ProductDetail product={product} />
      <Footer />
    </main>
  )
}
