import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "Work Visa", to: "/work-visa" },
  { label: "Student Visa", to: "/student-visa" },
  { label: "Tourist Visa", to: "/tourist-visa" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div
          className={`flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ${
            scrolled ? "glass shadow-luxury" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-3 pl-2">
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream/5 ring-1 ring-gold/30">
              <img src={logo} alt="Fly Path Overseas" className="h-8 w-8 object-contain" width={32} height={32} />
            </span>
            <span className="hidden font-display text-base tracking-[0.18em] text-cream sm:inline">
              FLY PATH <span className="text-gold">OVERSEAS</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 xl:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="group relative text-[11px] font-medium uppercase tracking-[0.18em] text-cream/75 transition-colors hover:text-cream"
                activeProps={{ className: "text-gold" }}
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/919701947979"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-all hover:bg-gold hover:text-onyx lg:inline-flex"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="hidden rounded-full bg-gradient-gold px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-onyx shadow-gold transition-transform hover:scale-[1.03] lg:inline-flex"
            >
              Apply Now
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream xl:hidden"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="glass mt-2 flex flex-col gap-1 rounded-2xl p-3 xl:hidden"
            >
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-wider text-cream/80 hover:bg-cream/5"
                  activeProps={{ className: "text-gold bg-cream/5" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-1 rounded-xl bg-gradient-gold px-4 py-3 text-center text-xs font-semibold uppercase tracking-widest text-onyx"
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
