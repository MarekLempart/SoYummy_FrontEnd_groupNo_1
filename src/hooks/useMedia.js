// src/hooks/useMedia.js

import { useMediaQuery } from "react-responsive";

export const useMedia = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1439px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  return { isMobile, isTablet, isDesktop };
};
