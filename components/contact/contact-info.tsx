import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react"

const offices = [
  {
    city: "PT GABE ANDALAN SEMESTA (Distributor Resmi)",
    address: "RUKO BIDEX G19,\nJL PAHLAWAN SERIBU,\nTANGERANG, BANTEN",
    phone: "+62-811-8805-645",
    phone2: "+62-21-5319-1614",
    email: "info@gabetires.com",
    website: "www.gabetires.com",
  },
]

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      {/* Office locations */}
      {offices.map((office) => (
        <div
          key={office.city}
          className="bg-card border border-border rounded-xl p-6"
        >
          <h3 className="text-foreground font-bold text-base mb-4">{office.city}</h3>
          <div className="flex flex-col gap-3.5">
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-dc-yellow-dark mt-0.5 shrink-0" />
              <span className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                {office.address}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-dc-yellow-dark shrink-0" />
              <div className="flex flex-col gap-1">
                <a
                  href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                  className="text-muted-foreground hover:text-dc-yellow-dark text-sm transition-colors"
                >
                  {office.phone}
                </a>
                {office.phone2 && (
                  <a
                    href={`tel:${office.phone2.replace(/[^0-9+]/g, "")}`}
                    className="text-muted-foreground hover:text-dc-yellow-dark text-sm transition-colors"
                  >
                    {office.phone2}
                  </a>
                )}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-dc-yellow-dark shrink-0" />
              <a
                href={`mailto:${office.email}`}
                className="text-muted-foreground hover:text-dc-yellow-dark text-sm transition-colors"
              >
                {office.email}
              </a>
            </div>
            {office.website && (
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-dc-yellow-dark shrink-0" />
                <a
                  href={`https://${office.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-dc-yellow-dark text-sm transition-colors"
                >
                  {office.website}
                </a>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Business hours */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="h-4 w-4 text-dc-yellow-dark" />
          <h3 className="text-foreground font-bold text-base">Jam Operasional</h3>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Senin - Jumat</span>
            <span className="text-foreground font-medium">09:00 - 18:00</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Sabtu - Minggu</span>
            <span className="text-destructive font-medium">Tutup</span>
          </div>
        </div>
      </div>


    </div>
  )
}
