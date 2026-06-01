import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Bell, Trash2, History, Clock } from "lucide-react";
import { PINGate } from "@/components/PINGate";
import { useOrders, type OrderStatus } from "@/stores/orderStore";
import { formatFCFA } from "@/lib/config";

export const Route = createFileRoute("/reception")({
  component: () => (
    <PINGate pin="9999" label="Réception">
      <Reception />
    </PINGate>
  ),
});

const STATUS: { v: OrderStatus; color: string }[] = [
  { v: "Reçue", color: "bg-yellow-400" },
  { v: "En préparation", color: "bg-blue-500" },
  { v: "Servie", color: "bg-emerald-500" },
];

function Reception() {
  const orders = useOrders((s) => s.orders);
  const setStatus = useOrders((s) => s.setStatus);
  const remove = useOrders((s) => s.remove);
  const lastCount = useRef(orders.length);
  const [tab, setTab] = useState<"live"|"history">("live");
  const [, setTick] = useState(0);

  // Poll every 3s (triggers re-render; Zustand persist updates from other tabs)
  useEffect(() => {
    const i = setInterval(() => {
      // Force rehydrate from localStorage to catch cross-tab updates
      useOrders.persist.rehydrate();
      setTick((t) => t + 1);
    }, 3000);
    return () => clearInterval(i);
  }, []);

  // Audio chime on new order
  useEffect(() => {
    if (orders.length > lastCount.current) {
      try {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const o = ctx.createOscillator(); const g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.frequency.value = 880; o.type = "sine";
        g.gain.setValueAtTime(0.0001, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.05);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);
        o.start(); o.stop(ctx.currentTime + 0.6);
      } catch {}
    }
    lastCount.current = orders.length;
  }, [orders.length]);

  const todays = useMemo(() => {
    const start = new Date(); start.setHours(0,0,0,0);
    return orders.filter((o) => o.createdAt >= start.getTime());
  }, [orders]);

  const liveOrders = orders.filter((o) => o.status !== "Servie");
  const summary = useMemo(() => {
    const counts: Record<string, number> = {};
    todays.forEach((o) => o.lines.forEach((l) => { counts[l.name] = (counts[l.name]||0)+l.qty; }));
    const top = Object.entries(counts).sort((a,b)=>b[1]-a[1])[0];
    return {
      total: todays.length,
      revenue: todays.reduce((t,o)=>t+o.total,0),
      top: top ? top[0] : "—",
    };
  }, [todays]);

  const list = tab === "live" ? liveOrders : orders;

  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <header className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div animate={liveOrders.length ? { scale: [1,1.2,1] } : {}} transition={{ duration: 1, repeat: Infinity }} className="h-10 w-10 rounded-full bg-brand grid place-items-center text-brand-dark">
            <Bell size={20}/>
          </motion.div>
          <div>
            <h1 className="font-display font-extrabold text-xl">Réception · Le Tablier</h1>
            <p className="text-xs text-white/60">Mise à jour en temps réel</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setTab("live")} className={`px-4 py-2 rounded-full text-sm font-bold ${tab==="live"?"bg-brand text-brand-dark":"bg-white/10 text-white"}`}>En direct</button>
          <button onClick={() => setTab("history")} className={`px-4 py-2 rounded-full text-sm font-bold inline-flex items-center gap-1 ${tab==="history"?"bg-brand text-brand-dark":"bg-white/10 text-white"}`}><History size={14}/> Historique</button>
        </div>
      </header>

      <div className="px-6 py-4 grid sm:grid-cols-3 gap-3 border-b border-white/10">
        <Stat label="Commandes du jour" value={String(summary.total)} />
        <Stat label="Recettes du jour" value={formatFCFA(summary.revenue)} />
        <Stat label="Plat le + commandé" value={summary.top} />
      </div>

      <div className="p-6 grid lg:grid-cols-2 gap-4">
        {list.length === 0 && (
          <div className="lg:col-span-2 text-center py-20 text-white/50">
            Aucune commande {tab==="live"?"en cours":"dans l'historique"}.
          </div>
        )}
        {list.map((o) => (
          <motion.div key={o.id} layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-white/50 uppercase tracking-widest">Table</p>
                <p className="font-display font-extrabold text-3xl text-brand">{o.table}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-white/50 flex items-center justify-end gap-1"><Clock size={12}/> {new Date(o.createdAt).toLocaleTimeString("fr-FR")}</p>
                <p className="font-bold mt-1">{formatFCFA(o.total)}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-1 text-sm text-white/85">
              {o.lines.map((l,i)=>(<li key={i} className="flex justify-between"><span>{l.name} × {l.qty}</span><span className="text-white/55">{formatFCFA(l.price*l.qty)}</span></li>))}
            </ul>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-2">
                {STATUS.map((s)=>(
                  <button key={s.v} onClick={()=>setStatus(o.id, s.v)} className={`px-3 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 ${o.status===s.v?"bg-brand text-brand-dark":"bg-white/10 text-white/70 hover:bg-white/15"}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${s.color}`}/> {s.v}
                  </button>
                ))}
              </div>
              <button onClick={()=>remove(o.id)} className="text-white/40 hover:text-destructive"><Trash2 size={16}/></button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
      <p className="text-xs uppercase tracking-widest text-white/50">{label}</p>
      <p className="font-display font-extrabold text-2xl text-brand mt-1">{value}</p>
    </div>
  );
}
