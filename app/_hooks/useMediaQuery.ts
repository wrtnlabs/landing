import { useIsomorphicLayoutEffect } from "framer-motion";
import React from "react";

type UseMediaQueryOptions = {
  defaultValue?: boolean;
  initializeWithValue?: boolean;
};

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {},
): boolean {
  const isServer = typeof window === "undefined";

  const getMatches = (query: string): boolean => {
    if (isServer) return defaultValue;
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = React.useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query);
    }
    return defaultValue;
  });

  const handleChange = () => setMatches(getMatches(query));

  useIsomorphicLayoutEffect(() => {
    if (isServer) return;

    const matchMedia = window.matchMedia(query);

    handleChange();
    matchMedia.addEventListener("change", handleChange);

    return () => matchMedia.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}
