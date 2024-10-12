import { useEffect } from "react";

export function useEventListener<KW extends keyof WindowEventMap>(
  eventName: KW,
  callback: (event: WindowEventMap[KW]) => void
) {
  useEffect(() => {
    if (!window.addEventListener) return;

    window.addEventListener(eventName, callback);

    return () => {
      window.removeEventListener(eventName, callback);
    };
  }, [eventName, callback]);
}
