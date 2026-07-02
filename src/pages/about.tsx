
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import hero from "@/assets/hero-airport.jpg";



export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Story"
        title={<>A House of <span className="italic text-gradient-gold">Global Mobility</span></>}
        subtitle="Since 2010, Fly Path Overseas has guided over twelve thousand professionals and families to new lives abroad — with discretion, precision and care."
        image={hero}
      />

      <section className="bg-onyx py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold">Mission</span>
            <h2 className="mt-3 font-display text-4xl text-white sm:text-5xl">Engineering <span className="italic text-gradient-gold">approvals</span>, not applications.</h2>
            <p className="mt-6 text-white/70">
              We approach every case like a private brief — a senior advisor leads,
              specialists support, and decisions are made on strategy, not templates.
              That's why our success rate sits at 98%.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="grid grid-cols-2 gap-4">
            {[
              { v: "12K+", l: "Visas Approved" },
              { v: "40+", l: "Countries" },
              { v: "98%", l: "Success Rate" },
              { v: "15Y", l: "Of Practice" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-white/10 bg-onyx/70 p-7">
                <div className="font-display text-4xl text-gradient-gold">{s.v}</div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/60">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-onyx py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold">Vision</span>
          <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl leading-tight">
            To become the world's most <span className="italic text-gradient-gold">trusted</span> private house for global mobility.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            We believe borders should never limit ambition. Our work is to make the
            world reachable — for the next generation of global citizens.
          </p>
        </div>
      </section>

      <WhyUs />
      <Testimonials />
      <Contact />
    </main>
  );
}
