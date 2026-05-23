import { createFileRoute, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { CountryGrid } from "@/components/CountryGrid";
import { Contact } from "@/components/Contact";
import { ArrowRight, Briefcase, Building2, Globe2, ShieldCheck } from "lucide-react";
import work from "@/assets/work-visa.jpg";



const programs = [
  { country: "Canada", program: "Express Entry · PNP", salary: "CAD 75–150K", pr: "PR in 6–12 months" },
  { country: "United Kingdom", program: "Skilled Worker · HPI", salary: "£42–110K", pr: "ILR in 5 years" },
  { country: "UAE", program: "Employment · Golden Visa", salary: "AED 20–60K/mo", pr: "10-year residency" },
  { country: "Europe", program: "EU Blue Card", salary: "€58–110K", pr: "PR in 21–33 months" },
  { country: "Australia", program: "Subclass 189 / 190 / 491", salary: "AUD 90–160K", pr: "PR pathway" },
  { country: "New Zealand", program: "AEWV · Skilled Migrant", salary: "NZD 80–140K", pr: "Residence pathway" },
];

export default function WorkVisaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Flagship Program"
        title={<>Build Your Career <span className="italic text-gradient-gold">Abroad</span></>}
        subtitle="The most prestigious pathway in our practice — engineered for engineers, doctors, executives and skilled professionals."
        image={work}
        height="lg"
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="inline-flex items-center gap-3 rounded-full btn-emerald px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em]">
            Start Application <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="https://wa.me/919701947979" className="inline-flex items-center gap-3 rounded-full glass px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-cream">
            Talk to an Advisor
          </a>
        </div>
      </PageHero>

      <section className="bg-onyx py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { Icon: Briefcase, t: "Skilled Migration" },
              { Icon: Building2, t: "Employer-Sponsored" },
              { Icon: Globe2, t: "Permanent Residency" },
              { Icon: ShieldCheck, t: "Family Inclusion" },
            ].map(({ Icon, t }, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-cream/10 bg-charcoal/60 p-6"
              >
                <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                <div className="mt-4 font-display text-xl text-cream">{t}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold">Active Programs</span>
            <h2 className="mt-3 font-display text-4xl text-cream sm:text-5xl">Where will you <span className="italic text-gradient-gold">work next</span>?</h2>
          </div>
          <div className="overflow-hidden rounded-3xl border border-cream/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-onyx/60 text-[10px] uppercase tracking-[0.2em] text-gold">
                <tr>
                  <th className="px-6 py-4">Country</th>
                  <th className="px-6 py-4">Program</th>
                  <th className="px-6 py-4">Avg. Salary</th>
                  <th className="px-6 py-4">Pathway</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((p) => (
                  <tr key={p.country} className="border-t border-cream/10 text-cream/80 transition-colors hover:bg-onyx/40">
                    <td className="px-6 py-5 font-display text-lg text-cream">{p.country}</td>
                    <td className="px-6 py-5">{p.program}</td>
                    <td className="px-6 py-5 text-gold">{p.salary}</td>
                    <td className="px-6 py-5">{p.pr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CountryGrid />
      <Contact />
    </main>
  );
}
