import { MDXContent } from "@/features/mdx-content";
import { ContactsSection } from "@/widgets/contacts-section";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../router";

function ContactsPage() {
  return (
    <MDXContent>
      <ContactsSection />
    </MDXContent>
  );
}

export const contactsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactsPage,
});
