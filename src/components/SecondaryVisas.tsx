import { motion } from "framer-motion";
import { GraduationCap, Plane, ArrowUpRight } from "lucide-react";
import student from "@/assets/student-visa.jpg";
import tourist from "@/assets/tourist-visa.jpg";

const studentItems = ["Top 200 Universities", "Scholarship Support", "Post-Study Work Visa", "Accommodation & Finance"];
const touristItems = ["Schengen & UK Visas", "Family & Group Travel", "Curated Itineraries", "Concierge Support"];

export function StudentVisa() {
  return (
    <section id="student-visa" className="relative bg-ivory py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative overflow-hidden rounded-3xl shadow-luxury"
        >
          <img src={student} alt="University campus abroad" className="h-[520px] w-full object-cover ken-burns" loading="lazy" width={1280} height={800} />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
            <div className="flex items-center gap-3 text-charcoal">
              <GraduationCap className="h-5 w-5 text-emerald-deep" />
              <span className="text-sm font-medium uppercase tracking-widest">Study Abroad</span>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-emerald-deep">02 — Student Visa</span>
          <h2 className="mt-4 font-display text-5xl leading-tight text-charcoal sm:text-6xl">
            Earn your degree <span className="italic text-emerald-deep">overseas.</span>
          </h2>
          <p className="mt-5 max-w-lg text-lg text-charcoal/70">
            From Ivy League aspirations to specialised European institutions — we curate
            university shortlists, applications, and scholarships with academic precision.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {studentItems.map((t) => (
              <li key={t} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-sm text-charcoal shadow-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {t}
              </li>
            ))}
          </ul>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full border border-charcoal px-6 py-3 text-sm font-semibold uppercase tracking-widest text-charcoal transition-all hover:bg-charcoal hover:text-ivory">
            Explore Universities <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function TouristVisa() {
  return (
    <section id="tourist-visa" className="relative bg-beige/40 py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="order-2 lg:order-1">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-emerald-deep">03 — Tourist Visa</span>
          <h2 className="mt-4 font-display text-5xl leading-tight text-charcoal sm:text-6xl">
            Travel, <span className="italic text-gold">unrestricted.</span>
          </h2>
          <p className="mt-5 max-w-lg text-lg text-charcoal/70">
            Leisure travel, family vacations, and honeymoon getaways — handled with the
            quiet efficiency of a private travel desk.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {touristItems.map((t) => (
              <li key={t} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-sm text-charcoal shadow-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-deep" /> {t}
              </li>
            ))}
          </ul>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full border border-charcoal px-6 py-3 text-sm font-semibold uppercase tracking-widest text-charcoal transition-all hover:bg-charcoal hover:text-ivory">
            Plan My Trip <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="order-1 lg:order-2 relative overflow-hidden rounded-3xl shadow-luxury">
          <img src={tourist} alt="Luxury travel destination" className="h-[520px] w-full object-cover ken-burns" loading="lazy" width={1280} height={800} />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
            <div className="flex items-center gap-3 text-charcoal">
              <Plane className="h-5 w-5 text-gold" />
              <span className="text-sm font-medium uppercase tracking-widest">Curated Journeys</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
