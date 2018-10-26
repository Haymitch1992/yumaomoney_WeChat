<template>
  <div>
    <x-header>自动投标</x-header>
    <group>
      <cell title="银行授权状态" value="取消授权"></cell>
    </group>
    <group>
      <x-input v-model="data.amount" type="number" title="单笔金额(元)" :is-type="positive" placeholder="请输入投资金额"></x-input>
      <div id="earns">{{data.earns}}</div>
      <div id="term">{{data.term}}</div>
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
  import { Group, Cell, XHeader, XInput, Selector, Datetime, Checklist, Radio, XButton, CheckIcon, XSwitch } from 'vux'
  import MobileSelect from 'mobile-select'
  import _ from 'lodash'

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
        data: {
          amount: null,
          save: '',
          earns: '年化收益',
          term: '投资期限',
          earnsLower: '',
          earnsCeiling: '',
          termLower: '',
          termCeiling: '',
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
        console.log(self.data)
      }
    },
    mounted () {
      var self = this
      var mobileSelectEarns = new MobileSelect({
        trigger: '#earns',
        title: '年化收益',
        ensureBtnColor: '#1AAD19',
        position: [0, 0, 2],
        wheels: [
          {
            data: self.GLOBAL.earnsJson
          }
        ],
        keyMap: {
          id: 'id',
          value: 'title',
          childs: 'children'
        },
        callback: function (indexArr, data) {
          var earns = ''
          _.each(data, function (v, k) {
            if (k === 0) {
              earns += v.title
              self.data.earnsLower = v.id
            } else {
              earns += ' ' + v.title
              self.data.earnsCeiling = v.id
            }
          })
          self.data.earns = earns
        }
      })
      var mobileSelectTerm = new MobileSelect({
        trigger: '#term',
        title: '投资期限',
        ensureBtnColor: '#1AAD19',
        position: [0, 0, 2],
        wheels: [
          {
            data: self.GLOBAL.termJson
          }
        ],
        keyMap: {
          id: 'id',
          value: 'title',
          childs: 'children'
        },
        callback: function (indexArr, data) {
          var term = ''
          _.each(data, function (v, k) {
            if (k === 0) {
              term += v.title
              self.data.termLower = v.id
            } else {
              term += ' ' + v.title
              self.data.termCeiling = v.id
            }
          })
          self.data.term = term
        }
      })
      console.log(mobileSelectEarns)
      console.log(mobileSelectTerm)
    }
  }
</script>

<style>
  #earns, #term{
    padding: 10px 15px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  #earns::before, #term::before{
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #D9D9D9;
    color: #D9D9D9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    left: 15px;
  }
  .mobileSelect .content {
    text-indent: 0em;
  }
</style>
