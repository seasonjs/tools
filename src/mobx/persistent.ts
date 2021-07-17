import { configure, runInAction } from 'mobx';
import 'reflect-metadata';
import localforage from 'localforage';
import { merge } from 'lodash';

//参照代码 https://github.com/mobxjs/mobx/discussions/2936

type storageType = 'localStorage' | 'webSQL';

configure({ safeDescriptors: false, observableRequiresReaction: false });
const PERSISTENT_METADATA_KEY = 'isPersistent';

/**
 * @description mobx 持久化存储 使用方式需要作为最内层装饰器
 * @param target 注解默认调用当前属性值
 * @param propertyKey 注解默认调用当前key的name,暂时不支持自定义
 * TODO： 支持自定义配置
 */
export function persistent(target: any, propertyKey?: any) {
  Reflect.defineMetadata(PERSISTENT_METADATA_KEY, true, target, propertyKey);
}

type optionProps = {
  storageSetting?: storageType;
  name?: string;
};

/**
 * @description 需要在当前的class方法下的构造函数处调用
 * @param target 返回当前类的this 实例
 * @param option 返回要对当前类的操作
 */
export async function makePersistent<T extends Record<string, any>>(
  target: T,
  option: optionProps = { storageSetting: 'localStorage' },
) {
  let config = {
    driver: localforage.LOCALSTORAGE,
    name: option?.name ?? 'localPersistentStore',
  };
  // TODO: 需要增加sessionStorage
  if (option.storageSetting === 'localStorage') {
    config = merge(config, {
      driver: localforage.LOCALSTORAGE,
    });
  }
  if (option.storageSetting === 'webSQL') {
    config = merge(config, {
      driver: localforage.WEBSQL,
    });
  }

  const store = localforage.createInstance(config);

  const keys = Object.getOwnPropertyNames(target).filter((propertyKey) =>
    Reflect.getMetadata(PERSISTENT_METADATA_KEY, target, propertyKey),
  );
  const object: Record<string, any> = {};

  //这里需要等待key全取出来才可以进行之后的操作
  for (const key of keys) {
    try {
      object[key] = await store.getItem(key);
      console.log(key, object[key]);
    } catch (e) {
      console.warn('持久化解析出现问题：', e);
    }
  }

  runInAction(() => {
    console.log(object.test, object['test']);
    for (const key of keys) {
      // console.log(object, object[key], key, keys);
      if (object[key] != null) {
        Reflect.set(target, key, object[key]);
      }
    }
  });

  for (const key of keys) {
    const descriptor = Reflect.getOwnPropertyDescriptor(target, key);
    Object.defineProperty(target, key, {
      ...descriptor,
      set(value: any) {
        try {
          descriptor?.set?.call(this, value);
          store.setItem(key, value);
        } catch (e) {
          console.warn('持久化解析出现问题：', e);
        }
      },
    });
  }
}
