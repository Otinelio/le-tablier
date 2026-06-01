import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ShoppingCart, Plus, Minus, Trash2, ArrowLeft } from "lucide-react";
import { MENU, PIZZAS, DRINKS } from "@/lib/data";
import { useCart } from "@/stores/cartStore";
import { useOrders } from "@/stores/orderStore";
import { formatFCFA, waLink } from "@/lib/config";

export const Route = createFileRoute("/table/$tableNumber")({
  component: TablePage,
});

const TABS = [
  { key: "menu" as const, label: "Menu", items: MENU },
  { key: "pizza" as const, label: "Pizza", items: PIZZAS },
  { key: "bar" as const, label: "Bar", items: DRINKS },
];

function TablePage() {
  const { tableNumber } = Route.useParams();
  const [tab, setTab] = useState<"menu"|"pizza"|"bar">("menu");
  const [confirmed, setConfirmed] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { lines, add, setQty, remove, clear, total, count } = useCart();
  const addOrder = useOrders((s) => s.add);

  const items = TABS.find((t) => t.key === tab)!.items;

  const submit = () => {
    if (!lines.length) return;
    const t = total();
    addOrder({
      table: tableNumber,
      total: t,
      lines: lines.map((l) => ({ name: l.item.name, qty: l.qty, price: l.item.price })),
    });
    const body = `NOUVELLE COMMANDE - Table ${tableNumber}\n\n` +
      lines.map((l)=>`${l.item.name} x ${l.qty} - ${formatFCFA(l.item.price*l.qty)}`).join("\n") +
      `\n\nTotal : ${formatFCFA(t)}\nHeure : ${new Date().toLocaleTimeString("fr-FR")}`;
    window.open(waLink(body), "_blank");
    clear();
    setShowCart(false);
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="min-h-screen bg-brand-bg grid place-items-center px-6">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center max-w-md">
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="mx-auto h-24 w-24 rounded-full bg-brand grid place-items-center mb-6">
            <CheckCircle size={48} className="text-brand-dark" />
          </motion.div>
          <h1 className="font-display font-extrabold text-3xl">Commande envoyée !</h1>
          <p className="mt-3 text-muted-foreground">Notre équipe arrive bientôt à votre table.</p>
          <button onClick={() => setConfirmed(false)} className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-dark text-white px-6 py-3 font-bold hover:bg-brand hover:text-brand-dark transition">
            <ArrowLeft size={16}/> Nouvelle commande
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg pb-32">
      <header className="bg-gradient-to-br from-brand to-brand-dark-green text-white px-6 py-8">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-dark/70">Le Tablier</p>
        <h1 className="font-display font-black text-3xl mt-1">Table {tableNumber}</h1>
        <p className="text-sm text-brand-dark/70 mt-1">Commandez directement depuis votre table</p>
      </header>

      <div className="sticky top-0 z-30 bg-brand-bg/90 backdrop-blur-xl border-b border-black/10">
        <div className="flex">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex-1 py-4 text-sm font-bold transition ${tab === t.key ? "text-brand-dark border-b-2 border-brand" : "text-muted-foreground"}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-5 grid sm:grid-cols-2 gap-3">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl p-3 flex gap-3 border border-black/5">
            <img src={item.image} alt="" className="h-20 w-20 rounded-xl object-cover shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm truncate">{item.name}</p>
              <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">{item.description}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-bold text-brand-dark-green text-sm">{formatFCFA(item.price)}</span>
                <button onClick={() => add(item)} className="h-8 w-8 rounded-full bg-brand grid place-items-center text-brand-dark hover:bg-brand-accent">
                  <Plus size={16}/>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      {count > 0 && (
        <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className="fixed bottom-0 inset-x-0 z-40 bg-brand-dark text-white p-4 shadow-2xl">
          <div className="flex items-center justify-between gap-4 max-w-md mx-auto">
            <button onClick={() => setShowCart(true)} className="flex items-center gap-2 flex-1">
              <div className="relative">
                <ShoppingCart size={22} />
                <span className="absolute -top-2 -right-2 bg-brand text-brand-dark text-[10px] font-bold rounded-full h-5 min-w-5 px-1 grid place-items-center">{count}</span>
              </div>
              <div className="text-left">
                <p className="text-xs text-white/60">Total</p>
                <p className="font-display font-bold">{formatFCFA(total())}</p>
              </div>
            </button>
            <button onClick={submit} className="rounded-full bg-brand text-brand-dark px-6 py-3 font-bold hover:bg-brand-accent transition">Commander</button>
          </div>
        </motion.div>
      )}

      <AnimatePresence>
        {showCart && (
          <>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setShowCart(false)} className="fixed inset-0 z-50 bg-black/60" />
            <motion.div initial={{y:"100%"}} animate={{y:0}} exit={{y:"100%"}} transition={{type:"spring",damping:30}} className="fixed bottom-0 inset-x-0 z-50 bg-white rounded-t-3xl max-h-[80vh] flex flex-col">
              <div className="p-5 border-b border-black/10 flex items-center justify-between">
                <h3 className="font-display font-extrabold text-xl">Votre commande</h3>
                <button onClick={()=>setShowCart(false)} className="text-sm font-semibold">Fermer</button>
              </div>
              <div className="flex-1 overflow-y-auto p-5 space-y-3">
                {lines.map((l) => (
                  <div key={l.item.id} className="flex items-center gap-3">
                    <img src={l.item.image} alt="" className="h-12 w-12 rounded-lg object-cover" />
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{l.item.name}</p>
                      <p className="text-xs text-muted-foreground">{formatFCFA(l.item.price)}</p>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-brand-bg rounded-full px-2 py-1">
                      <button onClick={() => setQty(l.item.id, l.qty - 1)} className="h-6 w-6 grid place-items-center rounded-full"><Minus size={12}/></button>
                      <span className="text-sm font-bold w-5 text-center">{l.qty}</span>
                      <button onClick={() => setQty(l.item.id, l.qty + 1)} className="h-6 w-6 grid place-items-center rounded-full"><Plus size={12}/></button>
                    </div>
                    <button onClick={() => remove(l.item.id)} className="text-muted-foreground"><Trash2 size={16}/></button>
                  </div>
                ))}
              </div>
              <div className="p-5 border-t border-black/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total</span>
                  <span className="font-display font-extrabold text-2xl text-brand-dark-green">{formatFCFA(total())}</span>
                </div>
                <button onClick={submit} className="w-full rounded-full bg-brand text-brand-dark py-3.5 font-bold hover:bg-brand-accent">Valider la commande</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
