import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
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
    <section id="top" className="relative h-screen min-h-[780px] w-full overflow-hidden bg-charcoal">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Luxury airport terminal at golden hour"
          className="ken-burns h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-0"
          poster={hero}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,oklch(0.2_0.01_0/0.6)_100%)]" />
      </div>

      {/* Floating gold particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              filter: "blur(0.5px)",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.9, 0.2],
            }}
            transition={{
              duration: 4 + (i % 5),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Light streak */}
      <motion.div
        className="pointer-events-none absolute -top-1/2 left-1/4 h-[200%] w-[2px] rotate-[20deg] bg-gradient-to-b from-transparent via-gold/40 to-transparent"
        animate={{ x: [-200, 800] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-charcoal/40 px-5 py-2 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-ivory/80">
              Global Mobility · Est. 2010
            </span>
          </motion.div>

          <h1 className="max-w-5xl font-display text-5xl leading-[1.02] text-ivory sm:text-7xl lg:text-[5.5rem]">
            {"Build Your Career".split(" ").map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.6 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="mr-4 inline-block"
              >
                {w}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block italic text-gradient-gold"
            >
              Abroad.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2 }}
            className="mt-8 max-w-2xl text-lg text-ivory/70 sm:text-xl"
          >
            Trusted overseas career partners crafting bespoke work, student, and tourist
            visa journeys — with the precision of a private concierge.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work-visa"
              className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-widest text-charcoal transition-all hover:bg-ivory gold-glow"
            >
              Apply Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full glass-dark px-7 py-4 text-sm font-semibold uppercase tracking-widest text-ivory transition-all hover:border-gold"
            >
              <Phone className="h-4 w-4" /> Free Consultation
            </a>
            <a
              href="https://wa.me/919701947979"
              className="inline-flex items-center gap-2 rounded-full border border-ivory/20 px-5 py-4 text-sm font-medium text-ivory/80 transition-all hover:border-gold hover:text-gold"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </motion.div>

          {/* Counters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
            className="mt-16 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {counters.map((c) => (
              <div key={c.label} className="border-l border-gold/30 pl-4">
                <div className="font-display text-3xl text-ivory sm:text-4xl">{c.value}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-ivory/60">
                  {c.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Flag slider */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t border-ivory/10 bg-charcoal/60 py-4 backdrop-blur-md">
        <motion.div
          className="flex gap-12 whitespace-nowrap text-3xl"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...flags, ...flags, ...flags].map((f, i) => (
            <span key={i} className="opacity-80">{f}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
