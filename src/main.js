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
import { LoadingPlugin, ToastPlugin } from 'vux'
Vue.use(Vuex)
Vue.use(Util)
Vue.use(VueFullpage)
Vue.use(VueClipboard)
Vue.use(VueCookies)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)

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

router.beforeEach((to, from, next) => {
  // 获取用户登录成功后储存的登录标志
  let getFlag = localStorage.getItem('Flag')
  // 如果登录标志存在且为isLogin，即用户已登录
  if (getFlag === 'isLogin') {
    // 设置vuex登录状态为已登录
    store.state.isLogin = true
    next()
    // 如果已登录，还想想进入登录注册界面，则定向回首页
    if (to.meta && (to.meta.isLogin === false)) {
      // iViewUi友好提示
      // iView.Message.error('请先退出登录')
      next({
        path: '/home'
      })
    }
    // 如果登录标志不存在，即未登录
  } else {
    // 用户想进入需要登录的页面，则定向回登录界面
    if (to.meta.isLogin) {
      next({
        path: '/start/login'
      })
      // iViewUi友好提示
      // iView.Message.info('请先登录')
      // 用户进入无需登录的界面，则跳转继续
    } else {
      next()
    }
  }
})

router.afterEach(route => {
  window.scroll(0, 0)
})
