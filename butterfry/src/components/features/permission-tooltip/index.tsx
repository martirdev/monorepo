"use client";
import { Badge } from "@/components/shared/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shared/tooltip";
import { useUserByProject } from "@/lib/hooks/user";
import { intersection } from "lodash";
import React, { cloneElement, forwardRef, useMemo } from "react";

type PermissionButtonProps = {
  disabled?: boolean;
  permissions: string[];
  children: JSX.Element;
};

const PermissionTooltip = forwardRef(
  ({ permissions, disabled, children }: PermissionButtonProps, ref) => {
    const user = useUserByProject();

    const hasRole = useMemo(
      () => !!intersection(permissions, user.project?.role).length,
      [user.project?.role, permissions]
    );

    const component = cloneElement(children, {
      ref,
      disabled: disabled || !hasRole,
    });

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{component}</TooltipTrigger>
          {!hasRole && (
            <TooltipContent>
              <div>
                Вам нехватает доступов (
                {permissions.map((permission, index) => (
                  <React.Fragment key={permission}>
                    <Badge variant="outline" className="whitespace-nowrap">
                      {permission}
                    </Badge>
                    {index + 1 !== permissions.length && (
                      <span className="mx-1">или</span>
                    )}
                  </React.Fragment>
                ))}
                ), обратитесь к администратору проекта
              </div>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    );
  }
);
PermissionTooltip.displayName = "PermissionTooltip";

export { PermissionTooltip };
