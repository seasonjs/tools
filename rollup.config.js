import path from 'path'
import {nodeResolve} from '@rollup/plugin-node-resolve'; // 依赖引用插件
import commonjs from '@rollup/plugin-commonjs'; // commonjs模块转换插件
import eslint from '@rollup/plugin-eslint' // eslint插件
import typescript from 'rollup-plugin-typescript2'
import packageJSON from './package.json'

const getPath = _path => path.resolve(__dirname, _path)


const extensions = [
    '.js',
    '.ts',
]
// ts
const tsPlugin = typescript({
    tsconfig: getPath('./tsconfig.json'), // 导入本地ts配置
    extensions
})
// 基础配置
const commonConf = {
    input: getPath('./src/index.ts'),
    plugins: [
        nodeResolve(extensions),
        commonjs(),
        eslint({
            throwOnError: true,
            include: ['src/**/*.ts'],
            exclude: ['node_modules/**', 'lib/**']
        }),
        tsPlugin,
    ]
}
// 需要导出的模块类型
const outputMap = [
    {
        file: packageJSON.main, // 通用模块
        format: 'umd',
    },
    {
        file: packageJSON.module, // es6模块
        format: 'es',
    }
]


const buildConf = options => Object.assign({}, commonConf, options)


export default outputMap.map(output => buildConf({output: {name: packageJSON.name, ...output}}));
