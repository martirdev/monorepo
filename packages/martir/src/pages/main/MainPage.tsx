import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../router";
import { MainSection } from "@/widgets/main-section-01";

function MainPage() {
  return (
    <div>
      <MainSection />
    </div>
  );
}

export const mainRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: MainPage,
  meta: () => [
    {
      title: "Оффициальный сайт бренда",
    },
  ],
});
