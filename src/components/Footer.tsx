import { Link } from "react-router-dom";
import { Globe, Send, AtSign, MapPin, Phone } from "lucide-react";
import logo from "@/assets/Final-FP-Travel-Path-Logo.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-onyx pt-24 pb-10 text-cream/80">
      <div className="absolute inset-x-0 top-0 divider-gold" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Fly Path Overseas" className="h-10 w-10" />
              <span className="font-display text-lg tracking-[0.18em] text-cream">
                FLY PATH <span className="text-gold">OVERSEAS</span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-cream/60">
              A bespoke global mobility house — crafting work, student & tourist visa
              journeys for ambitious professionals across the world.
            </p>
          </div>

          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.25em] text-gold">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { l: "Home", to: "/" as const },
                { l: "Work Visa", to: "/work-visa" as const },
                { l: "Student Visa", to: "/student-visa" as const },
                { l: "Tourist Visa", to: "/tourist-visa" as const },
                { l: "Countries", to: "/countries" as const },
                { l: "About", to: "/about" as const },
              ].map((i) => (
                <li key={i.to}>
                  <Link to={i.to} className="text-cream/65 hover:text-gold">{i.l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.25em] text-gold">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-cream/65">
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-gold" /> <span className="flex flex-col gap-1"><span>+91 97019 47979</span><span>+91 9010006714</span></span></li>
              <li className="flex items-start gap-2"><AtSign className="mt-0.5 h-4 w-4 text-gold" /> <a href="mailto:info@flypathoverseas.com" className="hover:text-gold transition-colors">info@flypathoverseas.com</a></li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> Acendia Ark 4th floor kondapur, hyderabad</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.25em] text-gold">Newsletter</h4>
            <p className="mt-5 text-sm text-cream/60">Private updates on global visa programs.</p>
            <form className="mt-4 flex items-center gap-2 rounded-full border border-gold/30 bg-charcoal/40 p-1.5 pl-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-transparent text-sm text-cream placeholder:text-cream/40 focus:outline-none"
              />
              <button type="submit" className="inline-flex h-9 w-9 items-center justify-center rounded-full btn-emerald text-cream">
                <Send className="h-4 w-4" />
              </button>
            </form>
            <div className="mt-5 flex gap-3">
              {[Globe, AtSign, Send].map((Icon, i) => (
                <a key={i} href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/60 hover:border-gold hover:text-gold">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-xs uppercase tracking-[0.2em] text-cream/40 md:flex-row">
          <p>© {new Date().getFullYear()} Fly Path Overseas. All rights reserved.</p>
          <p className="text-gold/70">Crafted for global citizens</p>
        </div>
      </div>
    </footer>
  );
}
