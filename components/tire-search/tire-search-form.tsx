"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Search, Check, ArrowRight, Printer, Info, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

// Tire data organized for search
const tireData = {
  categories: [
    { id: "otr", label: "Ban OTR" },
    { id: "industrial", label: "Ban Industri" },
  ],
  industries: [
    { id: "mining", label: "Pertambangan", categories: ["otr"] },
    { id: "construction", label: "Konstruksi", categories: ["otr", "industrial"] },
    { id: "agriculture", label: "Pertanian", categories: ["otr"] },
    { id: "port", label: "Pelabuhan", categories: ["otr", "industrial"] },
    { id: "warehouse", label: "Gudang & Material Handling", categories: ["industrial"] },
  ],
  applications: [
    { id: "earthmover", label: "Earthmover/Loader", industry: "mining", category: "otr" },
    { id: "dump_truck", label: "Dump Truck", industry: "mining", category: "otr" },
    { id: "haulage", label: "Haulage", industry: "mining", category: "otr" },
    { id: "mobile_crane", label: "Mobile Crane", industry: "construction", category: "otr" },
    { id: "skid_steer", label: "Skid Steer", industry: "construction", category: "otr" },
    { id: "forklift", label: "Forklift", industry: "warehouse", category: "industrial" },
    { id: "port_equipment", label: "Port Equipment", industry: "port", category: "industrial" },
    { id: "ground_support", label: "Ground Support Equipment", industry: "port", category: "industrial" },
  ],
  positions: [
    { id: "e2", label: "E-2 (Traction)", categories: ["otr"] },
    { id: "e3", label: "E-3 (Rock)", categories: ["otr"] },
    { id: "e4", label: "E-4 (Rock Deep Tread)", categories: ["otr"] },
    { id: "l3", label: "L-3 (Rock)", categories: ["otr"] },
    { id: "l5", label: "L-5 (Rock Extra Deep)", categories: ["otr"] },
    { id: "ind4", label: "IND-4", categories: ["otr", "industrial"] },
  ],
  products: [
    // OTR Products
    {
      id: "rem2",
      name: "REM-2",
      category: "otr",
      position: "e3",
      application: "earthmover",
      industry: "mining",
      image: "/images/tire-otr.jpg",
      description: "Desain tapak multi-fungsi non-directional untuk penggunaan optimal pada peralatan. Traksi superior di pasir, batu, lumpur dan permukaan lainnya. OEM Certified.",
      features: ["Multi-fungsi non-directional", "OEM Certified", "Retreadable"],
      sizes: ["17.5R25", "20.5R25", "23.5R25", "26.5R25", "29.5R25", "750/65R25", "775/65R29", "875/65R29"],
      pattern: "REM-2",
    },
    {
      id: "rem3",
      name: "REM-3",
      category: "otr",
      position: "ind4",
      application: "skid_steer",
      industry: "construction",
      image: "/images/tire-otr.jpg",
      description: "Desain uni-directional khusus untuk traksi maksimum dalam aplikasi skid loader. Peningkatan umur tapak dengan compound optimal.",
      features: ["Uni-directional design", "Radial design", "Maximum traction"],
      sizes: ["10R16.5", "12R16.5"],
      pattern: "REM-3",
    },
    {
      id: "rem6",
      name: "REM-6",
      category: "otr",
      position: "ind4",
      application: "port_equipment",
      industry: "port",
      image: "/images/tire-otr.jpg",
      description: "Desain tapak rata dan lebar memberikan performa traksi optimal. Compound khusus melawan keausan cepat dan tusukan.",
      features: ["Flat wide tread", "Anti-puncture compound", "Stabilitas tinggi"],
      sizes: ["5.00R8", "6.00R9", "6.50R10", "7.00R12", "7.00R15", "7.50R15", "8.25R15", "225/75R15", "250/70R15", "315/70R15", "10.00R20", "12.00R20", "12.00R24", "14.00R24", "18.00R25"],
      pattern: "REM-6",
    },
    {
      id: "rem8",
      name: "REM-8",
      category: "otr",
      position: "e2",
      application: "mobile_crane",
      industry: "construction",
      image: "/images/tire-otr.jpg",
      description: "Ban mobile crane kecepatan tinggi untuk aplikasi jalan raya dan off-road. Pola tapak universal memberikan traksi meningkat. DOT approved dan OEM Certified.",
      features: ["DOT approved", "OEM Certified", "Highway & off-road"],
      sizes: ["14.00R24", "14.00R25", "385/95R25", "16.00R25", "445/95R25", "20.5R25", "525/80R25"],
      pattern: "REM-8",
    },
    {
      id: "rem9",
      name: "REM-9",
      category: "otr",
      position: "e4",
      application: "haulage",
      industry: "mining",
      image: "/images/tire-otr.jpg",
      description: "Compound khusus untuk menahan aplikasi pertambangan berat. Desain radial OTR memperpanjang umur ban dan mendukung retreadability jangka panjang.",
      features: ["Mining compound", "Deep tread depth", "Non-directional center rib"],
      sizes: ["26.5R25", "29.5R25", "18.00R33", "21.00R33", "24.00R35"],
      pattern: "REM-9",
    },
    {
      id: "rem10",
      name: "REM-10",
      category: "otr",
      position: "e3",
      application: "dump_truck",
      industry: "mining",
      image: "/images/tire-otr.jpg",
      description: "Desain tapak multi-fungsi non-directional untuk penggunaan optimal pada peralatan artikulasi. Performa OTR superior di berbagai jenis medan.",
      features: ["Center block tread", "Even wear", "OEM Certified"],
      sizes: ["14.00R25", "16.00R25", "26.5R25", "29.5R25", "505/95R29", "16.00R29", "17.00R29", "480/95R29"],
      pattern: "REM-10",
    },
    {
      id: "rem12",
      name: "REM-12",
      category: "otr",
      position: "l5",
      application: "earthmover",
      industry: "mining",
      image: "/images/tire-otr.jpg",
      description: "Desain tapak multi-fungsi non-directional dengan traksi superior di pasir, batu, lumpur. Desain blok tengah unik memberikan traksi tambahan dan keausan merata.",
      features: ["Multi-function design", "Smooth ride", "Even wear"],
      sizes: ["17.5R25", "26.5R25", "29.5R25"],
      pattern: "REM-12",
    },
    {
      id: "rem18",
      name: "REM-18",
      category: "otr",
      position: "l5",
      application: "earthmover",
      industry: "mining",
      image: "/images/tire-otr.jpg",
      description: "Tapak lebar untuk stabilitas. Desain tapak directional untuk traksi off-road yang meningkat. Compound anti-cut dan chip memperpanjang umur ban.",
      features: ["Wide footprint", "Directional tread", "Retreadable"],
      sizes: ["35/65R33"],
      pattern: "REM-18",
    },
    {
      id: "rem19",
      name: "REM-19",
      category: "otr",
      position: "l5",
      application: "earthmover",
      industry: "mining",
      image: "/images/tire-otr.jpg",
      description: "Pola tapak non-directional dengan rib tengah memberikan traksi yang ditingkatkan. Tapak lebar untuk stabilitas dan compound anti-cut chip.",
      features: ["Center rib design", "Stability", "Retreadable"],
      sizes: ["20.5R25", "23.5R25", "26.5R25", "29.5R25"],
      pattern: "REM-19",
    },
    {
      id: "dt302",
      name: "DT-302",
      category: "otr",
      position: "e3",
      application: "dump_truck",
      industry: "mining",
      image: "/images/tire-otr.jpg",
      description: "Desain pola besar dengan saturasi pola lebih tinggi dan desain anti-tusuk untuk bagian bawah alur. Kawat baja struktural baru berkekuatan tinggi.",
      features: ["High saturation design", "Anti-puncture", "Heavy load capacity"],
      sizes: ["14.00R25", "16.00R25"],
      pattern: "DT-302",
    },
    {
      id: "dt401",
      name: "DT-401",
      category: "otr",
      position: "e4",
      application: "dump_truck",
      industry: "mining",
      image: "/images/tire-otr.jpg",
      description: "Blok tapak lebih besar, kedalaman alur lebih dalam, dengan rib pembuangan batu anti-tusuk. Compound mining khusus dengan heat buildup rendah dan cut resistance tinggi.",
      features: ["Mining compound", "Stone ejection ribs", "Extended service life"],
      sizes: ["14.00R25", "16.00R25"],
      pattern: "DT-401",
    },
    // Industrial Products
    {
      id: "rem17",
      name: "REM-17",
      category: "industrial",
      position: "ind4",
      application: "port_equipment",
      industry: "port",
      image: "/images/tire-industrial.jpg",
      description: "Tapak rata dan lebar memberikan performa dan keausan optimal. Stabilitas luar biasa dengan gerakan lateral berkurang termasuk aplikasi pelabuhan.",
      features: ["Flat wide tread", "Port applications", "Reduced lateral movement"],
      sizes: ["16.00R25"],
      pattern: "REM-17",
    },
    {
      id: "rem26",
      name: "REM-26",
      category: "industrial",
      position: "ind4",
      application: "ground_support",
      industry: "port",
      image: "/images/tire-industrial.jpg",
      description: "Desain tapak rata, lebar dan terbuka memberikan performa traksi optimal. Compound khusus melawan keausan cepat dan tusukan.",
      features: ["Open tread design", "Anti-puncture", "Wide size range"],
      sizes: ["180/70R8", "6.50R10", "225/75R10", "7.00R15", "225/75R15", "315/70R15", "12.00R20"],
      pattern: "REM-26",
    },
    {
      id: "rem4",
      name: "REM-4",
      category: "industrial",
      position: "ind4",
      application: "ground_support",
      industry: "port",
      image: "/images/tire-industrial.jpg",
      description: "Desain tapak baru memperkuat cengkeraman ban dan meningkatkan traksi. Formula tapak unik memberikan ketahanan aus yang sangat baik dan umur servis lebih panjang.",
      features: ["New tread design", "Excellent wear resistance", "Longer service life"],
      sizes: ["225/65R15"],
      pattern: "REM-4",
    },
    {
      id: "dl30",
      name: "DL-30",
      category: "industrial",
      position: "ind4",
      application: "forklift",
      industry: "warehouse",
      image: "/images/tire-industrial.jpg",
      description: "Ban solid forklift untuk operasi gudang dengan stabilitas tinggi dan daya cengkeram di lantai halus.",
      features: ["Non-marking", "Stabilitas tinggi", "Anti-selip"],
      sizes: ["6.50-10", "7.00-12", "8.25-15", "28x9-15"],
      pattern: "DL-30",
    },
  ],
}

