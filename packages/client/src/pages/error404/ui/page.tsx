import { Link } from "@tanstack/react-router";
import { Rat } from "lucide-react";
import { FC } from "react";

import { Button } from "@/shared/ui/button";

export const Error404Page: FC = () => {
  return (
    <div className="flex h-full w-full justify-center">
      <div className="mt-32 max-w-[500px] text-center">
        <Rat className="m-auto h-12 w-12" />
        <div className="mb-6 mt-4">
          <h2 className="mb-2 text-2xl font-medium">Страница не найдена</h2>
          <p className="text-zinc-500">
            Проверьте URL, либо обратитесь к администратору
          </p>
        </div>
        <Button asChild>
          <Link to="/">На главную</Link>
        </Button>
      </div>
    </div>
  );
};
