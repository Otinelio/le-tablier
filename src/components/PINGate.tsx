import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export function PINGate({ pin, label, children }: { pin: string; label: string; children: ReactNode }) {
  const [entered, setEntered] = useState<string>("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const press = (d: string) => {
    setError(false);
    const next = (entered + d).slice(0, 4);
    setEntered(next);
    if (next.length === 4) {
      if (next === pin) setTimeout(() => setUnlocked(true), 200);
      else { setError(true); setTimeout(() => setEntered(""), 600); }
    }
  };
  const clear = () => { setEntered(""); setError(false); };

  if (unlocked) return <>{children}</>;

  return (
    <div className="min-h-screen grid place-items-center bg-brand-dark text-white px-6">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-sm text-center">
        <div className="mx-auto h-16 w-16 rounded-2xl bg-brand grid place-items-center mb-5">
          <Lock className="text-brand-dark" size={28} />
        </div>
        <h1 className="font-display font-extrabold text-2xl mb-1">{label}</h1>
        <p className="text-white/60 text-sm mb-8">Entrez le code à 4 chiffres</p>
        <motion.div animate={error ? { x: [-8, 8, -6, 6, 0] } : {}} className="flex justify-center gap-3 mb-8">
          {[0,1,2,3].map((i) => (
            <div key={i} className={`h-14 w-14 rounded-2xl border-2 grid place-items-center text-2xl font-bold ${entered[i] ? "border-brand bg-brand/10" : "border-white/20"} ${error ? "border-destructive" : ""}`}>
              {entered[i] ? "•" : ""}
            </div>
          ))}
        </motion.div>
        <div className="grid grid-cols-3 gap-3">
          {["1","2","3","4","5","6","7","8","9"].map((d) => (
            <button key={d} onClick={() => press(d)} className="h-16 rounded-2xl bg-white/5 hover:bg-brand hover:text-brand-dark transition font-display text-2xl font-bold">{d}</button>
          ))}
          <button onClick={clear} className="h-16 rounded-2xl bg-white/5 hover:bg-white/10 text-sm font-semibold">Effacer</button>
          <button onClick={() => press("0")} className="h-16 rounded-2xl bg-white/5 hover:bg-brand hover:text-brand-dark transition font-display text-2xl font-bold">0</button>
        </div>
      </motion.div>
    </div>
  );
}
