"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Filter, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { products } from "./product-data"

const categories = [
  { id: "all", label: "Semua Produk" },
  { id: "otr", label: "Ban OTR" },
  { id: "industrial", label: "Ban Industri" },
]

export function ProductGrid() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null)

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.application.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cari ban, aplikasi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-dc-yellow focus:border-transparent"
            />
          </div>

          {/* Filter */}
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-dc-yellow focus:border-transparent"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-6">
          Menampilkan {filteredProducts.length} dari {products.length} produk
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group h-full">
              <div className="bg-white border border-border rounded-xl overflow-hidden hover:border-dc-yellow transition-all duration-300 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative overflow-hidden bg-secondary aspect-[16/10] group-hover:bg-secondary/80 transition-colors">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Category & Position */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-dc-yellow uppercase tracking-widest">
                      {product.category === "otr" ? "OTR" : "Industrial"}
                    </span>
                    <span className="text-xs text-muted-foreground">{product.position}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-dc-dark mb-1 font-serif">
                    {product.name}
                  </h3>

                  {/* Application */}
                  <p className="text-sm text-muted-foreground mb-4">{product.application}</p>

                  {/* Description */}
                  <p className="text-sm text-foreground mb-4 flex-grow leading-relaxed">
                    {product.description}
                  </p>

                  {/* Expandable Section */}
                  {expandedProduct === product.id && (
                    <div className="mt-4 space-y-4 pt-4 border-t border-border">
                      {/* Sizes */}
                      {product.sizes && product.sizes.length > 0 && (
                        <div>
                          <h4 className="text-xs font-bold text-foreground mb-2 uppercase tracking-wider">Ukuran Tersedia</h4>
                          <div className="flex flex-wrap gap-2">
                            {product.sizes.slice(0, 6).map((size) => (
                              <span
                                key={size}
                                className="text-xs px-2.5 py-1.5 rounded-md bg-dc-yellow/10 text-dc-dark font-mono font-medium"
                              >
                                {size}
                              </span>
                            ))}
                            {product.sizes.length > 6 && (
                              <span className="text-xs px-2.5 py-1.5 text-muted-foreground">
                                +{product.sizes.length - 6} lainnya
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Features */}
                      {product.features && product.features.length > 0 && (
                        <div>
                          <h4 className="text-xs font-bold text-foreground mb-2 uppercase tracking-wider">Fitur</h4>
                          <ul className="text-xs text-foreground space-y-1">
                            {product.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-2">
                                <span className="text-dc-yellow mt-1">•</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Footer */}
                  <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                    <button
                      onClick={() =>
                        setExpandedProduct(expandedProduct === product.id ? null : product.id)
                      }
                      className="flex-1 text-xs font-bold text-dc-dark py-2 hover:text-dc-dark/70 transition-colors"
                    >
                      {expandedProduct === product.id ? "Tampilkan Lebih Sedikit" : "Tampilkan Detail"}
                    </button>
                    <Link
                      href={`/produk/${product.id}`}
                      className="flex-1 flex items-center justify-center gap-1 bg-dc-yellow text-dc-dark rounded-lg px-3 py-2 font-bold text-xs hover:bg-dc-yellow/90 transition-colors group/link"
                    >
                      Lihat Selengkapnya
                      <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">Tidak ada produk yang sesuai</p>
            <button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
              }}
              className="text-dc-dark hover:text-dc-dark/70 font-medium text-sm"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
