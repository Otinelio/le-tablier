import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageTransition } from "./PageTransition-BbgeDiQW.mjs";
import { B as BRAND, w as waLink } from "./router-CmvoSLc3.mjs";
import { M as MapPin, f as Clock, P as Phone, h as MessageCircle, I as Instagram, F as Facebook, e as CircleCheckBig } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
function ContactPage() {
  const [f, setF] = reactExports.useState({
    name: "",
    email: "",
    subject: "Réservation",
    message: ""
  });
  const [sent, setSent] = reactExports.useState(false);
  const submit = (e) => {
    e.preventDefault();
    const body = `Bonjour Le Tablier,

Nom : ${f.name}
Email : ${f.email}
Objet : ${f.subject}

${f.message}`;
    window.open(waLink(body), "_blank");
    setSent(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-32 pb-10 mx-auto max-w-7xl px-6 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 top-32 bottom-10 w-1.5 bg-brand rounded-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pl-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-brand-dark-green", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-5xl sm:text-7xl mt-2", children: "Nous trouver" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-xl", children: "À deux pas de la pharmacie Shalom, au carrefour Bodjona." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 pb-24 grid lg:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { Icon: MapPin, title: "Adresse", text: BRAND.address }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { Icon: Clock, title: "Horaires", text: BRAND.hours }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { Icon: Phone, title: "Téléphone", text: BRAND.phone }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { Icon: MessageCircle, title: "WhatsApp", text: BRAND.phone }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "inline-flex items-center gap-2 rounded-full bg-brand-dark text-white px-5 py-3 font-bold hover:bg-brand hover:text-brand-dark transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 16 }),
            " ",
            BRAND.instagram
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "inline-flex items-center gap-2 rounded-full bg-brand-dark text-white px-5 py-3 font-bold hover:bg-brand hover:text-brand-dark transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { size: 16 }),
            " Facebook"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl overflow-hidden border border-black/5 shadow-sm aspect-video", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Le Tablier — Lomé", src: "https://www.google.com/maps?q=Agoe+Cacaveli+Lome+Togo&output=embed", className: "w-full h-full border-0", loading: "lazy" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.form, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, onSubmit: submit, className: "bg-white rounded-3xl p-8 shadow-sm border border-black/5 h-fit lg:sticky lg:top-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-extrabold text-2xl", children: "Écrivez-nous" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1 mb-6", children: "Nous vous répondons sur WhatsApp." }),
        sent && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center gap-2 rounded-xl bg-brand/15 text-brand-dark-green px-4 py-3 text-sm font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 18 }),
          " Message ouvert dans WhatsApp."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: f.name, onChange: (e) => setF({
            ...f,
            name: e.target.value
          }), placeholder: "Nom", className: "rounded-xl border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: f.email, onChange: (e) => setF({
            ...f,
            email: e.target.value
          }), placeholder: "Email", className: "rounded-xl border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: f.subject, onChange: (e) => setF({
            ...f,
            subject: e.target.value
          }), className: "rounded-xl border border-black/10 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Réservation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Commande" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Autre" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, value: f.message, onChange: (e) => setF({
            ...f,
            message: e.target.value
          }), placeholder: "Message", rows: 5, className: "rounded-xl border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "inline-flex items-center justify-center gap-2 rounded-full bg-brand text-brand-dark hover:bg-brand-accent transition py-3.5 font-bold mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 18 }),
            " Envoyer via WhatsApp"
          ] })
        ] })
      ] })
    ] })
  ] });
}
function InfoCard({
  Icon,
  title,
  text
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 bg-white rounded-2xl p-5 border border-black/5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 shrink-0 rounded-xl bg-brand grid place-items-center text-brand-dark", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: text })
    ] })
  ] });
}
export {
  ContactPage as component
};
