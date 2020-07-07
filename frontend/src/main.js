import Vue from 'vue'
import App from './App.vue'

import apis from './api'

Vue.config.productionTip = false

Vue.use(apis);

new Vue({
  render: h => h(App),
}).$mount('#app')
