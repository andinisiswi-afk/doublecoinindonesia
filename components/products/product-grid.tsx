"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, Filter, ArrowRight, Check } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "Semua Produk" },
  { id: "otr", label: "Ban OTR" },
  { id: "industrial", label: "Ban Industri" },
]

interface ProductSpecification {
  size: string
  speed: number
  od: number
  td: number
  sw: string
  rim: string
  load: number
  pressure: number
  loadIndex: string
}

interface Product {
  id: string
  name: string
  category: string
  position: string
  application: string
  image: string
  description: string
  features: string[]
  sizes: string[]
  specifications?: ProductSpecification[]
}

const products: Product[] = [
  // OTR Products
  {
    id: "rem1",
    name: "REM-1",
    category: "otr",
    position: "E-3/L-3",
    application: "Earthmover/Loader",
    image: "/images/tire-otr.jpg",
    description: "Desain tapak multi-fungsi non-directional untuk aplikasi pertambangan dan konstruksi. OEM Certified dengan retreadability superior.",
    features: ["Multi-fungsi non-directional", "OEM Certified", "Retreadable"],
    sizes: ["17.5R25", "20.5R25", "23.5R25", "26.5R25", "29.5R25"],
  },
  {
    id: "rem2",
    name: "REM-2 / REM-2N",
    category: "otr",
    position: "E-3/L-3",
    application: "Earthmover/Loader",
    image: "/images/tire-otr.jpg",
    description: "Desain tapak multi-fungsi non-directional untuk penggunaan optimal pada peralatan. Traksi superior di pasir, batu, lumpur dan permukaan lainnya. OEM Certified.",
    features: ["Multi-fungsi non-directional", "OEM Certified", "Retreadable"],
    sizes: ["17.5R25", "20.5R25", "23.5R25", "26.5R25", "29.5R25"],
  },
  {
    id: "rem3",
    name: "REM-3",
    category: "otr",
    position: "E-3/L-3",
    application: "Earthmover/Loader",
    image: "/images/tire-otr.jpg",
    description: "Desain uni-directional untuk traksi maksimum dan stabilitas. Peningkatan umur tapak dengan compound optimal di aplikasi berat.",
    features: ["Uni-directional design", "Radial design", "Maximum traction"],
    sizes: ["17.5R25", "20.5R25", "23.5R25"],
  },
  {
    id: "rem4",
    name: "REM-4",
    category: "otr",
    position: "E-4",
    application: "Earthmover Heavy Duty",
    image: "/images/tire-otr.jpg",
    description: "Desain tapak baru memperkuat cengkeraman ban dan meningkatkan traksi di aplikasi pertambangan berat. Formula tapak unik memberikan ketahanan aus superior.",
    features: ["Heavy duty design", "Excellent wear resistance", "Mining compound"],
    sizes: ["26.5R25", "29.5R25"],
  },
  {
    id: "rem6",
    name: "REM-6",
    category: "otr",
    position: "IND-4",
    application: "Industrial/Port/Forklift",
    image: "/images/tire-otr.jpg",
    description: "Desain tapak rata dan lebar memberikan performa traksi optimal. Compound khusus melawan keausan cepat dan tusukan di aplikasi industrial.",
    features: ["Flat wide tread", "Anti-puncture compound", "Stabilitas tinggi"],
    sizes: ["6.50R10", "7.00R12", "7.00R15", "8.25R15", "12.00R20"],
  },
  {
    id: "rem7",
    name: "REM-7",
    category: "otr",
    position: "E-4",
    application: "Dump Truck Haulage",
    image: "/images/tire-otr.jpg",
    description: "Compound khusus untuk menahan aplikasi pertambangan berat. Desain radial memperpanjang umur ban dengan deep tread depth optimal.",
    features: ["Mining compound", "Deep tread depth", "Non-directional center rib"],
    sizes: ["18.00R33", "21.00R33", "24.00R35"],
  },
  {
    id: "rem8",
    name: "REM-8",
    category: "otr",
    position: "E-2",
    application: "Mobile Crane",
    image: "/images/tire-otr.jpg",
    description: "Ban mobile crane kecepatan tinggi untuk aplikasi jalan raya dan off-road. Pola tapak universal memberikan traksi meningkat. DOT approved dan OEM Certified.",
    features: ["DOT approved", "OEM Certified", "Highway & off-road"],
    sizes: ["14.00R24", "14.00R25", "16.00R25", "20.5R25"],
  },
  {
    id: "rem82",
    name: "REM-82",
    category: "otr",
    position: "E-2",
    application: "Mobile Crane Premium",
    image: "/images/tire-otr.jpg",
    description: "Ban mobile crane premium dengan compound khusus untuk stabilitas maksimal di aplikasi jalan raya dan off-road. Enhanced durability dan cut resistance.",
    features: ["Premium compound", "Enhanced durability", "Cut resistant"],
    sizes: ["14.00R24", "14.00R25"],
  },
  {
    id: "rem9",
    name: "REM-9",
    category: "otr",
    position: "E-4",
    application: "Dump Truck Mining",
    image: "/images/tire-otr.jpg",
    description: "Compound khusus untuk menahan aplikasi pertambangan berat dengan deep tread depth. Desain radial OTR memperpanjang umur ban dan mendukung retreadability.",
    features: ["Mining compound", "Deep tread depth", "Extended service life"],
    sizes: ["26.5R25", "29.5R25", "18.00R33", "21.00R33"],
  },
  {
    id: "rem10",
    name: "REM-10 / REM-10PRO",
    category: "otr",
    position: "E-3",
    application: "Dump Truck",
    image: "/images/tire-otr.jpg",
    description: "Desain tapak multi-fungsi non-directional untuk penggunaan optimal pada dump truck. Performa OTR superior di berbagai jenis medan dengan OEM Certification.",
    features: ["Center block tread", "Even wear", "OEM Certified"],
    sizes: ["14.00R25", "16.00R25", "26.5R25", "29.5R25"],
  },
  {
    id: "rem12",
    name: "REM-12",
    category: "otr",
    position: "L-5",
    application: "Loader",
    image: "/images/tire-otr.jpg",
    description: "Desain tapak multi-fungsi non-directional dengan traksi superior di pasir, batu, lumpur. Desain blok tengah unik memberikan traksi tambahan dan keausan merata.",
    features: ["Multi-function design", "Smooth ride", "Even wear"],
    sizes: ["17.5R25", "26.5R25", "29.5R25"],
  },
  {
    id: "rem18",
    name: "REM-18",
    category: "otr",
    position: "L-5",
    application: "Loader",
    image: "/images/tire-otr.jpg",
    description: "Tapak lebar untuk stabilitas maksimal. Desain tapak directional untuk traksi off-road yang meningkat. Compound anti-cut dan chip memperpanjang umur ban.",
    features: ["Wide footprint", "Directional tread", "Retreadable"],
    sizes: ["35/65R33"],
  },
  {
    id: "rem19",
    name: "REM-19",
    category: "otr",
    position: "L-5",
    application: "Loader",
    image: "/images/tire-otr.jpg",
    description: "Pola tapak non-directional dengan rib tengah memberikan traksi yang ditingkatkan. Tapak lebar untuk stabilitas dan compound anti-cut chip.",
    features: ["Center rib design", "Stability", "Retreadable"],
    sizes: ["20.5R25", "23.5R25", "26.5R25", "29.5R25"],
  },
  {
    id: "rem21",
    name: "REM-21+",
    category: "otr",
    position: "L-3",
    application: "Loader Performance",
    image: "/images/tire-otr.jpg",
    description: "Generasi terbaru loader tire dengan compound enhanced dan tread design yang optimal. Performa traksi superior dengan umur ban yang lebih panjang.",
    features: ["Enhanced compound", "Improved traction", "Longer lifespan"],
    sizes: ["17.5R25", "20.5R25", "23.5R25"],
  },
  {
    id: "rem29",
    name: "REM-29",
    category: "otr",
    position: "E-4/L-4",
    application: "Articulated Dump Truck",
    image: "/images/tire-otr.jpg",
    description: "Ban untuk dump truck artikulasi dengan desain multi-fungsi. Traksi superior dan stabilitas di medan berat dengan compound mining.",
    features: ["Multi-functional design", "Mining compound", "Articulated truck ready"],
    sizes: ["23.5R25", "26.5R25", "29.5R25"],
  },
  {
    id: "rem17",
    name: "REM-17",
    category: "industrial",
    position: "IND-4",
    application: "Port Equipment",
    image: "/images/tire-industrial.jpg",
    description: "Tapak rata dan lebar memberikan performa dan keausan optimal. Stabilitas luar biasa dengan gerakan lateral berkurang untuk aplikasi pelabuhan.",
    features: ["Flat wide tread", "Port applications", "Reduced lateral movement"],
    sizes: ["16.00R25"],
  },
  {
    id: "rem26",
    name: "REM-26",
    category: "industrial",
    position: "IND-4",
    application: "Ground Support Equipment",
    image: "/images/tire-industrial.jpg",
    description: "Desain tapak rata, lebar dan terbuka memberikan performa traksi optimal. Compound khusus melawan keausan cepat dan tusukan di aplikasi GSE.",
    features: ["Open tread design", "Anti-puncture", "Wide size range"],
    sizes: ["6.50R10", "7.00R15", "12.00R20"],
  },
  {
    id: "dt301",
    name: "DT-301 / DT-301 PRO",
    category: "otr",
    position: "E-3",
    application: "Dump Truck",
    image: "/images/tire-otr.jpg",
    description: "Desain pola dengan saturasi tinggi dan design anti-tusuk untuk durabilitas maksimal. Kawat baja struktural berkekuatan tinggi untuk load carrying capacity superior.",
    features: ["High saturation design", "Anti-puncture", "Heavy load capacity"],
    sizes: ["14.00R25", "16.00R25"],
  },
  {
    id: "dt302",
    name: "DT-302 / DT-302 MAX",
    category: "otr",
    position: "E-3",
    application: "Dump Truck Standard",
    image: "/images/tire-otr.jpg",
    description: "Desain pola besar dengan saturasi pola lebih tinggi dan design anti-tusuk untuk bagian bawah alur. Kawat baja struktural baru berkekuatan tinggi.",
    features: ["High saturation design", "Anti-puncture", "Heavy load capacity"],
    sizes: ["14.00R25", "16.00R25"],
  },
  {
    id: "dt303",
    name: "DT-303",
    category: "otr",
    position: "E-4",
    application: "Dump Truck Heavy",
    image: "/images/tire-otr.jpg",
    description: "Ban dump truck untuk aplikasi berat dengan pola blok besar. Anti-tusuk design dan compound khusus dengan heat buildup rendah.",
    features: ["Heavy duty design", "Stone ejection ribs", "Heat resistant"],
    sizes: ["14.00R25", "16.00R25"],
  },
  {
    id: "dt401",
    name: "DT-401",
    category: "otr",
    position: "E-4",
    application: "Dump Truck Mining",
    image: "/images/tire-otr.jpg",
    description: "Blok tapak lebih besar, kedalaman alur lebih dalam, dengan rib pembuangan batu anti-tusuk. Compound mining khusus dengan heat buildup rendah dan cut resistance tinggi.",
    features: ["Mining compound", "Stone ejection ribs", "Extended service life"],
    sizes: ["14.00R25", "16.00R25"],
  },
  {
    id: "rem41",
    name: "REM-41",
    category: "otr",
    position: "E-3/L-3",
    application: "Articulated Dump Truck",
    image: "/images/tire-otr.jpg",
    description: "Ban untuk articulated dump truck dengan design multi-fungsi. Traksi optimal di berbagai medan dengan compound yang seimbang untuk earthmover dan loader.",
    features: ["Articulated truck design", "Multi-functional", "Optimal traction"],
    sizes: ["20.5R25", "23.5R25", "26.5R25"],
  },
  {
    id: "rem42",
    name: "REM-42",
    category: "otr",
    position: "L-4",
    application: "Wheel Loader Premium",
    image: "/images/tire-otr.jpg",
    description: "Ban wheel loader generasi terbaru dengan compound premium dan design tread yang advanced. Performa superior dengan umur ban extended.",
    features: ["Premium compound", "Advanced tread design", "Extended service"],
    sizes: ["17.5R25", "20.5R25", "23.5R25"],
  },
]

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null)

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory
    const matchesSearch =
      searchQuery === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.position.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="py-12 md:py-20 bg-dc-body">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Filters */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
                  activeCategory === cat.id
                    ? "bg-dc-yellow text-dc-dark"
                    : "bg-card text-muted-foreground border border-border hover:border-dc-yellow/40"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari produk..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-dc-yellow/40 focus:border-dc-yellow transition-colors"
            />
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center gap-2 mb-6">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground text-sm">
            Menampilkan {filtered.length} produk
          </span>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              id={product.category}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-dc-yellow/40 transition-all duration-300 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dc-dark/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-dc-yellow text-dc-dark font-bold">
                    {categories.find((c) => c.id === product.category)?.label}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <h3 className="text-white font-bold text-2xl font-serif">{product.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
                  <span>Posisi: <strong className="text-foreground">{product.position}</strong></span>
                  <span>Aplikasi: <strong className="text-foreground">{product.application}</strong></span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-col gap-1.5 mb-4">
                  {product.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-dc-yellow-dark shrink-0" />
                      <span className="text-foreground text-sm">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Expandable sizes */}
                <button
                  onClick={() =>
                    setExpandedProduct(expandedProduct === product.id ? null : product.id)
                  }
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-dc-dark hover:text-dc-dark/70 transition-colors"
                >
                  {expandedProduct === product.id ? "Tutup" : `Lihat Ukuran (${product.sizes.length})`}
                  <ArrowRight
                    className={cn(
                      "h-4 w-4 transition-transform",
                      expandedProduct === product.id ? "rotate-90" : ""
                    )}
                  />
                </button>

                {expandedProduct === product.id && (
                  <div className="mt-4 space-y-4">
                    {/* Sizes */}
                    <div>
                      <h4 className="text-xs font-bold text-foreground mb-2 uppercase tracking-wider">Ukuran Tersedia</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size) => (
                          <span
                            key={size}
                            className="text-xs px-3 py-1.5 rounded-md bg-dc-yellow/10 text-dc-dark font-mono font-medium"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technical Specifications Table */}
                    {product.specifications && product.specifications.length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold text-foreground mb-2 uppercase tracking-wider">Spesifikasi Teknis</h4>
                        <div className="overflow-x-auto rounded-lg border border-border bg-secondary/30">
                          <table className="w-full text-xs">
                            <thead className="bg-secondary border-b border-border">
                              <tr>
                                <th className="px-2 py-2 text-left font-bold text-foreground">Ukuran</th>
                                <th className="px-2 py-2 text-left font-bold text-foreground">Kecepatan (km/h)</th>
                                <th className="px-2 py-2 text-left font-bold text-foreground">OD (mm)</th>
                                <th className="px-2 py-2 text-left font-bold text-foreground">TD (mm)</th>
                                <th className="px-2 py-2 text-left font-bold text-foreground">Beban (kg)</th>
                                <th className="px-2 py-2 text-left font-bold text-foreground">Tekanan (kPa)</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                              {product.specifications.map((spec, idx) => (
                                <tr key={idx} className="hover:bg-secondary/50">
                                  <td className="px-2 py-2 font-mono font-semibold text-foreground">{spec.size}</td>
                                  <td className="px-2 py-2 text-foreground">{spec.speed}</td>
                                  <td className="px-2 py-2 text-foreground">{spec.od}</td>
                                  <td className="px-2 py-2 text-foreground">{spec.td}</td>
                                  <td className="px-2 py-2 text-foreground">{spec.load}</td>
                                  <td className="px-2 py-2 text-foreground">{spec.pressure}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Tidak ada produk ditemukan. Coba ubah filter atau kata kunci pencarian Anda.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
