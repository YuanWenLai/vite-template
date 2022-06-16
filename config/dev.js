export default {
    port: 8080,
    proxy: {
        '/api': {
            target: 'http://jsonplaceholder.typicode.com',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
        },
        '/v1': {
            target: 'https://ynunion.yncloudsaas.com', // 测试环境
            // target: 'http://36.138.71.30:8001', // 测试环境
            changeOrigin: true
        }
    }
};
