import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const countries = [
  { name: "Canada", flag: "🇨🇦", tagline: "Express Entry · PR Pathways", salary: "CAD 75K+", img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1200&q=80&auto=format&fit=crop" },
  { name: "United Kingdom", flag: "🇬🇧", tagline: "Skilled Worker · HPI", salary: "£42K+", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80&auto=format&fit=crop" },
  { name: "Australia", flag: "🇦🇺", tagline: "189 / 190 / 491 Visas", salary: "AUD 90K+", img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=80&auto=format&fit=crop" },
  { name: "Europe", flag: "🇪🇺", tagline: "EU Blue Card · Opportunity", salary: "€58K+", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80&auto=format&fit=crop" },
  { name: "UAE", flag: "🇦🇪", tagline: "Golden Visa · Employment", salary: "AED 25K/mo", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80&auto=format&fit=crop" },
  { name: "New Zealand", flag: "🇳🇿", tagline: "Skilled Migrant · AEWV", salary: "NZD 80K+", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80&auto=format&fit=crop" },
];

export function CountryGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section className="relative bg-onyx py-28">
      <div className="mx-auto max-w-7xl px-6">
        {heading && (
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-gold">
              Destinations
            </span>
            <h2 className="mt-5 font-display text-4xl text-cream sm:text-5xl">
              World-Class <span className="italic text-gradient-gold">Destinations</span>
            </h2>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {countries.map((c, i) => (
            <motion.a
              key={c.name}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative block h-80 overflow-hidden rounded-3xl border border-cream/10 shadow-luxury"
            >
              <img src={c.img} alt={c.name} className="ken-burns h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent" />
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_40%,oklch(0.78_0.10_82/0.18),transparent_60%)]" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-center gap-2 text-3xl">{c.flag}</div>
                <h3 className="mt-3 font-display text-3xl text-cream">{c.name}</h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-gold">{c.tagline}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="rounded-full border border-gold/30 bg-onyx/50 px-3 py-1 text-xs text-cream/80 backdrop-blur">
                    Avg. {c.salary}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
