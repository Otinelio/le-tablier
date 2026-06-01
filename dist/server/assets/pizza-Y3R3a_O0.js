import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { CheckCircle, ShoppingCart } from "lucide-react";
import { P as PageTransition } from "./PageTransition-BbgeDiQW.js";
import { C as CategoryGrid } from "./CategoryGrid-NqO0wzHY.js";
import { P as PIZZAS } from "./data-CqoRGv6A.js";
import { u as useCart, f as formatFCFA } from "./router-DRXdjWbB.js";
import "react";
import "./MenuItemCard-C364xvOP.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "zustand";
import "zustand/middleware";
function PizzaPage() {
  const featured = PIZZAS.find((p) => p.name === "Spéciale Le Tablier");
  const add = useCart((s) => s.add);
  const ingredients = ["Mozzarella fior di latte", "Tomate San Marzano", "Pepperoni épicé", "Champignons", "Recette maison"];
  return /* @__PURE__ */ jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-[90vh] flex items-center text-white overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1920&q=80", alt: "", className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-dark/70 to-brand-dark-green/70" })
      ] }),
      /* @__PURE__ */ jsx(motion.div, { "aria-hidden": true, animate: {
        rotate: 360
      }, transition: {
        duration: 60,
        repeat: Infinity,
        ease: "linear"
      }, className: "absolute -right-32 -top-32 w-[420px] h-[420px] rounded-full border-[24px] border-dashed border-brand/40 hidden md:block" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto max-w-7xl px-6 py-32", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block bg-brand text-brand-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest", children: "Pizzeria" }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display font-black text-5xl sm:text-7xl lg:text-8xl mt-4 leading-[0.95]", children: [
          "La ",
          /* @__PURE__ */ jsx("span", { className: "text-brand", children: "Pizzeria" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-lg text-white/80 max-w-xl", children: "Les meilleures pizzas de Lomé, cuites avec passion dans notre four artisanal." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-white border-y border-black/5", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.9
      }, whileInView: {
        opacity: 1,
        scale: 1
      }, viewport: {
        once: true
      }, className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-square rounded-full overflow-hidden shadow-2xl", children: /* @__PURE__ */ jsx("img", { src: featured.image, alt: featured.name, className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsx("span", { className: "absolute top-6 left-6 bg-brand text-brand-dark px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg", children: "Pizza de la semaine" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display font-extrabold text-4xl sm:text-5xl", children: featured.name }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground text-lg", children: featured.description }),
        /* @__PURE__ */ jsx("ul", { className: "mt-6 space-y-2", children: ingredients.map((ing) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm font-medium", children: [
          /* @__PURE__ */ jsx(CheckCircle, { size: 18, className: "text-brand shrink-0" }),
          " ",
          ing
        ] }, ing)) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center gap-6", children: [
          /* @__PURE__ */ jsx("span", { className: "font-display font-extrabold text-3xl text-brand-dark-green", children: formatFCFA(featured.price) }),
          /* @__PURE__ */ jsxs("button", { onClick: () => add(featured), className: "inline-flex items-center gap-2 rounded-full bg-brand-dark text-white hover:bg-brand hover:text-brand-dark transition px-7 py-3.5 font-bold", children: [
            /* @__PURE__ */ jsx(ShoppingCart, { size: 18 }),
            " Commander maintenant"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-6 py-14", children: /* @__PURE__ */ jsx(CategoryGrid, { items: PIZZAS }) })
  ] });
}
export {
  PizzaPage as component
};
