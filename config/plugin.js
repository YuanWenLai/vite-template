import { createVuePlugin } from 'vite-plugin-vue2';
import viteCompression from 'vite-plugin-compression';
import viteEslint from 'vite-plugin-eslint';

export default [createVuePlugin(), viteEslint(), viteCompression()];
