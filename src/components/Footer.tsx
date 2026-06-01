import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Clock, Phone } from "lucide-react";
import { BRAND } from "@/lib/config";

const LINKS = [
  { to: "/", label: "Accueil" },
  { to: "/menu", label: "Menu" },
  { to: "/pizza", label: "Pizza" },
  { to: "/bar", label: "Bar" },
  { to: "/gallery", label: "Galerie" },
  { to: "/reserver", label: "Réserver" },
];

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl font-extrabold">
            <span className="text-brand">Le</span> Tablier
          </h3>
          <p className="mt-3 text-white/65 text-sm leading-relaxed max-w-xs">{BRAND.tagline}</p>
          <div className="mt-5 flex gap-3">
            <a href="#" className="grid place-items-center h-10 w-10 rounded-full bg-white/10 hover:bg-brand hover:text-brand-dark transition" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" className="grid place-items-center h-10 w-10 rounded-full bg-white/10 hover:bg-brand hover:text-brand-dark transition" aria-label="Facebook"><Facebook size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-brand mb-4 uppercase tracking-wider text-xs">Navigation</h4>
          <ul className="space-y-2">
            {LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/75 hover:text-brand transition text-sm">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-brand mb-4 uppercase tracking-wider text-xs">Contact</h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex gap-3"><MapPin size={16} className="text-brand mt-0.5 shrink-0" /> {BRAND.address}</li>
            <li className="flex gap-3"><Clock size={16} className="text-brand mt-0.5 shrink-0" /> {BRAND.hours}</li>
            <li className="flex gap-3"><Phone size={16} className="text-brand mt-0.5 shrink-0" /> {BRAND.phone}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-center text-xs text-white/50">
          © 2025 Le Tablier · Lomé, Togo
        </div>
      </div>
    </footer>
  );
}
