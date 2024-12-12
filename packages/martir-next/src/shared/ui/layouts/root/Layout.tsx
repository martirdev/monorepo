import { Outlet, ScrollRestoration } from "@tanstack/react-router";
import { Toaster } from "@/shared/ui/components/toaster";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { useMeta } from "@/features/meta";

export function Layout() {
  useMeta();

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster />
      <ScrollRestoration />
    </div>
  );
}
