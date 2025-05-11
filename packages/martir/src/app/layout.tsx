import { Toaster } from "@/shared/ui/components/toaster";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import Contexts from "./Contexts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Оффициальный сайт бренда",
    template: "%s · MARTIR",
  },
  description:
    "Официальный сайт бренда MARTIR. Только оригинальная продукция. Фирменный стиль в духе панк-эстетики, который подчёркивает индивидуальность и стремление к экспериментам.",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="ru">
      <body>
        <Contexts>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </Contexts>
      </body>
    </html>
  );
}
