import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, Users } from "lucide-react";
import { P as PageTransition } from "./PageTransition-BbgeDiQW.js";
import { w as waLink } from "./router-DRXdjWbB.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "zustand";
import "zustand/middleware";
const TIMES = ["11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"];
const OCCASIONS = ["Déjeuner ordinaire", "Dîner romantique", "Fête", "Afterwork", "Réunion d'affaires", "Autre"];
function ReservePage() {
  const [f, setF] = useState({
    name: "",
    phone: "",
    date: "",
    time: "19:00",
    guests: "2",
    occasion: "Déjeuner ordinaire",
    notes: ""
  });
  const send = (e) => {
    e.preventDefault();
    const body = `Bonjour Le Tablier, je voudrais réserver une table :

Nom : ${f.name}
Téléphone : ${f.phone}
Date : ${f.date}
Heure : ${f.time}
Nombre de personnes : ${f.guests}
Occasion : ${f.occasion}
Notes : ${f.notes || "—"}

Merci de confirmer ma réservation.`;
    window.open(waLink(body), "_blank");
  };
  return /* @__PURE__ */ jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-[55vh] flex items-end text-white overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1920&q=80", alt: "", className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/75 to-brand-dark/30" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-14 w-full", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block bg-brand text-brand-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest", children: "Réservation" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display font-black text-5xl sm:text-7xl mt-3", children: "Réservez votre table" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-white/80 max-w-xl", children: "Confirmation rapide via WhatsApp." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-3xl px-6 py-16", children: /* @__PURE__ */ jsxs(motion.form, { initial: {
      opacity: 0,
      y: 30
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, onSubmit: send, className: "bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-black/5", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsx(Field, { label: "Nom complet", children: /* @__PURE__ */ jsx("input", { required: true, value: f.name, onChange: (e) => setF({
          ...f,
          name: e.target.value
        }), className: "input" }) }),
        /* @__PURE__ */ jsx(Field, { label: "Téléphone", children: /* @__PURE__ */ jsx("input", { required: true, value: f.phone, onChange: (e) => setF({
          ...f,
          phone: e.target.value
        }), placeholder: "+228 …", className: "input" }) }),
        /* @__PURE__ */ jsx(Field, { label: "Date", children: /* @__PURE__ */ jsx("input", { required: true, type: "date", value: f.date, onChange: (e) => setF({
          ...f,
          date: e.target.value
        }), className: "input" }) }),
        /* @__PURE__ */ jsx(Field, { label: "Heure", children: /* @__PURE__ */ jsx("select", { value: f.time, onChange: (e) => setF({
          ...f,
          time: e.target.value
        }), className: "input", children: TIMES.map((t) => /* @__PURE__ */ jsx("option", { children: t }, t)) }) }),
        /* @__PURE__ */ jsx(Field, { label: "Nombre de personnes", children: /* @__PURE__ */ jsxs("select", { value: f.guests, onChange: (e) => setF({
          ...f,
          guests: e.target.value
        }), className: "input", children: [
          Array.from({
            length: 20
          }, (_, i) => i + 1).map((n) => /* @__PURE__ */ jsx("option", { value: n, children: n }, n)),
          /* @__PURE__ */ jsx("option", { value: "20+", children: "20+" })
        ] }) }),
        /* @__PURE__ */ jsx(Field, { label: "Occasion", children: /* @__PURE__ */ jsx("select", { value: f.occasion, onChange: (e) => setF({
          ...f,
          occasion: e.target.value
        }), className: "input", children: OCCASIONS.map((o) => /* @__PURE__ */ jsx("option", { children: o }, o)) }) }),
        /* @__PURE__ */ jsx(Field, { label: "Notes spéciales", className: "sm:col-span-2", children: /* @__PURE__ */ jsx("textarea", { rows: 3, value: f.notes, onChange: (e) => setF({
          ...f,
          notes: e.target.value
        }), className: "input" }) })
      ] }),
      /* @__PURE__ */ jsxs("button", { type: "submit", className: "mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand text-brand-dark hover:bg-brand-accent transition py-4 font-bold text-base", children: [
        /* @__PURE__ */ jsx(MessageCircle, { size: 18 }),
        " Confirmer via WhatsApp"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 mt-6 text-center text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsx(Calendar, { size: 16, className: "text-brand-dark-green" }),
          " Réponse rapide"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsx(Users, { size: 16, className: "text-brand-dark-green" }),
          " Groupes bienvenus"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("style", { children: `.input{width:100%;border-radius:0.75rem;border:1px solid rgba(0,0,0,0.1);padding:0.75rem 1rem;font-size:0.875rem;background:white;outline:none}.input:focus{box-shadow:0 0 0 2px var(--brand)}` })
  ] });
}
function Field({
  label,
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsxs("label", { className: `block ${className}`, children: [
    /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-brand-dark-green", children: label }),
    /* @__PURE__ */ jsx("div", { className: "mt-1.5", children })
  ] });
}
export {
  ReservePage as component
};
