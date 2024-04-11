import { LoginPage } from "@/components/pages/login-page";
import { Toaster } from "@/components/shared/sonner";
import { getUser } from "@/lib/external-api";
import { TrpcProvider } from "@/lib/trpc";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Butterfry",
  description: "Сервис для управления товарами",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();
  const authSession = cookies().get("auth_session")?.value;

  return (
    <html lang="ru">
      <body className={inter.className}>
        <TrpcProvider token={authSession}>
          <Providers user={user}>{children}</Providers>
        </TrpcProvider>
        <Toaster />
      </body>
    </html>
  );
}
