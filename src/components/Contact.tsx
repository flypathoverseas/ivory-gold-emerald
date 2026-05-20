import { motion } from "framer-motion";
import { MessageCircle, AtSign, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-28">

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-gold">
              Get In Touch
            </span>
            <h2 className="mt-5 font-display text-4xl text-cream sm:text-5xl">
              Begin Your <span className="italic text-gradient-gold">Private Consultation</span>
            </h2>
            <p className="mt-5 max-w-md text-cream/70">
              Share a few details and a senior advisor will reach out within one business day.
            </p>

            <ul className="mt-10 space-y-5 text-sm text-cream/80">
              <li className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full border border-gold/30 text-gold"><Phone className="h-4 w-4" /></span> +91 97019 47979</li>
              <li className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full border border-gold/30 text-gold"><MessageCircle className="h-4 w-4" /></span> WhatsApp 24×7</li>
              <li className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full border border-gold/30 text-gold"><AtSign className="h-4 w-4" /></span> hello@flypathoverseas.com</li>
              <li className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full border border-gold/30 text-gold"><MapPin className="h-4 w-4" /></span> Hyderabad · Dubai · London</li>
            </ul>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-gold rounded-3xl p-8 shadow-luxury"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" placeholder="John Doe" />
              <Field label="Email" type="email" placeholder="you@email.com" />
              <Field label="Phone" type="tel" placeholder="+91 ..." />
              <div>
                <label className="mb-1.5 block text-[10px] uppercase tracking-[0.25em] text-cream/60">Visa Type</label>
                <select className="w-full rounded-xl border border-cream/15 bg-onyx/40 px-4 py-3 text-sm text-cream focus:border-gold focus:outline-none">
                  <option>Work Visa</option>
                  <option>Student Visa</option>
                  <option>Tourist Visa</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-[10px] uppercase tracking-[0.25em] text-cream/60">Message</label>
              <textarea rows={4} placeholder="Tell us about your goals..." className="w-full rounded-xl border border-cream/15 bg-onyx/40 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none" />
            </div>

            <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full btn-emerald px-6 py-4 text-xs font-semibold uppercase tracking-[0.25em] transition-transform hover:scale-[1.01]">
              Request Consultation
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-[10px] uppercase tracking-[0.25em] text-cream/60">{label}</label>
      <input type={type} placeholder={placeholder} className="w-full rounded-xl border border-cream/15 bg-onyx/40 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none" />
    </div>
  );
}
