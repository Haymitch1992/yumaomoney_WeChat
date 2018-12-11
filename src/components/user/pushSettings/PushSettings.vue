<template>
  <div>
    <x-header>推送设置</x-header>
    <group title="站内信通知">
      <x-switch title="收到还款" prevent-default v-model="data.msgRepayment" @on-click="msgRepaymentFuc"></x-switch>
      <x-switch title="融资成功" prevent-default v-model="data.msgFinancing" @on-click="msgFinancingFuc"></x-switch>
      <x-switch title="充值成功" prevent-default v-model="data.msgRecharge" @on-click="msgRechargeFuc"></x-switch>
      <x-switch title="资金变化" prevent-default v-model="data.msgChange" @on-click="msgChangeFuc"></x-switch>
      <x-switch title="提现成功" prevent-default v-model="data.msgCash" @on-click="msgCashFuc"></x-switch>
    </group>
    <group title="短信通知">
      <x-switch title="收到还款" prevent-default v-model="data.smsRepayment" @on-click="smsRepaymentFuc"></x-switch>
      <x-switch title="融资成功" prevent-default v-model="data.smsFinancing" @on-click="smsFinancingFuc"></x-switch>
      <x-switch title="充值成功" prevent-default v-model="data.smsRecharge" @on-click="smsRechargeFuc"></x-switch>
      <x-switch title="资金变化" prevent-default v-model="data.smsChange" @on-click="smsChangeFuc"></x-switch>
      <x-switch title="提现成功" prevent-default v-model="data.smsCash" @on-click="smsCashFuc"></x-switch>
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
          msgRepayment: true,
          msgFinancing: true,
          msgRecharge: true,
          msgChange: true,
          msgCash: true,
          smsRepayment: true,
          smsFinancing: true,
          smsRecharge: true,
          smsChange: true,
          smsCash: true
        },
        dataBak: {},
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
      msgRepaymentFuc (newVal, oldVal) {
        var self = this
        self.submitMsg(newVal, oldVal, 'msgRepayment')
      },
      msgFinancingFuc (newVal, oldVal) {
        var self = this
        self.submitMsg(newVal, oldVal, 'msgFinancing')
      },
      msgRechargeFuc (newVal, oldVal) {
        var self = this
        self.submitMsg(newVal, oldVal, 'msgRecharge')
      },
      msgChangeFuc (newVal, oldVal) {
        var self = this
        self.submitMsg(newVal, oldVal, 'msgChange')
      },
      msgCashFuc (newVal, oldVal) {
        var self = this
        self.submitMsg(newVal, oldVal, 'msgCash')
      },
      smsRepaymentFuc (newVal, oldVal) {
        var self = this
        self.submitMsg(newVal, oldVal, 'smsRepayment')
      },
      smsFinancingFuc (newVal, oldVal) {
        var self = this
        self.submitMsg(newVal, oldVal, 'smsFinancing')
      },
      smsRechargeFuc (newVal, oldVal) {
        var self = this
        self.submitMsg(newVal, oldVal, 'smsRecharge')
      },
      smsChangeFuc (newVal, oldVal) {
        var self = this
        self.submitMsg(newVal, oldVal, 'smsChange')
      },
      smsCashFuc (newVal, oldVal) {
        var self = this
        self.submitMsg(newVal, oldVal, 'smsCash')
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
             */
            if (res.data === 'noLogin') {
              self.noLoginShow = true
            } else {
              self.dataBak = res.data.data
              console.log(self.dataBak)
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
