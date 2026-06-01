import { create } from "zustand";
import { persist } from "zustand/middleware";
const useOrders = create()(
  persist(
    (set) => ({
      orders: [],
      add: (o) => {
        const order = { ...o, id: crypto.randomUUID(), status: "Reçue", createdAt: Date.now() };
        set((s) => ({ orders: [order, ...s.orders] }));
        return order;
      },
      setStatus: (id, status) => set((s) => ({ orders: s.orders.map((o) => o.id === id ? { ...o, status } : o) })),
      remove: (id) => set((s) => ({ orders: s.orders.filter((o) => o.id !== id) })),
      clear: () => set({ orders: [] })
    }),
    { name: "letablier-orders" }
  )
);
export {
  useOrders as u
};
