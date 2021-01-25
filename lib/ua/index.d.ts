declare class ua {
    browser: {};
    constructor();
    isMobile(): boolean;
    private commonUAJudge;
    getPCBrowserInfo(): {
        machine: string;
        name: string;
        version: string | number;
        engineVer: string;
        engine: string;
        machineSys: string;
        totalInfo: string;
    };
    getMobileBrowserInfo(): {
        machine: string;
        name: string;
        version: string | number;
        engineVer: string;
        engine: string;
        machineSys: string;
        totalInfo: string;
    };
}
declare const _default: ua;
export default _default;
