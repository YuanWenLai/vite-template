import { visualizer } from 'rollup-plugin-visualizer';

const env = process.argv[process.argv.length - 1];

const rollupPlugins = [];
if (env === 'analyze') {
    rollupPlugins.push(
        visualizer({
            filename: './node_modules/.cache/visualizer/stats.html',
            open: true,
            gzipSize: true,
            brotliSize: true
        })
    );
}
export default {
    rollupOptions: {
        plugins: rollupPlugins,
        output: {
            // eslint-disable-next-line consistent-return
            manualChunks: (id) => {
                // 创建一个vendor包含所有依赖项的块node_modules
                if (id.includes('node_modules')) {
                    return 'vendor';
                }
                // 创建一个images包含所有images的js引用依赖
                if (id.includes('images')) {
                    return 'images';
                }
            },
            // ⽤于从⼊⼝点创建的块的打包输出格式[name]表⽰⽂件名,[hash]表⽰该⽂件内容hash值
            entryFileNames: 'js/[name].[hash].js',
            // ⽤于命名代码拆分时创建的共享块的输出命名
            chunkFileNames: 'js/[name].[hash].js'
            // ⽤于输出静态资源的命名，[ext]表⽰⽂件扩展名
            // assetFileNames: 'img/[name].[hash].[ext]'
        }
    },
    // ⽤于输出静态资源的命名，[ext]表⽰⽂件扩展名
    assetsDir: '[ext]/[name].[hash].[ext]'
};
