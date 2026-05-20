import { createFileRoute, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { Contact } from "@/components/Contact";
import { ArrowRight, GraduationCap, BookOpen, Award, Users } from "lucide-react";
import student from "@/assets/student-visa.jpg";



const universities = [
  { country: "United Kingdom", picks: "Oxford · Cambridge · UCL · Edinburgh" },
  { country: "Canada", picks: "Toronto · McGill · UBC · Waterloo" },
  { country: "Australia", picks: "Melbourne · ANU · Sydney · UNSW" },
  { country: "Germany", picks: "TU Munich · Heidelberg · RWTH Aachen" },
  { country: "USA", picks: "MIT · Stanford · Harvard · Columbia" },
  { country: "Ireland", picks: "Trinity · UCD · NUIG" },
];

export default function StudentVisaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Education Abroad"
        title={<>Study at the <span className="italic text-gradient-gold">World's Best</span></>}
        subtitle="Curated university placements, scholarship strategy and student visa concierge for elite global campuses."
        image={student}
      >
        <Link to="/contact" className="inline-flex items-center gap-3 rounded-full btn-emerald px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em]">
          Profile Evaluation <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="bg-onyx py-24">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-4">
          {[
            { Icon: GraduationCap, t: "Top 200 Universities" },
            { Icon: BookOpen, t: "SOP & LOR Crafted" },
            { Icon: Award, t: "Scholarship Strategy" },
            { Icon: Users, t: "Post-Study Work" },
          ].map(({ Icon, t }, i) => (
            <motion.div key={t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-cream/10 bg-charcoal/60 p-6">
              <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
              <div className="mt-4 font-display text-xl text-cream">{t}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold">Featured Destinations</span>
            <h2 className="mt-3 font-display text-4xl text-cream sm:text-5xl">University <span className="italic text-gradient-gold">Pathways</span></h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {universities.map((u, i) => (
              <motion.div key={u.country} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-2xl border border-cream/10 bg-onyx/60 p-7 transition-all hover:border-gold/40">
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold">{u.country}</div>
                <div className="mt-3 font-display text-2xl text-cream">{u.picks}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
