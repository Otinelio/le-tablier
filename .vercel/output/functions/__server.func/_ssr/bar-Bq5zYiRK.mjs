import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageTransition } from "./PageTransition-BbgeDiQW.mjs";
import { C as CategoryGrid } from "./CategoryGrid-DFaGQhPS.mjs";
import { D as DRINKS } from "./data-CqoRGv6A.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { f as Clock, j as Music } from "../_libs/lucide-react.mjs";
import "./MenuItemCard-BmC2D_Ae.mjs";
import "./router-VePpLlT-.mjs";
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
function BarPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[85vh] flex items-center text-white overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1920&q=80", alt: "", className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-brand-dark/75" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-7xl px-6 py-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block bg-brand text-brand-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest", children: "Bar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-black text-5xl sm:text-7xl lg:text-8xl mt-4", children: [
          "Le ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "Bar" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-white/80 max-w-xl", children: "Afterwork · Cocktails · Ambiance. Le rendez-vous des soirées loméennes." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 30
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, className: "relative overflow-hidden rounded-3xl bg-brand text-brand-dark p-8 sm:p-12 grid md:grid-cols-3 gap-8 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-widest", children: "Tous les jours" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-extrabold text-3xl sm:text-4xl mt-2", children: "Rejoignez-nous pour l'afterwork" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-lg text-brand-dark/85", children: "Cocktails signature, musique conviviale et ambiance détendue. Le bon moment pour décompresser entre amis ou collègues." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 bg-brand-dark/10 rounded-xl px-4 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 22 }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "18h00 — 22h00" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 bg-brand-dark/10 rounded-xl px-4 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { size: 22 }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "DJ & lounge" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 pb-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryGrid, { items: DRINKS }) })
  ] });
}
export {
  BarPage as component
};
