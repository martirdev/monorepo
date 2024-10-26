import { useMatches } from "@tanstack/react-router";
import { useEffect } from "react";

const TITLE = "MARTIR";

export function useMeta() {
  const matches = useMatches();
  const meta = matches.at(-1)?.meta?.find((meta) => meta.title);

  useEffect(() => {
    document.title = [TITLE, meta?.title].filter(Boolean).join(" · ");
  }, [meta]);
}
