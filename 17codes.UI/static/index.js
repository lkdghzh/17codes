//document.body.innerHTML = "111122233344455667893333331191"
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import routerConfigs from './src/router/index.js';
import storeConfigs from './src/store/index.js';

import App from './app.vue';
// import MuseUI from 'muse-ui'
// import 'muse-ui/dist/muse-ui.css'
// import carbon from '!raw!muse-ui/dist/theme-carbon.css'

let initApp = ()=>{
  //Vue.use( MuseUI);
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
