import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, MessageCircle, Instagram, Facebook, CheckCircle } from "lucide-react";
import { P as PageTransition } from "./PageTransition-BbgeDiQW.js";
import { B as BRAND, w as waLink } from "./router-DRXdjWbB.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "zustand";
import "zustand/middleware";
function ContactPage() {
  const [f, setF] = useState({
    name: "",
    email: "",
    subject: "Réservation",
    message: ""
  });
  const [sent, setSent] = useState(false);
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
  return /* @__PURE__ */ jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsxs("section", { className: "pt-32 pb-10 mx-auto max-w-7xl px-6 relative", children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-0 top-32 bottom-10 w-1.5 bg-brand rounded-full" }),
      /* @__PURE__ */ jsxs("div", { className: "pl-6", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-brand-dark-green", children: "Contact" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display font-black text-5xl sm:text-7xl mt-2", children: "Nous trouver" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground max-w-xl", children: "À deux pas de la pharmacie Shalom, au carrefour Bodjona." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-6 pb-24 grid lg:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx(InfoCard, { Icon: MapPin, title: "Adresse", text: BRAND.address }),
        /* @__PURE__ */ jsx(InfoCard, { Icon: Clock, title: "Horaires", text: BRAND.hours }),
        /* @__PURE__ */ jsx(InfoCard, { Icon: Phone, title: "Téléphone", text: BRAND.phone }),
        /* @__PURE__ */ jsx(InfoCard, { Icon: MessageCircle, title: "WhatsApp", text: BRAND.phone }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3 pt-2", children: [
          /* @__PURE__ */ jsxs("a", { href: "#", className: "inline-flex items-center gap-2 rounded-full bg-brand-dark text-white px-5 py-3 font-bold hover:bg-brand hover:text-brand-dark transition", children: [
            /* @__PURE__ */ jsx(Instagram, { size: 16 }),
            " ",
            BRAND.instagram
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "#", className: "inline-flex items-center gap-2 rounded-full bg-brand-dark text-white px-5 py-3 font-bold hover:bg-brand hover:text-brand-dark transition", children: [
            /* @__PURE__ */ jsx(Facebook, { size: 16 }),
            " Facebook"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "rounded-3xl overflow-hidden border border-black/5 shadow-sm aspect-video", children: /* @__PURE__ */ jsx("iframe", { title: "Le Tablier — Lomé", src: "https://www.google.com/maps?q=Agoe+Cacaveli+Lome+Togo&output=embed", className: "w-full h-full border-0", loading: "lazy" }) })
      ] }),
      /* @__PURE__ */ jsxs(motion.form, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, onSubmit: submit, className: "bg-white rounded-3xl p-8 shadow-sm border border-black/5 h-fit lg:sticky lg:top-28", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display font-extrabold text-2xl", children: "Écrivez-nous" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1 mb-6", children: "Nous vous répondons sur WhatsApp." }),
        sent && /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-2 rounded-xl bg-brand/15 text-brand-dark-green px-4 py-3 text-sm font-semibold", children: [
          /* @__PURE__ */ jsx(CheckCircle, { size: 18 }),
          " Message ouvert dans WhatsApp."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ jsx("input", { required: true, value: f.name, onChange: (e) => setF({
            ...f,
            name: e.target.value
          }), placeholder: "Nom", className: "rounded-xl border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" }),
          /* @__PURE__ */ jsx("input", { type: "email", value: f.email, onChange: (e) => setF({
            ...f,
            email: e.target.value
          }), placeholder: "Email", className: "rounded-xl border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" }),
          /* @__PURE__ */ jsxs("select", { value: f.subject, onChange: (e) => setF({
            ...f,
            subject: e.target.value
          }), className: "rounded-xl border border-black/10 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand", children: [
            /* @__PURE__ */ jsx("option", { children: "Réservation" }),
            /* @__PURE__ */ jsx("option", { children: "Commande" }),
            /* @__PURE__ */ jsx("option", { children: "Autre" })
          ] }),
          /* @__PURE__ */ jsx("textarea", { required: true, value: f.message, onChange: (e) => setF({
            ...f,
            message: e.target.value
          }), placeholder: "Message", rows: 5, className: "rounded-xl border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" }),
          /* @__PURE__ */ jsxs("button", { type: "submit", className: "inline-flex items-center justify-center gap-2 rounded-full bg-brand text-brand-dark hover:bg-brand-accent transition py-3.5 font-bold mt-2", children: [
            /* @__PURE__ */ jsx(MessageCircle, { size: 18 }),
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
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-4 bg-white rounded-2xl p-5 border border-black/5", children: [
    /* @__PURE__ */ jsx("div", { className: "h-12 w-12 shrink-0 rounded-xl bg-brand grid place-items-center text-brand-dark", children: /* @__PURE__ */ jsx(Icon, { size: 20 }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "font-display font-bold", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: text })
    ] })
  ] });
}
export {
  ContactPage as component
};
