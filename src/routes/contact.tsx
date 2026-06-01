import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, MessageCircle, Instagram, Facebook, CheckCircle } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { BRAND, waLink } from "@/lib/config";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Le Tablier · Lomé" },
      { name: "description", content: "Nous trouver : Après la pharmacie Shalom, carrefour Bodjona, Agoè Cacavéli, Lomé." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [f, setF] = useState({ name: "", email: "", subject: "Réservation", message: "" });
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Bonjour Le Tablier,\n\nNom : ${f.name}\nEmail : ${f.email}\nObjet : ${f.subject}\n\n${f.message}`;
    window.open(waLink(body), "_blank");
    setSent(true);
  };

  return (
    <PageTransition>
      <section className="pt-32 pb-10 mx-auto max-w-7xl px-6 relative">
        <span className="absolute left-0 top-32 bottom-10 w-1.5 bg-brand rounded-full" />
        <div className="pl-6">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-dark-green">Contact</span>
          <h1 className="font-display font-black text-5xl sm:text-7xl mt-2">Nous trouver</h1>
          <p className="mt-3 text-muted-foreground max-w-xl">À deux pas de la pharmacie Shalom, au carrefour Bodjona.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <InfoCard Icon={MapPin} title="Adresse" text={BRAND.address} />
          <InfoCard Icon={Clock} title="Horaires" text={BRAND.hours} />
          <InfoCard Icon={Phone} title="Téléphone" text={BRAND.phone} />
          <InfoCard Icon={MessageCircle} title="WhatsApp" text={BRAND.phone} />
          <div className="flex gap-3 pt-2">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-brand-dark text-white px-5 py-3 font-bold hover:bg-brand hover:text-brand-dark transition"><Instagram size={16}/> {BRAND.instagram}</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-brand-dark text-white px-5 py-3 font-bold hover:bg-brand hover:text-brand-dark transition"><Facebook size={16}/> Facebook</a>
          </div>
          <div className="rounded-3xl overflow-hidden border border-black/5 shadow-sm aspect-video">
            <iframe
              title="Le Tablier — Lomé"
              src="https://www.google.com/maps?q=Agoe+Cacaveli+Lome+Togo&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          onSubmit={submit}
          className="bg-white rounded-3xl p-8 shadow-sm border border-black/5 h-fit lg:sticky lg:top-28"
        >
          <h2 className="font-display font-extrabold text-2xl">Écrivez-nous</h2>
          <p className="text-sm text-muted-foreground mt-1 mb-6">Nous vous répondons sur WhatsApp.</p>
          {sent && (
            <div className="mb-4 flex items-center gap-2 rounded-xl bg-brand/15 text-brand-dark-green px-4 py-3 text-sm font-semibold">
              <CheckCircle size={18}/> Message ouvert dans WhatsApp.
            </div>
          )}
          <div className="grid gap-3">
            <input required value={f.name} onChange={(e)=>setF({...f,name:e.target.value})} placeholder="Nom" className="rounded-xl border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" />
            <input type="email" value={f.email} onChange={(e)=>setF({...f,email:e.target.value})} placeholder="Email" className="rounded-xl border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" />
            <select value={f.subject} onChange={(e)=>setF({...f,subject:e.target.value})} className="rounded-xl border border-black/10 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand">
              <option>Réservation</option><option>Commande</option><option>Autre</option>
            </select>
            <textarea required value={f.message} onChange={(e)=>setF({...f,message:e.target.value})} placeholder="Message" rows={5} className="rounded-xl border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" />
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand text-brand-dark hover:bg-brand-accent transition py-3.5 font-bold mt-2">
              <MessageCircle size={18}/> Envoyer via WhatsApp
            </button>
          </div>
        </motion.form>
      </section>
    </PageTransition>
  );
}

function InfoCard({ Icon, title, text }: { Icon: typeof MapPin; title: string; text: string }) {
  return (
    <div className="flex gap-4 bg-white rounded-2xl p-5 border border-black/5">
      <div className="h-12 w-12 shrink-0 rounded-xl bg-brand grid place-items-center text-brand-dark"><Icon size={20}/></div>
      <div>
        <p className="font-display font-bold">{title}</p>
        <p className="text-sm text-muted-foreground mt-0.5">{text}</p>
      </div>
    </div>
  );
}
