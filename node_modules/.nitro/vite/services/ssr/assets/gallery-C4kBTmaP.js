import { jsxs, jsx } from "react/jsx-runtime";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import { P as PageTransition } from "./PageTransition-BbgeDiQW.js";
const IMGS = [["photo-1414235077428-338989a2e8c0", "Ambiance restaurant"], ["photo-1574071318508-1cdbab80d002", "Pizza artisanale"], ["photo-1551024506-0bccd828d307", "Cocktail signature"], ["photo-1517248135467-4c7edcad34c4", "Soirée conviviale"], ["photo-1565299624946-b28f40a0ca4b", "Plat africain"], ["photo-1546964124-0cce460f38ef", "Plat européen"], ["photo-1514362545857-3bc16c4c7d1b", "Le bar"], ["photo-1604908176997-125f25cc6f3d", "Poulet DG"], ["photo-1606851094291-6efae152bb87", "Attiéké poisson"], ["photo-1559339352-11d035aa65de", "Afterwork"], ["photo-1555939594-58d7cb561ad1", "Service en salle"], ["photo-1571997478779-2adcbbe9ab2f", "Convives heureux"]];
function GalleryPage() {
  const [active, setActive] = useState(null);
  const next = () => setActive((i) => i === null ? null : (i + 1) % IMGS.length);
  const prev = () => setActive((i) => i === null ? null : (i - 1 + IMGS.length) % IMGS.length);
  return /* @__PURE__ */ jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsxs("section", { className: "pt-32 pb-10 mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-brand-dark-green", children: "Galerie" }),
      /* @__PURE__ */ jsx("h1", { className: "font-display font-black text-5xl sm:text-7xl mt-2", children: "Notre Galerie" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground max-w-xl", children: "Les moments qui font Le Tablier." })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-6 pb-24", children: /* @__PURE__ */ jsx("div", { className: "columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5", children: IMGS.map(([id, title], i) => /* @__PURE__ */ jsxs(motion.button, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: i % 6 * 0.05
    }, onClick: () => setActive(i), className: "group relative block w-full overflow-hidden rounded-2xl bg-muted break-inside-avoid", children: [
      /* @__PURE__ */ jsx("img", { src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`, alt: title, loading: "lazy", className: "w-full transition duration-500 group-hover:scale-105" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/60 transition flex items-center justify-center text-white opacity-0 group-hover:opacity-100", children: /* @__PURE__ */ jsx(ZoomIn, { size: 32 }) })
    ] }, id)) }) }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: active !== null && /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, className: "fixed inset-0 z-[80] bg-brand-dark/95 grid place-items-center p-6", onClick: () => setActive(null), children: [
      /* @__PURE__ */ jsx("button", { onClick: (e) => {
        e.stopPropagation();
        setActive(null);
      }, className: "absolute top-5 right-5 h-12 w-12 rounded-full bg-white/10 grid place-items-center text-white hover:bg-brand hover:text-brand-dark", children: /* @__PURE__ */ jsx(X, {}) }),
      /* @__PURE__ */ jsx("button", { onClick: (e) => {
        e.stopPropagation();
        prev();
      }, className: "absolute left-5 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 grid place-items-center text-white hover:bg-brand hover:text-brand-dark", children: /* @__PURE__ */ jsx(ChevronLeft, {}) }),
      /* @__PURE__ */ jsx("button", { onClick: (e) => {
        e.stopPropagation();
        next();
      }, className: "absolute right-5 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 grid place-items-center text-white hover:bg-brand hover:text-brand-dark", children: /* @__PURE__ */ jsx(ChevronRight, {}) }),
      /* @__PURE__ */ jsx(motion.img, { initial: {
        scale: 0.95,
        opacity: 0
      }, animate: {
        scale: 1,
        opacity: 1
      }, src: `https://images.unsplash.com/${IMGS[active][0]}?auto=format&fit=crop&w=1600&q=85`, alt: IMGS[active][1], className: "max-h-[85vh] max-w-full rounded-2xl object-contain", onClick: (e) => e.stopPropagation() }, active),
      /* @__PURE__ */ jsx("p", { className: "absolute bottom-6 left-0 right-0 text-center text-white font-display font-bold", children: IMGS[active][1] })
    ] }) })
  ] });
}
export {
  GalleryPage as component
};
