import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus, Trash2, MessageCircle, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/stores/cartStore";
import { formatFCFA, waLink } from "@/lib/config";

export function CartDrawer() {
  const { open, setOpen, lines, setQty, remove, clear, total } = useCart();
  const [name, setName] = useState("");
  const [mode, setMode] = useState("Sur place");

  const sendOrder = () => {
    const t = total();
    const body =
      `Bonjour Le Tablier, je souhaite passer une commande :\n\n` +
      lines.map((l) => `${l.item.name} x ${l.qty} - ${formatFCFA(l.item.price * l.qty)}`).join("\n") +
      `\n\nTotal : ${formatFCFA(t)}\n\nNom : ${name || "(non précisé)"}\nTable / À emporter : ${mode}`;
    window.open(waLink(body), "_blank");
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed top-0 right-0 z-[70] h-full w-full sm:w-[420px] bg-brand-bg flex flex-col"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-black/10 bg-brand-dark text-white">
              <h3 className="font-display font-extrabold text-xl flex items-center gap-2">
                <ShoppingBag size={20} className="text-brand" /> Votre panier
              </h3>
              <button onClick={() => setOpen(false)} className="grid place-items-center h-9 w-9 rounded-full hover:bg-white/10" aria-label="Fermer">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-3">
              {lines.length === 0 && (
                <div className="text-center py-20 text-muted-foreground">
                  <ShoppingBag size={48} className="mx-auto mb-3 opacity-30" />
                  <p className="text-sm">Votre panier est vide</p>
                </div>
              )}
              {lines.map((l) => (
                <div key={l.item.id} className="flex gap-3 bg-white rounded-2xl p-3 border border-black/5">
                  <img src={l.item.image} alt="" className="h-16 w-16 rounded-xl object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate">{l.item.name}</p>
                    <p className="text-brand-dark-green font-bold text-sm">{formatFCFA(l.item.price)}</p>
                    <div className="mt-2 inline-flex items-center gap-2 bg-brand-bg rounded-full px-2 py-1">
                      <button onClick={() => setQty(l.item.id, l.qty - 1)} className="h-6 w-6 grid place-items-center rounded-full hover:bg-brand-dark/10"><Minus size={12} /></button>
                      <span className="text-sm font-bold w-5 text-center">{l.qty}</span>
                      <button onClick={() => setQty(l.item.id, l.qty + 1)} className="h-6 w-6 grid place-items-center rounded-full hover:bg-brand-dark/10"><Plus size={12} /></button>
                    </div>
                  </div>
                  <button onClick={() => remove(l.item.id)} className="text-muted-foreground hover:text-destructive" aria-label="Retirer">
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            {lines.length > 0 && (
              <div className="border-t border-black/10 p-5 bg-white space-y-3">
                <input
                  value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="Votre nom"
                  className="w-full rounded-xl border border-black/10 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                />
                <select
                  value={mode} onChange={(e) => setMode(e.target.value)}
                  className="w-full rounded-xl border border-black/10 px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand"
                >
                  <option>Sur place</option>
                  <option>À emporter</option>
                  <option>Livraison</option>
                </select>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-muted-foreground">Total</span>
                  <span className="font-display font-extrabold text-2xl text-brand-dark-green">{formatFCFA(total())}</span>
                </div>
                <button
                  onClick={sendOrder}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand text-brand-dark hover:bg-brand-accent transition py-3.5 font-bold"
                >
                  <MessageCircle size={18} /> Commander via WhatsApp
                </button>
                <button onClick={clear} className="w-full text-xs text-muted-foreground hover:text-destructive">
                  Vider le panier
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
