//document.body.innerHTML = "111122233344455667893333331191"
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import routerConfigs from './src/router/index.js';
import storeConfigs from './src/store/index.js';

import App from './app.vue';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

let initApp = ()=>{
  Vue.use( ElementUI);
  Vue.use( Vuex);
  Vue.use( VueRouter);
  let router=new VueRouter({routes:routerConfigs});
  let store=new Vuex.Store(storeConfigs);
  new Vue({
    el: '#rootNode',
    router,
    store,
    render: h => h(App)
  });
}
initApp();
