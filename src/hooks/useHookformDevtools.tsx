import React from 'react';
import ReactDOM from 'react-dom';
import {DevTool} from '@hookform/devtools';

export const useFormDevTool = (control: any) => {
    const Modal = React.memo(({children}) => {
        let domEl = null;
        if (!document.querySelector('.oit-model')) {
            domEl = document.createElement('div');
            domEl.setAttribute('class', 'oit-model');
            document.body.append(domEl);
        } else {
            domEl = document.querySelector('.oit-model');
        }
        if (!domEl) return null;
        return ReactDOM.createPortal(<div>{children}</div>, domEl);
    });
    const Tool = () => (
        <>
            <Modal>
                <DevTool control={control}/>
            </Modal>
        </>
    );
    return {
        DevTool: Tool,
    };
};
