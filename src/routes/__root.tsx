import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { SplashScreen } from "@/components/SplashScreen";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-bg px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-extrabold text-brand">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">Cette page n'existe pas ou a été déplacée.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-brand-dark hover:bg-brand-accent transition">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-bg px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold">Cette page n'a pas pu se charger</h1>
        <p className="mt-2 text-sm text-muted-foreground">Quelque chose s'est mal passé. Veuillez réessayer.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="inline-flex items-center rounded-full bg-brand px-5 py-2 text-sm font-bold text-brand-dark hover:bg-brand-accent">
            Réessayer
          </button>
          <a href="/" className="inline-flex items-center rounded-full border border-black/15 px-5 py-2 text-sm font-semibold hover:bg-black/5">
            Accueil
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Le Tablier — Restaurant · Bar · Pizzeria à Lomé" },
      { name: "description", content: "Le Tablier — cuisine africaine & européenne, pizzeria et bar à Agoè Cacavéli, Lomé. Cuisine authentique, convivialité sincère." },
      { name: "theme-color", content: "#88D620" },
      { property: "og:title", content: "Le Tablier — Restaurant · Bar · Pizzeria à Lomé" },
      { property: "og:description", content: "Cuisine authentique, convivialité sincère. Restaurant, pizzeria et bar à Agoè Cacavéli, Lomé." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Inter:wght@400;500;600&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isStandalone =
    pathname.startsWith("/table/") ||
    pathname.startsWith("/reception") ||
    pathname.startsWith("/admin");

  return (
    <QueryClientProvider client={queryClient}>
      <SplashScreen />
      {!isStandalone && <Navbar />}
      <AnimatePresence mode="wait">
        <main key={pathname} className={isStandalone ? "" : "min-h-screen"}>
          <Outlet />
        </main>
      </AnimatePresence>
      {!isStandalone && <Footer />}
      {!isStandalone && <CartDrawer />}
    </QueryClientProvider>
  );
}
