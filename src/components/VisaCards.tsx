import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Briefcase, GraduationCap, Plane } from "lucide-react";
import work from "@/assets/work-visa.jpg";
import student from "@/assets/student-visa.jpg";
import tourist from "@/assets/tourist-visa.jpg";

type Item = {
  to: "/work-visa" | "/student-visa" | "/tourist-visa";
  label: string;
  title: string;
  desc: string;
  Icon: typeof Briefcase;
  highlight?: boolean;
  image: string;
};

const items: Item[] = [
  {
    to: "/work-visa",
    label: "Career Abroad — Flagship",
    title: "Work Visa",
    desc: "Skilled & PR pathways into Canada, UK, UAE, Germany and beyond.",
    Icon: Briefcase,
    highlight: true,
    image: work,
  },
  {
    to: "/student-visa",
    label: "Education",
    title: "Student Visa",
    desc: "World-class universities across UK, Canada, Australia & Germany.",
    Icon: GraduationCap,
    image: student,
  },
  {
    to: "/tourist-visa",
    label: "Travel",
    title: "Tourist Visa",
    desc: "Schengen, US, UK and family travel — fast-tracked & concierge handled.",
    Icon: Plane,
    image: tourist,
  },
];

export function VisaCards({ heading = true }: { heading?: boolean }) {
  return (
    <section id="visas" className="relative overflow-hidden bg-onyx py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 divider-gold" />
      <div className="pointer-events-none absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-emerald-deep/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        {heading && (
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-gold"
            >
              <span className="h-1 w-1 rounded-full bg-gold" /> Three Pathways
            </motion.div>
            <h2 className="font-display text-4xl text-cream sm:text-5xl">
              Choose Your <span className="italic text-gradient-gold">Journey</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-cream/65">
              A boutique selection of programs — each curated, vetted, and supported by
              senior immigration advisors.
            </p>
          </div>
        )}

        <div className="grid items-stretch gap-6 lg:grid-cols-12">
          {items.map((it, i) => (
            <motion.div
              key={it.to}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={
                it.highlight
                  ? "lg:col-span-6 lg:row-span-2"
                  : "lg:col-span-3"
              }
            >
              <VisaCard item={it} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisaCard({ item }: { item: Item }) {
  const { Icon, highlight } = item;

  return (
    <Link
      to={item.to}
      className={`group relative block h-full overflow-hidden rounded-3xl border ${
        highlight ? "border-gold/40" : "border-cream/10"
      } bg-charcoal shadow-luxury transition-transform duration-500 hover:-translate-y-1`}
    >
      <div className={`relative ${highlight ? "h-[560px]" : "h-[420px]"} overflow-hidden`}>
        <img
          src={item.image}
          alt={item.title}
          className="ken-burns h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/60 to-transparent" />
        {highlight && (
          <>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.78_0.10_82/0.18),transparent_60%)]" />
            <div className="pointer-events-none absolute -inset-px rounded-3xl ring-1 ring-inset ring-gold/20" />
          </>
        )}

        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,oklch(0.78_0.10_82/0.25),transparent_55%)]" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-7">
        <div className="flex items-center gap-3">
          <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${
            highlight ? "bg-gradient-gold text-onyx" : "border border-gold/40 text-gold"
          }`}>
            <Icon className="h-4 w-4" />
          </span>
          <span className="text-[10px] uppercase tracking-[0.28em] text-gold">{item.label}</span>
        </div>
        <h3 className={`mt-4 font-display ${highlight ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"} text-cream`}>
          {item.title}
        </h3>
        <p className={`mt-3 ${highlight ? "max-w-md text-base" : "text-sm"} text-cream/70`}>
          {item.desc}
        </p>

        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-gold">
          Explore
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>

        {highlight && (
          <div className="mt-6 flex flex-wrap gap-2">
            {["Canada", "UK", "UAE", "Germany", "Australia"].map((c) => (
              <span key={c} className="rounded-full border border-gold/25 bg-onyx/40 px-3 py-1 text-[10px] uppercase tracking-widest text-cream/70 backdrop-blur">
                {c}
              </span>
            ))}
          </div>
        )}
      </div>

      {highlight && (
        <div className="absolute right-5 top-5 rounded-full bg-gradient-gold px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-onyx shadow-gold">
          Flagship
        </div>
      )}
    </Link>
  );
}
