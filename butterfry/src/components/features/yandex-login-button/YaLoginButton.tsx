"use client";
import { Button } from "@/components/shared/button";
import YandexIcon from "@/components/shared/svg/yandex.svg";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function YaLoginButton() {
  const params = useSearchParams();

  return (
    <Button
      className="w-full bg-slate-600 hover:bg-slate-700 flex gap-1"
      asChild
    >
      <Link
        href={`${process.env.BACKEND_API}/yandex/login?${params.toString()}`}
        className="block"
      >
        <YandexIcon width={16} />
        <span>Яндекс</span>
      </Link>
    </Button>
  );
}
