"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/images/hero-truck.jpg",
    subtitle: "Driven the World Over",
    title: "Menempa Mobilitas Global Sejak 1929",
    description:
      "Didirikan di Shanghai pada fajar kebangkitan industri Tiongkok, Double Coin adalah titan mobilitas global dengan ekosistem manufaktur canggih di Tiongkok dan Thailand, memproduksi ban yang dipercaya di lebih dari 100 negara.",
    cta: { label: "Lihat Produk Kami", href: "/produk" },
  },
  {
    image: "/images/factory.jpg",
    subtitle: "Teknologi TECO",
    title: "Inovasi Berbasis Performa",
    description:
      "Menggabungkan teknologi TECO dan adhesives canggih, Double Coin memberikan umur tapak superior, efisiensi bahan bakar, dan cengkeraman untuk semua medan dan aplikasi.",
    cta: { label: "Tentang Kami", href: "/tentang-kami" },
  },
  {
    image: "/images/about-hero.jpg",
    subtitle: "Triple Guarantee",
    title: "Mitra OEM Produsen Elit",
    description:
      "Sebagai mitra Original Equipment untuk CIMC, Yutong, Volvo, Caterpillar dan 30+ produsen lainnya, ban kami menggerakkan segalanya dari angkutan lintas benua hingga pertanian presisi.",
    cta: { label: "Hubungi Kami", href: "/kontak" },
  },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const goTo = (index: number) => setCurrent(index)
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  const slide = slides[current]

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dc-dark/90 via-dc-dark/60 to-dc-dark/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-dc-dark/50 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 md:px-6 w-full">
          <div className="max-w-2xl">
            <div
              key={`subtitle-${current}`}
              className="inline-flex items-center gap-2 mb-4 md:mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700"
            >
              <div className="w-8 h-px bg-dc-yellow" />
              <span className="text-dc-yellow text-sm md:text-base font-medium tracking-wider uppercase">
                {slide.subtitle}
              </span>
            </div>
            <h1
              key={`title-${current}`}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6 font-serif text-balance animate-in fade-in slide-in-from-bottom-6 duration-700"
            >
              {slide.title}
            </h1>
            <p
              key={`desc-${current}`}
              className="text-white/70 text-sm md:text-lg leading-relaxed mb-6 md:mb-8 max-w-xl text-pretty animate-in fade-in slide-in-from-bottom-8 duration-700"
            >
              {slide.description}
            </p>
            <div
              key={`cta-${current}`}
              className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700"
            >
              <Link
                href={slide.cta.href}
                className="inline-flex items-center justify-center gap-2 bg-dc-yellow hover:bg-dc-yellow-dark text-dc-dark px-6 py-3 md:px-8 md:py-4 rounded-lg text-sm md:text-base font-bold transition-colors group"
              >
                {slide.cta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-dc-yellow text-white hover:text-dc-yellow px-6 py-3 md:px-8 md:py-4 rounded-lg text-sm md:text-base font-medium transition-colors"
              >
                Minta Penawaran
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-dc-yellow/20 backdrop-blur-sm flex items-center justify-center text-white hover:text-dc-yellow transition-colors"
        aria-label="Slide sebelumnya"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-dc-yellow/20 backdrop-blur-sm flex items-center justify-center text-white hover:text-dc-yellow transition-colors"
        aria-label="Slide berikutnya"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-8 h-2 bg-dc-yellow"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
