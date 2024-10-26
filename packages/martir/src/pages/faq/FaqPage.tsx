import { MDXContent } from "@/features/mdx-content";
import { FaqSection } from "@/widgets/faq-section";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../router";

function FaqPage() {
  return (
    <MDXContent>
      <FaqSection />
    </MDXContent>
  );
}

export const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faq",
  component: FaqPage,
  meta: () => [
    {
      title: "FAQ",
    },
  ],
});
