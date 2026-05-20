import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { Contact } from "@/components/Contact";
import { ArrowRight, Plane, Globe2, Camera, Users } from "lucide-react";
import tourist from "@/assets/tourist-visa.jpg";

export const Route = createFileRoute("/tourist-visa")({
  component: TouristVisaPage,
  head: () => ({
    meta: [
      { title: "Tourist Visa — Fly Path Overseas" },
      { name: "description", content: "Schengen, US, UK and family tourist visas — fast-tracked with concierge support." },
      { property: "og:title", content: "Tourist Visa — Fly Path Overseas" },
      { property: "og:image", content: tourist },
    ],
  }),
});

const destinations = [
  { region: "Schengen Europe", note: "26 countries · 90-day stay" },
  { region: "United Kingdom", note: "6-month visitor visa" },
  { region: "United States", note: "B1/B2 · up to 10 years" },
  { region: "Dubai · UAE", note: "30 & 60-day options" },
  { region: "Singapore", note: "Multi-entry · fast track" },
  { region: "Japan", note: "Single & multi-entry" },
];

function TouristVisaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Travel · Leisure"
        title={<>The World, <span className="italic text-gradient-gold">Effortlessly</span></>}
        subtitle="From Schengen weekenders to luxury family itineraries — tourist visas handled end-to-end."
        image={tourist}
      >
        <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-gradient-gold px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-onyx shadow-gold">
          Plan My Trip <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="bg-onyx py-24">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-4">
          {[
            { Icon: Plane, t: "Priority Appointments" },
            { Icon: Globe2, t: "Multi-Country Itineraries" },
            { Icon: Camera, t: "Travel Insurance Bundled" },
            { Icon: Users, t: "Family & Group" },
          ].map(({ Icon, t }, i) => (
            <motion.div key={t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-cream/10 bg-charcoal/60 p-6">
              <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
              <div className="mt-4 font-display text-xl text-cream">{t}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold">Destinations</span>
            <h2 className="mt-3 font-display text-4xl text-cream sm:text-5xl">Where will you <span className="italic text-gradient-gold">wander</span>?</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d, i) => (
              <motion.div key={d.region} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-cream/10 bg-onyx/60 p-7 transition-all hover:border-gold/40">
                <div className="font-display text-2xl text-cream">{d.region}</div>
                <div className="mt-2 text-sm text-cream/65">{d.note}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
