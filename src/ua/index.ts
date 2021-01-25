class ua {

    public browser = {};

    constructor() {
        const isMobileBrowser = this.isMobile();
        if (isMobileBrowser) {
            this.browser = this.getMobileBrowserInfo();
        } else {
            this.browser = this.getPCBrowserInfo();
        }
    }

    /*
    * 判断浏览器是否为移动端
    * @name    isMobile
    * @param   {boolean}   true为移动端
    */
    public isMobile() {
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

    private commonUAJudge(engineVer: string, version: string | number, engine: string, ua: string, name: string) {
        //@ts-ignore
        if (window?.opera) {
            //@ts-ignore
            engineVer = version = window.opera.version();
            engine = 'opera';
        } else if (/AppleWebKit\/(\S+)/.test(ua)) {
            engineVer = RegExp['$1'];
            engine = 'webkit';
            if (/Chrome\/(\S+)/.test(ua)) {
                version = RegExp['$1'];
                name = 'chrome';
            } else if (/Version\/(\S+)/.test(ua)) {
                version = RegExp['$1'];
                name = 'safari';
            } else {
                //approximate version
                var safariVersion = 1;
                var wekitVersion = parseFloat(engineVer);

                if (wekitVersion < 100) {
                    safariVersion = 1;
                } else if (wekitVersion < 312) {
                    safariVersion = 1.2;
                } else if (wekitVersion < 412) {
                    safariVersion = 1.3;
                } else {
                    safariVersion = 2;
                }

                version = safariVersion;
                name = 'safari';
            }
        } else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)) {
            engineVer = version = RegExp['$1'];
            engine = 'khtml';
            name = 'konq';
        } else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)) {
            engineVer = RegExp['$1'];
            engine = 'gecko';
            //determine if it’s Firefox
            if (/Firefox\/(\S+)/.test(ua)) {
                version = RegExp['$1'];
                name = 'firefox';
            }
        } else if (/MSIE ([^;]+)/.test(ua)) {
            engineVer = version = RegExp['$1'];
            engine = 'ie';
            name = 'ie';
        }
        return {engineVer, version, engine, name};
    }


    /*
    * 获取PC端浏览器信息
    * @name    getPCBrowserInfo
    * @param   {Object}    浏览器信息
    */
    public getPCBrowserInfo() {
        const ua = navigator.userAgent;

        let name = 'unknown';
        let version: string | number = 'unknown';
        let engine = 'unknown';
        let engineVer = 'unknown';
        let machineSys = 'unknown';
        // var machineSys = ua.substring( ua.indexOf('(') + 1, ua.indexOf(')') ).split(';')[0];
        const tempUa = ua.toLowerCase();
        if (tempUa.indexOf('windows') > -1) {
            machineSys = 'windows';
        } else if (tempUa.indexOf('linux') > -1) {
            machineSys = 'linux';
        } else if (tempUa.indexOf('mac') > -1) {
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
    public getMobileBrowserInfo() {
        const ua = navigator.userAgent;

        let name = 'unknown';
        let version: number | string = 'unknown';
        let engine = 'unknown';
        let engineVer = 'unknown';
        let machineSys = ua.substring(ua.indexOf('(') + 1, ua.indexOf(')')).split(';')[0];


        if (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
            machineSys = 'iphone';
        } else if (ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1) {
            machineSys = 'android';
        } else if (ua.indexOf('Windows Phone') > -1) {
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

export default new ua();
