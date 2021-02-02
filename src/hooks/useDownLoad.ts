/**
 * 文件流下载
 *  需要与后台约定获取文件名称的头部字段为content-disposition，需要后台设置Access-Control-Allow-Headers 放行content-disposition
 * @param run (要下载文件的文件名)
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
