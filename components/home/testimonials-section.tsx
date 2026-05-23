"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Ban Double Coin memberikan performa luar biasa di semua kondisi! Daya tahan dan efisiensi bahan bakarnya sangat memuaskan untuk armada truk kami.",
    name: "Budi Santoso",
    role: "Manajer Armada, PT Logistik Nusantara",
  },
  {
    quote:
      "Harga yang kompetitif dengan kualitas yang tidak kalah dari merek premium. Double Coin menjadi pilihan utama kami untuk operasi pertambangan.",
    name: "Ahmad Wijaya",
    role: "Direktur Operasional, PT Tambang Makmur",
  },
  {
    quote:
      "Sebagai dealer ban, saya sangat puas dengan respons pelanggan terhadap Double Coin. Kualitas tinggi dengan harga terjangkau selalu menjadi kombinasi yang diminati.",
    name: "Siti Nurhaliza",
    role: "Pemilik, Toko Ban Jaya Motor",
  },
  {
    quote:
      "Kami sudah menggunakan Double Coin selama 5 tahun dan tidak pernah kecewa. Ban forklift mereka sangat tahan lama dan stabil untuk operasi gudang kami.",
    name: "Hendro Prasetyo",
    role: "Supervisor Gudang, PT Distribusi Indonesia",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section className="py-16 md:py-24 bg-dc-body">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-dc-yellow" />
            <span className="text-dc-dark text-sm font-semibold tracking-wider uppercase">
              Testimoni
            </span>
            <div className="w-8 h-px bg-dc-yellow" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground font-serif text-balance">
            Apa Kata Pelanggan Kami
          </h2>
        </div>

        {/* Desktop: show grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-xl bg-card border border-border hover:border-dc-yellow/30 transition-colors"
            >
              <Quote className="h-8 w-8 text-dc-yellow/40 mb-4" />
              <p className="text-foreground text-base leading-relaxed mb-6 italic">
                {`"${t.quote}"`}
              </p>
              <div>
                <p className="text-foreground font-semibold">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div className="p-6 rounded-xl bg-card border border-border">
            <Quote className="h-6 w-6 text-dc-yellow/40 mb-4" />
            <p className="text-foreground text-sm leading-relaxed mb-6 italic">
              {`"${testimonials[current].quote}"`}
            </p>
            <div>
              <p className="text-foreground font-semibold text-sm">
                {testimonials[current].name}
              </p>
              <p className="text-muted-foreground text-xs">
                {testimonials[current].role}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border hover:border-dc-yellow/40 flex items-center justify-center text-foreground transition-colors"
              aria-label="Testimoni sebelumnya"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-muted-foreground text-sm">
              {current + 1} / {testimonials.length}
            </span>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border hover:border-dc-yellow/40 flex items-center justify-center text-foreground transition-colors"
              aria-label="Testimoni berikutnya"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
