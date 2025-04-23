import { useMediaQuery } from "./useMediaQuery";

export function useScreenSize() {
  const sm = useMediaQuery(`(max-width: ${980 - 1}px)`);
  const md = useMediaQuery(
    `(min-width: ${980}px) and (max-width: ${1280 - 1}px)`,
  );
  const lg = useMediaQuery(`(min-width: ${1280}px)`);

  return {
    bp: sm ? "sm" : md ? "md" : "lg",
    isMobile: sm,
    isTablet: md,
    isDesktop: lg,
  };
}
