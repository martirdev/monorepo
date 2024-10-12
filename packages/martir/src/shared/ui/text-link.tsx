import { Link as TanLink, createLink } from "@tanstack/react-router";
import { forwardRef } from "react";

export const TextLink = createLink(
  forwardRef((props: {}, ref: React.ForwardedRef<HTMLAnchorElement>) => {
    return <TanLink {...props} ref={ref} className="hover:underline" />;
  })
);
