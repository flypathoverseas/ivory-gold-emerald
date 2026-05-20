import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { Briefcase, TrendingUp, Award, Globe2, ArrowUpRight } from "lucide-react";
import workImg from "@/assets/work-visa.jpg";

const countries = [
  { name: "Canada", flag: "🇨🇦", salary: "CAD 65k–120k", pr: "Express Entry", color: "from-red-500/20" },
  { name: "United Kingdom", flag: "🇬🇧", salary: "£38k–95k", pr: "Skilled Worker", color: "from-blue-700/20" },
  { name: "Australia", flag: "🇦🇺", salary: "AUD 70k–140k", pr: "Subclass 189/482", color: "from-yellow-500/20" },
  { name: "Germany", flag: "🇩🇪", salary: "€55k–110k", pr: "EU Blue Card", color: "from-amber-600/20" },
  { name: "UAE", flag: "🇦🇪", salary: "AED 180k–500k", pr: "Golden Visa", color: "from-emerald-700/20" },
  { name: "New Zealand", flag: "🇳🇿", salary: "NZD 75k–130k", pr: "Green List", color: "from-sky-600/20" },
];

const pillars = [
  { icon: Briefcase, title: "Employer Sponsorship", desc: "Direct partnerships with 400+ international employers." },
  { icon: TrendingUp, title: "Salary Negotiation", desc: "Benchmark packages, sign-on bonuses & relocation." },
  { icon: Award, title: "PR Pathway", desc: "Strategic roadmaps from work permit to permanent residence." },
  { icon: Globe2, title: "Skilled Programs", desc: "Curated visa categories matched to your profile." },
];

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rX = useTransform(y, [-50, 50], [8, -8]);
  const rY = useTransform(x, [-50, 50], [-8, 8]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set(e.clientX - r.left - r.width / 2);
    y.set(e.clientY - r.top - r.height / 2);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX: rX, rotateY: rY, transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function WorkVisa() {
  return (
    <section id="work-visa" className="relative overflow-hidden bg-charcoal py-32 text-ivory">
      {/* Background */}
      <div className="absolute inset-0 opacity-40">
        <img src={workImg} alt="" className="h-full w-full object-cover ken-burns" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/80 to-charcoal" />
      </div>

      {/* Gold accent glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-emerald-deep/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full border border-gold/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            ✦ Flagship Service
          </span>
          <h2 className="mt-6 font-display text-5xl leading-tight sm:text-7xl">
            Work Visa, <span className="italic text-gradient-gold">Reimagined.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ivory/70">
            The crown jewel of our practice. Concierge-level guidance for ambitious
            professionals relocating to the world's most rewarding economies.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-dark group relative overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:-translate-y-2 hover:border-gold/60"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold transition-all group-hover:bg-gold group-hover:text-charcoal">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl text-ivory">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/60">{p.desc}</p>
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gold/0 blur-2xl transition-all duration-500 group-hover:bg-gold/20" />
              </motion.div>
            );
          })}
        </div>

        {/* Countries grid */}
        <div className="mt-24">
          <div className="mb-10 flex items-end justify-between">
            <h3 className="font-display text-3xl sm:text-4xl">
              Destinations for <span className="italic text-gold">global careers</span>
            </h3>
            <a href="#countries" className="hidden text-sm uppercase tracking-widest text-gold hover:underline sm:inline">
              All Countries →
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {countries.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
              >
                <TiltCard className="group relative h-full">
                  <div className="relative overflow-hidden rounded-3xl border border-ivory/10 bg-gradient-to-br from-ivory/5 to-transparent p-8 transition-all duration-500 hover:border-gold/50">
                    <div className={`absolute inset-0 bg-gradient-to-br ${c.color} via-transparent to-transparent opacity-50`} />
                    <div className="relative">
                      <div className="flex items-start justify-between">
                        <span className="text-5xl">{c.flag}</span>
                        <ArrowUpRight className="h-5 w-5 text-ivory/40 transition-all group-hover:rotate-45 group-hover:text-gold" />
                      </div>
                      <h4 className="mt-6 font-display text-3xl text-ivory">{c.name}</h4>
                      <div className="mt-6 space-y-3 border-t border-ivory/10 pt-5">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-ivory/50">Salary Range</span>
                          <span className="font-medium text-gold">{c.salary}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-ivory/50">PR Pathway</span>
                          <span className="font-medium text-ivory">{c.pr}</span>
                        </div>
                      </div>
                    </div>
                    <div className="pointer-events-none absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-gold/0 blur-3xl transition-all duration-700 group-hover:bg-gold/30" />
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-r from-emerald-deep via-charcoal to-charcoal p-12 sm:p-16"
        >
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h3 className="font-display text-4xl text-ivory sm:text-5xl">
                Ready to relocate <span className="italic text-gold">on your terms?</span>
              </h3>
              <p className="mt-4 max-w-2xl text-ivory/70">
                Book a private 30-minute consultation with a senior advisor. Complimentary, confidential.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 self-start rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-charcoal transition-all hover:bg-ivory gold-glow md:self-center"
            >
              Begin Application <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
