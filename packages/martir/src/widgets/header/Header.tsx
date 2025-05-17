import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/components/button";
import { Container } from "@/shared/ui/layouts/container";
import Link from "next/link";
import Image from "next/image";
import { CartButton } from "./CartButton";
import logo from "./Logo.svg";
import { MenuButton } from "./MenuButton";

type NavProps = {
  className?: string;
};

function Nav({ className }: NavProps) {
  return (
    <nav
      className={cn(
        "gap-1 md:gap-3 flex flex-col md:flex md:flex-row",
        className
      )}
    >
      <Button
        variant="ghost"
        className="py-1.5 px-3 rounded-md hover:bg-gray-100 ease-in-out duration-200"
        asChild
      >
        <Link href="/contacts">Связаться с нами</Link>
      </Button>
      <Button
        variant="ghost"
        className="py-1.5 px-3 rounded-md hover:bg-gray-100 ease-in-out duration-200"
        asChild
      >
        <Link href="/faq">FAQ</Link>
      </Button>
    </nav>
  );
}

export function Header() {
  return (
    <header className="flex items-center gap-2 py-3 sticky top-0 bg-white/60 backdrop-blur-md z-50">
      <Container className="gap-10 flex items-center">
        <Link href="/">
          <Image src={logo} alt="logo" width="40" height="40" />
        </Link>
        <Nav className="hidden" />
        <div className="ml-auto flex items-center gap-3">
          <CartButton />
          <MenuButton trigggerClassName="md:hidden">
            <Nav />
          </MenuButton>
        </div>
      </Container>
    </header>
  );
}
