// https://blog.csdn.net/qq_29722281/article/details/96979042?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.control
function copyProperties(target: any, source: Record<string, any>) {
    // eslint-disable-next-line  no-restricted-syntax
    for (const key of Reflect.ownKeys(source)) {
        if (key !== 'constructor'
            && key !== 'prototype'
            && key !== 'name'
        ) {
            const desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc as any);
        }
    }
}
/**
 * 使用参照博客
 * @param mixins
 */
function mixin(...mixins: any[]): any {
    class Mix {
        constructor(...ags: any) {
            // eslint-disable-next-line  no-restricted-syntax
            for (const M of mixins) {
                copyProperties(this, new M(ags)); // 拷贝实例属性
            }
        }
    }
    // eslint-disable-next-line  no-restricted-syntax
    for (const m of mixins) {
        copyProperties(Mix, m); // 拷贝静态属性
        copyProperties(Mix.prototype, m.prototype); // 拷贝原型属性
    }
    return Mix;
}




export default mixin;
