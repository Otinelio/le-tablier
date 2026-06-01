import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Galerie — Le Tablier · Lomé" },
      { name: "description", content: "Les moments qui font Le Tablier : plats, ambiance, soirées." },
    ],
  }),
  component: GalleryPage,
});

const IMGS = [
  ["photo-1414235077428-338989a2e8c0", "Ambiance restaurant"],
  ["photo-1574071318508-1cdbab80d002", "Pizza artisanale"],
  ["photo-1551024506-0bccd828d307", "Cocktail signature"],
  ["photo-1517248135467-4c7edcad34c4", "Soirée conviviale"],
  ["photo-1565299624946-b28f40a0ca4b", "Plat africain"],
  ["photo-1546964124-0cce460f38ef", "Plat européen"],
  ["photo-1514362545857-3bc16c4c7d1b", "Le bar"],
  ["photo-1604908176997-125f25cc6f3d", "Poulet DG"],
  ["photo-1606851094291-6efae152bb87", "Attiéké poisson"],
  ["photo-1559339352-11d035aa65de", "Afterwork"],
  ["photo-1555939594-58d7cb561ad1", "Service en salle"],
  ["photo-1571997478779-2adcbbe9ab2f", "Convives heureux"],
];

function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);
  const next = () => setActive((i) => (i === null ? null : (i + 1) % IMGS.length));
  const prev = () => setActive((i) => (i === null ? null : (i - 1 + IMGS.length) % IMGS.length));

  return (
    <PageTransition>
      <section className="pt-32 pb-10 mx-auto max-w-7xl px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-dark-green">Galerie</span>
        <h1 className="font-display font-black text-5xl sm:text-7xl mt-2">Notre Galerie</h1>
        <p className="mt-3 text-muted-foreground max-w-xl">Les moments qui font Le Tablier.</p>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
          {IMGS.map(([id, title], i) => (
            <motion.button
              key={id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.05 }}
              onClick={() => setActive(i)}
              className="group relative block w-full overflow-hidden rounded-2xl bg-muted break-inside-avoid"
            >
              <img src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`} alt={title} loading="lazy" className="w-full transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/60 transition flex items-center justify-center text-white opacity-0 group-hover:opacity-100">
                <ZoomIn size={32} />
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-brand-dark/95 grid place-items-center p-6"
            onClick={() => setActive(null)}
          >
            <button onClick={(e) => { e.stopPropagation(); setActive(null); }} className="absolute top-5 right-5 h-12 w-12 rounded-full bg-white/10 grid place-items-center text-white hover:bg-brand hover:text-brand-dark"><X /></button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-5 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 grid place-items-center text-white hover:bg-brand hover:text-brand-dark"><ChevronLeft /></button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-5 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 grid place-items-center text-white hover:bg-brand hover:text-brand-dark"><ChevronRight /></button>
            <motion.img
              key={active}
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              src={`https://images.unsplash.com/${IMGS[active][0]}?auto=format&fit=crop&w=1600&q=85`}
              alt={IMGS[active][1]}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-6 left-0 right-0 text-center text-white font-display font-bold">{IMGS[active][1]}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
