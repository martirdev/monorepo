"use client";
import { UserResponse } from "@/lib/external-api";
import { createContext, useContext } from "react";

export const UserContext = createContext<UserResponse | undefined>(undefined);

export const useUserContext = () => useContext(UserContext);
