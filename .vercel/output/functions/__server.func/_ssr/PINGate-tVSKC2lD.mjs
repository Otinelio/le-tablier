import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { L as Lock } from "../_libs/lucide-react.mjs";
function PINGate({ pin, label, children }) {
  const [entered, setEntered] = reactExports.useState("");
  const [unlocked, setUnlocked] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(false);
  const press = (d) => {
    setError(false);
    const next = (entered + d).slice(0, 4);
    setEntered(next);
    if (next.length === 4) {
      if (next === pin) setTimeout(() => setUnlocked(true), 200);
      else {
        setError(true);
        setTimeout(() => setEntered(""), 600);
      }
    }
  };
  const clear = () => {
    setEntered("");
    setError(false);
  };
  if (unlocked) return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen grid place-items-center bg-brand-dark text-white px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, className: "w-full max-w-sm text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-16 w-16 rounded-2xl bg-brand grid place-items-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "text-brand-dark", size: 28 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-extrabold text-2xl mb-1", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-sm mb-8", children: "Entrez le code à 4 chiffres" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: error ? { x: [-8, 8, -6, 6, 0] } : {}, className: "flex justify-center gap-3 mb-8", children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-14 w-14 rounded-2xl border-2 grid place-items-center text-2xl font-bold ${entered[i] ? "border-brand bg-brand/10" : "border-white/20"} ${error ? "border-destructive" : ""}`, children: entered[i] ? "•" : "" }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
      ["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => press(d), className: "h-16 rounded-2xl bg-white/5 hover:bg-brand hover:text-brand-dark transition font-display text-2xl font-bold", children: d }, d)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: clear, className: "h-16 rounded-2xl bg-white/5 hover:bg-white/10 text-sm font-semibold", children: "Effacer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => press("0"), className: "h-16 rounded-2xl bg-white/5 hover:bg-brand hover:text-brand-dark transition font-display text-2xl font-bold", children: "0" })
    ] })
  ] }) });
}
export {
  PINGate as P
};
