import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
  videoSrc?: string;
  height?: "lg" | "md";
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, subtitle, image, videoSrc, height = "md", children }: Props) {
  const heightCls = height === "lg" ? "h-[88vh] min-h-[680px]" : "h-[72vh] min-h-[540px]";
  return (
    <section className={`relative ${heightCls} w-full overflow-hidden bg-onyx`}>
      <div className="absolute inset-0">
        <img src={image} alt="" className="ken-burns h-full w-full object-cover opacity-90" />
        {videoSrc && (
          <video
            autoPlay loop muted playsInline
            className="absolute inset-0 h-full w-full object-cover"
            poster={image}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/60 via-onyx/55 to-onyx" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.08_0.008_170/0.85)_100%)]" />
      </div>

      {/* Light streak */}
      <motion.div
        className="pointer-events-none absolute -top-1/2 left-1/3 h-[200%] w-px rotate-[18deg] bg-gradient-to-b from-transparent via-gold/40 to-transparent"
        animate={{ x: [-180, 600] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex h-full flex-col justify-end pb-20 pt-32">
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-5 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-onyx/40 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-cream/85">{eyebrow}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl font-display text-4xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-6 max-w-2xl text-base text-cream/70 sm:text-lg"
            >
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
