import Link, { LinkProps } from "next/link";
import { ForwardedRef, forwardRef, HTMLProps } from "react";
import { cn } from "../lib/utils";

export const TextLink = forwardRef(
  (
    props: Omit<HTMLProps<HTMLAnchorElement>, keyof LinkProps> & LinkProps,
    ref: ForwardedRef<HTMLAnchorElement>
  ) => {
    return (
      <Link
        {...props}
        ref={ref}
        className={cn(props.className, "hover:underline")}
      />
    );
  }
);

export const BaseLink = forwardRef(
  (
    props: Omit<HTMLProps<HTMLAnchorElement>, keyof LinkProps> & LinkProps,
    ref: ForwardedRef<HTMLAnchorElement>
  ) => {
    return (
      <Link
        {...props}
        ref={ref}
        className={cn(
          props.className,
          "underline text-blue-700 hover:no-underline"
        )}
      />
    );
  }
);
