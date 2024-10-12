import { Container } from "@/shared/ui/layouts/container";
import { MDXProvider } from "@mdx-js/react";
import { PropsWithChildren } from "react";

type MDXContentProps = PropsWithChildren;

export function MDXContent(props: MDXContentProps) {
  return (
    <Container className="prose mx-auto py-10">
      <MDXProvider {...props} />
    </Container>
  );
}
