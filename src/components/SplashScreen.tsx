import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-bg"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 text-center"
          >
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-brand md:text-7xl">
              LE TABLIER
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-4 font-sans text-sm font-semibold uppercase tracking-[0.3em] text-brand-dark/80"
            >
              Restaurant · Bar · Pizzeria
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 1.5, ease: "circOut" }}
            className="absolute bottom-1/4 h-[2px] w-48 bg-gradient-to-r from-transparent via-brand to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
