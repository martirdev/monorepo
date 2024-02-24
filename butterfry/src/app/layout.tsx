import { Button } from "@/components/shared/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shared/dropdown-menu";
import { Toaster } from "@/components/shared/sonner";
import { SideNavLinks } from "@/components/widgets/side-nav-links";
import { getUser } from "@/lib/external-api";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

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

  if (!user) {
    return (
      <html lang="ru">
        <body className={inter.className}>
          <div className="flex items-center justify-center h-full">
            <Link href={`${process.env.BACKEND_API}/yandex/login`}>
              <Button size="sm">Войти через Yandex</Button>
            </Link>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-[60px] items-center border-b px-6">
                <Link
                  className="flex items-center gap-2 font-semibold"
                  href="#"
                >
                  <div className="h-6 w-6" />
                  <span>Butterfry</span>
                </Link>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <SideNavLinks />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
              <div className="ml-auto flex gap-2 items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      className="block rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800 dark:border-gray-800"
                      size="icon"
                      variant="ghost"
                    >
                      <Image
                        alt="Avatar"
                        className="rounded-full"
                        height="32"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "32/32",
                          objectFit: "cover",
                        }}
                        width="32"
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                      {user.surname} {user.name}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Настройки</DropdownMenuItem>
                    <DropdownMenuItem>Поддержка</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <Link href={`${process.env.BACKEND_API}/yandex/logout`}>
                      <DropdownMenuItem>Выйти</DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </header>
            <main>{children}</main>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
