import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { Item } from "@/lib/data";
import { useCart } from "@/stores/cartStore";
import { formatFCFA } from "@/lib/config";

export function MenuItemCard({ item }: { item: Item }) {
  const add = useCart((s) => s.add);
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-black/5 flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-brand text-brand-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
          {item.category}
        </span>
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="font-display font-extrabold text-lg leading-tight">{item.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
        <div className="mt-auto pt-3 flex items-center justify-between">
          <span className="font-display font-bold text-brand-dark-green text-lg">{formatFCFA(item.price)}</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => add(item)}
            className="inline-flex items-center gap-1 rounded-full bg-brand-dark text-white hover:bg-brand hover:text-brand-dark transition px-4 py-2 text-sm font-bold"
          >
            <Plus size={14} /> Ajouter
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
