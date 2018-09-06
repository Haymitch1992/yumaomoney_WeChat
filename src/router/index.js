import Vue from 'vue'
import Router from 'vue-router'
import User from '../components/user/User'
import Events from '../components/events/Events'
import Lending from '../components/lending/Lending'
import AboutMe from '../components/aboutMe/aboutMe'
import ContactUs from '../components/contactUs/contactUs'

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
    },
    {
      path: '/lending/aboutMe',
      component: AboutMe
    },
    {
      path: '/lending/contactUs',
      component: ContactUs
    }
  ]
})
