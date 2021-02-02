import { parse, stringify } from "querystring";
import mixin from "./mixin";
import deepClone from "./deepClone";
import ua from './ua';
import Reg from './reg';
import TypeCheck, { isFunction, isNil, isNull, isObject } from './typeCheck';
import useForceUpdate from "./hooks/useForceUpdate";
import useDownload from "./hooks/useDownLoad";
export { mixin, deepClone, ua, Reg, parse, stringify, TypeCheck, isNil, isFunction, isObject, isNull, useForceUpdate, useDownload, };