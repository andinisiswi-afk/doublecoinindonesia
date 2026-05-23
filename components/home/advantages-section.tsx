import { Shield, HardHat, Cog, Building2 } from "lucide-react"

const advantages = [
  {
    icon: HardHat,
    title: "Aplikasi Industri Berat",
    description:
      "Dari loader, dump truck, hingga forklift - ban kami mendukung operasi 24/7 di tambang, pelabuhan, dan fasilitas industri.",
  },
  {
    icon: Cog,
    title: "Umur Pakai Panjang",
    description:
      "Teknologi TECO dan compound premium menghasilkan umur tapak yang lebih panjang, mengurangi downtime dan biaya penggantian ban.",
  },
  {
    icon: Building2,
    title: "Distributor Resmi di Indonesia",
    description:
      "PT Gabe Andalan Semesta (GAS) adalah distributor resmi ban OTR dan Industrial Double Coin di Indonesia, menjamin keaslian produk dan dukungan layanan purna jual terbaik.",
  },
  {
    icon: Shield,
    title: "Perlindungan Anti-Tusuk",
    description:
      "Compound khusus dan konstruksi berlapis memberikan perlindungan maksimal terhadap batu tajam, puing, dan material berbahaya di lokasi kerja.",
  },
]

export function AdvantagesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-dc-dark" />
            <span className="text-dc-dark text-sm font-medium tracking-wider uppercase">
              Keunggulan Kami
            </span>
            <div className="w-8 h-px bg-dc-dark" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-dc-dark font-serif text-balance mb-4">
            Mengapa Memilih Double Coin?
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto text-pretty">
            Ban OTR dan Industrial Double Coin dirancang untuk kondisi kerja paling berat - pertambangan, konstruksi, dan operasi industri yang membutuhkan ketahanan dan keandalan maksimal.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="group p-6 md:p-8 rounded-xl bg-secondary border border-border hover:border-dc-yellow transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-dc-yellow/20 flex items-center justify-center mb-5 group-hover:bg-dc-yellow/30 transition-colors">
                <item.icon className="h-6 w-6 text-dc-dark" />
              </div>
              <h3 className="text-dc-dark font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
