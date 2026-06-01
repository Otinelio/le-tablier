import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useCart, f as formatFCFA } from "./router-VePpLlT-.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { l as Plus } from "../_libs/lucide-react.mjs";
function MenuItemCard({ item }) {
  const add = useCart((s) => s.add);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.article,
    {
      whileHover: { y: -6 },
      transition: { type: "spring", stiffness: 300, damping: 20 },
      className: "group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-black/5 flex flex-col",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden bg-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: item.image,
              alt: item.name,
              loading: "lazy",
              className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 bg-brand text-brand-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full", children: item.category })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col gap-2 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-extrabold text-lg leading-tight", children: item.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2", children: item.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-3 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-brand-dark-green text-lg", children: formatFCFA(item.price) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.button,
              {
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                onClick: () => add(item),
                className: "inline-flex items-center gap-1 rounded-full bg-brand-dark text-white hover:bg-brand hover:text-brand-dark transition px-4 py-2 text-sm font-bold",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }),
                  " Ajouter"
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  MenuItemCard as M
};
