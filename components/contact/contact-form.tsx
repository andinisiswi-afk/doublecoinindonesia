"use client"

import { useState } from "react"
import { Send, Loader2 } from "lucide-react"

const interestOptions = [
  "Ban Truk & Bus (TBR)",
  "Ban OTR",
]

export function ContactForm() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSent(true)
    }, 1500)
  }

  if (sent) {
    return (
      <div className="bg-card border border-border rounded-xl p-8 md:p-10 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-dc-red/10 flex items-center justify-center mb-6">
          <Send className="h-7 w-7 text-dc-red" />
        </div>
        <h3 className="text-foreground font-bold text-xl font-serif mb-3">
          Pesan Terkirim!
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto mb-6">
          Terima kasih telah menghubungi Double Coin Indonesia. Tim kami akan segera merespons pesan Anda dalam 1-2 hari kerja.
        </p>
        <button
          onClick={() => setSent(false)}
          className="text-dc-red hover:text-dc-red-dark text-sm font-medium transition-colors"
        >
          Kirim Pesan Lagi
        </button>
      </div>
    )
  }

  return (
    <div className="bg-card border border-border rounded-xl p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-bold text-foreground font-serif mb-2">
        Kirim Pesan
      </h2>
      <p className="text-muted-foreground text-sm mb-8">
        Isi formulir di bawah ini dan tim kami akan segera menghubungi Anda.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-foreground text-sm font-medium mb-2">
              Nama Lengkap <span className="text-dc-red">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Masukkan nama Anda"
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-dc-red/30 focus:border-dc-red transition-colors placeholder:text-muted-foreground"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-foreground text-sm font-medium mb-2">
              Perusahaan
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Nama perusahaan"
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-dc-red/30 focus:border-dc-red transition-colors placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-foreground text-sm font-medium mb-2">
              Email <span className="text-dc-red">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="email@perusahaan.com"
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-dc-red/30 focus:border-dc-red transition-colors placeholder:text-muted-foreground"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-foreground text-sm font-medium mb-2">
              Nomor Telepon <span className="text-dc-red">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+62 812 3456 7890"
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-dc-red/30 focus:border-dc-red transition-colors placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div>
          <label htmlFor="interest" className="block text-foreground text-sm font-medium mb-2">
            Produk yang Diminati
          </label>
          <select
            id="interest"
            name="interest"
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-dc-red/30 focus:border-dc-red transition-colors"
          >
            <option value="">Pilih kategori produk</option>
            {interestOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-foreground text-sm font-medium mb-2">
            Pesan <span className="text-dc-red">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Ceritakan kebutuhan ban Anda..."
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-dc-red/30 focus:border-dc-red transition-colors resize-none placeholder:text-muted-foreground"
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center justify-center gap-2 bg-dc-red hover:bg-dc-red-dark disabled:opacity-70 text-white px-6 py-3.5 rounded-lg text-sm font-semibold transition-colors w-full sm:w-auto"
        >
          {sending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Mengirim...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Kirim Pesan
            </>
          )}
        </button>
      </form>
    </div>
  )
}
