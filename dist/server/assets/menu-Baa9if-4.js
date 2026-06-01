import { jsxs, jsx } from "react/jsx-runtime";
import { P as PageTransition } from "./PageTransition-BbgeDiQW.js";
import { C as CategoryGrid } from "./CategoryGrid-NqO0wzHY.js";
import { M as MENU } from "./data-CqoRGv6A.js";
import "framer-motion";
import "react";
import "./MenuItemCard-C364xvOP.js";
import "lucide-react";
import "./router-DRXdjWbB.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "zustand";
import "zustand/middleware";
function MenuPage() {
  return /* @__PURE__ */ jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative h-[55vh] min-h-[420px] flex items-end text-white overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&q=80", alt: "", className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/40" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto max-w-7xl px-6 pb-14 w-full", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block bg-brand text-brand-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest", children: "Cuisine" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display font-black text-5xl sm:text-7xl mt-3", children: "Notre Menu" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-white/80 max-w-xl", children: "Cuisine africaine authentique & saveurs européennes, préparées chaque jour avec passion." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-6 py-14", children: /* @__PURE__ */ jsx(CategoryGrid, { items: MENU }) })
  ] });
}
export {
  MenuPage as component
};
