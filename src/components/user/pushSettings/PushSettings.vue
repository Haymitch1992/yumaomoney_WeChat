<template>
  <div>
    <x-header>推送设置</x-header>
    <group title="站内信通知">
      <x-switch title="收到还款" prevent-default v-model="data.msgRepayment" @on-click="submitMsg('repayment', data.messages.repayment)"></x-switch>
      <x-switch title="融资成功" prevent-default v-model="data.msgFinancing" @on-click="submitMsg('financing', data.messages.financing)"></x-switch>
      <x-switch title="充值成功" prevent-default v-model="data.msgRecharge" @on-click="submitMsg('recharge', data.messages.recharge)"></x-switch>
      <x-switch title="资金变化" prevent-default v-model="data.msgChange" @on-click="submitMsg('change', data.messages.change)"></x-switch>
      <x-switch title="提现成功" prevent-default v-model="data.msgCash" @on-click="submitMsg('cash', data.messages.cash)"></x-switch>
    </group>
    <group title="短信通知">
      <x-switch title="收到还款" prevent-default v-model="data.smsRepayment" @on-click="submitSms('repayment', data.sms.repayment)"></x-switch>
      <x-switch title="融资成功" prevent-default v-model="data.smsFinancing" @on-click="submitSms('financing', data.sms.financing)"></x-switch>
      <x-switch title="充值成功" prevent-default v-model="data.smsRecharge" @on-click="submitSms('recharge', data.sms.recharge)"></x-switch>
      <x-switch title="资金变化" prevent-default v-model="data.smsChange" @on-click="submitSms('change', data.sms.change)"></x-switch>
      <x-switch title="提现成功" prevent-default v-model="data.smsCash" @on-click="submitSms('cash', data.sms.cash)"></x-switch>
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
      /**
       * 提交站内信设置
       * @param type
       * @param value
       */
      submitMsg (type, value, newVal, oldVal) {
        console.log(type, value, newVal, oldVal)
        this.$vux.loading.show({
          text: 'in processing'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
          this.value2 = newVal
        }, 1000)
      },
      /**
       * 提交短信设置
       * @param type
       * @param value
       */
      submitSms (type, value, newVal, oldVal) {
        console.log(type, value, newVal, oldVal)
        this.$vux.loading.show({
          text: 'in processing'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
          this.value2 = newVal
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
