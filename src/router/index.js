import Vue from 'vue'
import Router from 'vue-router'
import User from '../components/user/User'
import Events from '../components/events/Events'
import Lending from '../components/lending/Lending'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/user'
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/lending',
      component: Lending
    },
    {
      path: '/events',
      component: Events
    }
  ],
  mode: 'history'
})
