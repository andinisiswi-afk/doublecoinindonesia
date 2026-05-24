"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { Product } from "./product-data"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const isSizeRange = product.sizes && product.sizes.length > 0

  return (
    <section className="min-h-screen bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Back Button */}
        <Link
          href="/produk"
          className="inline-flex items-center gap-2 text-dc-dark hover:text-dc-dark/70 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Produk
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Product Image */}
          <div className="flex items-center justify-center bg-secondary rounded-xl p-8">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-auto max-w-md"
            />
          </div>

          {/* Product Info */}
          <div>
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-dc-yellow text-dc-dark text-xs font-bold rounded-full uppercase tracking-wider">
                {product.category === "otr" ? "Ban OTR" : "Ban Industri"}
              </span>
              <span className="text-sm text-muted-foreground">{product.position}</span>
            </div>

            {/* Product Name */}
            <h1 className="text-3xl md:text-4xl font-bold text-dc-dark mb-2 font-serif">
              Double Coin {product.name}
            </h1>

            {/* Application */}
            <p className="text-lg text-dc-dark/60 mb-6">{product.application}</p>

            {/* Description */}
            <p className="text-base text-foreground mb-6 leading-relaxed">
              {product.fullDescription || product.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Fitur Utama</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-dc-yellow shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compound Info */}
            {product.compound && (
              <div className="bg-secondary rounded-lg p-4 mb-8">
                <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">Compound</h4>
                <p className="text-sm text-foreground font-medium">{product.compound}</p>
                {product.compound_description && (
                  <p className="text-xs text-muted-foreground mt-2">{product.compound_description}</p>
                )}
              </div>
            )}

            {/* CTA Button */}
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 bg-dc-dark text-white px-8 py-3 rounded-lg font-bold hover:bg-dc-dark/90 transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>

        {/* Benefits Section */}
        {product.benefits && product.benefits.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-dc-dark mb-6 font-serif">Keunggulan Produk</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.benefits.map((benefit) => (
                <div key={benefit} className="bg-secondary rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-dc-yellow mt-2 shrink-0" />
                    <p className="text-sm text-foreground">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Applications Section */}
        {product.applications && product.applications.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-dc-dark mb-6 font-serif">Aplikasi</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.applications.map((app) => (
                <div key={app} className="bg-dc-yellow/10 border border-dc-yellow/20 rounded-lg p-4 text-center">
                  <p className="text-sm font-semibold text-dc-dark">{app}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sizes Section */}
        {isSizeRange && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-dc-dark mb-6 font-serif">Ukuran Tersedia</h2>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <div
                  key={size}
                  className="bg-white border-2 border-dc-dark rounded-lg px-4 py-3 font-mono font-bold text-dc-dark"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Specifications Section */}
        {product.specifications && product.specifications.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-dc-dark mb-6 font-serif">Spesifikasi Teknis</h2>
            <div className="overflow-x-auto rounded-lg border border-border bg-white">
              <table className="w-full text-sm">
                <thead className="bg-secondary border-b border-border">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold text-foreground">Ukuran</th>
                    <th className="px-4 py-3 text-left font-bold text-foreground">Kecepatan (km/h)</th>
                    <th className="px-4 py-3 text-left font-bold text-foreground">OD (mm)</th>
                    <th className="px-4 py-3 text-left font-bold text-foreground">TD (mm)</th>
                    <th className="px-4 py-3 text-left font-bold text-foreground">Section Width</th>
                    <th className="px-4 py-3 text-left font-bold text-foreground">Rim</th>
                    <th className="px-4 py-3 text-left font-bold text-foreground">Beban (kg)</th>
                    <th className="px-4 py-3 text-left font-bold text-foreground">Tekanan (kPa)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {product.specifications.map((spec, idx) => (
                    <tr key={idx} className="hover:bg-secondary/30">
                      <td className="px-4 py-3 font-mono font-semibold text-foreground">{spec.size}</td>
                      <td className="px-4 py-3 text-foreground">{spec.speed}</td>
                      <td className="px-4 py-3 text-foreground">{spec.od}</td>
                      <td className="px-4 py-3 text-foreground">{spec.td}</td>
                      <td className="px-4 py-3 text-foreground text-xs">{spec.sw}</td>
                      <td className="px-4 py-3 text-foreground">{spec.rim}</td>
                      <td className="px-4 py-3 text-foreground">{spec.load}</td>
                      <td className="px-4 py-3 text-foreground">{spec.pressure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Contact CTA */}
        <div className="bg-dc-yellow rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-dc-dark mb-4">
            Tertarik dengan Produk {product.name}?
          </h2>
          <p className="text-dc-dark/70 mb-8 max-w-2xl mx-auto">
            Hubungi tim kami untuk konsultasi gratis dan dapatkan penawaran terbaik untuk kebutuhan ban Anda.
          </p>
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 bg-dc-dark text-dc-yellow px-8 py-4 rounded-lg font-bold hover:bg-dc-dark/90 transition-colors"
          >
            Hubungi Kami Sekarang
          </Link>
        </div>
      </div>
    </section>
  )
}
