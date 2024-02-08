import { useContext } from "react";
import { WhitelabelContext } from "..";

export function useWhitelabelTheme() {
  const ctx = useContext(WhitelabelContext);

  if (!ctx) {
    throw new Error(
      "useWhitelabelTheme must be used within a WhitelabelProvider"
    );
  }

  return ctx;
}
