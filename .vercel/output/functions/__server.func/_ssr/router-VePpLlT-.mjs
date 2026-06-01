import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, d as useRouterState, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as create, p as persist } from "../_libs/zustand.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { n as ShoppingCart, X, g as Menu, I as Instagram, F as Facebook, M as MapPin, f as Clock, P as Phone, S as ShoppingBag, i as Minus, l as Plus, T as Trash2, h as MessageCircle } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-BmOeR1_4.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const useCart = create()(
  persist(
    (set, get) => ({
      lines: [],
      open: false,
      add: (item) => set((s) => {
        const ex = s.lines.find((l) => l.item.id === item.id);
        if (ex) {
          return { lines: s.lines.map((l) => l.item.id === item.id ? { ...l, qty: l.qty + 1 } : l), open: true };
        }
        return { lines: [...s.lines, { item, qty: 1 }], open: true };
      }),
      remove: (id) => set((s) => ({ lines: s.lines.filter((l) => l.item.id !== id) })),
      setQty: (id, qty) => set((s) => ({
        lines: qty <= 0 ? s.lines.filter((l) => l.item.id !== id) : s.lines.map((l) => l.item.id === id ? { ...l, qty } : l)
      })),
      clear: () => set({ lines: [] }),
      setOpen: (open) => set({ open }),
      total: () => get().lines.reduce((t, l) => t + l.item.price * l.qty, 0),
      count: () => get().lines.reduce((t, l) => t + l.qty, 0)
    }),
    { name: "letablier-cart" }
  )
);
const LINKS$1 = [
  { to: "/", label: "Accueil" },
  { to: "/menu", label: "Menu" },
  { to: "/pizza", label: "Pizza" },
  { to: "/bar", label: "Bar" },
  { to: "/gallery", label: "Galerie" },
  { to: "/reserver", label: "Réserver" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const { pathname } = useRouterState({ select: (s) => s.location });
  const setCartOpen = useCart((s) => s.setOpen);
  const count = useCart((s) => s.count());
  const heroPages = ["/", "/pizza", "/bar", "/reserver"];
  const isHero = heroPages.includes(pathname);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    setOpen(false);
  }, [pathname]);
  const solid = scrolled || !isHero || open;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.header,
    {
      initial: false,
      animate: {
        backgroundColor: solid ? "rgba(34,34,34,0.92)" : "rgba(34,34,34,0)",
        backdropFilter: solid ? "blur(12px)" : "blur(0px)"
      },
      transition: { duration: 0.3 },
      className: "fixed top-0 inset-x-0 z-50",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl flex items-center justify-between px-5 lg:px-8 h-16 lg:h-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "font-display font-extrabold text-2xl tracking-tight", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "Le" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: " Tablier" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-1", children: LINKS$1.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              className: "relative px-4 py-2 text-sm font-semibold text-white/85 hover:text-white transition",
              activeOptions: { exact: l.to === "/" },
              activeProps: { className: "text-white" },
              children: ({ isActive }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: l.label }),
                isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    layoutId: "nav-underline",
                    className: "absolute left-3 right-3 -bottom-0.5 h-1 rounded-full bg-brand"
                  }
                )
              ] })
            },
            l.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setCartOpen(true),
                className: "relative grid place-items-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white",
                "aria-label": "Panier",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 18 }),
                  count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 bg-brand text-brand-dark text-[10px] font-bold rounded-full h-5 min-w-5 px-1 grid place-items-center", children: count })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/menu",
                className: "hidden sm:inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-brand-dark hover:bg-brand-accent transition",
                children: "Commander"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setOpen((v) => !v),
                className: "lg:hidden grid place-items-center h-10 w-10 rounded-full bg-white/10 text-white",
                "aria-label": "Menu",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 20 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.25 },
            className: "lg:hidden overflow-hidden bg-brand-dark/95 backdrop-blur-xl border-t border-white/10",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-4 flex flex-col gap-1", children: LINKS$1.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: l.to,
                className: "px-3 py-3 rounded-lg text-white font-semibold hover:bg-white/5",
                activeOptions: { exact: l.to === "/" },
                activeProps: { className: "bg-brand/10 text-brand" },
                children: l.label
              },
              l.to
            )) })
          }
        ) })
      ]
    }
  );
}
const WHATSAPP_NUMBER = "22800000000";
const BRAND = {
  tagline: "Cuisine authentique, convivialité sincère",
  address: "Après la pharmacie Shalom, carrefour Bodjona, Agoè Cacavéli, Lomé, Togo",
  hours: "Lundi–Dimanche : 11h00 – 23h00",
  phone: "+228 00 00 00 00",
  instagram: "@restaurant_le_tablier_lome"
};
const waLink = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
const formatFCFA = (n) => new Intl.NumberFormat("fr-FR").format(n) + " FCFA";
const LINKS = [
  { to: "/", label: "Accueil" },
  { to: "/menu", label: "Menu" },
  { to: "/pizza", label: "Pizza" },
  { to: "/bar", label: "Bar" },
  { to: "/gallery", label: "Galerie" },
  { to: "/reserver", label: "Réserver" }
];
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-brand-dark text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-2xl font-extrabold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "Le" }),
          " Tablier"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-white/65 text-sm leading-relaxed max-w-xs", children: BRAND.tagline }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "grid place-items-center h-10 w-10 rounded-full bg-white/10 hover:bg-brand hover:text-brand-dark transition", "aria-label": "Instagram", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "grid place-items-center h-10 w-10 rounded-full bg-white/10 hover:bg-brand hover:text-brand-dark transition", "aria-label": "Facebook", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { size: 18 }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-brand mb-4 uppercase tracking-wider text-xs", children: "Navigation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: LINKS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, className: "text-white/75 hover:text-brand transition text-sm", children: l.label }) }, l.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-brand mb-4 uppercase tracking-wider text-xs", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-white/75", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16, className: "text-brand mt-0.5 shrink-0" }),
            " ",
            BRAND.address
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 16, className: "text-brand mt-0.5 shrink-0" }),
            " ",
            BRAND.hours
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16, className: "text-brand mt-0.5 shrink-0" }),
            " ",
            BRAND.phone
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 py-5 text-center text-xs text-white/50", children: "© 2025 Le Tablier · Lomé, Togo" }) })
  ] });
}
function CartDrawer() {
  const { open, setOpen, lines, setQty, remove, clear, total } = useCart();
  const [name, setName] = reactExports.useState("");
  const [mode, setMode] = reactExports.useState("Sur place");
  const sendOrder = () => {
    const t = total();
    const body = `Bonjour Le Tablier, je souhaite passer une commande :

` + lines.map((l) => `${l.item.name} x ${l.qty} - ${formatFCFA(l.item.price * l.qty)}`).join("\n") + `

Total : ${formatFCFA(t)}

Nom : ${name || "(non précisé)"}
Table / À emporter : ${mode}`;
    window.open(waLink(body), "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setOpen(false),
        className: "fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.aside,
      {
        initial: { x: "100%" },
        animate: { x: 0 },
        exit: { x: "100%" },
        transition: { type: "spring", stiffness: 320, damping: 32 },
        className: "fixed top-0 right-0 z-[70] h-full w-full sm:w-[420px] bg-brand-bg flex flex-col",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-black/10 bg-brand-dark text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-extrabold text-xl flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 20, className: "text-brand" }),
              " Votre panier"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(false), className: "grid place-items-center h-9 w-9 rounded-full hover:bg-white/10", "aria-label": "Fermer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-5 space-y-3", children: [
            lines.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20 text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 48, className: "mx-auto mb-3 opacity-30" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Votre panier est vide" })
            ] }),
            lines.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 bg-white rounded-2xl p-3 border border-black/5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: l.item.image, alt: "", className: "h-16 w-16 rounded-xl object-cover" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm truncate", children: l.item.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-brand-dark-green font-bold text-sm", children: formatFCFA(l.item.price) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 inline-flex items-center gap-2 bg-brand-bg rounded-full px-2 py-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(l.item.id, l.qty - 1), className: "h-6 w-6 grid place-items-center rounded-full hover:bg-brand-dark/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 12 }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold w-5 text-center", children: l.qty }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(l.item.id, l.qty + 1), className: "h-6 w-6 grid place-items-center rounded-full hover:bg-brand-dark/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 12 }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => remove(l.item.id), className: "text-muted-foreground hover:text-destructive", "aria-label": "Retirer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 16 }) })
            ] }, l.item.id))
          ] }),
          lines.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-black/10 p-5 bg-white space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                value: name,
                onChange: (e) => setName(e.target.value),
                placeholder: "Votre nom",
                className: "w-full rounded-xl border border-black/10 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: mode,
                onChange: (e) => setMode(e.target.value),
                className: "w-full rounded-xl border border-black/10 px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Sur place" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "À emporter" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Livraison" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-extrabold text-2xl text-brand-dark-green", children: formatFCFA(total()) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: sendOrder,
                className: "w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand text-brand-dark hover:bg-brand-accent transition py-3.5 font-bold",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 18 }),
                  " Commander via WhatsApp"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: clear, className: "w-full text-xs text-muted-foreground hover:text-destructive", children: "Vider le panier" })
          ] })
        ]
      }
    )
  ] }) });
}
function SplashScreen() {
  const [show, setShow] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } },
      className: "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-bg",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { scale: 0.9, opacity: 0, filter: "blur(10px)" },
            animate: { scale: 1, opacity: 1, filter: "blur(0px)" },
            transition: { duration: 1, ease: "easeOut" },
            className: "relative z-10 text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl font-extrabold tracking-tight text-brand md:text-7xl", children: "LE TABLIER" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.p,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.5, duration: 0.8 },
                  className: "mt-4 font-sans text-sm font-semibold uppercase tracking-[0.3em] text-brand-dark/80",
                  children: "Restaurant · Bar · Pizzeria"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { scaleX: 0 },
            animate: { scaleX: 1 },
            transition: { delay: 0.2, duration: 1.5, ease: "circOut" },
            className: "absolute bottom-1/4 h-[2px] w-48 bg-gradient-to-r from-transparent via-brand to-transparent"
          }
        )
      ]
    },
    "splash"
  ) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-brand-bg px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-8xl font-extrabold text-brand", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Page introuvable" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Cette page n'existe pas ou a été déplacée." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-brand-dark hover:bg-brand-accent transition", children: "Retour à l'accueil" }) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-brand-bg px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-semibold", children: "Cette page n'a pas pu se charger" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Quelque chose s'est mal passé. Veuillez réessayer." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        router2.invalidate();
        reset();
      }, className: "inline-flex items-center rounded-full bg-brand px-5 py-2 text-sm font-bold text-brand-dark hover:bg-brand-accent", children: "Réessayer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "inline-flex items-center rounded-full border border-black/15 px-5 py-2 text-sm font-semibold hover:bg-black/5", children: "Accueil" })
    ] })
  ] }) });
}
const Route$a = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Le Tablier — Restaurant · Bar · Pizzeria à Lomé" },
      { name: "description", content: "Le Tablier — cuisine africaine & européenne, pizzeria et bar à Agoè Cacavéli, Lomé. Cuisine authentique, convivialité sincère." },
      { name: "theme-color", content: "#88D620" },
      { property: "og:title", content: "Le Tablier — Restaurant · Bar · Pizzeria à Lomé" },
      { property: "og:description", content: "Cuisine authentique, convivialité sincère. Restaurant, pizzeria et bar à Agoè Cacavéli, Lomé." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Inter:wght@400;500;600&display=swap"
      },
      { rel: "stylesheet", href: appCss }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "fr", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$a.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isStandalone = pathname.startsWith("/table/") || pathname.startsWith("/reception") || pathname.startsWith("/admin");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SplashScreen, {}),
    !isStandalone && /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: isStandalone ? "" : "min-h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }, pathname) }),
    !isStandalone && /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    !isStandalone && /* @__PURE__ */ jsxRuntimeExports.jsx(CartDrawer, {})
  ] });
}
const $$splitComponentImporter$9 = () => import("./reserver-vHZr_wdX.mjs");
const Route$9 = createFileRoute("/reserver")({
  head: () => ({
    meta: [{
      title: "Réservation — Le Tablier · Lomé"
    }, {
      name: "description",
      content: "Réservez votre table en quelques secondes via WhatsApp."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./reception-Cj7X7rha.mjs");
const Route$8 = createFileRoute("/reception")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./pizza-CssQwbGG.mjs");
const Route$7 = createFileRoute("/pizza")({
  head: () => ({
    meta: [{
      title: "Pizzeria — Le Tablier · Lomé"
    }, {
      name: "description",
      content: "Les meilleures pizzas artisanales de Lomé, cuites avec passion."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./menu-CLw5_TRo.mjs");
const Route$6 = createFileRoute("/menu")({
  head: () => ({
    meta: [{
      title: "Menu — Le Tablier · Lomé"
    }, {
      name: "description",
      content: "Découvrez notre menu : plats africains, cuisine européenne, grillades, salades et desserts. Commande directe via WhatsApp."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./gallery-C4kBTmaP.mjs");
const Route$5 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Galerie — Le Tablier · Lomé"
    }, {
      name: "description",
      content: "Les moments qui font Le Tablier : plats, ambiance, soirées."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-DSWEr8hY.mjs");
const Route$4 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Le Tablier · Lomé"
    }, {
      name: "description",
      content: "Nous trouver : Après la pharmacie Shalom, carrefour Bodjona, Agoè Cacavéli, Lomé."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./bar-Bq5zYiRK.mjs");
const Route$3 = createFileRoute("/bar")({
  head: () => ({
    meta: [{
      title: "Bar & Cocktails — Le Tablier · Lomé"
    }, {
      name: "description",
      content: "Cocktails maison, vins, bières et jus frais. Afterwork tous les soirs à Lomé."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./admin-CC1nJytB.mjs");
const Route$2 = createFileRoute("/admin")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-BJRceKc1.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Le Tablier — Restaurant, Bar & Pizzeria à Lomé"
    }, {
      name: "description",
      content: "Restaurant, bar et pizzeria à Agoè Cacavéli, Lomé. Cuisine africaine et européenne, pizzas artisanales, cocktails et afterwork."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./table._tableNumber-lu7jLrcm.mjs");
const Route = createFileRoute("/table/$tableNumber")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ReserverRoute = Route$9.update({
  id: "/reserver",
  path: "/reserver",
  getParentRoute: () => Route$a
});
const ReceptionRoute = Route$8.update({
  id: "/reception",
  path: "/reception",
  getParentRoute: () => Route$a
});
const PizzaRoute = Route$7.update({
  id: "/pizza",
  path: "/pizza",
  getParentRoute: () => Route$a
});
const MenuRoute = Route$6.update({
  id: "/menu",
  path: "/menu",
  getParentRoute: () => Route$a
});
const GalleryRoute = Route$5.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$a
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$a
});
const BarRoute = Route$3.update({
  id: "/bar",
  path: "/bar",
  getParentRoute: () => Route$a
});
const AdminRoute = Route$2.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$a
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$a
});
const TableTableNumberRoute = Route.update({
  id: "/table/$tableNumber",
  path: "/table/$tableNumber",
  getParentRoute: () => Route$a
});
const rootRouteChildren = {
  IndexRoute,
  AdminRoute,
  BarRoute,
  ContactRoute,
  GalleryRoute,
  MenuRoute,
  PizzaRoute,
  ReceptionRoute,
  ReserverRoute,
  TableTableNumberRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  BRAND as B,
  Route as R,
  formatFCFA as f,
  router as r,
  useCart as u,
  waLink as w
};
