<template>
  <div>
    <x-header>推送设置</x-header>
    <group title="站内信通知">
      <x-switch title="收到还款" prevent-default v-model="data.msgRepayment" @on-click="msgRepaymentFuc, getEvent($event)"></x-switch>
      <x-switch title="融资成功" prevent-default v-model="data.msgFinancing" @on-click="msgFinancingFuc"></x-switch>
      <x-switch title="充值成功" prevent-default v-model="data.msgRecharge" @on-click="submitMsg('recharge', data.msgRecharge)"></x-switch>
      <x-switch title="资金变化" prevent-default v-model="data.msgChange" @on-click="submitMsg('change', data.msgChange)"></x-switch>
      <x-switch title="提现成功" prevent-default v-model="data.msgCash" @on-click="submitMsg('cash', data.msgCash)"></x-switch>
    </group>
    <group title="短信通知">
      <x-switch title="收到还款" prevent-default v-model="data.smsRepayment" @on-click="submitSms('repayment', data.msgRepayment)"></x-switch>
      <x-switch title="融资成功" prevent-default v-model="data.smsFinancing" @on-click="submitSms('financing', data.smsFinancing)"></x-switch>
      <x-switch title="充值成功" prevent-default v-model="data.smsRecharge" @on-click="submitSms('recharge', data.smsRecharge)"></x-switch>
      <x-switch title="资金变化" prevent-default v-model="data.smsChange" @on-click="submitSms('change', data.smsChange)"></x-switch>
      <x-switch title="提现成功" prevent-default v-model="data.smsCash" @on-click="submitSms('cash', data.smsCash)"></x-switch>
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
        noLoginShow: false
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
      msgRepaymentFuc(newVal, oldVal){
        self.submitMsg(newVal, oldVal, 'repayment')
      },
      msgFinancingFuc(newVal, oldVal){
        self.submitMsg(newVal, oldVal, 'financing')
      },
      getEvent(event){
        console.log(event)
      },
      /**
       * 提交站内信设置
       * @param type
       */
      submitMsg (newVal, oldVal, type) {
        console.log(newVal, oldVal, type)
        this.$vux.loading.show({
          text: 'in processing'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
          this.value2 = value
        }, 1000)
      },
      /**
       * 提交短信设置
       * @param type
       * @param value
       */
      submitSms (type, value) {
        console.log(type, value)
        this.$vux.loading.show({
          text: 'in processing'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
          this.value2 = value
        }, 1000)
      },
      /**
       * 获取设置数据
       */
      getData () {
        console.log('获取设置数据')
      },
      init () {
        var self = this
        if (self.$cookies.get('apiHomeData')) {
          self.data = self.$cookies.get('apiHomeData')
          self.data.homeMap.usernameBak = self.data.homeMap.username.substr(0, 3) + '****' + self.data.homeMap.username.substr(7)
        }
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
