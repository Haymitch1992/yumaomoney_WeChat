<template>
  <div>
    <x-header>自动投标</x-header>
    <group>
      <cell title="银行授权状态" value="取消授权"></cell>
    </group>
    <group>
      <x-input v-model="data.amount" type="number" title="单笔金额(元)" :is-type="positive" placeholder="请输入投资金额"></x-input>
      <x-address @on-hide="logHide" @on-show="logShow" title="年化收益" v-model="data.earns" :list="data.earnsData"
                 @on-shadow-change="onShadowChange" placeholder="请选择范围" :show.sync="data.showEarns"></x-address>
      <x-address @on-hide="logHide" @on-show="logShow" title="投资期限" v-model="data.term" :list="data.termData"
                 @on-shadow-change="onShadowChange" placeholder="请选择范围" :show.sync="data.showTerm"></x-address>
      <checklist label-position="left" :options="wayList" v-model="data.wayType"></checklist>
      <radio :options="saveList" @on-change="saveTypeChange" v-model="data.saveType"></radio>
      <x-input v-model="data.save" type="number" title="保留金额(元)" :is-type="positive" placeholder="请输入保留金额" :disabled="(data.saveType === '0')"></x-input>
    </group>
    <div class="pt20 center">
      <check-icon :value.sync="data.agreement" type="plain">已阅读并同意《鱼猫金服自动投标协议》</check-icon>
    </div>
    <div class="pt20 ">
      <div class="submit-box">
        <x-button @click.native="autoCheck" type="primary" :disabled="!data.agreement">开启自动投标</x-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XInput, Selector, Datetime, Checklist, Radio, XButton, CheckIcon, XSwitch, XAddress } from 'vux'

  export default {
    name: 'Auto',
    components: {
      Group,
      Cell,
      XHeader,
      XInput,
      Selector,
      Datetime,
      Checklist,
      Radio,
      XButton,
      CheckIcon,
      XSwitch,
      XAddress
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
          autoType: false
        },
        wayList: [ {key: '1', value: '还款方式:按月分析，到期还本'} ],
        saveList: [
          {key: '0', value: '无需保留金额'},
          {key: '1', value: '需保留金额'}
        ],
        positive: function (value) {
          return {
            valid: value >= 0,
            msg: '单笔金额需大于0'
          }
        }
      }
    },
    methods: {
      saveTypeChange (val, label) {
        var self = this
        self.data.save = ''
        console.log('change', val, label)
      },
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
      self.data.earnsData = self.GLOBAL.earnsJson
      self.data.termData = self.GLOBAL.termJson
    }
  }
</script>
