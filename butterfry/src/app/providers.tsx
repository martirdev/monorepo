"use client";

import { UserContext } from "@/components/features/context/user-context";
import { UserResponse } from "@/lib/external-api";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ user: UserResponse }>;

export function Providers({ children, user }: Props) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
