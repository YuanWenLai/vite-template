import { defineConfig } from 'vite';
import path from 'path';
import plugins from './config/plugin.js';
import build from './config/build.js';
import server from './config/dev.js';
import css from './config/css.js';

export default defineConfig({
    resolve: {
        // 别名配置
        alias: {
            '@': path.join(__dirname, 'src')
        }
    },
    server,
    css,
    build,
    plugins
});
