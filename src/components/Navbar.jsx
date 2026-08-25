import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Mail, ArrowRight, Anchor } from "lucide-react";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top utility bar */}
      <div
        className={`hidden lg:flex items-center justify-end gap-6 text-xs text-white/80 bg-navy-950 container-px py-2 transition-all duration-300 ${
          scrolled ? '-mt-8 opacity-0' : 'mt-0 opacity-100'
        }`}
      >
        <span>Mon - Fri 08:00 - 20:00</span>
        <span className="flex items-center gap-1.5">
          <Mail size={12} /> info@anti.com
        </span>
        <span className="flex items-center gap-1.5">
          <Phone size={12} /> +88 0123 456 789
        </span>
      </div>

      {/* Main nav */}
      <nav
        className={`container-px flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-navy-950/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-navy-950/40 backdrop-blur-sm py-4 lg:py-5'
        }`}
      >
        <a href="/" className="flex items-center gap-2 shrink-0">
          <span className="w-9 h-9 rounded-lg bg-brand-orange flex items-center justify-center">
            <Anchor size={18} className="text-white" />
          </span>
          <span className="text-white font-display font-bold text-xl tracking-tight">
            Simplify
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-brand-orange'
                    : 'text-white/85 hover:text-brand-orange'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <a href="#quote" className="btn-primary !py-2.5 !px-5 text-sm">
            Request a Quote <ArrowRight size={15} />
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-navy-950/60 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-navy-900 p-6 flex flex-col gap-6"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <span className="text-white font-display font-bold text-xl">
                  Anti
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white p-1"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                  >
                    <NavLink
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block py-3 text-base font-medium border-b border-white/10 ${
                          isActive ? 'text-brand-orange' : 'text-white/90'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
              <a
                href="#quote"
                onClick={() => setOpen(false)}
                className="btn-primary justify-center mt-2"
              >
                Request a Quote <ArrowRight size={15} />
              </a>
              <div className="mt-auto text-white/60 text-sm space-y-2">
                <p className="flex items-center gap-2">
                  <Phone size={14} /> +88 0123 456 789
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={14} /> info@anti.com
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
