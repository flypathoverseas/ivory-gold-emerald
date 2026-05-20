import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

const details = [
  { icon: Phone, label: "Call Us", value: "+91 97019 47979", href: "tel:+919701947979" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 97019 47979", href: "https://wa.me/919701947979" },
  { icon: Mail, label: "Email", value: "info@flypathoverseas.com", href: "mailto:info@flypathoverseas.com" },
  { icon: MapPin, label: "Office", value: "Hyderabad, India", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ivory py-28">
      <div className="pointer-events-none absolute -right-40 top-40 h-[500px] w-[500px] rounded-full bg-emerald-deep/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-gold/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-emerald-deep">Begin the Journey</span>
          <h2 className="mt-4 font-display text-5xl text-charcoal sm:text-7xl">
            Let's draft your <span className="italic text-gold">global path.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-charcoal/70">
            A private consultation — complimentary, confidential, and tailored from minute one.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
            className="glass rounded-3xl p-8 shadow-luxury sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { label: "Full Name", type: "text", placeholder: "Your name" },
                { label: "Email", type: "email", placeholder: "you@example.com" },
                { label: "Phone", type: "tel", placeholder: "+91 ..." },
                { label: "Destination", type: "text", placeholder: "Canada, UK, UAE..." },
              ].map((f) => (
                <label key={f.label} className="block">
                  <span className="text-xs font-medium uppercase tracking-widest text-charcoal/60">{f.label}</span>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    className="mt-2 w-full rounded-xl border border-border bg-ivory/60 px-4 py-3.5 text-charcoal outline-none transition-all focus:border-gold focus:bg-ivory focus:ring-4 focus:ring-gold/20"
                  />
                </label>
              ))}
            </div>
            <label className="mt-5 block">
              <span className="text-xs font-medium uppercase tracking-widest text-charcoal/60">Visa Category</span>
              <select className="mt-2 w-full rounded-xl border border-border bg-ivory/60 px-4 py-3.5 text-charcoal outline-none focus:border-gold focus:ring-4 focus:ring-gold/20">
                <option>Work Visa</option>
                <option>Student Visa</option>
                <option>Tourist Visa</option>
                <option>PR / Citizenship</option>
              </select>
            </label>
            <label className="mt-5 block">
              <span className="text-xs font-medium uppercase tracking-widest text-charcoal/60">Tell us more</span>
              <textarea
                rows={4}
                placeholder="A few words about your goals..."
                className="mt-2 w-full rounded-xl border border-border bg-ivory/60 px-4 py-3.5 text-charcoal outline-none focus:border-gold focus:ring-4 focus:ring-gold/20"
              />
            </label>
            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-charcoal px-7 py-4 text-sm font-semibold uppercase tracking-widest text-ivory transition-all hover:bg-emerald-deep gold-glow"
            >
              Request Consultation <Send className="h-4 w-4" />
            </button>
          </motion.form>

          {/* Details */}
          <div className="grid gap-4 content-start">
            {details.map((d, i) => {
              const Icon = d.icon;
              return (
                <motion.a
                  key={d.label}
                  href={d.href}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-gold hover:shadow-gold"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-deep/10 text-emerald-deep transition-all group-hover:bg-gold group-hover:text-charcoal">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-widest text-charcoal/50">{d.label}</div>
                    <div className="font-display text-xl text-charcoal">{d.value}</div>
                  </div>
                </motion.a>
              );
            })}
            <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe
                title="Office location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=78.35%2C17.35%2C78.55%2C17.50&amp;layer=mapnik"
                className="h-56 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
