import { observable, computed } from 'mobx';

class BaseStore {
  constructor() {
    this.renderFunc(
      (state) => [state.length],
      (oldVal, newVal) => {
        console.log('register', oldVal, newVal);
      },
    );

    setTimeout(() => {
      this.length = 5;
    }, 1000);
  }

  @observable
  length = 2;

  @computed
  get squared() {
    return this.length * this.length;
  }
  set squared(value) {
    // 这是一个自动的动作，不需要注解
    this.length = value + 1;
  }

  /**
   *
   *
   * @template T
   * @param {(state: this) => T} depsFunc
   * @param {(oldVal: T,newVal: T) => void} func
   * @memberof Foo
   */
  renderFunc<T extends any[]>(
    depsFunc: (state: this) => T,
    func: (oldVal: T | undefined, newVal: T) => void,
  ) {
    const deps = computed(() => depsFunc(this));
    const observeDispose = deps.observe_(({ oldValue, newValue }) => {
      if (oldValue !== newValue) {
        func(oldValue, newValue);
      }
    });
  }
}
