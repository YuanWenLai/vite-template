import Vue from 'vue';
import Vant from 'vant';
import router from './router/index.js';

import store from './store/index.js';
import 'amfe-flexible';

import 'vant/lib/index.css';
import '@/styles/index.scss';
import App from './App.vue';

Vue.use(Vant);

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
