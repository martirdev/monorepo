import { cn } from "@/shared/lib/utils";
import { Container } from "@/shared/ui/layouts/container";
import { Link } from "@tanstack/react-router";
import { Package } from "lucide-react";
import { CartButton } from "./CartButton";
import { IconButton } from "./IconButton";
import Logo from "./Logo.svg";
import { MenuButton } from "./MenuButton";
import { Button } from "@/shared/ui/components/button";

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
        <Link to="/contact">Связаться с нами</Link>
      </Button>
      <Button
        variant="ghost"
        className="py-1.5 px-3 rounded-md hover:bg-gray-100 ease-in-out duration-200"
        asChild
      >
        <Link to="/faq">FAQ</Link>
      </Button>
    </nav>
  );
}

export function Header() {
  return (
    <header className="flex items-center gap-2 py-3 sticky top-0 bg-white/60 backdrop-blur-md z-50">
      <Container className="gap-10 flex items-center">
        <Link to="/">
          <Logo />
        </Link>
        <Nav className="hidden" />
        <div className="ml-auto flex items-center gap-3">
          <IconButton>
            <Package />
          </IconButton>
          <CartButton />
          <MenuButton trigggerClassName="md:hidden">
            <Nav className="" />
          </MenuButton>
        </div>
      </Container>
    </header>
  );
}
