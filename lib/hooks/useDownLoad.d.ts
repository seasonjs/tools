declare const useDownLoad: (url: any, data: any, defaultFileName: string | undefined, onError: any, service?: (param: any) => {
    url: any;
    method: string;
    headers: {
        'Content-Type': string;
    };
    responseType: string;
    data: any;
}, options?: {
    manual: boolean;
    onError: any;
    onSuccess: (response: any) => void;
}) => import("@ahooksjs/use-request/lib/types").BaseResult<any, [param: any]>;
export default useDownLoad;
