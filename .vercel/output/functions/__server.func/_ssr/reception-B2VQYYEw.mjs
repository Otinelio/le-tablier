import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { P as PINGate } from "./PINGate-tVSKC2lD.mjs";
import { u as useOrders } from "./orderStore-LrscOaS8.mjs";
import { f as formatFCFA } from "./router-CmvoSLc3.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { B as Bell, H as History, f as Clock, T as Trash2 } from "../_libs/lucide-react.mjs";
import "../_libs/zustand.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const STATUS = [{
  v: "Reçue",
  color: "bg-yellow-400"
}, {
  v: "En préparation",
  color: "bg-blue-500"
}, {
  v: "Servie",
  color: "bg-emerald-500"
}];
function Reception() {
  const orders = useOrders((s) => s.orders);
  const setStatus = useOrders((s) => s.setStatus);
  const remove = useOrders((s) => s.remove);
  const lastCount = reactExports.useRef(orders.length);
  const [tab, setTab] = reactExports.useState("live");
  const [, setTick] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const i = setInterval(() => {
      useOrders.persist.rehydrate();
      setTick((t) => t + 1);
    }, 3e3);
    return () => clearInterval(i);
  }, []);
  reactExports.useEffect(() => {
    if (orders.length > lastCount.current) {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g);
        g.connect(ctx.destination);
        o.frequency.value = 880;
        o.type = "sine";
        g.gain.setValueAtTime(1e-4, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.05);
        g.gain.exponentialRampToValueAtTime(1e-4, ctx.currentTime + 0.6);
        o.start();
        o.stop(ctx.currentTime + 0.6);
      } catch {
      }
    }
    lastCount.current = orders.length;
  }, [orders.length]);
  const todays = reactExports.useMemo(() => {
    const start = /* @__PURE__ */ new Date();
    start.setHours(0, 0, 0, 0);
    return orders.filter((o) => o.createdAt >= start.getTime());
  }, [orders]);
  const liveOrders = orders.filter((o) => o.status !== "Servie");
  const summary = reactExports.useMemo(() => {
    const counts = {};
    todays.forEach((o) => o.lines.forEach((l) => {
      counts[l.name] = (counts[l.name] || 0) + l.qty;
    }));
    const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
    return {
      total: todays.length,
      revenue: todays.reduce((t, o) => t + o.total, 0),
      top: top ? top[0] : "—"
    };
  }, [todays]);
  const list = tab === "live" ? liveOrders : orders;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-brand-dark text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "px-6 py-5 border-b border-white/10 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: liveOrders.length ? {
          scale: [1, 1.2, 1]
        } : {}, transition: {
          duration: 1,
          repeat: Infinity
        }, className: "h-10 w-10 rounded-full bg-brand grid place-items-center text-brand-dark", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 20 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-extrabold text-xl", children: "Réception · Le Tablier" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/60", children: "Mise à jour en temps réel" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab("live"), className: `px-4 py-2 rounded-full text-sm font-bold ${tab === "live" ? "bg-brand text-brand-dark" : "bg-white/10 text-white"}`, children: "En direct" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setTab("history"), className: `px-4 py-2 rounded-full text-sm font-bold inline-flex items-center gap-1 ${tab === "history" ? "bg-brand text-brand-dark" : "bg-white/10 text-white"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(History, { size: 14 }),
          " Historique"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 grid sm:grid-cols-3 gap-3 border-b border-white/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Commandes du jour", value: String(summary.total) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Recettes du jour", value: formatFCFA(summary.revenue) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Plat le + commandé", value: summary.top })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 grid lg:grid-cols-2 gap-4", children: [
      list.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 text-center py-20 text-white/50", children: [
        "Aucune commande ",
        tab === "live" ? "en cours" : "dans l'historique",
        "."
      ] }),
      list.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { layout: true, initial: {
        opacity: 0,
        y: 10
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "bg-white/5 border border-white/10 rounded-2xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/50 uppercase tracking-widest", children: "Table" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-extrabold text-3xl text-brand", children: o.table })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-white/50 flex items-center justify-end gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 12 }),
              " ",
              new Date(o.createdAt).toLocaleTimeString("fr-FR")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold mt-1", children: formatFCFA(o.total) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-1 text-sm text-white/85", children: o.lines.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            l.name,
            " × ",
            l.qty
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/55", children: formatFCFA(l.price * l.qty) })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: STATUS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setStatus(o.id, s.v), className: `px-3 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 ${o.status === s.v ? "bg-brand text-brand-dark" : "bg-white/10 text-white/70 hover:bg-white/15"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 w-1.5 rounded-full ${s.color}` }),
            " ",
            s.v
          ] }, s.v)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => remove(o.id), className: "text-white/40 hover:text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 16 }) })
        ] })
      ] }, o.id))
    ] })
  ] });
}
function Stat({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/10 rounded-2xl px-5 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-white/50", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-extrabold text-2xl text-brand mt-1", children: value })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(PINGate, { pin: "9999", label: "Réception", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reception, {}) });
export {
  SplitComponent as component
};
