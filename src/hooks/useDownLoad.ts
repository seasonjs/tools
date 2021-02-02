/**
 *  文件流下载
 *  需要与后台约定获取文件名称的头部字段为content-disposition，需要后台设置Access-Control-Allow-Headers 放行content-disposition
 * @param url 下载地址
 * @param data 下载请求方法
 * @param defaultFileName 默认的下载文件名称
 * @param onError 错误处理，
 * @param service 自定义请求，
 * @param options 自定义操作方法体
 */
import {useRequest} from "ahooks"

const useDownLoad = (
    url: any,
    data: any,
    defaultFileName = 'log.xml',
    onError: any,
    service = (param: any) => (
        {
            url,
            method: 'post',
            headers: {'Content-Type': 'application/octet-stream'},
            responseType: 'blob',
            data: data ?? param

        }),
    options = {
        manual: true,
        onError,
        onSuccess: (response: any) => {
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
    }
) => {
    return useRequest(
        service
        ,
        options
    );
};
export default useDownLoad;
