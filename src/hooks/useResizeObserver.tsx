import { useEffect, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";

interface Size {
    width: number;
    height: number;
}

export function useResizeObserver<T extends Element>(
    ref: React.MutableRefObject<T>
) {
    const [size, setSize] = useState<Size>({} as any);
    useEffect(() => {
        if (ref.current) {
            const resizeObserver = new ResizeObserver(
                (entries: ResizeObserverEntry[]) => {
                    requestAnimationFrame(() => {
                        if (!Array.isArray(entries) || !entries.length) {
                            return;
                        }
                        const target = entries[0].target as HTMLElement;
                        const { offsetWidth, offsetHeight } = target;
                        setSize({ width: offsetWidth, height: offsetHeight });
                    });
                }
            );
            resizeObserver.observe(ref.current);
            return () => resizeObserver.disconnect();
        }
        return () => {};
    }, [ref]);

    return size;
}
