import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Item } from "@/lib/data";

export type CartLine = { item: Item; qty: number };

type State = {
  lines: CartLine[];
  open: boolean;
  add: (item: Item) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  setOpen: (v: boolean) => void;
  total: () => number;
  count: () => number;
};

export const useCart = create<State>()(
  persist(
    (set, get) => ({
      lines: [],
      open: false,
      add: (item) =>
        set((s) => {
          const ex = s.lines.find((l) => l.item.id === item.id);
          if (ex) {
            return { lines: s.lines.map((l) => l.item.id === item.id ? { ...l, qty: l.qty + 1 } : l), open: true };
          }
          return { lines: [...s.lines, { item, qty: 1 }], open: true };
        }),
      remove: (id) => set((s) => ({ lines: s.lines.filter((l) => l.item.id !== id) })),
      setQty: (id, qty) =>
        set((s) => ({
          lines: qty <= 0
            ? s.lines.filter((l) => l.item.id !== id)
            : s.lines.map((l) => l.item.id === id ? { ...l, qty } : l),
        })),
      clear: () => set({ lines: [] }),
      setOpen: (open) => set({ open }),
      total: () => get().lines.reduce((t, l) => t + l.item.price * l.qty, 0),
      count: () => get().lines.reduce((t, l) => t + l.qty, 0),
    }),
    { name: "letablier-cart" }
  )
);
