import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowLeft, Plus, ShoppingCart, Minus, Trash2 } from "lucide-react";
import { M as MENU, P as PIZZAS, D as DRINKS } from "./data-CqoRGv6A.js";
import { R as Route, u as useCart, f as formatFCFA, w as waLink } from "./router-DRXdjWbB.js";
import { u as useOrders } from "./orderStore-LrscOaS8.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "zustand";
import "zustand/middleware";
const TABS = [{
  key: "menu",
  label: "Menu",
  items: MENU
}, {
  key: "pizza",
  label: "Pizza",
  items: PIZZAS
}, {
  key: "bar",
  label: "Bar",
  items: DRINKS
}];
function TablePage() {
  const {
    tableNumber
  } = Route.useParams();
  const [tab, setTab] = useState("menu");
  const [confirmed, setConfirmed] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const {
    lines,
    add,
    setQty,
    remove,
    clear,
    total,
    count
  } = useCart();
  const addOrder = useOrders((s) => s.add);
  const items = TABS.find((t) => t.key === tab).items;
  const submit = () => {
    if (!lines.length) return;
    const t = total();
    addOrder({
      table: tableNumber,
      total: t,
      lines: lines.map((l) => ({
        name: l.item.name,
        qty: l.qty,
        price: l.item.price
      }))
    });
    const body = `NOUVELLE COMMANDE - Table ${tableNumber}

` + lines.map((l) => `${l.item.name} x ${l.qty} - ${formatFCFA(l.item.price * l.qty)}`).join("\n") + `

Total : ${formatFCFA(t)}
Heure : ${(/* @__PURE__ */ new Date()).toLocaleTimeString("fr-FR")}`;
    window.open(waLink(body), "_blank");
    clear();
    setShowCart(false);
    setConfirmed(true);
  };
  if (confirmed) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-brand-bg grid place-items-center px-6", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
      scale: 0.9,
      opacity: 0
    }, animate: {
      scale: 1,
      opacity: 1
    }, className: "text-center max-w-md", children: [
      /* @__PURE__ */ jsx(motion.div, { animate: {
        scale: [1, 1.1, 1]
      }, transition: {
        duration: 1.5,
        repeat: Infinity
      }, className: "mx-auto h-24 w-24 rounded-full bg-brand grid place-items-center mb-6", children: /* @__PURE__ */ jsx(CheckCircle, { size: 48, className: "text-brand-dark" }) }),
      /* @__PURE__ */ jsx("h1", { className: "font-display font-extrabold text-3xl", children: "Commande envoyée !" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "Notre équipe arrive bientôt à votre table." }),
      /* @__PURE__ */ jsxs("button", { onClick: () => setConfirmed(false), className: "mt-8 inline-flex items-center gap-2 rounded-full bg-brand-dark text-white px-6 py-3 font-bold hover:bg-brand hover:text-brand-dark transition", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { size: 16 }),
        " Nouvelle commande"
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-brand-bg pb-32", children: [
    /* @__PURE__ */ jsxs("header", { className: "bg-gradient-to-br from-brand to-brand-dark-green text-white px-6 py-8", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-widest text-brand-dark/70", children: "Le Tablier" }),
      /* @__PURE__ */ jsxs("h1", { className: "font-display font-black text-3xl mt-1", children: [
        "Table ",
        tableNumber
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-brand-dark/70 mt-1", children: "Commandez directement depuis votre table" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "sticky top-0 z-30 bg-brand-bg/90 backdrop-blur-xl border-b border-black/10", children: /* @__PURE__ */ jsx("div", { className: "flex", children: TABS.map((t) => /* @__PURE__ */ jsx("button", { onClick: () => setTab(t.key), className: `flex-1 py-4 text-sm font-bold transition ${tab === t.key ? "text-brand-dark border-b-2 border-brand" : "text-muted-foreground"}`, children: t.label }, t.key)) }) }),
    /* @__PURE__ */ jsx("div", { className: "px-4 py-5 grid sm:grid-cols-2 gap-3", children: items.map((item) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-3 flex gap-3 border border-black/5", children: [
      /* @__PURE__ */ jsx("img", { src: item.image, alt: "", className: "h-20 w-20 rounded-xl object-cover shrink-0" }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsx("p", { className: "font-bold text-sm truncate", children: item.name }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground line-clamp-2 mt-0.5", children: item.description }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-brand-dark-green text-sm", children: formatFCFA(item.price) }),
          /* @__PURE__ */ jsx("button", { onClick: () => add(item), className: "h-8 w-8 rounded-full bg-brand grid place-items-center text-brand-dark hover:bg-brand-accent", children: /* @__PURE__ */ jsx(Plus, { size: 16 }) })
        ] })
      ] })
    ] }, item.id)) }),
    count > 0 && /* @__PURE__ */ jsx(motion.div, { initial: {
      y: 100
    }, animate: {
      y: 0
    }, className: "fixed bottom-0 inset-x-0 z-40 bg-brand-dark text-white p-4 shadow-2xl", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 max-w-md mx-auto", children: [
      /* @__PURE__ */ jsxs("button", { onClick: () => setShowCart(true), className: "flex items-center gap-2 flex-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(ShoppingCart, { size: 22 }),
          /* @__PURE__ */ jsx("span", { className: "absolute -top-2 -right-2 bg-brand text-brand-dark text-[10px] font-bold rounded-full h-5 min-w-5 px-1 grid place-items-center", children: count })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs text-white/60", children: "Total" }),
          /* @__PURE__ */ jsx("p", { className: "font-display font-bold", children: formatFCFA(total()) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: submit, className: "rounded-full bg-brand text-brand-dark px-6 py-3 font-bold hover:bg-brand-accent transition", children: "Commander" })
    ] }) }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: showCart && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, exit: {
        opacity: 0
      }, onClick: () => setShowCart(false), className: "fixed inset-0 z-50 bg-black/60" }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        y: "100%"
      }, animate: {
        y: 0
      }, exit: {
        y: "100%"
      }, transition: {
        type: "spring",
        damping: 30
      }, className: "fixed bottom-0 inset-x-0 z-50 bg-white rounded-t-3xl max-h-[80vh] flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-5 border-b border-black/10 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display font-extrabold text-xl", children: "Votre commande" }),
          /* @__PURE__ */ jsx("button", { onClick: () => setShowCart(false), className: "text-sm font-semibold", children: "Fermer" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto p-5 space-y-3", children: lines.map((l) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("img", { src: l.item.image, alt: "", className: "h-12 w-12 rounded-lg object-cover" }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: l.item.name }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: formatFCFA(l.item.price) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-brand-bg rounded-full px-2 py-1", children: [
            /* @__PURE__ */ jsx("button", { onClick: () => setQty(l.item.id, l.qty - 1), className: "h-6 w-6 grid place-items-center rounded-full", children: /* @__PURE__ */ jsx(Minus, { size: 12 }) }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-bold w-5 text-center", children: l.qty }),
            /* @__PURE__ */ jsx("button", { onClick: () => setQty(l.item.id, l.qty + 1), className: "h-6 w-6 grid place-items-center rounded-full", children: /* @__PURE__ */ jsx(Plus, { size: 12 }) })
          ] }),
          /* @__PURE__ */ jsx("button", { onClick: () => remove(l.item.id), className: "text-muted-foreground", children: /* @__PURE__ */ jsx(Trash2, { size: 16 }) })
        ] }, l.item.id)) }),
        /* @__PURE__ */ jsxs("div", { className: "p-5 border-t border-black/10 space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Total" }),
            /* @__PURE__ */ jsx("span", { className: "font-display font-extrabold text-2xl text-brand-dark-green", children: formatFCFA(total()) })
          ] }),
          /* @__PURE__ */ jsx("button", { onClick: submit, className: "w-full rounded-full bg-brand text-brand-dark py-3.5 font-bold hover:bg-brand-accent", children: "Valider la commande" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  TablePage as component
};
