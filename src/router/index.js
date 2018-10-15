import Vue from 'vue'
import Router from 'vue-router'
import Container from '../components/container/Container'
import User from '../components/user/User'
import AboutMe from '../components/user/aboutMe/AboutMe'
import Center from '../components/user/center/Center'
import Member from '../components/user/member/Member'
import ChangeNumber from '../components/user/changeNumber/ChangeNumber'
import ChangeCard from '../components/user/changeCard/ChangeCard'
import Question from '../components/user/question/Question'
import Setting from '../components/user/setting/Setting'
import Safe from '../components/user/safe/Safe'
import Gesture from '../components/user/gesture/Gesture'
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
import Preferential from '../components/user/preferential/Preferential'
import Experience from '../components/user/experience/Experience'
import Message from '../components/user/message/Message'
import MessageDetail from '../components/user/message/MessageDetail'
import PushSettings from '../components/user/pushSettings/PushSettings'
import Auto from '../components/user/auto/Auto'
import Invited from '../components/user/invited/Invited'
import InvitedDetail from '../components/user/invited/InvitedDetail'
import ContactUs from '../components/user/contactUs/ContactUs'
import Help from '../components/user/help/Help'
import HelpDetail from '../components/user/help/HelpDetail'
import Feedback from '../components/user/feedback/Feedback'
import Events from '../components/events/Events'
import Lending from '../components/lending/Lending'
import Safety from '../components/lending/safety/Safety'
import Disclosure from '../components/lending/disclosure/Disclosure'
import SakeInligting from '../components/lending/sakeInligting/SakeInligting'
import TanKantore from '../components/lending/tanKantore/TanKantore'
import Memorabilia from '../components/lending/memorabilia/Memorabilia'
import Ouditverslag from '../components/lending/ouditverslag/Ouditverslag'
import Kwalifikasie from '../components/lending/kwalifikasie/Kwalifikasie'
import ExecsTeam from '../components/lending/execsTeam/ExecsTeam'
import GroupArchitecture from '../components/lending/groupArchitecture/GroupArchitecture'
import Employees from '../components/lending/employees/Employees'
import OperationData from '../components/lending/operationData/OperationData'
import OperationReport from '../components/lending/operationReport/OperationReport'
import WebsiteNotice from '../components/lending/websiteNotice/WebsiteNotice'
import Repayment from '../components/lending/repayment/Repayment'
import PayNotice from '../components/lending/payNotice/PayNotice'
import MediaReport from '../components/lending/mediaReport/MediaReport'
import NoticeDetail from '../components/lending/noticeDetail/NoticeDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/lending'
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
          component: Container,
          children: [
            {
              path: '/',
              name: 'disclosure',
              component: Disclosure
            },
            {
              path: 'sakeInligting',
              component: SakeInligting
            },
            {
              path: 'tanKantore',
              component: TanKantore
            },
            {
              path: 'memorabilia',
              component: Memorabilia
            },
            {
              path: 'ouditverslag',
              component: Ouditverslag
            },
            {
              path: 'kwalifikasie',
              component: Kwalifikasie
            },
            {
              path: 'execsTeam',
              component: ExecsTeam
            },
            {
              path: 'groupArchitecture',
              component: GroupArchitecture
            },
            {
              path: 'employees',
              component: Employees
            },
            {
              path: 'operationData',
              component: OperationData
            },
            {
              path: 'operationReport',
              component: OperationReport
            },
            {
              path: 'websiteNotice',
              component: WebsiteNotice
            },
            {
              path: 'repayment',
              component: Repayment
            },
            {
              path: 'payNotice',
              component: PayNotice
            },
            {
              path: 'mediaReport',
              component: MediaReport
            },
            {
              path: 'noticeDetail',
              name: 'noticeDetail',
              component: NoticeDetail
            }
          ]
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
          path: 'center',
          component: Container,
          children: [
            {
              path: '/',
              component: Center
            },
            {
              path: 'member',
              component: Member
            },
            {
              path: 'changeNumber',
              component: ChangeNumber
            },
            {
              path: 'changeCard',
              component: ChangeCard
            },
            {
              path: 'question',
              component: Question
            }
          ]
        },
        {
          path: 'setting',
          component: Container,
          children: [
            {
              path: '/',
              component: Setting
            },
            {
              path: 'safe',
              component: Container,
              children: [
                {
                  path: '/',
                  component: Safe
                },
                {
                  path: 'gesture',
                  component: Gesture
                },
                {
                  path: 'reviseGesture',
                  component: ReviseGesture
                },
                {
                  path: 'reviseLogin',
                  component: ReviseLogin
                },
                {
                  path: 'reviseDeal',
                  component: ReviseDeal
                }
              ]
            },
            {
              path: 'thirdParty',
              component: ThirdParty
            },
            {
              path: 'address',
              component: Container,
              children: [
                {
                  path: '/',
                  component: Address
                },
                {
                  path: 'consignee',
                  component: Consignee
                },
                {
                  path: 'consigneeEdit',
                  component: ConsigneeEdit
                }
              ]
            },
            {
              path: 'about',
              component: Container,
              children: [
                {
                  path: '/',
                  component: About
                },
                {
                  path: 'introduced',
                  component: Introduced
                },
                {
                  path: 'score',
                  component: Score
                },
                {
                  path: 'statement',
                  component: Statement
                },
                {
                  path: 'agreement',
                  component: Agreement
                }
              ]
            }
          ]
        },
        {
          path: 'assets',
          name: 'assets',
          component: Assets
        },
        {
          path: 'cash',
          component: Cash
        },
        {
          path: 'recharge',
          component: Recharge
        },
        {
          path: 'investment',
          component: Container,
          children: [
            {
              path: '/',
              component: Investment
            },
            {
              path: 'investmentDetail',
              component: InvestmentDetail
            },
            {
              path: 'contract',
              component: Contract
            }
          ]
        },
        {
          path: 'calendar',
          component: Calendar
        },
        {
          path: 'note',
          component: Note
        },
        {
          path: 'calendar',
          component: Calendar
        },
        {
          path: 'preferential',
          component: Preferential
        },
        {
          path: 'experience',
          component: Experience
        },
        {
          path: 'message',
          component: Container,
          children: [
            {
              path: '/',
              component: Message
            },
            {
              path: 'messageDetail',
              component: MessageDetail
            },
            {
              path: 'pushSettings',
              component: PushSettings
            }
          ]
        },
        {
          path: 'auto',
          component: Auto
        },
        {
          path: 'invited',
          component: Container,
          children: [
            {
              path: '/',
              component: Invited
            },
            {
              path: 'invitedDetail',
              component: InvitedDetail
            }
          ]
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
