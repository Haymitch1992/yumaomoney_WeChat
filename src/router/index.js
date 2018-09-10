import Vue from 'vue'
import Router from 'vue-router'
import User from '../components/user/User'
import Events from '../components/events/Events'
import Lending from '../components/lending/Lending'
import AboutMe from '../components/aboutMe/aboutMe'
import ContactUs from '../components/contactUs/contactUs'
import Help from '../components/help/Help'
import Feedback from '../components/feedback/Feedback'

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
      path: '/user/aboutMe',
      component: AboutMe
    },
    {
      path: '/user/contactUs',
      component: ContactUs
    },
    {
      path: '/user/help',
      component: Help
    },
    {
      path: '/user/feedback',
      component: Feedback
    }
  ]
})
