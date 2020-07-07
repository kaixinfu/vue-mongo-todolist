import Vue from 'vue'
import App from './App.vue'

import apis from './api'

import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";

Vue.use(ViewUI, {
  transfer: true,
  size: "default",
  capture: false
});

Vue.config.productionTip = false

Vue.use(apis);

new Vue({
  render: h => h(App),
}).$mount('#app')
