import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const items = [
  { name: "Aarav Mehta", role: "Software Engineer · Canada PR", text: "The most premium visa experience I've had. They engineered every detail — from documentation to landing." },
  { name: "Sara Khan", role: "MSc Edinburgh", text: "Felt like a private concierge. My UK student visa was approved in record time with zero stress." },
  { name: "Rajesh & Family", role: "Schengen Tour", text: "Beautifully handled. The team made our European family trip feel effortless and luxurious." },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-onyx py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 divider-gold" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-gold">
            Client Voices
          </span>
          <h2 className="mt-5 font-display text-4xl text-white sm:text-5xl">
            Stories of <span className="italic text-gradient-gold">Arrival</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-onyx/70 p-8 backdrop-blur"
            >
              <Quote className="h-7 w-7 text-gold/70" />
              <blockquote className="mt-5 font-display text-xl leading-snug text-white">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <div className="text-sm font-semibold text-white">{t.name}</div>
                <div className="mt-0.5 text-[11px] uppercase tracking-[0.2em] text-gold/80">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
