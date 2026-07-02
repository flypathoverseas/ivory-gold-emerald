import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, Globe2, Sparkles, Clock } from "lucide-react";

const items = [
  { Icon: ShieldCheck, title: "Trusted Advisory", desc: "Senior immigration counsel with 15+ years of cross-border expertise." },
  { Icon: Award, title: "98% Success Rate", desc: "Approval-first strategy backed by transparent case ownership." },
  { Icon: Users, title: "Concierge Service", desc: "A single dedicated advisor — from first call to landing abroad." },
  { Icon: Globe2, title: "40+ Countries", desc: "Active programs across Canada, UK, UAE, Australia, Europe & more." },
  { Icon: Sparkles, title: "White-Glove Process", desc: "Document curation, interview prep and relocation, fully handled." },
  { Icon: Clock, title: "Priority Timelines", desc: "Premium queueing and fast-tracked submissions, where eligible." },
];

export function WhyUs() {
  return (
    <section className="relative bg-onyx py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-gold">
            <span className="h-1 w-1 rounded-full bg-gold" /> Why Fly Path
          </span>
          <h2 className="mt-5 font-display text-4xl text-white sm:text-5xl">
            A House Built On <span className="italic text-gradient-gold">Trust</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-all hover:border-orange/40"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top_left,oklch(0.78_0.10_82/0.12),transparent_60%)]" />
              <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-2xl text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/65">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
