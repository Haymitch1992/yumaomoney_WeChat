import Vue from 'vue'
import Router from 'vue-router'
import Container from '../components/container/Container'
import User from '../components/user/User'
import AboutMe from '../components/user/aboutMe/aboutMe'
import ContactUs from '../components/user/contactUs/contactUs'
import Help from '../components/user/help/Help'
import HelpDetail from '../components/user/help/HelpDetail'
import Feedback from '../components/user/feedback/Feedback'
import Events from '../components/events/Events'
import Lending from '../components/lending/Lending'
import Safety from '../components/lending/safety/Safety'
import Disclosure from '../components/lending/disclosure/Disclosure'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/user'
    },
    {
      path: '/lending',
      component: Container,
      children: [
        {
          path: '/',
          component: Lending
        },
        {
          path: 'safety',
          component: Safety
        },
        {
          path: 'disclosure',
          component: Disclosure
        }
      ]
    },
    {
      path: '/events',
      component: Events
    },
    {
      path: '/user',
      component: Container,
      children: [
        {
          path: '/',
          component: User
        },
        {
          path: 'aboutMe',
          component: AboutMe
        },
        {
          path: 'contactUs',
          component: Container,
          children: [
            {
              path: '/',
              component: ContactUs
            },
            {
              path: 'help',
              component: Help
            },
            {
              path: 'helpDetail',
              name: 'helpDetail',
              component: HelpDetail
            },
            {
              path: 'feedback',
              component: Feedback
            }
          ]
        }
      ]
    }
  ]
})
