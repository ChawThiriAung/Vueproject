import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import { BootstrapVue, IconsPlugin , BIcon } from 'bootstrap-vue'

//every components
Vue.prototype.$http=axios;

//install  bootstrapvue
Vue.use(BootstrapVue)
//optionally install icon
Vue.use(IconsPlugin)
// using b-icon component
Vue.component('b-icon', BIcon)

// css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
