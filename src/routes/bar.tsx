import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Clock, Music } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { CategoryGrid } from "@/components/CategoryGrid";
import { DRINKS } from "@/lib/data";

export const Route = createFileRoute("/bar")({
  head: () => ({
    meta: [
      { title: "Bar & Cocktails — Le Tablier · Lomé" },
      { name: "description", content: "Cocktails maison, vins, bières et jus frais. Afterwork tous les soirs à Lomé." },
    ],
  }),
  component: BarPage,
});

function BarPage() {
  return (
    <PageTransition>
      <section className="relative min-h-[85vh] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1920&q=80" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-brand-dark/75" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
          <span className="inline-block bg-brand text-brand-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Bar</span>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl mt-4">Le <span className="text-brand">Bar</span></h1>
          <p className="mt-5 text-lg text-white/80 max-w-xl">Afterwork · Cocktails · Ambiance. Le rendez-vous des soirées loméennes.</p>
        </div>
      </section>

      {/* Afterwork highlight */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-brand text-brand-dark p-8 sm:p-12 grid md:grid-cols-3 gap-8 items-center"
        >
          <div className="md:col-span-2">
            <span className="text-xs font-bold uppercase tracking-widest">Tous les jours</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl mt-2">Rejoignez-nous pour l'afterwork</h2>
            <p className="mt-3 max-w-lg text-brand-dark/85">Cocktails signature, musique conviviale et ambiance détendue. Le bon moment pour décompresser entre amis ou collègues.</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-brand-dark/10 rounded-xl px-4 py-3">
              <Clock size={22} /> <span className="font-bold">18h00 — 22h00</span>
            </div>
            <div className="flex items-center gap-3 bg-brand-dark/10 rounded-xl px-4 py-3">
              <Music size={22} /> <span className="font-bold">DJ &amp; lounge</span>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <CategoryGrid items={DRINKS} />
      </section>
    </PageTransition>
  );
}