// Extract unique sizes for size search
const allSizes = [...new Set(tireData.products.flatMap((p) => p.sizes))].sort()

// Extract width, aspect ratio, rim diameter for size search
function parseTireSize(size: string) {
  // Handle formats like "295/80R22.5", "12R22.5", "17.5R25", "6.50-10"
  const metricMatch = size.match(/^(\d+)\/(\d+)R([\d.]+)$/)
  if (metricMatch) {
    return { width: metricMatch[1], aspectRatio: metricMatch[2], rimDiameter: metricMatch[3] }
  }
  
  const numericMatch = size.match(/^([\d.]+)R([\d.]+)$/)
  if (numericMatch) {
    return { width: numericMatch[1], aspectRatio: "-", rimDiameter: numericMatch[2] }
  }
  
  const biasMatch = size.match(/^([\d.]+)-([\d.]+)$/)
  if (biasMatch) {
    return { width: biasMatch[1], aspectRatio: "-", rimDiameter: biasMatch[2] }
  }
  
  return null
}

const sizeData = allSizes.map((s) => ({ size: s, ...parseTireSize(s) })).filter((s) => s.width)
const uniqueWidths = [...new Set(sizeData.map((s) => s.width))].sort((a, b) => parseFloat(a!) - parseFloat(b!))
const uniqueRims = [...new Set(sizeData.map((s) => s.rimDiameter))].sort((a, b) => parseFloat(a!) - parseFloat(b!))

