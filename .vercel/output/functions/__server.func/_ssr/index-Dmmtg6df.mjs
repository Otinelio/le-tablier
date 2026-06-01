import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageTransition } from "./PageTransition-BbgeDiQW.mjs";
import { M as MenuItemCard } from "./MenuItemCard-CzjRtBeb.mjs";
import { M as MENU, P as PIZZAS } from "./data-CqoRGv6A.mjs";
import { w as waLink } from "./router-CmvoSLc3.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { a as ArrowRight, b as ChevronDown, q as UtensilsCrossed, k as Pizza, W as Wine, U as Users, o as Star, h as MessageCircle } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/zustand.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const stats = [{
  Icon: UtensilsCrossed,
  label: "Cuisine africaine & européenne"
}, {
  Icon: Pizza,
  label: "Les meilleures pizzas de Lomé"
}, {
  Icon: Wine,
  label: "Bar & afterwork"
}, {
  Icon: Users,
  label: "Ambiance conviviale"
}];
const universes = [{
  title: "Restaurant",
  desc: "Plats du jour, cuisine maison, mets savoureux.",
  img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
  to: "/menu"
}, {
  title: "Pizzeria",
  desc: "Nos pizzas artisanales font le bonheur de Lomé.",
  img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
  to: "/pizza"
}, {
  title: "Bar",
  desc: "Afterwork, cocktails, ambiance détendue.",
  img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80",
  to: "/bar"
}];
const testimonials = [{
  name: "Aïcha K.",
  text: "Le meilleur Poulet DG de Lomé, ambiance super chaleureuse."
}, {
  name: "Marc D.",
  text: "Pizzas artisanales incroyables et un service au top."
}, {
  name: "Yasmine A.",
  text: "Mon spot afterwork préféré, cocktails à tomber !"
}];
function HomePage() {
  const popular = [...MENU.slice(0, 4), ...PIZZAS.slice(0, 2)];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[100svh] flex items-center overflow-hidden text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80", alt: "", className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-brand-dark/85 via-brand-dark/70 to-brand-dark-green/60" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { "aria-hidden": true, animate: {
        scale: [1, 1.15, 1],
        rotate: [0, 30, 0],
        borderRadius: ["50%", "40%", "50%"]
      }, transition: {
        duration: 14,
        repeat: Infinity,
        ease: "easeInOut"
      }, className: "absolute -top-20 -right-20 lg:right-20 h-[420px] w-[420px] bg-brand/35 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { "aria-hidden": true, animate: {
        scale: [1, 1.2, 1],
        x: [0, 30, 0]
      }, transition: {
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut"
      }, className: "absolute bottom-10 -left-20 h-80 w-80 bg-brand-accent/25 blur-3xl rounded-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 grid gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.span, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.1
        }, className: "inline-flex w-fit items-center gap-2 rounded-full bg-brand/15 backdrop-blur border border-brand/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-brand animate-pulse" }),
          " Ouvert · Lomé · Togo"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.2
        }, className: "font-display font-black text-5xl sm:text-7xl lg:text-8xl leading-[0.9] max-w-4xl", children: [
          "Bienvenue chez ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "Le Tablier" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.35
        }, className: "text-lg sm:text-xl text-white/75 max-w-xl", children: "Restaurant · Bar · Pizzeria à Lomé. Cuisine authentique, convivialité sincère." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.5
        }, className: "flex flex-wrap gap-4 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/menu", className: "inline-flex items-center gap-2 rounded-full bg-brand text-brand-dark hover:bg-brand-accent transition px-7 py-3.5 font-bold text-sm sm:text-base", children: [
            "Voir le Menu ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/reserver", className: "inline-flex items-center gap-2 rounded-full border-2 border-white/40 hover:border-brand hover:text-brand transition px-7 py-3.5 font-bold text-sm sm:text-base", children: "Réserver une table" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
        y: [0, 10, 0]
      }, transition: {
        duration: 2,
        repeat: Infinity
      }, className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 28 }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-brand-dark-green text-white relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 py-14 grid grid-cols-2 lg:grid-cols-4 gap-6", children: stats.map(({
      Icon,
      label
    }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 30
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.1
    }, className: "flex items-start gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 shrink-0 rounded-2xl bg-brand grid place-items-center text-brand-dark", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-base sm:text-lg leading-snug", children: label })
    ] }, label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-brand-dark-green", children: "Notre univers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-extrabold text-4xl sm:text-5xl mt-2", children: "Trois lieux, une seule âme" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: universes.map((u, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 40
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.1
      }, whileHover: {
        y: -8
      }, className: "group relative bg-white rounded-3xl overflow-hidden shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: u.img, alt: u.title, loading: "lazy", className: "h-full w-full object-cover transition duration-700 group-hover:scale-110" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/20 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-6 text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-extrabold text-3xl", children: u.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-white/80 max-w-xs", children: u.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: u.to, className: "mt-4 inline-flex items-center gap-1 text-brand font-bold text-sm group-hover:gap-2 transition-all", children: [
              "Découvrir ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 left-0 right-0 h-1 bg-brand scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" })
      ] }, u.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white border-y border-black/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-4 mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-brand-dark-green", children: "Les plats du moment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-extrabold text-4xl sm:text-5xl mt-2", children: "Coups de cœur" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/menu", className: "inline-flex items-center gap-1 text-brand-dark-green font-bold hover:gap-2 transition-all", children: [
          "Voir tout le menu ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: popular.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItemCard, { item }, item.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ReservationCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-brand-dark-green", children: "Ils en parlent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-extrabold text-4xl sm:text-5xl mt-2", children: "Ce que disent nos invités" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.1
      }, className: "bg-white rounded-3xl p-8 shadow-sm border border-black/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-4 text-brand", children: Array.from({
          length: 5
        }).map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 16, fill: "currentColor" }, k)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm leading-relaxed text-foreground/85", children: [
          '"',
          t.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 font-display font-bold", children: t.name })
      ] }, t.name)) })
    ] })
  ] });
}
function ReservationCTA() {
  const [f, setF] = reactExports.useState({
    name: "",
    date: "",
    time: "19:00",
    guests: "2"
  });
  const send = () => {
    const body = `Bonjour Le Tablier, je voudrais réserver une table :

Nom : ${f.name}
Date : ${f.date}
Heure : ${f.time}
Nombre de personnes : ${f.guests}

Merci de confirmer ma réservation.`;
    window.open(waLink(body), "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-brand-dark text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-32 top-0 bottom-0 w-[60%] bg-brand origin-top-right -skew-x-12 opacity-95" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-10 top-10 bottom-10 w-1 bg-brand-accent hidden lg:block" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block bg-white/10 text-brand px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest", children: "Réservation rapide" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-extrabold text-4xl sm:text-5xl mt-4 leading-tight", children: "Réservez votre table en quelques secondes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/70 max-w-md", children: "Confirmation immédiate via WhatsApp. Notre équipe vous répond rapidement." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-white text-brand-dark rounded-3xl p-6 sm:p-8 shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: f.name, onChange: (e) => setF({
            ...f,
            name: e.target.value
          }), placeholder: "Votre nom", className: "rounded-xl border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand sm:col-span-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: f.date, onChange: (e) => setF({
            ...f,
            date: e.target.value
          }), className: "rounded-xl border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "time", value: f.time, onChange: (e) => setF({
            ...f,
            time: e.target.value
          }), className: "rounded-xl border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: f.guests, onChange: (e) => setF({
            ...f,
            guests: e.target.value
          }), className: "rounded-xl border border-black/10 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand sm:col-span-2", children: [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: n, children: [
            n,
            " personne",
            n > 1 ? "s" : ""
          ] }, n)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: send, className: "mt-4 w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-dark text-white hover:bg-brand hover:text-brand-dark transition py-3.5 font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 18 }),
          " Envoyer la réservation"
        ] })
      ] })
    ] })
  ] });
}
export {
  HomePage as component
};
