import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import less from 'less'
import toast from './components/common/toast'

Vue.prototype.$bus = new Vue()

Vue.use(less)
Vue.use(toast)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
