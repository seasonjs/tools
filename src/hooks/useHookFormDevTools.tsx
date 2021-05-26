import React from 'react';
import ReactDOM from 'react-dom';
import { DevTool } from '@hookform/devtools';

/**
 * @description 针对hookform 的一层封装
 * @param control useForm 暴露的control
 * @return DevTool 返回jsx
 */
export const useFormDevTool = (control: any) => {
  const Modal = React.memo(({ children }) => {
    let domEl = null;
    if (!document.querySelector('.season-tool-model')) {
      domEl = document.createElement('div');
      domEl.setAttribute('class', 'season-tool-model');
      document.body.append(domEl);
    } else {
      domEl = document.querySelector('.season-tool-model');
    }
    if (!domEl) return null;
    return ReactDOM.createPortal(<div>{children}</div>, domEl);
  });
  const Tool = () => (
    <>
      <Modal>
        <DevTool control={control} placement={'top-right'} />
      </Modal>
    </>
  );
  return {
    DevTool: Tool,
  };
};
