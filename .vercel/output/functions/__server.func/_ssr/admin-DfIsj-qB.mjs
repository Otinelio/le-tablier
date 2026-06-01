import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { Q as QRCodeSVG } from "../_libs/qrcode.react.mjs";
import { P as PINGate } from "./PINGate-tVSKC2lD.mjs";
import { M as MENU, P as PIZZAS, D as DRINKS } from "./data-CqoRGv6A.mjs";
import { u as useOrders } from "./orderStore-LrscOaS8.mjs";
import { f as formatFCFA } from "./router-CmvoSLc3.mjs";
import { p as Utensils, k as Pizza, W as Wine, Q as QrCode, C as Calendar, H as History, m as Printer, D as Download } from "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
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
const NAV = [{
  key: "menu",
  label: "Menu",
  Icon: Utensils
}, {
  key: "pizza",
  label: "Pizza",
  Icon: Pizza
}, {
  key: "bar",
  label: "Bar",
  Icon: Wine
}, {
  key: "qr",
  label: "QR Tables",
  Icon: QrCode
}, {
  key: "reservations",
  label: "Réservations",
  Icon: Calendar
}, {
  key: "history",
  label: "Historique",
  Icon: History
}];
function Admin() {
  const [section, setSection] = reactExports.useState("menu");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex bg-brand-bg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "w-64 bg-brand-dark text-white p-5 hidden md:flex flex-col gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-extrabold text-2xl mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "Admin" }),
        " · Tablier"
      ] }),
      NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSection(n.key), className: `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition ${section === n.key ? "bg-brand text-brand-dark" : "text-white/70 hover:bg-white/5 hover:text-white"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(n.Icon, { size: 18 }),
        " ",
        n.label
      ] }, n.key))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden fixed top-0 inset-x-0 z-40 bg-brand-dark text-white p-3 overflow-x-auto scrollbar-hide flex gap-2", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSection(n.key), className: `shrink-0 px-4 py-2 rounded-full text-xs font-bold ${section === n.key ? "bg-brand text-brand-dark" : "bg-white/10"}`, children: n.label }, n.key)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 p-6 md:p-10 pt-20 md:pt-10 overflow-x-auto", children: [
      section === "menu" && /* @__PURE__ */ jsxRuntimeExports.jsx(ItemList, { title: "Menu", items: MENU }),
      section === "pizza" && /* @__PURE__ */ jsxRuntimeExports.jsx(ItemList, { title: "Pizza", items: PIZZAS }),
      section === "bar" && /* @__PURE__ */ jsxRuntimeExports.jsx(ItemList, { title: "Bar & Boissons", items: DRINKS }),
      section === "qr" && /* @__PURE__ */ jsxRuntimeExports.jsx(QRSection, {}),
      section === "reservations" && /* @__PURE__ */ jsxRuntimeExports.jsx(ReservationsSection, {}),
      section === "history" && /* @__PURE__ */ jsxRuntimeExports.jsx(HistorySection, {})
    ] })
  ] });
}
function ItemList({
  title,
  items
}) {
  const [list, setList] = reactExports.useState(items.map((i) => ({
    ...i,
    available: i.available ?? true
  })));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-extrabold text-3xl", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
        list.length,
        " articles"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-2xl border border-black/5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-brand-bg text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3", children: "Article" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 hidden sm:table-cell", children: "Catégorie" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-3", children: "Prix" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center p-3", children: "Statut" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: list.map((it, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-black/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-3 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.image, alt: "", className: "h-10 w-10 rounded-lg object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: it.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground sm:hidden", children: it.category })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 hidden sm:table-cell text-muted-foreground", children: it.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right font-bold text-brand-dark-green", children: formatFCFA(it.price) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setList((l) => l.map((x, i) => i === idx ? {
          ...x,
          available: !x.available
        } : x)), className: `px-3 py-1 rounded-full text-xs font-bold ${it.available ? "bg-brand/20 text-brand-dark-green" : "bg-destructive/15 text-destructive"}`, children: it.available ? "Disponible" : "Épuisé" }) })
      ] }, it.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: "Les modifications sont conservées dans la session." })
  ] });
}
function QRSection() {
  const tables = Array.from({
    length: 30
  }, (_, i) => i + 1);
  const base = typeof window !== "undefined" ? window.location.origin : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-6 flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-extrabold text-3xl", children: "QR Codes des tables" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => window.print(), className: "inline-flex items-center gap-2 rounded-full bg-brand-dark text-white px-5 py-2.5 font-bold hover:bg-brand hover:text-brand-dark transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 16 }),
        " Imprimer"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4", children: tables.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl p-4 border border-black/5 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-2 rounded-lg inline-block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QRCodeSVG, { value: `${base}/table/${n}`, size: 120, fgColor: "#222222" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 font-display font-bold", children: [
        "Table ",
        n
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground break-all", children: [
        "/table/",
        n
      ] })
    ] }, n)) })
  ] });
}
function ReservationsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-extrabold text-3xl mb-2", children: "Réservations" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Les réservations entrantes via WhatsApp seront listées ici une fois la synchronisation activée." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 bg-white border border-black/5 rounded-2xl p-10 text-center text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 36, className: "mx-auto mb-3 opacity-40" }),
      "Aucune réservation enregistrée pour le moment."
    ] })
  ] });
}
function HistorySection() {
  const orders = useOrders((s) => s.orders);
  const clear = useOrders((s) => s.clear);
  const exportCSV = () => {
    const rows = [["Date", "Table", "Articles", "Total", "Statut"]];
    orders.forEach((o) => rows.push([new Date(o.createdAt).toLocaleString("fr-FR"), o.table, o.lines.map((l) => `${l.name} x${l.qty}`).join(" | "), String(o.total), o.status]));
    const csv = rows.map((r) => r.map((c) => `"${String(c).replaceAll('"', '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], {
      type: "text/csv"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "commandes.csv";
    a.click();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-6 flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-extrabold text-3xl", children: "Historique des commandes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: exportCSV, className: "inline-flex items-center gap-2 rounded-full bg-brand text-brand-dark px-5 py-2.5 font-bold hover:bg-brand-accent transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 16 }),
          " Export CSV"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => confirm("Effacer tout l'historique ?") && clear(), className: "rounded-full border border-destructive/40 text-destructive px-5 py-2.5 font-bold hover:bg-destructive/10", children: "Effacer" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-2xl border border-black/5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-brand-bg text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3", children: "Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3", children: "Table" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 hidden md:table-cell", children: "Articles" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-3", children: "Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center p-3", children: "Statut" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        orders.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 5, className: "p-10 text-center text-muted-foreground", children: "Aucune commande" }) }),
        orders.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-black/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 whitespace-nowrap", children: new Date(o.createdAt).toLocaleString("fr-FR") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-3 font-bold text-brand-dark-green", children: [
            "T",
            o.table
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 hidden md:table-cell text-muted-foreground", children: o.lines.map((l) => `${l.name} ×${l.qty}`).join(", ") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right font-bold", children: formatFCFA(o.total) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 rounded-full text-xs font-bold bg-brand/15 text-brand-dark-green", children: o.status }) })
        ] }, o.id))
      ] })
    ] }) })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(PINGate, { pin: "9999", label: "Administration", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Admin, {}) });
export {
  SplitComponent as component
};
