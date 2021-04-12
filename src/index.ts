import {parse, stringify} from "querystring";
import mixin from "./mixin";
import ua from './ua';
import Reg from './reg';
import TypeCheck, {isFunction, isNil, isNull, isObject} from './typeCheck';
import {useForceUpdate} from "./hooks/useForceUpdate"
import {useDownLoad} from "./hooks/useDownLoad"
import {useStateCallback} from "./hooks/useStateCallback";
import travelTree from "./tree";
import {ArrayUtil} from './arrayUtils'
import {cloneDeep, cloneDeepWith, flow, get, set, unset} from 'lodash'
import insert from "./arrayUtils/insert";
import {todayEnd, todayStart} from "./day";
import {useResizeObserver} from "./hooks/useResizeObserver";
import {useFormDevTool} from './hooks/useHookformDevtools'
import { useIsomorphicLayoutEffect } from "./hooks/useIsomorphiclayoutEffect";
import { forwardRefWithStatics } from "./hoc/forwardRefStatics";


const seasonToolsVersion = "v1.0.0"
// eslint-disable-next-line
console.info(`season tools ${seasonToolsVersion}`);

export {
    mixin,
    // deepClone,
    travelTree,
    ua,
    Reg,
    parse,
    stringify,
    TypeCheck,
    ArrayUtil,
    isNil,
    isFunction,
    isObject,
    isNull,
    useForceUpdate,
    useDownLoad,
    useStateCallback,
    get,
    insert,
    unset,
    set,
    flow,
    flow as pip,
    cloneDeep,
    cloneDeepWith,
    todayStart,
    todayEnd,
    seasonToolsVersion as Version,
    useResizeObserver,
    useFormDevTool,
    useIsomorphicLayoutEffect,
    forwardRefWithStatics
};
