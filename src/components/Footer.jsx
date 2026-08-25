import { Anchor, Phone, Mail, MapPin, Heart } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { footerLinks } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-navy-950 pt-16 sm:pt-20">
      <div className="container-px grid sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
        <div className="lg:col-span-2">
          <a href="/" className="flex items-center gap-2 mb-4">
            <span className="w-9 h-9 rounded-lg bg-brand-orange flex items-center justify-center">
              <Anchor size={18} className="text-white" />
            </span>
            <span className="text-white font-display font-bold text-xl">
              Simplify
            </span>
          </a>
          <p className="text-white/50 text-sm max-w-xs mb-6 leading-relaxed">
            We are a global logistics provider committed to delivering
            excellence, reliability, and value to businesses worldwide.
          </p>
          <div className="flex items-center gap-3">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-orange flex items-center justify-center text-white/70 hover:text-white transition-colors"
                  aria-label="social link"
                >
                  <Icon size={14} />
                </a>
              )
            )}
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-white font-display font-bold mb-5">{title}</h4>
            <ul className="space-y-3">
              {links.map(link => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/50 hover:text-brand-orange text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-white font-display font-bold mb-5">Contact Us</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li className="flex items-start gap-2.5">
              <Phone size={15} className="mt-0.5 text-brand-orange shrink-0" />
              +88 0123 456 789
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={15} className="mt-0.5 text-brand-orange shrink-0" />
              info@anti.com
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 text-brand-orange shrink-0" />
              123 Logistics Park, Global City, 1000
            </li>
          </ul>
        </div>
      </div>

      <div className="container-px py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
        <p>
          &copy; {new Date().getFullYear()} Anti Logistics. All Rights Reserved.
        </p>
        <p className="flex items-center gap-1.5">
          Designed with{' '}
          <Heart size={12} className="text-brand-orange" fill="currentColor" />{' '}
          by Anti Team
        </p>
      </div>
    </footer>
  )
}
