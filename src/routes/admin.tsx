import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Utensils, Pizza, Wine, QrCode, Calendar, History, Printer, Download } from "lucide-react";
import { PINGate } from "@/components/PINGate";
import { MENU, PIZZAS, DRINKS, type Item } from "@/lib/data";
import { useOrders } from "@/stores/orderStore";
import { formatFCFA } from "@/lib/config";

export const Route = createFileRoute("/admin")({
  component: () => (
    <PINGate pin="9999" label="Administration">
      <Admin />
    </PINGate>
  ),
});

type Section = "menu" | "pizza" | "bar" | "qr" | "reservations" | "history";

const NAV: { key: Section; label: string; Icon: typeof Utensils }[] = [
  { key: "menu", label: "Menu", Icon: Utensils },
  { key: "pizza", label: "Pizza", Icon: Pizza },
  { key: "bar", label: "Bar", Icon: Wine },
  { key: "qr", label: "QR Tables", Icon: QrCode },
  { key: "reservations", label: "Réservations", Icon: Calendar },
  { key: "history", label: "Historique", Icon: History },
];

function Admin() {
  const [section, setSection] = useState<Section>("menu");
  return (
    <div className="min-h-screen flex bg-brand-bg">
      <aside className="w-64 bg-brand-dark text-white p-5 hidden md:flex flex-col gap-1">
        <h1 className="font-display font-extrabold text-2xl mb-6">
          <span className="text-brand">Admin</span> · Tablier
        </h1>
        {NAV.map((n) => (
          <button key={n.key} onClick={() => setSection(n.key)} className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition ${section===n.key?"bg-brand text-brand-dark":"text-white/70 hover:bg-white/5 hover:text-white"}`}>
            <n.Icon size={18}/> {n.label}
          </button>
        ))}
      </aside>
      {/* Mobile nav */}
      <div className="md:hidden fixed top-0 inset-x-0 z-40 bg-brand-dark text-white p-3 overflow-x-auto scrollbar-hide flex gap-2">
        {NAV.map((n) => (
          <button key={n.key} onClick={() => setSection(n.key)} className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold ${section===n.key?"bg-brand text-brand-dark":"bg-white/10"}`}>{n.label}</button>
        ))}
      </div>

      <main className="flex-1 p-6 md:p-10 pt-20 md:pt-10 overflow-x-auto">
        {section === "menu" && <ItemList title="Menu" items={MENU}/>}
        {section === "pizza" && <ItemList title="Pizza" items={PIZZAS}/>}
        {section === "bar" && <ItemList title="Bar & Boissons" items={DRINKS}/>}
        {section === "qr" && <QRSection/>}
        {section === "reservations" && <ReservationsSection/>}
        {section === "history" && <HistorySection/>}
      </main>
    </div>
  );
}

