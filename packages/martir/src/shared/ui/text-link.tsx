import { Link as TanLink, createLink } from "@tanstack/react-router";
import { ForwardedRef, forwardRef, HTMLProps } from "react";
import { cn } from "../lib/utils";

export const TextLink = createLink(
  forwardRef(
    (
      props: Omit<HTMLProps<HTMLAnchorElement>, "preload">,
      ref: ForwardedRef<HTMLAnchorElement>
    ) => {
      return (
        <TanLink
          {...props}
          to={props.href}
          ref={ref}
          className={cn(props.className, "hover:underline")}
        />
      );
    }
  )
);

export const BaseLink = createLink(
  forwardRef(
    (
      props: Omit<HTMLProps<HTMLAnchorElement>, "preload">,
      ref: ForwardedRef<HTMLAnchorElement>
    ) => {
      return (
        <TanLink
          {...props}
          to={props.href}
          ref={ref}
          className={cn(
            props.className,
            "underline text-blue-700 hover:no-underline"
          )}
        />
      );
    }
  )
);
