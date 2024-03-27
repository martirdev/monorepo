import { LoginPage } from "@/components/pages/login-page";
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
import { TrpcProvider } from "@/lib/trpc";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
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
  const authSession = cookies().get("auth_session")?.value;

  if (!user) {
    return <LoginPage />;
  }

  return (
    <html lang="ru">
      <body className={inter.className}>
        <TrpcProvider token={authSession}>
          <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-gray-50 lg:block">
              <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-[60px] items-center border-b px-6">
                  <Link
                    className="flex items-center gap-2 font-semibold"
                    href="/"
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
              <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-50 px-6">
                <div className="ml-auto flex gap-2 items-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        className="block rounded-full border border-gray-200 w-8 h-8"
                        size="icon"
                        variant="ghost"
                      >
                        <img
                          alt="Avatar"
                          className="rounded-full"
                          height="32"
                          src={`${process.env.AVATAR_URL}/${user.avatar}`}
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
                      <Link href="https://t.me/maximmartyr">
                        <DropdownMenuItem>Поддержка</DropdownMenuItem>
                      </Link>
                      <DropdownMenuSeparator />
                      <Link href={`${process.env.BACKEND_API}/logout`}>
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
        </TrpcProvider>
      </body>
    </html>
  );
}
