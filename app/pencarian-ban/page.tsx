import { Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TireSearchHero } from "@/components/tire-search/tire-search-hero"
import { TireSearchForm } from "@/components/tire-search/tire-search-form"

function SearchFormFallback() {
  return (
    <div className="py-8 md:py-12 bg-dc-body">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="animate-pulse">
          <div className="h-12 bg-secondary rounded-lg mb-6 w-1/3"></div>
          <div className="bg-white rounded-xl border border-border p-6">
            <div className="space-y-4">
              <div className="h-10 bg-secondary rounded-lg"></div>
              <div className="h-10 bg-secondary rounded-lg"></div>
              <div className="h-10 bg-secondary rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TireSearchPage() {
  return (
    <main className="min-h-screen bg-dc-body">
      <Navbar />
      <TireSearchHero />
      <Suspense fallback={<SearchFormFallback />}>
        <TireSearchForm />
      </Suspense>
      <Footer />
    </main>
  )
}
