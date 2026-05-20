import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import hero from "@/assets/hero-airport.jpg";

const counters = [
  { value: "12K+", label: "Visas Approved" },
  { value: "40+", label: "Countries" },
  { value: "98%", label: "Success Rate" },
  { value: "15Y", label: "Experience" },
];

const flags = ["🇨🇦", "🇬🇧", "🇦🇺", "🇩🇪", "🇦🇪", "🇳🇿", "🇺🇸", "🇸🇬", "🇫🇷", "🇯🇵"];

export function Hero() {
  return (
    <section className="relative h-screen min-h-[760px] w-full overflow-hidden bg-onyx">
      <div className="absolute inset-0">
        <img src={hero} alt="Cinematic luxury airport at dusk" className="ken-burns h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/55 via-onyx/55 to-onyx" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,oklch(0.08_0.008_170/0.85)_100%)]" />
      </div>

      {/* Floating gold particles (deterministic positions for SSR safety) */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 22 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              filter: "blur(0.5px)",
            }}
            animate={{ y: [0, -30, 0], opacity: [0.15, 0.85, 0.15] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: (i % 7) * 0.3, ease: "easeInOut" }}
          />
        ))}
      </div>

      <motion.div
        className="pointer-events-none absolute -top-1/2 left-1/4 h-[200%] w-[2px] rotate-[20deg] bg-gradient-to-b from-transparent via-gold/40 to-transparent"
        animate={{ x: [-200, 800] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex h-full flex-col justify-center px-6 pt-24">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-onyx/40 px-5 py-2 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-cream/80">
              Global Mobility · Since 2010
            </span>
          </motion.div>

          <h1 className="max-w-5xl font-display text-5xl leading-[1.02] text-cream sm:text-7xl lg:text-[5.25rem]">
            {"Your Global Career".split(" ").map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="mr-4 inline-block"
              >
                {w}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block italic text-gradient-gold"
            >
              Begins Here.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1 }}
            className="mt-7 max-w-2xl text-base text-cream/70 sm:text-lg"
          >
            A private concierge for international work, study and travel visas —
            engineered for ambitious professionals and global families.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.3 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/work-visa"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-gold px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-onyx shadow-gold transition-transform hover:scale-[1.03]"
            >
              Apply Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full glass px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream transition-all hover:border-gold"
            >
              <Phone className="h-4 w-4" /> Free Consultation
            </Link>
            <a
              href="https://wa.me/919701947979"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/15 px-5 py-4 text-xs font-medium text-cream/80 transition-all hover:border-gold hover:text-gold"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mt-14 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {counters.map((c) => (
              <div key={c.label} className="border-l border-gold/30 pl-4">
                <div className="font-display text-3xl text-cream sm:text-4xl">{c.value}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-cream/55">{c.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t border-cream/10 bg-onyx/60 py-4 backdrop-blur-md">
        <motion.div
          className="flex gap-12 whitespace-nowrap text-2xl"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {[...flags, ...flags, ...flags].map((f, i) => (
            <span key={i} className="opacity-80">{f}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
