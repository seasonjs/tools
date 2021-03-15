import {parse, stringify} from "querystring";
import mixin from "./mixin";
import ua from './ua';
import Reg from './reg';
import TypeCheck, {isFunction, isNil, isNull, isObject} from './typeCheck';
import useForceUpdate from "./hooks/useForceUpdate"
import useDownload from "./hooks/useDownLoad"
import useStateCallback from "./hooks/useStateCallback";
import travelTree from "./tree";
import {ArrayUtil} from './arrayUtils'
import {get,unset,set,flow,cloneDeep,cloneDeepWith} from 'lodash'
import insert from "./arrayUtils/insert";
console.info("session tools v1.0.0");

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
    useDownload,
    useStateCallback,
    get,
    insert,
    unset,
    set,
    flow,
    flow as pip,
    cloneDeep,
    cloneDeepWith,
};
