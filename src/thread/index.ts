import { nanoid } from 'nanoid';

type jobType =
  | {
      jobId: () => void;
    }
  | Record<string, any>;

export const makeWorker = (fn: any) => {
  const pendingJobs: jobType = {};

  const worker = new Worker(
    URL.createObjectURL(new Blob([`(${fn.toString()})()`])),
  );

  worker.onmessage = ({ data: { result, jobId } }) => {
    pendingJobs[jobId](result);
    delete pendingJobs[jobId];
  };

  return (...message: any) =>
    new Promise((resolve) => {
      const jobId = String(nanoid());
      pendingJobs[jobId] = resolve;
      worker.postMessage({ jobId, message });
    });
};
