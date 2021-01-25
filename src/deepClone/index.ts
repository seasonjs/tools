// 深拷贝
function deepClone(obj: any) {
    if (obj === null) return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    if (typeof obj !== "object") return obj;
    const cloneObj = new obj.constructor();
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            // 实现一个递归拷贝
            cloneObj[key] = deepClone(obj[key]);
        }
    }
    return cloneObj;
}

export default deepClone;
