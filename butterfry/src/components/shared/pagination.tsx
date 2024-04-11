import type { UrlObject } from "url";
import {
  Button,
  ButtonProps,
  buttonVariants,
} from "@/components/shared/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import * as React from "react";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("flex", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<typeof Link>;

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <Link
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("px-3", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("px-3", className)}
    {...props}
  >
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">Все страницы</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

type ShortPaginationPropsType = {
  className?: string;
  isLoading?: boolean;
  pages: number;
  page: number;
  prevHref: UrlObject;
  nextHref: UrlObject;
};
function ShortPagination({
  prevHref,
  nextHref,
  className,
  isLoading,
  pages,
  page,
}: ShortPaginationPropsType) {
  const prevDisabled = isLoading || page === 0;
  const nextDisabled = isLoading || page + 1 === pages;

  return (
    <div className={cn("space-x-2", className)}>
      <Link
        href={prevHref}
        className={cn({
          "pointer-events-none": prevDisabled,
        })}
      >
        <Button
          className="px-2.5"
          variant="outline"
          size="sm"
          disabled={prevDisabled}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </Link>
      <Link
        href={nextHref}
        className={cn({
          "pointer-events-none": nextDisabled,
        })}
      >
        <Button
          className="px-2.5"
          variant="outline"
          size="sm"
          disabled={nextDisabled}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  ShortPagination,
};
