import useRequest from '@ahooksjs/use-request';
import { saveAs } from 'file-saver';

/**
 * @description 文件流下载
 *  需要与后台约定获取文件名称的头部字段为content-disposition，需要后台设置Access-Control-Allow-Headers 放行content-disposition
 *
 * @param url 下载地址
 *
 * @param data 下载请求体
 *
 * @param defaultFileName 默认的下载文件名称
 *
 * @param fileName 无法通过 content-disposition 头部字段 字段获取文件名的文件名获取方法
 *
 * @param onError 错误处理，
 *
 * @param service 自定义请求，
 *
 * @param options 自定义操作方法体
 *
 */
export const useDownLoad = (
  url: any,
  data: any,
  defaultFileName = 'log.xml',
  fileName: any,
  onError: any,
  service = (param: any) => ({
    url,
    method: 'post',
    headers: { 'Content-Type': 'application/octet-stream' },
    responseType: 'blob',
    data: data ?? param,
  }),
  options = {
    manual: true,
    onError,
    onSuccess: (response: any) => {
      const contentDisposition = response?.headers['content-disposition'];
      const headerFileName =
        contentDisposition?.match(/(filename=")(.*)(")$/)[2] ?? undefined;
      const blob = new Blob([response?.data ?? '内容为空！'], {
        type: 'charset=utf-8',
      });
      // const link = document.createElement('a');
      // link.download = headerFileName ?? fileName ?? defaultFileName;
      // link.href = URL.createObjectURL(blob);
      // link.click();
      //使用file-saver解决兼容问题
      saveAs(blob, headerFileName ?? fileName ?? defaultFileName);
    },
  },
) => {
  return useRequest(service, options);
};
