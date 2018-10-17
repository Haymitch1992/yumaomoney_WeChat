// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router/index'
import 'vue-fullpage/vue-fullpage.css'
import VueFullpage from 'vue-fullpage'
import VueClipboard from 'vue-clipboard2'
Vue.use(VueFullpage)
Vue.use(VueClipboard)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
