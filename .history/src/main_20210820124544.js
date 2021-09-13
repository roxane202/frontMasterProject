import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import TheNoSidebar from "./layouts/TheNoSidebar";
import TheDefault from "./layouts/TheDefault";

import Vuelidate from "vuelidate";
import Notifications from 'vue-notification'
Vue.config.productionTip = false

import money from 'v-money'
const money_option= {
        decimal: ',',
        thousands: ' ',
        prefix: ' ',
        suffix: ' ',
        precision: 0,
        masked: false
}

Vue.use(money, money_option)
Vue.component('default-layout', TheDefault)
Vue.component('no-sidebar-layout', TheNoSidebar)

Vue.use(Notifications)
Vue.use(Vuelidate);
import router from './routes/index'
import store from './store/index'
const app = new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')

store.$app = app;
