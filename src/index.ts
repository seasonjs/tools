console.info("session tools v1.0.0");
import mixin from "./mixin";
import deepClone from "./deepClone";
import ua from './ua';
import Reg from './reg';
import TypeCheck, {isFunction, isNil, isNull, isObject} from './typeCheck';
import Querystring, {parse, stringify} from 'querystring'
import useForceUpdate from "./hooks/useForceUpdate"
// const _: any = {
//     mixin,
//     deepClone,
//     ua,
//     reg,
//     type
// };
// export default _;

export {
    mixin,
    deepClone,
    ua,
    Reg,
    Querystring,
    parse,
    stringify,
    TypeCheck,
    isNil,
    isFunction,
    isObject,
    isNull,
    useForceUpdate
};
