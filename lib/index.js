(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['season-tools'] = {}));
}(this, (function (exports) { 'use strict';

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
    const reg = {
        email,
        // url,
        phoneNumber,
        qq
    };

    console.info("session tools v1.0.0");

    exports.deepClone = deepClone;
    exports.mixin = mixin;
    exports.reg = reg;
    exports.ua = index;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
