let a =
  'background: #606060; color: #fff; border-radius: 3px 0 0 3px; padding: 3px;';
let b =
  'background: #1475B2; color: #fff; border-radius: 0 3px 3px 0; padding: 3px 3px 3px 6px;';
const seasonToolsVersion = 'v1.0.0';
// eslint-disable-next-line
console.info(`%c season tools %c ${seasonToolsVersion}`, a, b);

// export * from 'react-hook-form';
export * from 'ahooks';
export * as querystring from 'querystring';
export * from './mixin';
export * from './ua';
export * from './reg';
export * from './typeCheck';
export * from './tree';
export * from './array';
export * from './day';
export * from './dom/insertStyle';
export * from './hoc/forwardRefStatics';
export * from './dom/defaultPassiveEvents';
export * from './hooks';
export * from './mobx';
export * from './color';
