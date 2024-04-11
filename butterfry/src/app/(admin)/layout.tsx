import { LoginPage } from "@/components/pages/login-page";
import { Logo } from "@/components/shared/logo";
import { Header } from "@/components/widgets/header";
import { SideNavLinks } from "@/components/widgets/side-nav-links";
import { getUser } from "@/lib/external-api";
import Link from "next/link";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();

  if (!user) {
    return <LoginPage />;
  }

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[250px_1fr]">
      <div className="hidden border-r bg-gray-50 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Logo />
          </div>
          <div className="flex-1 overflow-auto py-2">
            <SideNavLinks />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
