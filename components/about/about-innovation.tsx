import Image from "next/image"
import { Award, Shield, Globe, Zap, Microscope, BarChart3 } from "lucide-react"

const valueProps = [
  {
    icon: Award,
    title: "Hampir Seabad Inovasi",
    description:
      "Double Coin telah menjadi nama terpercaya dalam industri ban sejak tahun 1920-an, berkembang menjadi pemimpin global di ban truk, bus, light truck, industri, dan OTR.",
  },
  {
    icon: Zap,
    title: "Teknologi Canggih",
    description:
      "Menggunakan teknologi TECO dan adhesives canggih, Double Coin memberikan umur tapak superior, daya tahan, dan cengkeraman.",
  },
  {
    icon: Shield,
    title: "Triple Guarantee",
    description:
      "Nikmati ketenangan pikiran dengan Triple Guarantee komprehensif Double Coin, komitmen teguh terhadap performa, daya tahan dan keandalan.",
  },
  {
    icon: Globe,
    title: "Terbukti di Seluruh Dunia",
    description:
      "Ban Double Coin terbukti dalam kondisi beragam di seluruh dunia, memberikan keausan tapak dan traksi luar biasa di berbagai industri.",
  },
  {
    icon: Microscope,
    title: "Performa Berbasis Inovasi",
    description:
      "Menggabungkan teknologi canggih seperti TECO, Double Coin memastikan umur tapak superior, efisiensi bahan bakar, dan cengkeraman untuk semua medan.",
  },
  {
    icon: BarChart3,
    title: "Nilai Luar Biasa",
    description:
      "Double Coin menawarkan ban andal dan berperforma tinggi dengan biaya per kilometer lebih rendah, memberikan nilai luar biasa untuk armada dan pengguna individual.",
  },
]

export function AboutInnovation() {
  return (
    <section className="py-16 md:py-24 bg-dc-dark text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-dc-yellow" />
              <span className="text-dc-yellow text-sm font-medium tracking-wider uppercase">
                Keunggulan Kami
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-white font-serif text-balance mb-6">
              Dari Jalan Raya ke Tugas Berat - Double Coin, Pilihan Cerdas
            </h2>
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-10">
              Sebagai mitra Original Equipment pilihan untuk produsen elit (CIMC, Yutong, Volvo, Caterpillar dan 30+ lainnya), ban kami menggerakkan segalanya dari angkutan lintas benua hingga pertanian presisi. Di luar performa, Double Coin memelopori keberlanjutan melalui compound TECO dan desain retreadable.
            </p>

            {/* Value props grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {valueProps.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-lg bg-white/5 border border-white/10 hover:border-dc-yellow/30 transition-colors"
                >
                  <item.icon className="h-5 w-5 text-dc-yellow mb-3" />
                  <h4 className="text-white font-semibold text-sm mb-2">{item.title}</h4>
                  <p className="text-white/50 text-xs leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative mt-0 lg:mt-12">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="/images/testing-lab.jpg"
                alt="Double Coin R&D Laboratory"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dc-dark/40 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-4 md:-left-6 bg-dc-yellow rounded-lg p-5 md:p-6 shadow-xl max-w-[220px]">
              <p className="text-dc-dark font-bold text-2xl md:text-3xl font-serif">100%</p>
              <p className="text-dc-dark/70 text-xs mt-1">Ban diuji secara ketat sebelum dikirim ke pelanggan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
