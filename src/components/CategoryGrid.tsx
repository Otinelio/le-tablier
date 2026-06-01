import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MenuItemCard } from "@/components/MenuItemCard";
import type { Item } from "@/lib/data";

export function CategoryGrid({ items }: { items: Item[] }) {
  const categories = useMemo(() => ["Tout", ...Array.from(new Set(items.map((i) => i.category)))], [items]);
  const [active, setActive] = useState("Tout");
  const filtered = active === "Tout" ? items : items.filter((i) => i.category === active);

  return (
    <div>
      <div className="sticky top-16 lg:top-20 z-30 -mx-6 px-6 py-3 bg-brand-bg/85 backdrop-blur-xl border-b border-black/5">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-bold transition ${
                active === c ? "bg-brand text-brand-dark" : "bg-white text-brand-dark/70 hover:bg-black/5"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <motion.div layout className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <motion.div key={item.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <MenuItemCard item={item} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
