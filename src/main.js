import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import "./assets/scss/app.scss";
import "./assets/scss/style.scss";
import "sweetalert2/dist/sweetalert2.all";
import sweetAlert from "vue-sweetalert2";

Vue.config.productionTip = false;
Vue.use(sweetAlert);

window._Vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
