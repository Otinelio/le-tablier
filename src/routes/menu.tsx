import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/PageTransition";
import { CategoryGrid } from "@/components/CategoryGrid";
import { MENU } from "@/lib/data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Le Tablier · Lomé" },
      { name: "description", content: "Découvrez notre menu : plats africains, cuisine européenne, grillades, salades et desserts. Commande directe via WhatsApp." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <PageTransition>
      <section className="relative h-[55vh] min-h-[420px] flex items-end text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&q=80" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-14 w-full">
          <span className="inline-block bg-brand text-brand-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Cuisine</span>
          <h1 className="font-display font-black text-5xl sm:text-7xl mt-3">Notre Menu</h1>
          <p className="mt-3 text-white/80 max-w-xl">Cuisine africaine authentique &amp; saveurs européennes, préparées chaque jour avec passion.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-14">
        <CategoryGrid items={MENU} />
      </section>
    </PageTransition>
  );
}
