import { Link as TanLink, createLink } from "@tanstack/react-router";
import { forwardRef } from "react";

export const TextLink = createLink(
  forwardRef(
    (props: { href?: string }, ref: React.ForwardedRef<HTMLAnchorElement>) => {
      return (
        <TanLink
          {...props}
          to={props.href}
          ref={ref}
          className="hover:underline"
        />
      );
    }
  )
);
