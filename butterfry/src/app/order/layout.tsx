import Link from "next/link";
import Logo from "../logo.svg";

export default async function OrderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-50 h-full">
      <header className="bg-white py-6">
        <div className="container">
          <Link href="/">
            <Logo className="h-6" />
          </Link>
        </div>
      </header>
      <main className="py-14">
        <div className="container">{children}</div>
      </main>
    </div>
  );
}
