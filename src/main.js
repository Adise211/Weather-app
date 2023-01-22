import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false


new Vue({
  Vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
