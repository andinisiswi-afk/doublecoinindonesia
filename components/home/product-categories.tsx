import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    id: "otr",
    title: "Ban OTR",
    subtitle: "Off-The-Road",
    description:
      "Ban untuk kendaraan berat pertambangan dan konstruksi. Dirancang untuk medan berat dengan ketahanan ekstra terhadap kerusakan dan keausan.",
    image: "/images/tire-otr.jpg",
    href: "/produk#otr",
    features: ["Medan berat", "Anti-tusuk", "Umur panjang"],
  },
  {
    id: "industrial",
    title: "Ban Industri",
    subtitle: "Industrial",
    description:
      "Ban untuk forklift dan kendaraan industri dengan stabilitas tinggi, daya cengkeram optimal, dan ketahanan terhadap bahan kimia.",
    image: "/images/tire-industrial.jpg",
    href: "/produk#industrial",
    features: ["Stabilitas tinggi", "Tahan kimia", "Daya cengkeram"],
  },
]

export function ProductCategories() {
  return (
    <section className="pt-8 md:pt-10 pb-16 md:pb-24 bg-dc-body">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-dc-yellow" />
            <span className="text-dc-dark text-sm font-semibold tracking-wider uppercase">
              Lini Produk
            </span>
            <div className="w-8 h-px bg-dc-yellow" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground font-serif text-balance mb-4">
            Solusi Ban untuk Setiap Kebutuhan
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto text-pretty">
            Double Coin menawarkan rangkaian ban lengkap untuk truk, kendaraan berat, industri, dan kendaraan penumpang dengan standar kualitas internasional.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-dc-yellow/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dc-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-dc-yellow text-xs font-medium tracking-wider uppercase">
                    {cat.subtitle}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-foreground font-bold text-lg mb-2 group-hover:text-dc-dark transition-colors">
                  {cat.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cat.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-2.5 py-1 rounded-full bg-dc-yellow/10 text-dc-dark font-medium"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-dc-dark group-hover:gap-2.5 transition-all">
                  Lihat Selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
