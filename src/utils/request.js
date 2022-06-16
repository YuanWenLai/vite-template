import axios from 'axios';
// import Vue from 'vue';
// import router from '@/router';

// create an axios instance
const service = axios.create({
    //  baseURL: BASE_URL, // api 的 base_url
    timeout: 30000, // request timeout
    headers: {
        'Content-type': 'application/json; charset=utf-8'
    }
});

const Token = sessionStorage.getItem('token');

service.interceptors.request.use(
    (config) => {
        // eslint-disable-next-line no-param-reassign
        config.headers.customertoken = Token || sessionStorage.getItem('token');
        // console.log(' line 20 ~ config', config);

        return config;
    },

    (error) => {
        Promise.reject(error);
    }
);

service.interceptors.response.use(
    (response) => {
        // 登录过期
        // if (response.data.msg === '您还未登录') {
        //     window.localStorage.clear();
        //     router.replace({ path: '/login' });
        // }
        return response.data;
    },
    /**
     * 下面的注释为通过在response里，自定义code来标示请求状态
     * 当code返回如下情况则说明权限有问题，登出并返回到登录页
     * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
     * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
     */
    (error) => {
        return Promise.reject(error);
    }
);

export default service;
