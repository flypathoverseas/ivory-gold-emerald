import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const reviews = [
  { name: "Aarav Mehta", role: "Software Engineer · Toronto", text: "Fly Path turned an intimidating Express Entry process into a polished, predictable journey. PR in eight months." },
  { name: "Sara Khan", role: "MSc Student · London", text: "From SOP to scholarship paperwork — the advisors treated my application like it was their own." },
  { name: "Daniel Roy", role: "Project Manager · Dubai", text: "Golden Visa secured with zero hassle. The single-point-of-contact model is genuinely concierge-grade." },
  { name: "Priya Sharma", role: "Doctor · Sydney", text: "Skilled visa, registration paperwork, even relocation guidance — handled end-to-end with warmth." },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-28 text-ivory">
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">✦ Client Stories</span>
          <h2 className="mt-4 font-display text-5xl sm:text-6xl">
            Trusted by <span className="italic text-gradient-gold">global movers.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-dark relative rounded-3xl p-10 transition-all duration-500 hover:border-gold/40"
            >
              <Quote className="absolute right-8 top-8 h-10 w-10 text-gold/20" />
              <div className="mb-4 flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="font-display text-2xl leading-snug text-ivory">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 border-t border-ivory/10 pt-5">
                <div className="font-medium text-ivory">{r.name}</div>
                <div className="text-sm text-ivory/50">{r.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
