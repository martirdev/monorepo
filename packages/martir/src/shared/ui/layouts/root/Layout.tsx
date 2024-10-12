import { Outlet, ScrollRestoration } from "@tanstack/react-router";
import { Toaster } from "@/shared/ui/components/toaster";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

export function Layout() {
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
