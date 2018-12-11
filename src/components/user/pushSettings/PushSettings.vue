<template>
  <div>
    <x-header>推送设置</x-header>
    <group title="站内信通知">
      <x-switch title="收到还款" prevent-default v-model="data.messageReceive" @on-click="msgRepaymentFuc"></x-switch>
      <x-switch title="融资成功" prevent-default v-model="data.messageBorrow" @on-click="msgBorrowFuc"></x-switch>
      <x-switch title="充值成功" prevent-default v-model="data.messageRecharge" @on-click="msgRechargeFuc"></x-switch>
      <x-switch title="资金变化" prevent-default v-model="data.msgChange" @on-click="msgChangeFuc"></x-switch>
      <x-switch title="提现成功" prevent-default v-model="data.messageDeposit" @on-click="msgDepositFuc"></x-switch>
    </group>
    <group title="短信通知">
      <x-switch title="收到还款" prevent-default v-model="data.smsRepayment" @on-click="noteReceiveFuc"></x-switch>
      <x-switch title="融资成功" prevent-default v-model="data.smsFinancing" @on-click="noteBorrowFuc"></x-switch>
      <x-switch title="充值成功" prevent-default v-model="data.smsRecharge" @on-click="noteRechargeFuc"></x-switch>
      <x-switch title="资金变化" prevent-default v-model="data.smsChange" @on-click="noteChangeFuc"></x-switch>
      <x-switch title="提现成功" prevent-default v-model="data.smsCash" @on-click="noteDepositFuc"></x-switch>
    </group>
    <alert v-model="noLoginShow" title="登录失效" @on-hide="logout">请重新登录</alert>
  </div>
</template>

<script>
  import { Group, XSwitch, XHeader, AlertModule, Alert } from 'vux'

  export default {
    name: 'PushSettings',
    components: {
      Group,
      XSwitch,
      XHeader,
      AlertModule,
      Alert
    },
    data () {
      return {
        data: {
          messageReceive: false,
          messageBorrow: false,
          messageRecharge: false,
          messageChange: false,
          messageDeposit: false,
          noteReceive: false,
          noteBorrow: false,
          noteRecharge: false,
          noteChange: false,
          noteDeposit: false
        },
        dataBak: {
          msg: {},
          mail: {},
          sms: {}
        },
        noLoginShow: false,
        type: ''
      }
    },
    methods: {
      /**
       * 登录失效跳转
       */
      logout () {
        var self = this
        window.localStorage.removeItem('Flag')
        self.$store.dispatch('setUser', false)
        self.$cookies.remove('tokenClientkey')
        self.$cookies.remove('apiHomeData')
        self.$router.push('/start/login')
      },
      /**
       * 点击触发方法列表
       */
      msgReceiveFuc (newVal, oldVal) {
        var self = this
        self.submitMsg(newVal, oldVal, 'messageReceive')
      },
      msgBorrowFuc (newVal, oldVal) {
        var self = this
        self.submitMsg(newVal, oldVal, 'messageBorrow')
      },
      msgRechargeFuc (newVal, oldVal) {
        var self = this
        self.submitMsg(newVal, oldVal, 'messageRecharge')
      },
      msgChangeFuc (newVal, oldVal) {
        var self = this
        self.submitMsg(newVal, oldVal, 'messageChange')
      },
      msgDepositFuc (newVal, oldVal) {
        var self = this
        self.submitMsg(newVal, oldVal, 'messageDeposit')
      },
      noteReceiveFuc (newVal, oldVal) {
        var self = this
        self.submitMsg(newVal, oldVal, 'noteReceive')
      },
      noteBorrowFuc (newVal, oldVal) {
        var self = this
        self.submitMsg(newVal, oldVal, 'noteBorrow')
      },
      noteRechargeFuc (newVal, oldVal) {
        var self = this
        self.submitMsg(newVal, oldVal, 'noteRecharge')
      },
      noteChangeFuc (newVal, oldVal) {
        var self = this
        self.submitMsg(newVal, oldVal, 'noteChange')
      },
      noteDepositFuc (newVal, oldVal) {
        var self = this
        self.submitMsg(newVal, oldVal, 'noteDeposit')
      },
      /**
       * 提交站内信设置
       * @param type
       */
      submitMsg (newVal, oldVal, type) {
        var self = this
        self.$vux.loading.show({
          text: '保存中'
        })
        setTimeout(() => {
          self.$vux.loading.hide()
          console.log(type)
          self.data[type] = newVal
          console.log(self.data)
        }, 1000)
      },
      /**
       * 获取设置数据
       */
      getData () {
        var self = this
        self.$http.post(process.env.BASE_API + '/apiqueryNotesSettingInit.do', null)
          .then(function (res) {
            /**
             * 验证登录是否失效
             * data[0]:站内信；data[1]:邮件；data[2]:短信。(与后台确认过)
             */
            if (res.data === 'noLogin') {
              self.noLoginShow = true
            } else {
              self.dataBak.msg = res.data.data[0]
              self.dataBak.mail = res.data.data[1]
              self.dataBak.sms = res.data.data[2]
              self.data.messageReceive = (self.dataBak.msg.reciveRepayEnable === 2)
              self.data.messageBorrow = (self.dataBak.msg.loanSucEnable === 2)
              self.data.messageRecharge = (self.dataBak.msg.rechargeSucEnable === 2)
              self.data.messageChange = (self.dataBak.msg.capitalChangeEnable === 2)
              self.data.messageDeposit = (self.dataBak.msg.showSucEnable === 2)
              self.data.noteReceive = (self.dataBak.sms.reciveRepayEnable === 2)
              self.data.noteBorrow = (self.dataBak.sms.loanSucEnable === 2)
              self.data.noteRecharge = (self.dataBak.sms.rechargeSucEnable === 2)
              self.data.noteChange = (self.dataBak.sms.capitalChangeEnable === 2)
              self.data.noteDeposit = (self.dataBak.sms.showSucEnable === 2)
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      init () {
        var self = this
        if ((self.$http.defaults.headers.tokenClientkey === undefined) && self.$cookies.get('tokenClientkey')) {
          self.$http.defaults.headers.tokenClientkey = self.$cookies.get('tokenClientkey')
        }
        self.getData()
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>
