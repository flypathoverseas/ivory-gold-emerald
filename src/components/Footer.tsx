import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal text-ivory">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Fly Path Overseas" className="h-10 w-10 object-contain" width={40} height={40} />
              <span className="font-display text-2xl tracking-widest">FLY PATH <span className="text-gold">OVERSEAS</span></span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/60">
              A private practice for global mobility — work, study, and travel visas crafted
              with the precision of a concierge.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-all hover:border-gold hover:text-gold">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Services</h4>
            <ul className="mt-5 space-y-3 text-sm text-ivory/70">
              {["Work Visa", "Student Visa", "Tourist Visa", "PR & Citizenship", "Employer Sponsorship"].map((s) => (
                <li key={s}><a href="#" className="transition-colors hover:text-gold">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Company</h4>
            <ul className="mt-5 space-y-3 text-sm text-ivory/70">
              {["About", "Countries", "Testimonials", "Careers", "Contact"].map((s) => (
                <li key={s}><a href="#" className="transition-colors hover:text-gold">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Newsletter</h4>
            <p className="mt-5 text-sm text-ivory/60">Quarterly briefings on policy updates & destinations.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex overflow-hidden rounded-full border border-ivory/15 bg-ivory/5">
              <input type="email" placeholder="Your email" className="flex-1 bg-transparent px-5 py-3 text-sm text-ivory placeholder:text-ivory/40 outline-none" />
              <button className="bg-gold px-5 text-xs font-semibold uppercase tracking-widest text-charcoal transition-colors hover:bg-ivory">Join</button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/50 sm:flex-row">
          <span>© {new Date().getFullYear()} Fly Path Overseas. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
