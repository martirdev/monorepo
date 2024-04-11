import Link from "next/link";
import LogoIcon from "./logo.svg";

export function Logo() {
  return (
    <Link href="/">
      <LogoIcon className="h-6" />
    </Link>
  );
}
