//https://blog.csdn.net/qq_29722281/article/details/96979042?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.control
/**
 * 使用参照博客
 * @param mixins
 */
function mixin(...mixins) {
    class Mix {
        constructor(...ags) {
            for (let mixin of mixins) {
                copyProperties(this, new mixin(ags)); // 拷贝实例属性
            }
        }
    }
    for (let mixin of mixins) {
        copyProperties(Mix, mixin); // 拷贝静态属性
        copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
    }
    return Mix;
}
function copyProperties(target, source) {
    for (let key of Reflect.ownKeys(source)) {
        if (key !== 'constructor'
            && key !== 'prototype'
            && key !== 'name') {
            let desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }
}

// 深拷贝
function deepClone(obj) {
    if (obj === null)
        return obj;
    if (obj instanceof Date)
        return new Date(obj);
    if (obj instanceof RegExp)
        return new RegExp(obj);
    if (typeof obj !== "object")
        return obj;
    const cloneObj = new obj.constructor();
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            // 实现一个递归拷贝
            cloneObj[key] = deepClone(obj[key]);
        }
    }
    return cloneObj;
}

console.info("session tools v1.0.0");

export { deepClone, mixin };
