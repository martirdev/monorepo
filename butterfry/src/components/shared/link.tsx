import React, { memo } from "react";
import NextLink from "next/link";

type LinkProps = React.ComponentProps<typeof NextLink>;

export const Link = memo<LinkProps>(function Link(props) {
  return (
    <NextLink
      {...props}
      className="underline underline-offset-4 hover:text-primary text-muted-foreground"
    />
  );
});
