import { Button } from "@/components/shared/button";
import { Inter } from "next/font/google";
import Link from "next/link";
import YandexIcon from "@/components/shared/svg/yandex.svg";

const inter = Inter({ subsets: ["latin"] });

export function LoginPage() {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className="h-full bg-gray-100">
          <div className="h-full flex items-center justify-center container">
            <div className="w-full max-w-[450px] bg-white p-8 rounded space-y-8 z-10">
              <div className="text-sm text-center text-gray-500 flex gap-2 items-center">
                <hr className="flex-1" />
                <span>Войти в сервис через</span>
                <hr className="flex-1" />
              </div>
              <Link
                href={`${process.env.BACKEND_API}/yandex/login`}
                className="block"
              >
                <Button className="w-full bg-slate-600 hover:bg-slate-700 flex gap-1">
                  <YandexIcon width={16} />
                  <span>Яндекс</span>
                </Button>
              </Link>
            </div>
            <div className="aspect-square w-full max-w-[800px] absolute left-1/2 top-1/2 blur-[150px] bg-gradient-to-b from-[#F4E87E] to-[#E03535] -translate-x-1/2 -translate-y-1/2 rounded-full" />
          </div>
        </div>
      </body>
    </html>
  );
}
