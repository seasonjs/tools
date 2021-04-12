import type React from "react";
import type { RefAttributes } from "react";
import {forwardRef} from "react";
import hoistNonReactStatics from 'hoist-non-react-statics';

export function forwardRefWithStatics<P, T = any, S = Record<string, any>>(
    component: React.ForwardRefRenderFunction<T, P>,
    statics?: S
): React.FunctionComponent<P & RefAttributes<T>> & S {
    return hoistNonReactStatics(forwardRef(component), statics as any) as any;
}
