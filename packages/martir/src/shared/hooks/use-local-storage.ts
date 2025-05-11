"use client";

import {
  localStorageScheme,
  LocalStorageType,
} from "@/shared/lib/localstorage";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { z } from "zod";
import { useEventListener } from "./use-event-listener";

declare global {
  interface WindowEventMap {
    "local-storage": CustomEvent;
  }
}

export function useLocalStorage<K extends keyof LocalStorageType>(
  key: K,
  defaultValue: z.infer<LocalStorageType[K]>
) {
  const get = useCallback(() => {
    try {
      if (typeof window === "undefined") {
        return defaultValue;
      }

      const stored = JSON.parse(localStorage.getItem(key)!);
      const parsed = localStorageScheme[key].safeParse(stored);

      if (parsed.success) {
        return parsed.data;
      }

      return defaultValue;
    } catch (e) {
      console.error(`Error reading localStorage key "${key}":`, e);
      return defaultValue;
    }
  }, [key, defaultValue]);

  const [value, setValue] = useState<z.infer<LocalStorageType[K]>>(() => get());

  const set = useCallback<
    Dispatch<SetStateAction<z.infer<LocalStorageType[K]>>>
  >(
    (value) => {
      let newValue = value;
      if (typeof value === "function") {
        const valueSetter = value;
        const current = get();
        newValue = valueSetter(current);
      }

      try {
        localStorageScheme[key].parse(newValue);

        const stringifiedValue = JSON.stringify(newValue);
        localStorage.setItem(key, stringifiedValue);
        dispatchEvent(
          new StorageEvent("local-storage", { key, newValue: stringifiedValue })
        );

        return newValue;
      } catch (e) {
        console.error(`Error setting localStorage key “${key}”:`, e);
      }
    },
    [get, key]
  );

  const handleStorageChange = useCallback(
    (e: StorageEvent | CustomEvent) => {
      if (e instanceof StorageEvent && e.key !== key) {
        return;
      }
      setValue(get());
    },
    [key, get]
  );

  useEventListener("storage", handleStorageChange);

  useEventListener("local-storage", handleStorageChange);

  return [value, set] as const;
}
