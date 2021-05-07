import { nanoid } from 'nanoid';

export const makeWorker = (fn: any) => {
  const pendingJobs = {};

  const worker = new Worker(
    URL.createObjectURL(new Blob([`(${fn.toString()})()`])),
  );

  worker.onmessage = ({ data: { result, jobId } }) => {
    // 调用resolve，改变Promise状态
    // @ts-ignore
    pendingJobs[jobId](result);
    // 删掉，防止key冲突
    // @ts-ignore
    delete pendingJobs[jobId];
  };

  return (...message: any) =>
    new Promise((resolve) => {
      const jobId = String(nanoid());
      // @ts-ignore
      pendingJobs[jobId] = resolve;
      worker.postMessage({ jobId, message });
    });
};
