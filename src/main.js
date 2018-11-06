// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import App from './App'
import router from './router/index'
import store from './store/index'
import Util from './util/util'
import global_ from './components/tool/Global'
import 'vue-fullpage/vue-fullpage.css'
import VueFullpage from 'vue-fullpage'
import VueClipboard from 'vue-clipboard2'
import VueCookies from 'vue-cookies'
import axios from 'axios'
Vue.use(Vuex)
Vue.use(Util)
Vue.use(VueFullpage)
Vue.use(VueClipboard)
Vue.use(VueCookies)

Vue.prototype.$http = axios

FastClick.attach(document.body)

Vue.prototype.GLOBAL = global_
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
