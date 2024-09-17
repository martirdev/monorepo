import { createRoute } from "@tanstack/react-router";
import { FC } from "react";

import { sharedRoutes } from "@/pages/router";
import Particles from "@/shared/magicui/particles";
import { Container } from "@/shared/ui/container";
import { FlipWords } from "@/shared/ui/flip-words";

const WORDS = ["быстро", "просто", "качественно"];

const HomePage: FC = () => {
  return (
    <div className="relative flex h-[500px] items-center">
      <div className="relative z-10">
        <Container className="pb-6 pt-2">
          <h1 className="text-5xl font-bold leading-none tracking-normal sm:text-6xl md:text-7xl lg:text-8xl">
            Butterfry
          </h1>
          <p className="mt-2 text-2xl font-normal text-gray-500 sm:text-4xl">
            Управляй товарами{" "}
            <FlipWords
              className="block font-normal text-gray-600"
              words={WORDS}
            />
          </p>
        </Container>
      </div>
      <Particles
        className="absolute inset-0 z-0"
        color="#374151"
        ease={80}
        quantity={300}
        refresh
      />
    </div>
  );
};

export const homeRoute = createRoute({
  component: HomePage,
  getParentRoute: () => sharedRoutes,
  path: "/",
});
