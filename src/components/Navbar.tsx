import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/stores/cartStore";

const LINKS = [
  { to: "/", label: "Accueil" },
  { to: "/menu", label: "Menu" },
  { to: "/pizza", label: "Pizza" },
  { to: "/bar", label: "Bar" },
  { to: "/gallery", label: "Galerie" },
  { to: "/reserver", label: "Réserver" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useRouterState({ select: (s) => s.location });
  const setCartOpen = useCart((s) => s.setOpen);
  const count = useCart((s) => s.count());

  // pages with dark hero background use transparent-on-top navbar
  const heroPages = ["/", "/pizza", "/bar", "/reserver"];
  const isHero = heroPages.includes(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const solid = scrolled || !isHero || open;

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: solid ? "rgba(34,34,34,0.92)" : "rgba(34,34,34,0)",
        backdropFilter: solid ? "blur(12px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-5 lg:px-8 h-16 lg:h-20">
        <Link to="/" className="font-display font-extrabold text-2xl tracking-tight">
          <span className="text-brand">Le</span>
          <span className="text-white"> Tablier</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative px-4 py-2 text-sm font-semibold text-white/85 hover:text-white transition"
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-white" }}
            >
              {({ isActive }) => (
                <>
                  <span>{l.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-0.5 h-1 rounded-full bg-brand"
                    />
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCartOpen(true)}
            className="relative grid place-items-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white"
            aria-label="Panier"
          >
            <ShoppingCart size={18} />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand text-brand-dark text-[10px] font-bold rounded-full h-5 min-w-5 px-1 grid place-items-center">
                {count}
              </span>
            )}
          </button>
          <Link
            to="/menu"
            className="hidden sm:inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-brand-dark hover:bg-brand-accent transition"
          >
            Commander
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid place-items-center h-10 w-10 rounded-full bg-white/10 text-white"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-brand-dark/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="px-3 py-3 rounded-lg text-white font-semibold hover:bg-white/5"
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "bg-brand/10 text-brand" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
