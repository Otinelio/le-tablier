import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle, ShoppingCart } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { CategoryGrid } from "@/components/CategoryGrid";
import { PIZZAS } from "@/lib/data";
import { useCart } from "@/stores/cartStore";
import { formatFCFA } from "@/lib/config";

export const Route = createFileRoute("/pizza")({
  head: () => ({
    meta: [
      { title: "Pizzeria — Le Tablier · Lomé" },
      { name: "description", content: "Les meilleures pizzas artisanales de Lomé, cuites avec passion." },
    ],
  }),
  component: PizzaPage,
});

function PizzaPage() {
  const featured = PIZZAS.find((p) => p.name === "Spéciale Le Tablier")!;
  const add = useCart((s) => s.add);
  const ingredients = ["Mozzarella fior di latte", "Tomate San Marzano", "Pepperoni épicé", "Champignons", "Recette maison"];

  return (
    <PageTransition>
      <section className="relative min-h-[90vh] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1920&q=80" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-dark/70 to-brand-dark-green/70" />
        </div>
        <motion.div
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -right-32 -top-32 w-[420px] h-[420px] rounded-full border-[24px] border-dashed border-brand/40 hidden md:block"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
          <span className="inline-block bg-brand text-brand-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Pizzeria</span>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl mt-4 leading-[0.95]">
            La <span className="text-brand">Pizzeria</span>
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-xl">Les meilleures pizzas de Lomé, cuites avec passion dans notre four artisanal.</p>
        </div>
      </section>

      {/* Featured pizza */}
      <section className="bg-white border-y border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
            <div className="aspect-square rounded-full overflow-hidden shadow-2xl">
              <img src={featured.image} alt={featured.name} className="h-full w-full object-cover" />
            </div>
            <span className="absolute top-6 left-6 bg-brand text-brand-dark px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Pizza de la semaine</span>
          </motion.div>
          <div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl">{featured.name}</h2>
            <p className="mt-3 text-muted-foreground text-lg">{featured.description}</p>
            <ul className="mt-6 space-y-2">
              {ingredients.map((ing) => (
                <li key={ing} className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle size={18} className="text-brand shrink-0" /> {ing}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-6">
              <span className="font-display font-extrabold text-3xl text-brand-dark-green">{formatFCFA(featured.price)}</span>
              <button onClick={() => add(featured)} className="inline-flex items-center gap-2 rounded-full bg-brand-dark text-white hover:bg-brand hover:text-brand-dark transition px-7 py-3.5 font-bold">
                <ShoppingCart size={18} /> Commander maintenant
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <CategoryGrid items={PIZZAS} />
      </section>
    </PageTransition>
  );
}
