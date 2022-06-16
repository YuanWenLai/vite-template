import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue'; // 引入 Home页面组件

// 注册路由插件
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
];

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    // chrome
    document.body.scrollTop = 0;
    // firefox
    document.documentElement.scrollTop = 0;
    // safari
    window.pageYOffset = 0;
    next();
});

export default router;
