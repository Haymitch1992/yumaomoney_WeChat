// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import User from './components/user/User'
import Events from './components/events/Events'
import Lending from './components/lending/Lending'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/User'
  },
  {
    path: '/User',
    component: User
  },
  {
    path: '/Lending',
    component: Lending
  },
  {
    path: '/Events',
    component: Events
  }
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
