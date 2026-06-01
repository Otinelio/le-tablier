import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { M as MenuItemCard } from "./MenuItemCard-CzjRtBeb.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function CategoryGrid({ items }) {
  const categories = reactExports.useMemo(() => ["Tout", ...Array.from(new Set(items.map((i) => i.category)))], [items]);
  const [active, setActive] = reactExports.useState("Tout");
  const filtered = active === "Tout" ? items : items.filter((i) => i.category === active);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-16 lg:top-20 z-30 -mx-6 px-6 py-3 bg-brand-bg/85 backdrop-blur-xl border-b border-black/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto scrollbar-hide", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setActive(c),
        className: `shrink-0 px-4 py-2 rounded-full text-sm font-bold transition ${active === c ? "bg-brand text-brand-dark" : "bg-white text-brand-dark/70 hover:bg-black/5"}`,
        children: c
      },
      c
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layout: true, className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layout: true, initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItemCard, { item }) }, item.id)) })
  ] });
}
export {
  CategoryGrid as C
};
