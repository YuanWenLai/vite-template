import { normalizePath } from 'vite';
import path from 'path';
import autoprefixer from 'autoprefixer';
import postCssPxToRem from 'postcss-pxtorem';

// 全局 scss 文件的路径
// 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(path.resolve('./src/styles/variable.scss'));

export default {
    extract: true,
    modules: {
        // 其中，name 表示当前文件名，local 表示类名
        generateScopedName: '[name]__[local]___[hash:base64:5]'
    },
    preprocessorOptions: {
        // 省略预处理器配置
        scss: {
            // additionalData 的内容会在每个 scss 文件的开头自动注入
            additionalData: `@import "${variablePath}";`
        }
    },
    postcss: {
        plugins: [
            autoprefixer({
                // 指定目标浏览器
                overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
            }),
            postCssPxToRem({
                // rootValue: 75,
                propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
                // （设计稿/10）1rem的大小,由于vantui是37.5，要适配一下
                rootValue({ file }) {
                    return file.indexOf('vant') !== -1 ? 37.5 : 75;
                }
            })
        ]
    }
};
