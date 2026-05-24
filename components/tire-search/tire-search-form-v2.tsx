"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, ChevronDown, Filter } from "lucide-react"
import { cn } from "@/lib/utils"
import { products } from "@/components/products/product-data"

interface FilterState {
  category: string
  industry: string
  application: string
  size: string
  diameter: string
}

export function TireSearchFormV2() {
  const [filters, setFilters] = useState<FilterState>({
    category: "",
    industry: "",
    application: "",
    size: "",
    diameter: "",
  })
  const [searchTerm, setSearchTerm] = useState("")
  const [hasSearched, setHasSearched] = useState(false)

  // Extract unique values for filters
  const categories = useMemo(() => {
    const cats = [...new Set(products.map((p) => p.category))]
    return [
      { id: "", label: "Semua Kategori" },
      ...cats.map((cat) => ({
        id: cat,
        label: cat === "otr" ? "Ban OTR" : "Ban Industri",
      })),
    ]
  }, [])

  const industries = useMemo(() => {
    const inds = [...new Set(products.map((p) => p.application))].filter(Boolean)
    return [
      { id: "", label: "Semua Industri" },
      ...inds.map((ind) => ({ id: ind, label: ind })),
    ]
  }, [])

  const applications = useMemo(() => {
    const apps = [...new Set(products.map((p) => p.application))].filter(Boolean)
    return [
      { id: "", label: "Semua Aplikasi" },
      ...apps.map((app) => ({ id: app, label: app })),
    ]
  }, [])

  const sizes = useMemo(() => {
    const allSizes = new Set<string>()
    products.forEach((p) => {
      p.sizes?.forEach((size) => allSizes.add(size))
    })
    return [
      { id: "", label: "Semua Ukuran" },
      ...Array.from(allSizes).sort().map((size) => ({ id: size, label: size })),
    ]
  }, [])

  const diameters = useMemo(() => {
    const allDiameters = new Set<string>()
    products.forEach((p) => {
      p.specifications?.forEach((spec) => {
        if (spec.od) allDiameters.add(spec.od.toString())
      })
    })
    return [
      { id: "", label: "Semua OD" },
      ...Array.from(allDiameters).sort((a, b) => parseInt(a) - parseInt(b)).map((od) => ({ id: od, label: `${od}mm` })),
    ]
  }, [])

  // Filter products
  const filteredProducts = useMemo(() => {
    let results = [...products]

    if (filters.category) {
      results = results.filter((p) => p.category === filters.category)
    }
    if (filters.application) {
      results = results.filter((p) => p.application === filters.application)
    }
    if (filters.size) {
      results = results.filter((p) => p.sizes?.includes(filters.size))
    }
    if (filters.diameter) {
      results = results.filter((p) =>
        p.specifications?.some((spec) => spec.od.toString() === filters.diameter)
      )
    }
    if (searchTerm) {
      results = results.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    return results
  }, [filters, searchTerm])

  const handleSearch = () => {
    setHasSearched(true)
  }

  const handleReset = () => {
    setFilters({ category: "", industry: "", application: "", size: "", diameter: "" })
    setSearchTerm("")
    setHasSearched(false)
  }

  return (
    <section className="py-8 md:py-12 bg-dc-body">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Search Bar with Filters */}
        <div className="bg-white rounded-xl border border-border shadow-sm p-6 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Search className="h-5 w-5 text-dc-yellow" />
            Pencarian Ban
          </h2>

          {/* Main Search Input */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Cari ban berdasarkan nama atau deskripsi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-dc-yellow"
            />
          </div>

          {/* Filters Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            {/* Category */}
            <div>
              <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
                Kategori
              </label>
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-dc-yellow bg-white"
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Industry */}
            <div>
              <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
                Industri
              </label>
              <select
                value={filters.industry}
                onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-dc-yellow bg-white"
              >
                {industries.map((ind) => (
                  <option key={ind.id} value={ind.id}>
                    {ind.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Application */}
            <div>
              <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
                Aplikasi
              </label>
              <select
                value={filters.application}
                onChange={(e) => setFilters({ ...filters, application: e.target.value })}
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-dc-yellow bg-white"
              >
                {applications.map((app) => (
                  <option key={app.id} value={app.id}>
                    {app.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Size */}
            <div>
              <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
                Ukuran
              </label>
              <select
                value={filters.size}
                onChange={(e) => setFilters({ ...filters, size: e.target.value })}
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-dc-yellow bg-white"
              >
                {sizes.map((size) => (
                  <option key={size.id} value={size.id}>
                    {size.label}
                  </option>
                ))}
              </select>
            </div>

            {/* OD/Diameter */}
            <div>
              <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
                OD (Diameter)
              </label>
              <select
                value={filters.diameter}
                onChange={(e) => setFilters({ ...filters, diameter: e.target.value })}
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-dc-yellow bg-white"
              >
                {diameters.map((od) => (
                  <option key={od.id} value={od.id}>
                    {od.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleSearch}
              className="flex-1 sm:flex-none bg-dc-yellow hover:bg-dc-yellow/90 text-dc-dark font-bold py-2.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Search className="h-4 w-4" />
              Cari
            </button>
            <button
              onClick={handleReset}
              className="flex-1 sm:flex-none border border-border hover:bg-secondary text-foreground font-semibold py-2.5 px-6 rounded-lg transition-colors"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Search Results */}
        {hasSearched && (
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              Hasil Pencarian: <span className="text-dc-yellow">{filteredProducts.length} produk</span>
            </h3>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/produk/${product.id}`}
                    className="group bg-white rounded-xl border border-border hover:border-dc-yellow overflow-hidden transition-all hover:shadow-lg"
                  >
                    <div className="relative h-48 bg-secondary">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-foreground text-lg mb-2 group-hover:text-dc-yellow transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="mb-3">
                        <p className="text-xs font-semibold text-muted-foreground mb-2">Ukuran tersedia:</p>
                        <div className="flex flex-wrap gap-1">
                          {product.sizes?.slice(0, 3).map((size) => (
                            <span key={size} className="text-xs bg-dc-yellow/10 text-dc-dark px-2 py-1 rounded">
                              {size}
                            </span>
                          ))}
                          {(product.sizes?.length ?? 0) > 3 && (
                            <span className="text-xs text-muted-foreground px-2 py-1">+{(product.sizes?.length ?? 0) - 3}</span>
                          )}
                        </div>
                      </div>
                      <button className="w-full bg-dc-yellow hover:bg-dc-yellow/90 text-dc-dark font-bold py-2 px-4 rounded-lg transition-colors text-sm">
                        Lihat Selengkapnya →
                      </button>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-secondary/30 rounded-xl">
                <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-foreground font-semibold mb-2">Tidak ada produk yang cocok</p>
                <p className="text-muted-foreground text-sm">Coba ubah filter pencarian Anda</p>
              </div>
            )}
          </div>
        )}

        {!hasSearched && (
          <div className="text-center py-12 text-muted-foreground">
            <Search className="h-12 w-12 mx-auto mb-4 opacity-30" />
            <p>Gunakan filter di atas untuk mencari ban yang Anda inginkan</p>
          </div>
        )}
      </div>
    </section>
  )
}
