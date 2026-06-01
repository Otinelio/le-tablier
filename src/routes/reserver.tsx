import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, Users } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { waLink } from "@/lib/config";

export const Route = createFileRoute("/reserver")({
  head: () => ({
    meta: [
      { title: "Réservation — Le Tablier · Lomé" },
      { name: "description", content: "Réservez votre table en quelques secondes via WhatsApp." },
    ],
  }),
  component: ReservePage,
});

const TIMES = ["11:30","12:00","12:30","13:00","13:30","14:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30"];
const OCCASIONS = ["Déjeuner ordinaire","Dîner romantique","Fête","Afterwork","Réunion d'affaires","Autre"];

function ReservePage() {
  const [f, setF] = useState({ name:"", phone:"", date:"", time:"19:00", guests:"2", occasion:"Déjeuner ordinaire", notes:"" });
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Bonjour Le Tablier, je voudrais réserver une table :\n\nNom : ${f.name}\nTéléphone : ${f.phone}\nDate : ${f.date}\nHeure : ${f.time}\nNombre de personnes : ${f.guests}\nOccasion : ${f.occasion}\nNotes : ${f.notes || "—"}\n\nMerci de confirmer ma réservation.`;
    window.open(waLink(body), "_blank");
  };

  return (
    <PageTransition>
      <section className="relative min-h-[55vh] flex items-end text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1920&q=80" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/75 to-brand-dark/30" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-14 w-full">
          <span className="inline-block bg-brand text-brand-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Réservation</span>
          <h1 className="font-display font-black text-5xl sm:text-7xl mt-3">Réservez votre table</h1>
          <p className="mt-3 text-white/80 max-w-xl">Confirmation rapide via WhatsApp.</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <motion.form
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          onSubmit={send}
          className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-black/5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Nom complet">
              <input required value={f.name} onChange={(e)=>setF({...f,name:e.target.value})} className="input" />
            </Field>
            <Field label="Téléphone">
              <input required value={f.phone} onChange={(e)=>setF({...f,phone:e.target.value})} placeholder="+228 …" className="input" />
            </Field>
            <Field label="Date">
              <input required type="date" value={f.date} onChange={(e)=>setF({...f,date:e.target.value})} className="input" />
            </Field>
            <Field label="Heure">
              <select value={f.time} onChange={(e)=>setF({...f,time:e.target.value})} className="input">
                {TIMES.map(t=><option key={t}>{t}</option>)}
              </select>
            </Field>
            <Field label="Nombre de personnes">
              <select value={f.guests} onChange={(e)=>setF({...f,guests:e.target.value})} className="input">
                {Array.from({length:20},(_,i)=>i+1).map(n=><option key={n} value={n}>{n}</option>)}
                <option value="20+">20+</option>
              </select>
            </Field>
            <Field label="Occasion">
              <select value={f.occasion} onChange={(e)=>setF({...f,occasion:e.target.value})} className="input">
                {OCCASIONS.map(o=><option key={o}>{o}</option>)}
              </select>
            </Field>
            <Field label="Notes spéciales" className="sm:col-span-2">
              <textarea rows={3} value={f.notes} onChange={(e)=>setF({...f,notes:e.target.value})} className="input" />
            </Field>
          </div>
          <button type="submit" className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand text-brand-dark hover:bg-brand-accent transition py-4 font-bold text-base">
            <MessageCircle size={18}/> Confirmer via WhatsApp
          </button>
          <div className="grid grid-cols-2 gap-4 mt-6 text-center text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2"><Calendar size={16} className="text-brand-dark-green"/> Réponse rapide</div>
            <div className="flex items-center justify-center gap-2"><Users size={16} className="text-brand-dark-green"/> Groupes bienvenus</div>
          </div>
        </motion.form>
      </section>

      <style>{`.input{width:100%;border-radius:0.75rem;border:1px solid rgba(0,0,0,0.1);padding:0.75rem 1rem;font-size:0.875rem;background:white;outline:none}.input:focus{box-shadow:0 0 0 2px var(--brand)}`}</style>
    </PageTransition>
  );
}

function Field({ label, children, className="" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-bold uppercase tracking-wider text-brand-dark-green">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
