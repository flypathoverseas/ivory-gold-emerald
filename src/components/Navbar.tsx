import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "@/assets/Final-FP-Travel-Path-Logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "Countries", to: "/countries" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 bg-onyx/95 backdrop-blur-sm border-b border-orange/20 transition-all duration-500"
    >
      <div className="relative mx-auto w-full max-w-7xl px-6 py-3">
        <div className="flex min-w-0 items-center justify-between gap-3">
          <Link to="/" className="flex min-w-0 items-center gap-2.5 group">
            <img
              src={logo}
              alt="Fly Path Overseas"
              className="h-10 sm:h-14 md:h-16 lg:h-20 w-auto object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
              width={80}
              height={80}
              loading="eager"
              decoding="async"
            />
            <span className="flex-1 min-w-0 ml-3 flex flex-col font-display text-[12px] sm:text-[13px] md:text-sm lg:text-base xl:text-lg font-semibold tracking-[0.14em] text-white group-hover:text-gold transition-colors duration-300 leading-tight whitespace-nowrap max-w-[calc(100vw-6rem)]">
              <span className="leading-tight">FLY PATH</span>
              <span className="text-gold leading-tight">OVERSEAS</span>
            </span>
          </Link>

          <nav className="hidden xl:flex min-w-0 items-center justify-center flex-1 px-6 overflow-hidden">
            <div className="flex items-center gap-2">
              {links.map((l, idx) => (
                <div key={l.to} className="flex items-center min-w-0">
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `group relative px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-300 whitespace-nowrap ${
                        isActive ? "text-gold" : "text-white/80 hover:text-gold"
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

          <div className="flex items-center justify-end gap-3 flex-shrink-0 min-w-fit">
            <a
              href="https://wa.me/919701947979"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#25D366] text-white transition-all duration-300 hover:scale-110 hover:shadow-lg flex-shrink-0"
              aria-label="WhatsApp"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.99 1.52 9.877 9.877 0 1013.99 13.99 9.885 9.885 0 00-8.996-15.51z" />
              </svg>
            </a>
            <Link
              to="/contact"
              className="hidden md:inline-flex rounded-lg btn-emerald px-5 py-2 text-sm font-bold uppercase tracking-[0.12em] transition-all duration-300 hover:shadow-gold hover:scale-105 flex-shrink-0 whitespace-nowrap"
            >
              Apply Now
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="inline-flex xl:hidden h-10 w-10 items-center justify-center rounded-lg border border-gold/30 text-white transition-all duration-300 hover:border-gold/60 hover:bg-gold/10"
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
              className="mt-3 rounded-xl border border-gold/20 bg-onyx/95 backdrop-blur p-2"
            >
              <div className="flex flex-col gap-1">
                {links.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    className={({ isActive }) =>
                      `group relative rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                        isActive ? "text-gold bg-gold/10" : "text-white/80 hover:text-gold hover:bg-gold/5"
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
                className="block rounded-lg btn-emerald px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.12em]"
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
