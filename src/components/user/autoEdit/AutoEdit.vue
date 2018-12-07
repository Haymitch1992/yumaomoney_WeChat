<template>
  <div>
    <x-header>自动投标</x-header>
    <group>
      <cell title="银行授权状态" value="已授权"></cell>
    </group>
    <group>
      <x-input v-model="data.amount" type="number" title="单笔金额(元)" :is-type="positive" placeholder="请输入单笔出借金额"></x-input>
      <x-input v-model="data.earns" type="number" title="最低年化收益" :is-type="positive" placeholder="请输入最低年化收益"></x-input>
      <x-input v-model="data.term" type="number" title="最长投资期限" :is-type="positive" placeholder="请输入最长投资期限"></x-input>
      <x-switch title="设置保留金额" v-model="data.retain"></x-switch>
      <x-input v-if="data.retain" v-model="data.save" type="number" title="保留金额(元)" :is-type="positive" placeholder="请输入保留金额" :disabled="(data.saveType === '0')"></x-input>
    </group>
    <div class="pt20 center">
      <check-icon :value.sync="data.agreement" type="plain">已阅读并同意《鱼猫金服自动投标协议》</check-icon>
    </div>
    <div class="pt20">
      <div class="submit-box">
        <x-button @click.native="autoCheck" type="primary" :disabled="!data.agreement">开启自动投标</x-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XInput, Selector, Radio, XButton, CheckIcon, XSwitch } from 'vux'

  export default {
    name: 'Auto',
    components: {
      Group,
      Cell,
      XHeader,
      XInput,
      Selector,
      Radio,
      XButton,
      CheckIcon,
      XSwitch
    },
    data () {
      return {
        data: {
          amount: null,
          save: '',
          earns: [],
          earnsData: [],
          earnsLower: '',
          earnsCeiling: '',
          showEarns: false,
          term: [],
          termData: [],
          termLower: '',
          termCeiling: '',
          showTerm: false,
          wayType: [],
          saveType: '0',
          agreement: false,
          autoType: false,
          retain: false
        },
        positive: function (value) {
          return {
            valid: value >= 0,
            msg: '单笔金额需大于0'
          }
        }
      }
    },
    methods: {
      autoCheck () {
        var self = this
        self.data.earnsLower = Math.floor(self.data.earns[0])
        self.data.earnsCeiling = Math.floor(self.data.earns[1])
        self.data.termLower = Math.floor(self.data.term[0])
        self.data.termCeiling = Math.floor(self.data.term[1])
        console.log(self.data)
      },
      onShadowChange (ids, names) {
        console.log(ids, names)
      },
      logHide (str) {
        console.log('on-hide', str)
      },
      logShow () {
        console.log('on-show')
      }
    },
    mounted () {
      var self = this
      self.data.earnsData = 4
      self.data.termData = self.GLOBAL.termJson
    }
  }
</script>
