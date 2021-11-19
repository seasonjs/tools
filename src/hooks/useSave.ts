import { saveAs } from 'file-saver';


/**
 * @description.zh_CN 文件下载任务流.
 * @param data 文件流或者地址
 * @param filename 文件名称
 * @param options 配置选项 {
 *   @param autoBom:bool 提供文件自动解析编码能力
 * }
 */

export function useSave(){
  return saveAs
}
