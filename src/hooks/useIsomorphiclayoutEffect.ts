//https://github.com/Andarist/use-isomorphic-layout-effect
/**
 * A React helper hook for scheduling a layout effect with a fallback to a regular effect for environments where layout effects should not be used (such as server-side rendering).
 * */
import { useEffect, useLayoutEffect } from "react";

export const useIsomorphicLayoutEffect =
    typeof window !== "undefined" &&
    typeof window.document !== "undefined" &&
    typeof window.document.createElement !== "undefined"
        ? useLayoutEffect
        : useEffect;