// Get unique patterns
const uniquePatterns = [...new Set(tireData.products.map((p) => p.pattern))].sort()

type SearchTab = "aplikasi" | "ukuran" | "pattern"

export function TireSearchForm() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<SearchTab>("aplikasi")
  
  // Application search state
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("")
  const [selectedApplication, setSelectedApplication] = useState("")
  const [selectedPosition, setSelectedPosition] = useState("")
  
  // Size search state
  const [selectedWidth, setSelectedWidth] = useState("")
  const [selectedRim, setSelectedRim] = useState("")
  
  // Pattern search state
  const [selectedPattern, setSelectedPattern] = useState("")
  
  // Search results
  const [searchResults, setSearchResults] = useState<typeof tireData.products>([])
  const [hasSearched, setHasSearched] = useState(false)

  // Handle URL parameters on mount
  useEffect(() => {
    const kategori = searchParams.get("kategori")
    const industri = searchParams.get("industri")
    const aplikasi = searchParams.get("aplikasi")
    
    if (kategori) {
      setSelectedCategory(kategori)
      if (industri) setSelectedIndustry(industri)
      if (aplikasi) setSelectedApplication(aplikasi)
      
      // Auto-search with URL params
      setTimeout(() => {
        let results = [...tireData.products]
        if (kategori) results = results.filter((p) => p.category === kategori)
        if (industri) results = results.filter((p) => p.industry === industri)
        if (aplikasi) results = results.filter((p) => p.application === aplikasi)
        setSearchResults(results)
        setHasSearched(true)
      }, 100)
    }
  }, [searchParams])

  // Filtered options based on selections
  const filteredIndustries = useMemo(() => {
    if (!selectedCategory) return tireData.industries
    return tireData.industries.filter((i) => i.categories.includes(selectedCategory))
  }, [selectedCategory])

  const filteredApplications = useMemo(() => {
    if (!selectedIndustry) return tireData.applications
    return tireData.applications.filter((a) => a.industry === selectedIndustry)
  }, [selectedIndustry])

  const filteredPositions = useMemo(() => {
    if (!selectedCategory) return tireData.positions
    return tireData.positions.filter((p) => p.categories.includes(selectedCategory))
  }, [selectedCategory])

  // Handle category change
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value)
    setSelectedIndustry("")
    setSelectedApplication("")
    setSelectedPosition("")
  }

  // Handle industry change
  const handleIndustryChange = (value: string) => {
    setSelectedIndustry(value)
    setSelectedApplication("")
  }

  // Search by application
  const searchByApplication = () => {
    let results = [...tireData.products]
    
    if (selectedCategory) {
      results = results.filter((p) => p.category === selectedCategory)
    }
    if (selectedIndustry) {
      results = results.filter((p) => p.industry === selectedIndustry)
    }
    if (selectedApplication) {
      results = results.filter((p) => p.application === selectedApplication)
    }
    if (selectedPosition) {
      results = results.filter((p) => p.position === selectedPosition)
    }
    
    setSearchResults(results)
    setHasSearched(true)
  }

  // Search by size
  const searchBySize = () => {
    let results = [...tireData.products]
    
    if (selectedWidth || selectedRim) {
      results = results.filter((p) => {
        return p.sizes.some((size) => {
          const parsed = parseTireSize(size)
          if (!parsed) return false
          
          const matchWidth = !selectedWidth || parsed.width === selectedWidth
          const matchRim = !selectedRim || parsed.rimDiameter === selectedRim
          
          return matchWidth && matchRim
        })
      })
    }
    
    setSearchResults(results)
    setHasSearched(true)
  }

  // Search by pattern
  const searchByPattern = () => {
    let results = [...tireData.products]
    
    if (selectedPattern) {
      results = results.filter((p) => p.pattern === selectedPattern)
    }
    
    setSearchResults(results)
    setHasSearched(true)
  }

  // Reset search
  const resetSearch = () => {
    setSelectedCategory("")
    setSelectedIndustry("")
    setSelectedApplication("")
    setSelectedPosition("")
    setSelectedWidth("")
    setSelectedRim("")
    setSelectedPattern("")
    setSearchResults([])
    setHasSearched(false)
  }

  // Handle print
  const handlePrint = () => {
    window.print()
  }

  return (
    <section className="py-8 md:py-12 bg-dc-body">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Print button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors print:hidden"
          >
            <Printer className="h-4 w-4" />
            Cetak
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Search Form */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex border-b border-border mb-6">
              <button
                onClick={() => { setActiveTab("aplikasi"); resetSearch() }}
                className={cn(
                  "px-6 py-3 text-sm font-semibold border-b-2 transition-colors",
                  activeTab === "aplikasi"
                    ? "border-dc-yellow text-dc-dark bg-white"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                Aplikasi
              </button>
              <button
                onClick={() => { setActiveTab("ukuran"); resetSearch() }}
                className={cn(
                  "px-6 py-3 text-sm font-semibold border-b-2 transition-colors",
                  activeTab === "ukuran"
                    ? "border-dc-yellow text-dc-dark bg-white"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                Ukuran
              </button>
              <button
                onClick={() => { setActiveTab("pattern"); resetSearch() }}
                className={cn(
                  "px-6 py-3 text-sm font-semibold border-b-2 transition-colors",
                  activeTab === "pattern"
                    ? "border-dc-yellow text-dc-dark bg-white"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                Pattern
              </button>
            </div>

            {/* Search Form Content */}
            <div className="bg-white rounded-xl border border-border p-6">
              {activeTab === "aplikasi" && (
                <div className="space-y-4">
                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Kategori Produk
                    </label>
                    <div className="relative">
                      <select
                        value={selectedCategory}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-dc-yellow/40 focus:border-dc-yellow"
                      >
                        <option value="">Pilih Kategori</option>
                        {tireData.categories.map((cat) => (
                          <option key={cat.id} value={cat.id}>{cat.label}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>

                  {/* Industry */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Industri
                    </label>
                    <div className="relative">
                      <select
                        value={selectedIndustry}
                        onChange={(e) => handleIndustryChange(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-dc-yellow/40 focus:border-dc-yellow"
                      >
                        <option value="">Pilih Industri</option>
                        {filteredIndustries.map((ind) => (
                          <option key={ind.id} value={ind.id}>{ind.label}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>

                  {/* Application */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Aplikasi
                    </label>
                    <div className="relative">
                      <select
                        value={selectedApplication}
                        onChange={(e) => setSelectedApplication(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-dc-yellow/40 focus:border-dc-yellow"
                      >
                        <option value="">Pilih Aplikasi</option>
                        {filteredApplications.map((app) => (
                          <option key={app.id} value={app.id}>{app.label}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>

                  {/* Position */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Posisi
                    </label>
                    <div className="relative">
                      <select
                        value={selectedPosition}
                        onChange={(e) => setSelectedPosition(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-dc-yellow/40 focus:border-dc-yellow"
                      >
                        <option value="">Pilih Posisi</option>
                        {filteredPositions.map((pos) => (
                          <option key={pos.id} value={pos.id}>{pos.label}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>

                  <button
                    onClick={searchByApplication}
                    className="w-full md:w-auto px-8 py-3 bg-dc-yellow hover:bg-dc-yellow-dark text-dc-dark font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Search className="h-4 w-4" />
                    Cari
                  </button>
                </div>
              )}

              {activeTab === "ukuran" && (
                <div className="space-y-4">
                  {/* Width */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Lebar Ban
                    </label>
                    <div className="relative">
                      <select
                        value={selectedWidth}
                        onChange={(e) => setSelectedWidth(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-dc-yellow/40 focus:border-dc-yellow"
                      >
                        <option value="">Pilih Lebar</option>
                        {uniqueWidths.map((w) => (
                          <option key={w} value={w}>{w}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>

                  {/* Rim Diameter */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Diameter Velg
                    </label>
                    <div className="relative">
                      <select
                        value={selectedRim}
                        onChange={(e) => setSelectedRim(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-dc-yellow/40 focus:border-dc-yellow"
                      >
                        <option value="">Pilih Diameter Velg</option>
                        {uniqueRims.map((r) => (
                          <option key={r} value={r}>R{r}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>

                  <button
                    onClick={searchBySize}
                    className="w-full md:w-auto px-8 py-3 bg-dc-yellow hover:bg-dc-yellow-dark text-dc-dark font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Search className="h-4 w-4" />
                    Cari
                  </button>
                </div>
              )}

              {activeTab === "pattern" && (
                <div className="space-y-4">
                  {/* Pattern */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nama Pattern
                    </label>
                    <div className="relative">
                      <select
                        value={selectedPattern}
                        onChange={(e) => setSelectedPattern(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-dc-yellow/40 focus:border-dc-yellow"
                      >
                        <option value="">Pilih Pattern</option>
                        {uniquePatterns.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>

                  <button
                    onClick={searchByPattern}
                    className="w-full md:w-auto px-8 py-3 bg-dc-yellow hover:bg-dc-yellow-dark text-dc-dark font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Search className="h-4 w-4" />
                    Cari
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Tire Size Guide */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                <Info className="h-4 w-4 text-dc-yellow" />
                Cara Membaca Ukuran Ban
              </h3>
              <div className="relative aspect-square mb-4 bg-muted rounded-lg overflow-hidden">
                <Image
                  src="/images/tire-tbr.jpg"
                  alt="Panduan ukuran ban"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-dc-dark/60 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <div className="text-2xl font-bold font-mono mb-2">295/80R22.5</div>
                    <div className="text-sm space-y-1">
                      <p><span className="text-dc-yellow font-bold">295</span> = Lebar (mm)</p>
                      <p><span className="text-dc-yellow font-bold">80</span> = Aspek Rasio (%)</p>
                      <p><span className="text-dc-yellow font-bold">R</span> = Radial</p>
                      <p><span className="text-dc-yellow font-bold">22.5</span> = Diameter Velg (inch)</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">PENTING:</strong> Periksa terlebih dahulu panduan kendaraan Anda, 
                atau konsultasikan dengan dealer terdekat saat Anda memilih ukuran ban untuk kendaraan Anda.
              </p>
            </div>
          </div>
        </div>

        {/* Search Results */}
        {hasSearched && (
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">
                Hasil Pencarian ({searchResults.length} produk)
              </h2>
              {searchResults.length > 0 && (
                <button
                  onClick={resetSearch}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Reset Pencarian
                </button>
              )}
            </div>

            {searchResults.length === 0 ? (
              <div className="bg-white rounded-xl border border-border p-12 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Tidak Ada Hasil</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Tidak ada ban yang sesuai dengan kriteria pencarian Anda. 
                  Silakan coba ubah filter atau hubungi kami untuk bantuan lebih lanjut.
                </p>
                <Link
                  href="/kontak"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-dc-yellow hover:bg-dc-yellow-dark text-dc-dark font-bold rounded-lg transition-colors"
                >
                  Hubungi Kami
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-xl overflow-hidden border border-border hover:border-dc-yellow/40 transition-all duration-300 hover:shadow-lg"
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
                      <div className="absolute top-3 left-3">
                        <span className="text-xs px-2.5 py-1 rounded-full bg-dc-yellow text-dc-dark font-bold">
                          {tireData.categories.find((c) => c.id === product.category)?.label}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <h3 className="text-white font-bold text-2xl font-serif">{product.name}</h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
                        <span>Pattern: <strong className="text-foreground">{product.pattern}</strong></span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-col gap-1.5 mb-4">
                        {product.features.slice(0, 2).map((f) => (
                          <div key={f} className="flex items-center gap-2">
                            <Check className="h-3.5 w-3.5 text-dc-yellow-dark shrink-0" />
                            <span className="text-foreground text-sm">{f}</span>
                          </div>
                        ))}
                      </div>

                      {/* Sizes preview */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {product.sizes.slice(0, 3).map((size) => (
                          <span
                            key={size}
                            className="text-xs px-2 py-1 rounded bg-dc-yellow/10 text-dc-dark font-mono"
                          >
                            {size}
                          </span>
                        ))}
                        {product.sizes.length > 3 && (
                          <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
                            +{product.sizes.length - 3} ukuran lainnya
                          </span>
                        )}
                      </div>

                      <Link
                        href={`/produk#${product.category}`}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-dc-dark hover:text-dc-dark/70 transition-colors"
                      >
                        Lihat Detail
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
