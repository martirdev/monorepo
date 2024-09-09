import { Link } from "@tanstack/react-router";
import { Rat } from "lucide-react";
import { FC } from "react";

import { BlankSlate } from "@/features/blank-slate";
import { Button } from "@/shared/ui/button";

export const Error404Page: FC = () => {
  return (
    <div className="flex h-full w-full justify-center">
      <BlankSlate
        primaryAction={
          <Button asChild>
            <Link to="/">На главную</Link>
          </Button>
        }
        className="mt-32"
        description="Проверьте URL, либо обратитесь к администратору"
        icon={Rat}
        title="Страница не найдена"
      />
    </div>
  );
};
