import { Logo } from "@/components/shared/logo";

export default async function OrderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-50 h-full overflow-auto">
      <header className="bg-white py-6">
        <div className="container">
          <Logo />
        </div>
      </header>
      <main className="py-14">
        <div className="container">{children}</div>
      </main>
    </div>
  );
}
