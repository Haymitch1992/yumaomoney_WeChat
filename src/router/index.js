import Vue from 'vue'
import Router from 'vue-router'
import Container from '../components/container/Container'
import Start from '../components/start/Start'
import Gesture from '../components/start/gesture/Gesture'
import Guide from '../components/start/guide/Guide'
import Login from '../components/start/login/Login'
import Registered from '../components/start/registered/Registered'
import RegisteredDetail from '../components/start/registered/RegisteredDetail'
import Forget from '../components/start/forget/Forget'
import Reset from '../components/start/reset/Reset'
import User from '../components/user/User'
import AboutMe from '../components/user/aboutMe/AboutMe'
import Center from '../components/user/center/Center'
import Member from '../components/user/member/Member'
import ChangeNumber from '../components/user/changeNumber/ChangeNumber'
import ChangeCard from '../components/user/changeCard/ChangeCard'
import Question from '../components/user/question/Question'
import Setting from '../components/user/setting/Setting'
import Safe from '../components/user/safe/Safe'
import SetGesture from '../components/user/setGesture/SetGesture'
import ReviseGesture from '../components/user/reviseGesture/ReviseGesture'
import ReviseLogin from '../components/user/reviseLogin/ReviseLogin'
import ReviseDeal from '../components/user/reviseDeal/ReviseDeal'
import ThirdParty from '../components/user/thirdParty/ThirdParty'
import Address from '../components/user/address/Address'
import Consignee from '../components/user/consignee/Consignee'
import ConsigneeEdit from '../components/user/consigneeEdit/ConsigneeEdit'
import About from '../components/user/about/About'
import Introduced from '../components/user/introduced/Introduced'
import Score from '../components/user/score/Score'
import Statement from '../components/user/statement/Statement'
import Agreement from '../components/user/agreement/Agreement'
import Assets from '../components/user/assets/Assets'
import Cash from '../components/user/cash/Cash'
import Recharge from '../components/user/recharge/Recharge'
import Investment from '../components/user/investment/Investment'
import InvestmentDetail from '../components/user/investment/InvestmentDetail'
import Contract from '../components/user/contract/Contract'
import Calendar from '../components/user/calendar/Calendar'
import Note from '../components/user/note/Note'
import Coupons from '../components/user/coupons/Coupons'
import Experience from '../components/user/experience/Experience'
import Message from '../components/user/message/Message'
import MessageDetail from '../components/user/message/MessageDetail'
import PushSettings from '../components/user/pushSettings/PushSettings'
import Auto from '../components/user/auto/Auto'
import AutoEdit from '../components/user/autoEdit/AutoEdit'
import Invited from '../components/user/invited/Invited'
import InvitedDetail from '../components/user/invited/InvitedDetail'
import ContactUs from '../components/user/contactUs/ContactUs'
import Help from '../components/user/help/Help'
import HelpDetail from '../components/user/help/HelpDetail'
import Feedback from '../components/user/feedback/Feedback'
import Events from '../components/events/Events'
import Home from '../components/home/Home'
import FinanceDetail from '../components/home/financeDetail/FinanceDetail'
import Calculator from '../components/home/calculator/Calculator'
import CalculatorDetail from '../components/home/calculator/CalculatorDetail'
import ConfirmInvestment from '../components/home/confirmInvestment/ConfirmInvestment'
import Safety from '../components/home/safety/Safety'
import Disclosure from '../components/home/disclosure/Disclosure'
import SakeInligting from '../components/home/sakeInligting/SakeInligting'
import TanKantore from '../components/home/tanKantore/TanKantore'
import Issues from '../components/home/issues/Issues'
import Ouditverslag from '../components/home/ouditverslag/Ouditverslag'
import Kwalifikasie from '../components/home/kwalifikasie/Kwalifikasie'
import Memorabilia from '../components/home/memorabilia/Memorabilia'
import ExecsTeam from '../components/home/execsTeam/ExecsTeam'
import GroupArchitecture from '../components/home/groupArchitecture/GroupArchitecture'
import Employees from '../components/home/employees/Employees'
import OperationData from '../components/home/operationData/OperationData'
import OperationReport from '../components/home/operationReport/OperationReport'
import WebsiteNotice from '../components/home/websiteNotice/WebsiteNotice'
import Repayment from '../components/home/repayment/Repayment'
import PayNotice from '../components/home/payNotice/PayNotice'
import MediaReport from '../components/home/mediaReport/MediaReport'
import NoticeDetail from '../components/home/noticeDetail/NoticeDetail'
import Lending from '../components/lending/Lending'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/start'
    },
    {
      path: '/start',
      component: Container,
      children: [
        {
          path: '/',
          component: Start,
          meta: {
            isLogin: false
          }
        },
        {
          path: 'gesture',
          component: Gesture,
          meta: {
            isLogin: false
          }
        },
        {
          path: 'guide',
          component: Guide,
          meta: {
            isLogin: false
          }
        },
        {
          path: 'login',
          name: 'login',
          component: Login,
          meta: {
            isLogin: false
          }
        },
        {
          path: 'registered',
          component: Container,
          children: [
            {
              path: '/',
              component: Registered,
              meta: {
                isLogin: false
              }
            },
            {
              path: 'registeredDetail',
              name: 'registeredDetail',
              component: RegisteredDetail,
              meta: {
                isLogin: false
              }
            }
          ]
        },
        {
          path: 'forget',
          component: Container,
          children: [
            {
              path: '/',
              component: Forget,
              meta: {
                isLogin: false
              }
            },
            {
              path: 'reset',
              name: 'reset',
              component: Reset,
              meta: {
                isLogin: false
              }
            }
          ]
        }
      ]
    },
    {
      path: '/lending',
      component: Container,
      children: [
        {
          path: '/',
          name: 'lending',
          component: Lending,
          meta: {
            isLogin: false
          }
        },
        {
          path: 'financeDetail',
          name: 'financeDetail',
          component: FinanceDetail,
          meta: {
            isLogin: true
          }
        },
        {
          path: 'calculator',
          component: Container,
          children: [
            {
              path: '/',
              name: 'calculator',
              component: Calculator,
              meta: {
                isLogin: true
              }
            },
            {
              path: 'calculatorDetail',
              name: 'calculatorDetail',
              component: CalculatorDetail,
              meta: {
                isLogin: true
              }
            }
          ]
        },
        {
          path: 'confirmInvestment',
          component: ConfirmInvestment,
          meta: {
            isLogin: true
          }
        }
      ]
    },
    {
      path: '/Home',
      component: Container,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
          meta: {
            isLogin: false
          }
        },
        {
          path: 'safety',
          component: Safety,
          meta: {
            isLogin: false
          }
        },
        {
          path: 'disclosure',
          component: Container,
          children: [
            {
              path: '/',
              name: 'disclosure',
              component: Disclosure,
              meta: {
                isLogin: false
              }
            },
            {
              path: 'sakeInligting',
              component: SakeInligting,
              meta: {
                isLogin: false
              }
            },
            {
              path: 'tanKantore',
              component: TanKantore,
              meta: {
                isLogin: false
              }
            },
            {
              path: 'issues',
              component: Issues,
              meta: {
                isLogin: false
              }
            },
            {
              path: 'ouditverslag',
              component: Ouditverslag,
              meta: {
                isLogin: false
              }
            },
            {
              path: 'kwalifikasie',
              component: Kwalifikasie,
              meta: {
                isLogin: false
              }
            },
            {
              path: 'memorabilia',
              component: Memorabilia,
              meta: {
                isLogin: false
              }
            },
            {
              path: 'execsTeam',
              component: ExecsTeam,
              meta: {
                isLogin: false
              }
            },
            {
              path: 'groupArchitecture',
              component: GroupArchitecture,
              meta: {
                isLogin: false
              }
            },
            {
              path: 'employees',
              component: Employees,
              meta: {
                isLogin: false
              }
            },
            {
              path: 'operationData',
              component: OperationData,
              meta: {
                isLogin: false
              }
            },
            {
              path: 'operationReport',
              component: OperationReport,
              meta: {
                isLogin: false
              }
            },
            {
              path: 'websiteNotice',
              component: WebsiteNotice,
              meta: {
                isLogin: false
              }
            },
            {
              path: 'repayment',
              component: Repayment,
              meta: {
                isLogin: false
              }
            },
            {
              path: 'payNotice',
              component: PayNotice,
              meta: {
                isLogin: false
              }
            },
            {
              path: 'mediaReport',
              component: MediaReport,
              meta: {
                isLogin: false
              }
            },
            {
              path: 'noticeDetail',
              name: 'noticeDetail',
              component: NoticeDetail,
              meta: {
                isLogin: false
              }
            }
          ]
        }
      ]
    },
    {
      path: '/events',
      component: Events,
      meta: {
        isLogin: false
      }
    },
    {
      path: '/user',
      component: Container,
      children: [
        {
          path: '/',
          component: User,
          meta: {
            isLogin: true
          }
        },
        {
          path: 'aboutMe',
          component: AboutMe,
          meta: {
            isLogin: true
          }
        },
        {
          path: 'center',
          component: Container,
          children: [
            {
              path: '/',
              component: Center,
              meta: {
                isLogin: true
              }
            },
            {
              path: 'member',
              component: Member,
              meta: {
                isLogin: true
              }
            },
            {
              path: 'changeNumber',
              component: ChangeNumber,
              meta: {
                isLogin: true
              }
            },
            {
              path: 'changeCard',
              component: ChangeCard,
              meta: {
                isLogin: true
              }
            },
            {
              path: 'question',
              component: Question,
              meta: {
                isLogin: true
              }
            }
          ]
        },
        {
          path: 'setting',
          component: Container,
          children: [
            {
              path: '/',
              component: Setting,
              meta: {
                isLogin: true
              }
            },
            {
              path: 'safe',
              component: Container,
              children: [
                {
                  path: '/',
                  component: Safe,
                  meta: {
                    isLogin: true
                  }
                },
                {
                  path: 'setGesture',
                  component: SetGesture,
                  meta: {
                    isLogin: true
                  }
                },
                {
                  path: 'reviseGesture',
                  component: ReviseGesture,
                  meta: {
                    isLogin: true
                  }
                },
                {
                  path: 'reviseLogin',
                  component: ReviseLogin,
                  meta: {
                    isLogin: true
                  }
                },
                {
                  path: 'reviseDeal',
                  component: ReviseDeal,
                  meta: {
                    isLogin: true
                  }
                }
              ]
            },
            {
              path: 'thirdParty',
              component: ThirdParty,
              meta: {
                isLogin: true
              }
            },
            {
              path: 'address',
              component: Container,
              children: [
                {
                  path: '/',
                  component: Address,
                  meta: {
                    isLogin: true
                  }
                },
                {
                  path: 'consignee',
                  name: 'consignee',
                  component: Consignee,
                  meta: {
                    isLogin: true
                  }
                },
                {
                  path: 'consigneeEdit',
                  name: 'consigneeEdit',
                  component: ConsigneeEdit,
                  meta: {
                    isLogin: true
                  }
                }
              ]
            },
            {
              path: 'about',
              component: Container,
              children: [
                {
                  path: '/',
                  component: About,
                  meta: {
                    isLogin: true
                  }
                },
                {
                  path: 'introduced',
                  component: Introduced,
                  meta: {
                    isLogin: true
                  }
                },
                {
                  path: 'score',
                  component: Score,
                  meta: {
                    isLogin: true
                  }
                },
                {
                  path: 'statement',
                  component: Statement,
                  meta: {
                    isLogin: true
                  }
                },
                {
                  path: 'agreement',
                  component: Agreement,
                  meta: {
                    isLogin: true
                  }
                }
              ]
            }
          ]
        },
        {
          path: 'assets',
          name: 'assets',
          component: Assets,
          meta: {
            isLogin: true
          }
        },
        {
          path: 'cash',
          component: Cash,
          meta: {
            isLogin: true
          }
        },
        {
          path: 'recharge',
          component: Recharge,
          meta: {
            isLogin: true
          }
        },
        {
          path: 'investment',
          component: Container,
          children: [
            {
              path: '/',
              component: Investment,
              meta: {
                isLogin: true
              }
            },
            {
              path: 'investmentDetail',
              component: InvestmentDetail,
              meta: {
                isLogin: true
              }
            },
            {
              path: 'contract',
              component: Contract,
              meta: {
                isLogin: true
              }
            }
          ]
        },
        {
          path: 'calendar',
          component: Calendar,
          meta: {
            isLogin: true
          }
        },
        {
          path: 'note',
          component: Note,
          meta: {
            isLogin: true
          }
        },
        {
          path: 'calendar',
          component: Calendar,
          meta: {
            isLogin: true
          }
        },
        {
          path: 'coupons',
          component: Coupons,
          meta: {
            isLogin: true
          }
        },
        {
          path: 'experience',
          component: Experience,
          meta: {
            isLogin: true
          }
        },
        {
          path: 'message',
          component: Container,
          children: [
            {
              path: '/',
              component: Message,
              meta: {
                isLogin: true
              }
            },
            {
              path: 'messageDetail',
              component: MessageDetail,
              meta: {
                isLogin: true
              }
            },
            {
              path: 'pushSettings',
              name: 'pushSettings',
              component: PushSettings,
              meta: {
                isLogin: true
              }
            }
          ]
        },
        {
          path: 'auto',
          name: 'auto',
          component: Auto,
          meta: {
            isLogin: true
          }
        },
        {
          path: 'autoEdit',
          name: 'autoEdit',
          component: AutoEdit,
          meta: {
            isLogin: true
          }
        },
        {
          path: 'invited',
          component: Container,
          children: [
            {
              path: '/',
              component: Invited,
              meta: {
                isLogin: true
              }
            },
            {
              path: 'invitedDetail',
              name: 'invitedDetail',
              component: InvitedDetail,
              meta: {
                isLogin: true
              }
            }
          ]
        },
        {
          path: 'contactUs',
          component: Container,
          children: [
            {
              path: '/',
              component: ContactUs,
              meta: {
                isLogin: true
              }
            },
            {
              path: 'help',
              component: Help,
              meta: {
                isLogin: true
              }
            },
            {
              path: 'helpDetail',
              name: 'helpDetail',
              component: HelpDetail,
              meta: {
                isLogin: true
              }
            },
            {
              path: 'feedback',
              component: Feedback,
              meta: {
                isLogin: true
              }
            }
          ]
        }
      ]
    }
  ]
})

// Router.beforeEach((to, from, next) => {
//   // 获取用户登录成功后储存的登录标志
//   let getFlag = localStorage.getItem('Flag')
//   // 如果登录标志存在且为isLogin，即用户已登录
//   if (getFlag === 'isLogin') {
//     // 设置vuex登录状态为已登录
//     store.state.isLogin = true
//     next()
//     // 如果已登录，还想想进入登录注册界面，则定向回首页
//     if (!to.meta.isLogin) {
//       // iViewUi友好提示
//       iView.Message.error('请先退出登录')
//       next({
//         path: '/home'
//       })
//     }
//     // 如果登录标志不存在，即未登录
//   } else {
//     // 用户想进入需要登录的页面，则定向回登录界面
//     if (to.meta.isLogin) {
//       next({
//         path: '/login'
//       })
//       // iViewUi友好提示
//       iView.Message.info('请先登录')
//       // 用户进入无需登录的界面，则跳转继续
//     } else {
//       next()
//     }
//   }
// })
//
// Router.afterEach(route => {
//   window.scroll(0, 0)
// })
