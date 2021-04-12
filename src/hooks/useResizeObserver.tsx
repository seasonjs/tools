import {useEffect, useState} from "react";
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
        let requestAnimationFrameId: number | null = null;
        if (ref.current) {
            const resizeObserver = new ResizeObserver(
                (entries: ResizeObserverEntry[]) => {
                    requestAnimationFrameId = requestAnimationFrame(() => {
                        if (!Array.isArray(entries) || !entries.length) {
                            return;
                        }
                        const target = entries[0].target as HTMLElement;
                        const {offsetWidth, offsetHeight} = target;
                        setSize({width: offsetWidth, height: offsetHeight});
                    });
                }
            );
            resizeObserver.observe(ref.current);
            return () => resizeObserver.disconnect();
        }
        return () => {
            //如果组件销毁需要释放 requestAnimation
            if (requestAnimationFrameId) {
                cancelAnimationFrame(requestAnimationFrameId);
            }
        };
    }, [ref]);
    return size;
}
