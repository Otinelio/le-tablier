import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronDown, UtensilsCrossed, Pizza, Wine, Users, Star, MessageCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { PageTransition } from "@/components/PageTransition";
import { MenuItemCard } from "@/components/MenuItemCard";
import { MENU, PIZZAS } from "@/lib/data";
import { waLink } from "@/lib/config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Le Tablier — Restaurant, Bar & Pizzeria à Lomé" },
      { name: "description", content: "Restaurant, bar et pizzeria à Agoè Cacavéli, Lomé. Cuisine africaine et européenne, pizzas artisanales, cocktails et afterwork." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { Icon: UtensilsCrossed, label: "Cuisine africaine & européenne" },
  { Icon: Pizza, label: "Les meilleures pizzas de Lomé" },
  { Icon: Wine, label: "Bar & afterwork" },
  { Icon: Users, label: "Ambiance conviviale" },
];

const universes = [
  { title: "Restaurant", desc: "Plats du jour, cuisine maison, mets savoureux.", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80", to: "/menu" },
  { title: "Pizzeria", desc: "Nos pizzas artisanales font le bonheur de Lomé.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80", to: "/pizza" },
  { title: "Bar", desc: "Afterwork, cocktails, ambiance détendue.", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80", to: "/bar" },
];

const testimonials = [
  { name: "Aïcha K.", text: "Le meilleur Poulet DG de Lomé, ambiance super chaleureuse." },
  { name: "Marc D.", text: "Pizzas artisanales incroyables et un service au top." },
  { name: "Yasmine A.", text: "Mon spot afterwork préféré, cocktails à tomber !" },
];

function HomePage() {
  const popular = [...MENU.slice(0, 4), ...PIZZAS.slice(0, 2)];
  return (
    <PageTransition>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden text-white">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/85 via-brand-dark/70 to-brand-dark-green/60" />
        </div>

        <motion.div
          aria-hidden
          animate={{ scale: [1, 1.15, 1], rotate: [0, 30, 0], borderRadius: ["50%", "40%", "50%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 lg:right-20 h-[420px] w-[420px] bg-brand/35 blur-3xl"
        />
        <motion.div
          aria-hidden
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 -left-20 h-80 w-80 bg-brand-accent/25 blur-3xl rounded-full"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 grid gap-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-brand/15 backdrop-blur border border-brand/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand"
          >
            <span className="h-2 w-2 rounded-full bg-brand animate-pulse" /> Ouvert · Lomé · Togo
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-display font-black text-5xl sm:text-7xl lg:text-8xl leading-[0.9] max-w-4xl"
          >
            Bienvenue chez <span className="text-brand">Le Tablier</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            className="text-lg sm:text-xl text-white/75 max-w-xl"
          >
            Restaurant · Bar · Pizzeria à Lomé. Cuisine authentique, convivialité sincère.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-4 pt-2">
            <Link to="/menu" className="inline-flex items-center gap-2 rounded-full bg-brand text-brand-dark hover:bg-brand-accent transition px-7 py-3.5 font-bold text-sm sm:text-base">
              Voir le Menu <ArrowRight size={18} />
            </Link>
            <Link to="/reserver" className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 hover:border-brand hover:text-brand transition px-7 py-3.5 font-bold text-sm sm:text-base">
              Réserver une table
            </Link>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
        >
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* HIGHLIGHT STRIP */}
      <section className="bg-brand-dark-green text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="h-12 w-12 shrink-0 rounded-2xl bg-brand grid place-items-center text-brand-dark">
                <Icon size={22} />
              </div>
              <p className="font-display font-bold text-base sm:text-lg leading-snug">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* UNIVERSE */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-dark-green">Notre univers</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl mt-2">Trois lieux, une seule âme</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {universes.map((u, i) => (
            <motion.div
              key={u.title}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={u.img} alt={u.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="font-display font-extrabold text-3xl">{u.title}</h3>
                  <p className="mt-2 text-sm text-white/80 max-w-xs">{u.desc}</p>
                  <Link to={u.to} className="mt-4 inline-flex items-center gap-1 text-brand font-bold text-sm group-hover:gap-2 transition-all">
                    Découvrir <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-brand scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* POPULAR */}
      <section className="bg-white border-y border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-dark-green">Les plats du moment</span>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl mt-2">Coups de cœur</h2>
            </div>
            <Link to="/menu" className="inline-flex items-center gap-1 text-brand-dark-green font-bold hover:gap-2 transition-all">
              Voir tout le menu <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popular.map((item) => <MenuItemCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      {/* RESERVATION CTA */}
      <ReservationCTA />

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-dark-green">Ils en parlent</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl mt-2">Ce que disent nos invités</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-black/5"
            >
              <div className="flex gap-1 mb-4 text-brand">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={16} fill="currentColor" />)}
              </div>
              <p className="text-sm leading-relaxed text-foreground/85">"{t.text}"</p>
              <p className="mt-5 font-display font-bold">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}

function ReservationCTA() {
  const [f, setF] = useState({ name: "", date: "", time: "19:00", guests: "2" });
  const send = () => {
    const body = `Bonjour Le Tablier, je voudrais réserver une table :\n\nNom : ${f.name}\nDate : ${f.date}\nHeure : ${f.time}\nNombre de personnes : ${f.guests}\n\nMerci de confirmer ma réservation.`;
    window.open(waLink(body), "_blank");
  };
  return (
    <section className="relative overflow-hidden bg-brand-dark text-white">
      <div className="absolute -right-32 top-0 bottom-0 w-[60%] bg-brand origin-top-right -skew-x-12 opacity-95" />
      <div className="absolute right-10 top-10 bottom-10 w-1 bg-brand-accent hidden lg:block" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block bg-white/10 text-brand px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Réservation rapide</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl mt-4 leading-tight">Réservez votre table en quelques secondes</h2>
          <p className="mt-4 text-white/70 max-w-md">Confirmation immédiate via WhatsApp. Notre équipe vous répond rapidement.</p>
        </div>
        <div className="relative bg-white text-brand-dark rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="grid sm:grid-cols-2 gap-3">
            <input value={f.name} onChange={(e)=>setF({...f,name:e.target.value})} placeholder="Votre nom" className="rounded-xl border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand sm:col-span-2" />
            <input type="date" value={f.date} onChange={(e)=>setF({...f,date:e.target.value})} className="rounded-xl border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" />
            <input type="time" value={f.time} onChange={(e)=>setF({...f,time:e.target.value})} className="rounded-xl border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" />
            <select value={f.guests} onChange={(e)=>setF({...f,guests:e.target.value})} className="rounded-xl border border-black/10 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand sm:col-span-2">
              {[1,2,3,4,5,6,7,8,10,12,15,20].map((n)=><option key={n} value={n}>{n} personne{n>1?"s":""}</option>)}
            </select>
          </div>
          <button onClick={send} className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-dark text-white hover:bg-brand hover:text-brand-dark transition py-3.5 font-bold">
            <MessageCircle size={18} /> Envoyer la réservation
          </button>
        </div>
      </div>
    </section>
  );
}
