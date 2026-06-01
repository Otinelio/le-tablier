import { create } from "zustand";
import { persist } from "zustand/middleware";

export type OrderStatus = "Reçue" | "En préparation" | "Servie";
export type Order = {
  id: string;
  table: string;
  lines: { name: string; qty: number; price: number }[];
  total: number;
  status: OrderStatus;
  createdAt: number;
};

type State = {
  orders: Order[];
  add: (o: Omit<Order, "id" | "status" | "createdAt">) => Order;
  setStatus: (id: string, status: OrderStatus) => void;
  remove: (id: string) => void;
  clear: () => void;
};

export const useOrders = create<State>()(
  persist(
    (set) => ({
      orders: [],
      add: (o) => {
        const order: Order = { ...o, id: crypto.randomUUID(), status: "Reçue", createdAt: Date.now() };
        set((s) => ({ orders: [order, ...s.orders] }));
        return order;
      },
      setStatus: (id, status) => set((s) => ({ orders: s.orders.map((o) => o.id === id ? { ...o, status } : o) })),
      remove: (id) => set((s) => ({ orders: s.orders.filter((o) => o.id !== id) })),
      clear: () => set({ orders: [] }),
    }),
    { name: "letablier-orders" }
  )
);
