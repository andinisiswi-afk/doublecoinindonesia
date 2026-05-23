"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { Search, ChevronDown, Mountain, Factory, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  { id: "otr", label: "Ban OTR", shortLabel: "OTR", icon: Mountain },
  { id: "industrial", label: "Ban Industri", shortLabel: "Industrial", icon: Factory },
]

const industries = [
  { id: "mining", label: "Pertambangan", categories: ["otr"] },
  { id: "construction", label: "Konstruksi", categories: ["otr", "industrial"] },
  { id: "agriculture", label: "Pertanian", categories: ["otr"] },
  { id: "port", label: "Pelabuhan", categories: ["otr", "industrial"] },
  { id: "warehouse", label: "Gudang & Material Handling", categories: ["industrial"] },
]

const applications = [
  { id: "earthmover", label: "Earthmover/Loader", industry: "mining", category: "otr" },
  { id: "dump_truck", label: "Dump Truck", industry: "mining", category: "otr" },
  { id: "haulage", label: "Haulage", industry: "mining", category: "otr" },
  { id: "mobile_crane", label: "Mobile Crane", industry: "construction", category: "otr" },
  { id: "skid_steer", label: "Skid Steer", industry: "construction", category: "otr" },
  { id: "forklift", label: "Forklift", industry: "warehouse", category: "industrial" },
  { id: "port_equipment", label: "Port Equipment", industry: "port", category: "industrial" },
  { id: "ground_support", label: "Ground Support Equipment", industry: "port", category: "industrial" },
]

export function TireSearchWidget() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("")
  const [selectedApplication, setSelectedApplication] = useState("")

  // Filtered options based on selections
  const filteredIndustries = useMemo(() => {
    if (!selectedCategory) return industries
    return industries.filter((i) => i.categories.includes(selectedCategory))
  }, [selectedCategory])

  const filteredApplications = useMemo(() => {
    let filtered = applications
    if (selectedCategory) {
      filtered = filtered.filter((a) => a.category === selectedCategory)
    }
    if (selectedIndustry) {
      filtered = filtered.filter((a) => a.industry === selectedIndustry)
    }
    return filtered
  }, [selectedCategory, selectedIndustry])

  const handleSearch = () => {
    const params = new URLSearchParams()
    
    if (selectedCategory) params.set("kategori", selectedCategory)
    if (selectedIndustry) params.set("industri", selectedIndustry)
    if (selectedApplication) params.set("aplikasi", selectedApplication)
    
    router.push(`/pencarian-ban?${params.toString()}`)
  }

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setSelectedIndustry("")
    setSelectedApplication("")
  }

  const handleIndustryChange = (industryId: string) => {
    setSelectedIndustry(industryId)
    setSelectedApplication("")
  }

  const isSearchDisabled = !selectedCategory

  return (
    <section className="relative pt-8 z-10 pb-12 bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="bg-secondary rounded-xl shadow-2xl overflow-hidden border border-border">
          
          {/* Grey Header */}
          <div className="bg-secondary border-b border-border px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-dc-yellow flex items-center justify-center shadow-sm">
                <Search className="h-5 w-5 text-dc-dark" />
              </div>
              <div>
                <h2 className="text-dc-dark font-bold text-lg">Pencarian Ban</h2>
                <p className="text-muted-foreground text-sm">Temukan ban yang tepat untuk kebutuhan Anda</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row">
            
            {/* Layer 1: Category Tabs - Left Side */}
            <div className="lg:w-56 bg-secondary border-b lg:border-b-0 lg:border-r border-border p-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
                Pilih Kategori
              </p>
              <div className="flex lg:flex-col gap-2">
                {categories.map((cat) => {
                  const Icon = cat.icon
                  const isSelected = selectedCategory === cat.id
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left flex-1 lg:flex-none",
                        isSelected
                          ? "bg-dc-yellow text-dc-dark shadow-sm"
                          : "bg-white hover:bg-dc-yellow/10 text-foreground border border-transparent hover:border-dc-yellow/30"
                      )}
                    >
                      <Icon className={cn(
                        "h-5 w-5 shrink-0",
                        isSelected ? "text-dc-dark" : "text-muted-foreground"
                      )} />
                      <span className="font-medium text-sm hidden md:block">{cat.label}</span>
                      <span className="font-medium text-sm md:hidden">{cat.shortLabel}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Layer 2: Filter Dropdowns - Right Side */}
            <div className="flex-1 p-6 bg-secondary">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Filter Pencarian
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Industri Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Industri
                  </label>
                  <div className="relative">
                    <select
                      value={selectedIndustry}
                      onChange={(e) => handleIndustryChange(e.target.value)}
                      disabled={!selectedCategory}
                      className="w-full appearance-none bg-white border border-border rounded-lg px-4 py-3 pr-10 text-foreground focus:outline-none focus:ring-2 focus:ring-dc-yellow focus:border-transparent disabled:bg-secondary disabled:text-muted-foreground disabled:cursor-not-allowed"
                    >
                      <option value="">
                        {selectedCategory ? "Semua Industri" : "Pilih kategori"}
                      </option>
                      {filteredIndustries.map((ind) => (
                        <option key={ind.id} value={ind.id}>
                          {ind.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                {/* Aplikasi Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Aplikasi
                  </label>
                  <div className="relative">
                    <select
                      value={selectedApplication}
                      onChange={(e) => setSelectedApplication(e.target.value)}
                      disabled={!selectedCategory}
                      className="w-full appearance-none bg-white border border-border rounded-lg px-4 py-3 pr-10 text-foreground focus:outline-none focus:ring-2 focus:ring-dc-yellow focus:border-transparent disabled:bg-secondary disabled:text-muted-foreground disabled:cursor-not-allowed"
                    >
                      <option value="">
                        {selectedCategory ? "Semua Aplikasi" : "Pilih kategori"}
                      </option>
                      {filteredApplications.map((app) => (
                        <option key={app.id} value={app.id}>
                          {app.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Search Button & Links */}
              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={handleSearch}
                  disabled={isSearchDisabled}
                  className="flex-1 sm:flex-none bg-dc-yellow hover:bg-dc-yellow-dark disabled:bg-secondary disabled:text-muted-foreground text-dc-dark font-bold px-8 py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                >
                  <Search className="h-5 w-5" />
                  Cari Ban
                </button>
                
                <div className="flex items-center gap-4 text-sm">
                  <a 
                    href="/pencarian-ban" 
                    className="text-muted-foreground hover:text-dc-yellow-dark transition-colors flex items-center gap-1"
                  >
                    Pencarian lanjutan
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <span className="text-border">|</span>
                  <a 
                    href="/kontak" 
                    className="text-muted-foreground hover:text-dc-yellow-dark transition-colors"
                  >
                    Butuh bantuan?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
