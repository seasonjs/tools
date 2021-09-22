export interface ProgressInfo {
  /**
   * 文件总大小
   */
  total: number;

  /**
   * 已上传部分大小
   */
  loaded: number;

  /**
   * 百分比
   */
  percent: number;
}

export interface UploadEventContext {
  /**
   * 进度事件
   */
  event: ProgressEvent;

  /**
   * XHR 对象
   */
  xhr: XMLHttpRequest;

  /**
   * 当前文件
   */
  file: File;
}

export interface UploadOption {
  url: string; // 文件地址
  file: File; // 文件对象
  filename: string; // 文件名
  data?: Record<string, any>; // 数据
  headers?: Record<string, any>; // 请求头
  withCredentials?: boolean; // 是否携带cookie
  method?: string; // 请求方法
  onProgress?: (progress: ProgressInfo, context: UploadEventContext) => void; // 进度回调
  onSuccess?: (
    result: Record<string, any> | string,
    context: UploadEventContext,
  ) => void; // 成功回调
  onError?: (error: Error, context: UploadEventContext) => void; // 错误回调
}

/**
 * @description.zh_CN 上传
 * @param url 地址
 * @param file 文件对象
 * @param filename 文件名
 * @param data  数据
 * @param headers headers
 * @param method  方法
 * @param withCredentials 是否携带cookies
 * @param onProgress 进度回调
 * @param onSuccess 成功回调
 * @param onError 失败回调
 * @TODO：调研 fetch 还有 分片上传
 */
export function upload({
  url,
  file,
  filename,
  data = {},
  headers = {},
  method = 'POST',
  withCredentials = false,
  onProgress = () => null,
  onSuccess = () => null,
  onError = () => null,
}: UploadOption) {
  const formData = new FormData();

  const xhr = new XMLHttpRequest();

  xhr.onload = (event) => {
    if (!(xhr.status >= 200 && xhr.status < 300)) {
      const error = new Error(`${xhr.status} ${xhr.statusText}`);
      onError(error, { event, xhr, file });
      return;
    }

    const text = xhr?.responseText ?? xhr?.response;
    try {
      const data = JSON.parse(text);
      onSuccess(data, { event, xhr, file });
    } catch (err) {
      onSuccess(text, { event, xhr, file });
    }
  };

  xhr.onerror = (event) =>
    onError(new Error('Http Request Error'), { event, xhr, file });

  if (onProgress && xhr.upload) {
    xhr.upload.onprogress = (event) => {
      if (event?.lengthComputable && event?.total) {
        onProgress(
          {
            total: event.total,
            loaded: event.loaded,
            percent: (event.loaded / event.total) * 100,
          },
          { event, xhr, file },
        );
      }
    };
  }

  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });

  formData.append(filename, file);

  xhr.open(method, url, true);

  xhr.withCredentials = withCredentials;

  Object.keys(headers).forEach((key) => {
    xhr.setRequestHeader(key, headers[key]);
  });

  xhr.send(formData);

  return xhr;
}
