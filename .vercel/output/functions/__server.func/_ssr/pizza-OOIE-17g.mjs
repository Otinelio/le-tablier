import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageTransition } from "./PageTransition-BbgeDiQW.mjs";
import { C as CategoryGrid } from "./CategoryGrid-D-2NdeC-.mjs";
import { P as PIZZAS } from "./data-CqoRGv6A.mjs";
import { u as useCart, f as formatFCFA } from "./router-CmvoSLc3.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { e as CircleCheckBig, n as ShoppingCart } from "../_libs/lucide-react.mjs";
import "./MenuItemCard-CzjRtBeb.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/zustand.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function PizzaPage() {
  const featured = PIZZAS.find((p) => p.name === "Spéciale Le Tablier");
  const add = useCart((s) => s.add);
  const ingredients = ["Mozzarella fior di latte", "Tomate San Marzano", "Pepperoni épicé", "Champignons", "Recette maison"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[90vh] flex items-center text-white overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1920&q=80", alt: "", className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-dark/70 to-brand-dark-green/70" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { "aria-hidden": true, animate: {
        rotate: 360
      }, transition: {
        duration: 60,
        repeat: Infinity,
        ease: "linear"
      }, className: "absolute -right-32 -top-32 w-[420px] h-[420px] rounded-full border-[24px] border-dashed border-brand/40 hidden md:block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-7xl px-6 py-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block bg-brand text-brand-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest", children: "Pizzeria" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-black text-5xl sm:text-7xl lg:text-8xl mt-4 leading-[0.95]", children: [
          "La ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "Pizzeria" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-white/80 max-w-xl", children: "Les meilleures pizzas de Lomé, cuites avec passion dans notre four artisanal." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white border-y border-black/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.9
      }, whileInView: {
        opacity: 1,
        scale: 1
      }, viewport: {
        once: true
      }, className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square rounded-full overflow-hidden shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: featured.image, alt: featured.name, className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-6 left-6 bg-brand text-brand-dark px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg", children: "Pizza de la semaine" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-extrabold text-4xl sm:text-5xl", children: featured.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground text-lg", children: featured.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2", children: ingredients.map((ing) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 18, className: "text-brand shrink-0" }),
          " ",
          ing
        ] }, ing)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-extrabold text-3xl text-brand-dark-green", children: formatFCFA(featured.price) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => add(featured), className: "inline-flex items-center gap-2 rounded-full bg-brand-dark text-white hover:bg-brand hover:text-brand-dark transition px-7 py-3.5 font-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 18 }),
            " Commander maintenant"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryGrid, { items: PIZZAS }) })
  ] });
}
export {
  PizzaPage as component
};