function ItemList({ title, items }: { title: string; items: Item[] }) {
  const [list, setList] = useState(items.map((i) => ({ ...i, available: i.available ?? true })));
  return (
    <div>
      <div className="flex items-end justify-between mb-6">
        <h2 className="font-display font-extrabold text-3xl">{title}</h2>
        <span className="text-sm text-muted-foreground">{list.length} articles</span>
      </div>
      <div className="bg-white rounded-2xl border border-black/5 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-brand-bg text-xs uppercase tracking-wider text-muted-foreground">
            <tr><th className="text-left p-3">Article</th><th className="text-left p-3 hidden sm:table-cell">Catégorie</th><th className="text-right p-3">Prix</th><th className="text-center p-3">Statut</th></tr>
          </thead>
          <tbody>
            {list.map((it,idx) => (
              <tr key={it.id} className="border-t border-black/5">
                <td className="p-3 flex items-center gap-3"><img src={it.image} alt="" className="h-10 w-10 rounded-lg object-cover"/><div><p className="font-semibold">{it.name}</p><p className="text-xs text-muted-foreground sm:hidden">{it.category}</p></div></td>
                <td className="p-3 hidden sm:table-cell text-muted-foreground">{it.category}</td>
                <td className="p-3 text-right font-bold text-brand-dark-green">{formatFCFA(it.price)}</td>
                <td className="p-3 text-center">
                  <button onClick={() => setList((l) => l.map((x,i)=>i===idx?{...x,available:!x.available}:x))} className={`px-3 py-1 rounded-full text-xs font-bold ${it.available?"bg-brand/20 text-brand-dark-green":"bg-destructive/15 text-destructive"}`}>
                    {it.available ? "Disponible" : "Épuisé"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">Les modifications sont conservées dans la session.</p>
    </div>
  );
}

function QRSection() {
  const tables = Array.from({ length: 30 }, (_, i) => i + 1);
  const base = typeof window !== "undefined" ? window.location.origin : "";
  return (
    <div>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <h2 className="font-display font-extrabold text-3xl">QR Codes des tables</h2>
        <button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-full bg-brand-dark text-white px-5 py-2.5 font-bold hover:bg-brand hover:text-brand-dark transition"><Printer size={16}/> Imprimer</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {tables.map((n) => (
          <div key={n} className="bg-white rounded-2xl p-4 border border-black/5 text-center">
            <div className="bg-white p-2 rounded-lg inline-block">
              <QRCodeSVG value={`${base}/table/${n}`} size={120} fgColor="#222222" />
            </div>
            <p className="mt-2 font-display font-bold">Table {n}</p>
            <p className="text-xs text-muted-foreground break-all">/table/{n}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReservationsSection() {
  return (
    <div>
      <h2 className="font-display font-extrabold text-3xl mb-2">Réservations</h2>
      <p className="text-muted-foreground">Les réservations entrantes via WhatsApp seront listées ici une fois la synchronisation activée.</p>
      <div className="mt-6 bg-white border border-black/5 rounded-2xl p-10 text-center text-muted-foreground">
        <Calendar size={36} className="mx-auto mb-3 opacity-40"/>
        Aucune réservation enregistrée pour le moment.
      </div>
    </div>
  );
}

function HistorySection() {
  const orders = useOrders((s) => s.orders);
  const clear = useOrders((s) => s.clear);
  const exportCSV = () => {
    const rows = [["Date","Table","Articles","Total","Statut"]];
    orders.forEach((o)=>rows.push([new Date(o.createdAt).toLocaleString("fr-FR"), o.table, o.lines.map(l=>`${l.name} x${l.qty}`).join(" | "), String(o.total), o.status]));
    const csv = rows.map((r)=>r.map((c)=>`"${String(c).replaceAll('"','""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "commandes.csv"; a.click();
  };
  return (
    <div>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <h2 className="font-display font-extrabold text-3xl">Historique des commandes</h2>
        <div className="flex gap-2">
          <button onClick={exportCSV} className="inline-flex items-center gap-2 rounded-full bg-brand text-brand-dark px-5 py-2.5 font-bold hover:bg-brand-accent transition"><Download size={16}/> Export CSV</button>
          <button onClick={() => confirm("Effacer tout l'historique ?") && clear()} className="rounded-full border border-destructive/40 text-destructive px-5 py-2.5 font-bold hover:bg-destructive/10">Effacer</button>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-black/5 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-brand-bg text-xs uppercase tracking-wider text-muted-foreground">
            <tr><th className="text-left p-3">Date</th><th className="text-left p-3">Table</th><th className="text-left p-3 hidden md:table-cell">Articles</th><th className="text-right p-3">Total</th><th className="text-center p-3">Statut</th></tr>
          </thead>
          <tbody>
            {orders.length === 0 && <tr><td colSpan={5} className="p-10 text-center text-muted-foreground">Aucune commande</td></tr>}
            {orders.map((o) => (
              <tr key={o.id} className="border-t border-black/5">
                <td className="p-3 whitespace-nowrap">{new Date(o.createdAt).toLocaleString("fr-FR")}</td>
                <td className="p-3 font-bold text-brand-dark-green">T{o.table}</td>
                <td className="p-3 hidden md:table-cell text-muted-foreground">{o.lines.map((l)=>`${l.name} ×${l.qty}`).join(", ")}</td>
                <td className="p-3 text-right font-bold">{formatFCFA(o.total)}</td>
                <td className="p-3 text-center"><span className="px-2 py-1 rounded-full text-xs font-bold bg-brand/15 text-brand-dark-green">{o.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
