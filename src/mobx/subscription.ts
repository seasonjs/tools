import { computed } from 'mobx';

/**
 *
 * @param state 需要监听的对象
 * @param depsFunc 需要监听的属性
 * @param func 属性变化后，需要做的操作
 */
export function subscription<T extends any[]>(
  state: object,
  depsFunc: (state: object) => T,
  func: (oldVal: T | undefined, newVal: T) => void,
) {
  const deps = computed(() => depsFunc(state));
  const observeDispose = deps.observe_(({ oldValue, newValue }) => {
    if (oldValue !== newValue) {
      func(oldValue, newValue);
    }
  });
}
