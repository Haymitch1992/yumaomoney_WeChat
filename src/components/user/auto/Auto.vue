<template>
  <div>
    <x-header>自动投标</x-header>
    <div v-if="!status">
      <group>
        <cell title="银行授权状态" value="取消授权"></cell>
      </group>
      <group>
        <x-input v-model="data.amount" type="number" title="单笔金额(元)" :is-type="positive" placeholder="请输入投资金额"></x-input>
        <selector title="年化收益上限" direction="rtl" :options="earnsList" v-model="data.earnsCeiling"></selector>
        <selector title="年化收益下限" direction="rtl" :options="earnsList" v-model="data.earnsLower"></selector>
        <selector title="投资期限上限" direction="rtl" :options="termList" v-model="data.termCeiling"></selector>
        <selector title="投资期限下限" direction="rtl" :options="termList" v-model="data.termLower"></selector>
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
    <div v-if="status">
      <group>
        <x-switch title="自动投标状态" v-model="data.autoType"></x-switch>
      </group>
      <group>
        <cell title="单笔投资金额" value="10000.00"></cell>
        <cell title="保留账户金额" value="10000.00"></cell>
        <cell title="授权金额" value="10000.00"></cell>
        <cell title="授权期限" value="2019年08月9日"></cell>
      </group>
      <group>
        <cell title="年化收益" value="10%至15%"></cell>
        <cell title="投资期限" value="1至5个月"></cell>
        <cell title="年化收益" value="还本付息，到期还本"></cell>
      </group>
      <div class="pt20 ">
        <div class="submit-box">
          <x-button @click.native="status = false" type="primary">修改规则</x-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XInput, Selector, Datetime, Checklist, Radio, XButton, CheckIcon, XSwitch } from 'vux'

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
      XSwitch
    },
    data () {
      return {
        status: true,
        data: {
          amount: null,
          save: '',
          earnsLower: '11',
          earnsCeiling: '11',
          termCeiling: '4',
          termLower: '6',
          wayType: [],
          saveType: '0',
          agreement: false,
          autoType: false
        },
        earnsList: [
          {key: '8', value: '8%'},
          {key: '9', value: '9%'},
          {key: '10', value: '10%'},
          {key: '11', value: '11%'},
          {key: '12', value: '12%'},
          {key: '13', value: '13%'},
          {key: '14', value: '14%'}
        ],
        termList: [
          {key: '1', value: '1月'},
          {key: '2', value: '2月'},
          {key: '3', value: '3月'},
          {key: '4', value: '4月'},
          {key: '5', value: '5月'},
          {key: '6', value: '6月'},
          {key: '7', value: '7月'},
          {key: '8', value: '8月'},
          {key: '9', value: '9月'},
          {key: '10', value: '10月'},
          {key: '11', value: '11月'},
          {key: '12', value: '12月'}
        ],
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
        self.status = true
      }
    }
  }
</script>
