import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Users, Clock, Headphones, Award } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Licensed & Accredited", desc: "ICCRC & MARA registered consultants on staff." },
  { icon: Sparkles, title: "Bespoke Strategy", desc: "No templates — every file crafted from zero." },
  { icon: Users, title: "Senior Advisors", desc: "Average 12+ years in global immigration." },
  { icon: Clock, title: "Fastest Turnaround", desc: "Lodgement-ready files in under 14 days." },
  { icon: Headphones, title: "Concierge Support", desc: "Single point of contact, end-to-end." },
  { icon: Award, title: "98% Success Rate", desc: "Independently audited approval ratio." },
];

export function WhyUs() {
  return (
    <section id="about" className="relative bg-ivory py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:items-end">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-emerald-deep">Why Fly Path</span>
            <h2 className="mt-4 font-display text-5xl leading-tight text-charcoal sm:text-6xl">
              A practice built on <span className="italic text-gold">precision.</span>
            </h2>
          </motion.div>
          <p className="text-lg leading-relaxed text-charcoal/70">
            We treat each visa as a private commission. Discreet, methodical, and accountable —
            from the first conversation to the moment your boarding pass is in hand.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury"
              >
                <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-deep/10 text-emerald-deep transition-all group-hover:bg-gold group-hover:text-charcoal">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl text-charcoal">{it.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">{it.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
