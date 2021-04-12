// https://github.com/react-hook-form/react-hook-form/blob/master/src/utils/insert.ts
export default function insert<T>(
    data: T[],
    index: number,
    value?: T | T[],
): (T | undefined)[] {
    return [
        ...data.slice(0, index),
        ...(Array.isArray(value) ? value : [value || undefined]),
        ...data.slice(index),
    ];
}
