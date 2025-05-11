import { Container } from "@/shared/ui/layouts/container";
import { PropsWithChildren } from "react";

type ContentProps = PropsWithChildren;

export function Content({ children }: ContentProps) {
  return (
    <Container className="prose mx-auto py-10 prose-a:no-underline hover:prose-a:underline max-w-[80ch]">
      {children}
    </Container>
  );
}
