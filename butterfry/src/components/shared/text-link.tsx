import React, { memo } from "react";
import NextLink from "next/link";

type TextLinkProps = React.ComponentProps<typeof NextLink>;

export const TextLink = memo<TextLinkProps>(function Link(props) {
  return (
    <NextLink
      {...props}
      className="underline underline-offset-4 hover:text-primary text-muted-foreground"
    />
  );
});
