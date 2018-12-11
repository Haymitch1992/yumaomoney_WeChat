<template>
  <div>
    <x-header>推送设置</x-header>
    <group title="站内信通知">
      <x-switch title="收到还款" prevent-default v-model="data.messages.repayment	" @on-click="submitMsg('repayment', data.messages.repayment	)"></x-switch>
      <x-switch title="融资成功" prevent-default v-model="data.messages.financing" @on-click="submitMsg('financing', data.messages.financing)"></x-switch>
      <x-switch title="充值成功" prevent-default v-model="data.messages.recharge" @on-click="submitMsg('recharge', data.messages.recharge)"></x-switch>
      <x-switch title="资金变化" prevent-default v-model="data.messages.change" @on-click="submitMsg('change', data.messages.change)"></x-switch>
      <x-switch title="提现成功" prevent-default v-model="data.messages.cash" @on-click="submitMsg('cash', data.messages.cash)"></x-switch>
    </group>
    <group title="短信通知">
      <x-switch title="收到还款" prevent-default v-model="data.sms.repayment" @on-click="submitSms('repayment', data.sms.repayment)"></x-switch>
      <x-switch title="融资成功" prevent-default v-model="data.sms.financing" @on-click="submitSms('financing', data.sms.financing)"></x-switch>
      <x-switch title="充值成功" prevent-default v-model="data.sms.recharge" @on-click="submitSms('recharge', data.sms.recharge)"></x-switch>
      <x-switch title="资金变化" prevent-default v-model="data.sms.change" @on-click="submitSms('change', data.sms.change)"></x-switch>
      <x-switch title="提现成功" prevent-default v-model="data.sms.cash" @on-click="submitSms('cash', data.sms.cash)"></x-switch>
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
          messages: {
            repayment: true,
            financing: true,
            recharge: true,
            change: true,
            cash: true
          },
          sms: {
            repayment: true,
            financing: true,
            recharge: true,
            change: true,
            cash: true
          }
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
      submitMsg (type, value) {
        console.log(type, value)
      },
      submitSms (type, value) {
        console.log(type, value)
      }
    }
  }
</script>
