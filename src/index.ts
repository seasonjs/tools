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
import {cloneDeep, cloneDeepWith, flow, get, set, unset} from 'lodash'
import insert from "./arrayUtils/insert";
import {todayStart,todayEnd} from "./day"


const seasonToolsVersion = "v1.0.0"
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
    todayStart,
    todayEnd,
    seasonToolsVersion as Version,

};
