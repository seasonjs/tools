(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('ahooks')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'ahooks'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['@seasonjs/tools'] = {}, global.react, global.ahooks));
}(this, (function (exports, react, ahooks) { 'use strict';

  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.


  // If obj.hasOwnProperty has been overridden, then calling
  // obj.hasOwnProperty(prop) will break.
  // See: https://github.com/joyent/node/issues/1707
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
  };
  function stringifyPrimitive(v) {
    switch (typeof v) {
      case 'string':
        return v;

      case 'boolean':
        return v ? 'true' : 'false';

      case 'number':
        return isFinite(v) ? v : '';

      default:
        return '';
    }
  }

  function stringify (obj, sep, eq, name) {
    sep = sep || '&';
    eq = eq || '=';
    if (obj === null) {
      obj = undefined;
    }

    if (typeof obj === 'object') {
      return map(objectKeys(obj), function(k) {
        var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
        if (isArray(obj[k])) {
          return map(obj[k], function(v) {
            return ks + encodeURIComponent(stringifyPrimitive(v));
          }).join(sep);
        } else {
          return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
        }
      }).join(sep);

    }

    if (!name) return '';
    return encodeURIComponent(stringifyPrimitive(name)) + eq +
           encodeURIComponent(stringifyPrimitive(obj));
  }
  function map (xs, f) {
    if (xs.map) return xs.map(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
      res.push(f(xs[i], i));
    }
    return res;
  }

  var objectKeys = Object.keys || function (obj) {
    var res = [];
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
    }
    return res;
  };

  function parse(qs, sep, eq, options) {
    sep = sep || '&';
    eq = eq || '=';
    var obj = {};

    if (typeof qs !== 'string' || qs.length === 0) {
      return obj;
    }

    var regexp = /\+/g;
    qs = qs.split(sep);

    var maxKeys = 1000;
    if (options && typeof options.maxKeys === 'number') {
      maxKeys = options.maxKeys;
    }

    var len = qs.length;
    // maxKeys <= 0 means that we should not limit keys count
    if (maxKeys > 0 && len > maxKeys) {
      len = maxKeys;
    }

    for (var i = 0; i < len; ++i) {
      var x = qs[i].replace(regexp, '%20'),
          idx = x.indexOf(eq),
          kstr, vstr, k, v;

      if (idx >= 0) {
        kstr = x.substr(0, idx);
        vstr = x.substr(idx + 1);
      } else {
        kstr = x;
        vstr = '';
      }

      k = decodeURIComponent(kstr);
      v = decodeURIComponent(vstr);

      if (!hasOwnProperty(obj, k)) {
        obj[k] = v;
      } else if (isArray(obj[k])) {
        obj[k].push(v);
      } else {
        obj[k] = [obj[k], v];
      }
    }

    return obj;
  }

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

  class ua {
      constructor() {
          this.browser = {};
          const isMobileBrowser = this.isMobile();
          if (isMobileBrowser) {
              this.browser = this.getMobileBrowserInfo();
          }
          else {
              this.browser = this.getPCBrowserInfo();
          }
      }
      /*
      * 判断浏览器是否为移动端
      * @name    isMobile
      * @param   {boolean}   true为移动端
      */
      isMobile() {
          const userAgentInfo = navigator.userAgent;
          if (!!userAgentInfo.match(/AppleWebKit.*Mobile.*/) || !!userAgentInfo.match(/AppleWebKit/)) {
              const temp = userAgentInfo.toLowerCase();
              if (temp.indexOf('android') > -1 || temp.indexOf('iphone') > -1
                  || temp.indexOf('ipad') > -1 || temp.indexOf('windows phone') > -1
                  || temp.indexOf('blackberry') > -1 || temp.indexOf('hp-tablet') > -1
                  || temp.indexOf('symbian') > -1 || temp.indexOf('phone') > -1) {
                  return true;
              }
          }
          return false;
      }
      commonUAJudge(engineVer, version, engine, ua, name) {
          //@ts-ignore
          if (window?.opera) {
              //@ts-ignore
              engineVer = version = window.opera.version();
              engine = 'opera';
          }
          else if (/AppleWebKit\/(\S+)/.test(ua)) {
              engineVer = RegExp['$1'];
              engine = 'webkit';
              if (/Chrome\/(\S+)/.test(ua)) {
                  version = RegExp['$1'];
                  name = 'chrome';
              }
              else if (/Version\/(\S+)/.test(ua)) {
                  version = RegExp['$1'];
                  name = 'safari';
              }
              else {
                  //approximate version
                  var safariVersion = 1;
                  var wekitVersion = parseFloat(engineVer);
                  if (wekitVersion < 100) {
                      safariVersion = 1;
                  }
                  else if (wekitVersion < 312) {
                      safariVersion = 1.2;
                  }
                  else if (wekitVersion < 412) {
                      safariVersion = 1.3;
                  }
                  else {
                      safariVersion = 2;
                  }
                  version = safariVersion;
                  name = 'safari';
              }
          }
          else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)) {
              engineVer = version = RegExp['$1'];
              engine = 'khtml';
              name = 'konq';
          }
          else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)) {
              engineVer = RegExp['$1'];
              engine = 'gecko';
              //determine if it’s Firefox
              if (/Firefox\/(\S+)/.test(ua)) {
                  version = RegExp['$1'];
                  name = 'firefox';
              }
          }
          else if (/MSIE ([^;]+)/.test(ua)) {
              engineVer = version = RegExp['$1'];
              engine = 'ie';
              name = 'ie';
          }
          return { engineVer, version, engine, name };
      }
      /*
      * 获取PC端浏览器信息
      * @name    getPCBrowserInfo
      * @param   {Object}    浏览器信息
      */
      getPCBrowserInfo() {
          const ua = navigator.userAgent;
          let name = 'unknown';
          let version = 'unknown';
          let engine = 'unknown';
          let engineVer = 'unknown';
          let machineSys = 'unknown';
          // var machineSys = ua.substring( ua.indexOf('(') + 1, ua.indexOf(')') ).split(';')[0];
          const tempUa = ua.toLowerCase();
          if (tempUa.indexOf('windows') > -1) {
              machineSys = 'windows';
          }
          else if (tempUa.indexOf('linux') > -1) {
              machineSys = 'linux';
          }
          else if (tempUa.indexOf('mac') > -1) {
              machineSys = 'mac';
          }
          const __ret = this.commonUAJudge(engineVer, version, engine, ua, name);
          engineVer = __ret.engineVer;
          version = __ret.version;
          engine = __ret.engine;
          name = __ret.name;
          return {
              'machine': 'PC',
              'name': name,
              'version': version,
              'engineVer': engineVer,
              'engine': engine,
              'machineSys': machineSys,
              'totalInfo': ua
          };
      }
      /*
       * 获取mobile端浏览器信息
       * @name    getMobileBrowserInfo
       * @param   {Object}    浏览器信息
       */
      getMobileBrowserInfo() {
          const ua = navigator.userAgent;
          let name = 'unknown';
          let version = 'unknown';
          let engine = 'unknown';
          let engineVer = 'unknown';
          let machineSys = ua.substring(ua.indexOf('(') + 1, ua.indexOf(')')).split(';')[0];
          if (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
              machineSys = 'iphone';
          }
          else if (ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1) {
              machineSys = 'android';
          }
          else if (ua.indexOf('Windows Phone') > -1) {
              machineSys = 'windows phone';
          }
          const __ret = this.commonUAJudge(engineVer, version, engine, ua, name);
          engineVer = __ret.engineVer;
          version = __ret.version;
          engine = __ret.engine;
          name = __ret.name;
          return {
              'machine': 'MOBILE',
              'name': name,
              'version': version,
              'engineVer': engineVer,
              'engine': engine,
              'machineSys': machineSys,
              'totalInfo': ua
          };
      }
  }
  var index = new ua();

  const email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const phoneNumber = /^(13[0-9]|14[5|7]|15[0-9]|18[0-9])\d{8}$/;
  // const url=/^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$/;
  const qq = /[1-9][0-9]{4,}/;
  const Reg = {
      email,
      // url,
      phoneNumber,
      qq
  };

  function getType(value) {
      if (value == null) {
          return value === undefined ? '[object Undefined]' : '[object Null]';
      }
      return toString.call(value);
  }
  /**
   * 判断类型是否是null或者是undefined
   * @param value
   */
  function isNil(value) {
      return value == null;
  }
  /**
   * 判断类型是否是null或者是undefined
   * @param value
   */
  function isNull(value) {
      return value === null;
  }
  /**
   * 判断类型是否是Object并且非空，function并非Object，这里需要注意
   * @param value
   */
  function isObject(value) {
      return typeof value === 'object' && value !== null;
  }
  /**
   * 判断类型是否是function并且非空，由于class 是特殊的function 或者理解为构造函数，所以也会被检查为function、
   * @param value
   */
  function isFunction(value) {
      return typeof value === 'function';
  }
  const TypeCheck = {
      isNil,
      isNull,
      isObject,
      isFunction,
      getType,
  };

  // https://github.com/mobxjs/mobx/blob/ddf99789daebc6a891c930bf77df132d532e090f/packages/mobx-react-lite/src/utils/utils.ts#L5
  function useForceUpdate() {
      const [, setTick] = react.useState(0);
      return react.useCallback(() => {
          setTick(tick => tick + 1);
      }, []);
  }

  /**
   * 文件流下载
   *  需要与后台约定获取文件名称的头部字段为content-disposition，需要后台设置Access-Control-Allow-Headers 放行content-disposition
   * @param url 下载地址
   * @param data 下载请求方法
   * @param defaultFileName 默认的下载文件名称
   * @param onError 错误处理，
   * @param service 自定义请求，
   * @param options 自定义操作方法体
   */
  const useDownLoad = (url, data, defaultFileName = 'log.xml', onError, service = (param) => ({
      url,
      method: 'post',
      headers: { 'Content-Type': 'application/octet-stream' },
      responseType: 'blob',
      data: data ?? param
  }), options = {
      manual: true,
      onError,
      onSuccess: (response) => {
          const contentDisposition = response?.headers['content-disposition'];
          const fileName = contentDisposition?.match(/(filename=")(.*)(")$/)[2] ?? undefined;
          const blob = new Blob([response?.data ?? '内容为空！'], {
              type: 'charset=utf-8',
          });
          // console.log(fileName);
          // window.open(URL.createObjectURL(blob));
          const link = document.createElement('a');
          link.download = fileName ?? defaultFileName;
          link.href = URL.createObjectURL(blob);
          link.click();
      }
  }) => {
      return ahooks.useRequest(service, options);
  };

  console.info("session tools v1.0.0");

  exports.Reg = Reg;
  exports.TypeCheck = TypeCheck;
  exports.deepClone = deepClone;
  exports.isFunction = isFunction;
  exports.isNil = isNil;
  exports.isNull = isNull;
  exports.isObject = isObject;
  exports.mixin = mixin;
  exports.parse = parse;
  exports.stringify = stringify;
  exports.ua = index;
  exports.useDownload = useDownLoad;
  exports.useForceUpdate = useForceUpdate;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
