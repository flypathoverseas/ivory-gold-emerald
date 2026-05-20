import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "Countries", to: "/countries" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 overflow-hidden transition-all duration-500"
    >
      <div className="relative mx-auto w-full max-w-[calc(100%-1.5rem)] xl:max-w-6xl px-2.5 sm:px-3.5 lg:px-4 py-2.5 sm:py-3">
        <div
          className={`flex min-w-0 items-center justify-between gap-3 px-3 py-2.5 sm:px-4 sm:py-3 lg:px-4 lg:py-3.5 overflow-hidden transition-all duration-500 rounded-2xl ${
            scrolled 
              ? "glass-gold shadow-luxury" 
              : "bg-gradient-to-r from-emerald-deep/30 via-emerald-deep/20 to-charcoal/30 backdrop-blur-md border border-gold/10"
          }`}
        >
          <Link to="/" className="flex items-center gap-3 sm:gap-4 flex-shrink-0 group min-w-fit">
            <span className="relative inline-flex h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-emerald p-1.5 sm:p-2 ring-1 ring-gold/40 group-hover:ring-gold/70 group-hover:shadow-gold transition-all duration-300 flex-shrink-0">
              <img src={logo} alt="Fly Path Overseas" className="h-10 w-10 sm:h-14 sm:w-14 lg:h-18 lg:w-18 object-contain" width={56} height={56} />
            </span>
            <span className="hidden sm:flex flex-col font-display text-xs sm:text-sm lg:text-base font-bold tracking-widest text-cream group-hover:text-gold transition-colors duration-300 whitespace-nowrap">
              <span>FLY PATH</span>
              <span className="text-gold">OVERSEAS</span>
            </span>
          </Link>

          <nav className="hidden xl:flex min-w-0 items-center justify-center flex-1 px-3 lg:px-4 overflow-hidden">
            <div className="flex items-center gap-1.5 lg:gap-2">
              {links.map((l, idx) => (
                <div key={l.to} className="flex items-center min-w-0">
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `group relative px-3 lg:px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 whitespace-nowrap ${
                        isActive ? "text-gold" : "text-cream/70 hover:text-gold"
                      }`
                    }
                  >
                    <span className="relative inline-block">{l.label}</span>
                    <span className="absolute bottom-1 left-0 h-0.5 w-0 bg-gradient-gold transition-all duration-300 group-hover:w-full" />
                  </NavLink>
                  {idx < links.length - 1 && (
                    <span className="h-4 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent mx-1" />
                  )}
                </div>
              ))}
            </div>
          </nav>

          <div className="flex items-center justify-end gap-2 sm:gap-3 flex-shrink-0 min-w-fit">
            <a
              href="https://wa.me/919701947979"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gold/40 text-gold transition-all duration-300 hover:bg-gold/10 hover:border-gold/70 hover:shadow-gold flex-shrink-0"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4.5 w-4.5" />
            </a>
            <Link
              to="/contact"
              className="hidden md:inline-flex rounded-lg btn-emerald px-4 sm:px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 hover:shadow-gold hover:scale-105 flex-shrink-0 whitespace-nowrap"
            >
              Apply Now
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="inline-flex xl:hidden h-10 w-10 items-center justify-center rounded-lg border border-gold/30 text-cream transition-all duration-300 hover:border-gold/60 hover:bg-gold/10"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="glass-gold mt-3 rounded-xl border border-gold/20 p-2 xl:hidden"
            >
              <div className="flex flex-col gap-1">
                {links.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    className={({ isActive }) =>
                      `group relative rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                        isActive ? "text-gold bg-gold/10" : "text-cream/80 hover:text-gold hover:bg-gold/5"
                      }`
                    }
                  >
                    <span className="flex items-center">
                      {l.label}
                      <span className="ml-auto h-0.5 w-0 bg-gradient-gold transition-all duration-300 group-hover:w-6" />
                    </span>
                  </NavLink>
                ))}
              </div>
              <div className="my-2 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
              <Link
                to="/contact"
                className="block rounded-lg btn-emerald px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.12em]"
              >
                Apply Now
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
