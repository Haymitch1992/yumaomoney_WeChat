<template>
  <div>
    <x-header :left-options="leftOptions" @on-click-back="goBack()">标的详情</x-header>
    <group>
      <cell title="项目名称" :value="data.title"></cell>
      <cell title="合同模板" is-link link="/user/investment/contract"></cell>
      <cell title="投资时间" :value="data.investTime"></cell>
      <cell title="投资金额" :value="`${data.investAmount}元`"></cell>
      <cell title="已收金额" :value="`${data.receivedAmount}元`"></cell>
      <cell title="预计收益" :value="`${data.interest}元`"></cell>
      <cell title="预计本息" :value="`${data.investAmount * 1 + data.interest * 1}元`"></cell>
      <cell :title="data.typeTitle" :value="data.typeValue"></cell>
      <x-table :cell-bordered="false" :content-bordered="false" style="font-size: 14px;background-color: #fff;">
        <thead>
        <tr style="background-color: #F7F7F7">
          <th>应还时间</th>
          <th>应还金额</th>
          <th>状态</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>2018-09-09</td>
          <td>利息 10元</td>
          <td>已还款</td>
        </tr>
        <tr>
          <td>2018-10-09</td>
          <td>利息 10元</td>
          <td>待还款</td>
        </tr>
        <tr>
          <td>2018-11-09</td>
          <td>本息 520元</td>
          <td>待还款</td>
        </tr>
        </tbody>
      </x-table>
    </group>
    <div class="pt20">
      <div class="submit-box">
        <x-button @click.native="goFinanceDetail" type="primary" :disabled="dataBak.listType === 3">{{(dataBak.listType === 3) ? '标的已结清' :'进入标的'}}</x-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XButton, XTable } from 'vux'

  export default {
    name: 'InvestmentDetail',
    components: {
      Group,
      Cell,
      XHeader,
      XButton,
      XTable
    },
    data () {
      return {
        leftOptions: {
          preventGoBack: true
        },
        data: {
          title: '',
          investTime: '',
          investAmount: '0',
          receivedAmount: '0',
          interest: '0',
          typeTitle: '标的状态',
          typeValue: '未满标'
        },
        dataBak: {}
      }
    },
    methods: {
      goFinanceDetail () {
        var self = this
        this.$router.push({name: 'financeDetail', params: self.data})
      },
      goBack () {
        var self = this
        self.$router.push({name: 'investment', params: {listType: self.dataBak.listType}})
      },
      /**
       * 获取招标中的投资详情
       */
      getTenderDetail () {
        var self = this
        self.data.title = self.dataBak.item.data.borrowTitle
        self.data.investTime = self.dataBak.item.data.investTime
        self.data.investAmount = self.dataBak.item.data.investAmount
        if (self.dataBak.item.data.isDayThe === 1) {
          self.data.interest = ((self.dataBak.item.data.investAmount * ((self.dataBak.item.data.annualRate / 100) / 12)).toFixed(2) * self.dataBak.item.data.deadline).toFixed(2)
        } else {
          self.data.interest = ((self.dataBak.item.data.investAmount * ((self.dataBak.item.data.annualRate / 100) / 360)).toFixed(2) * self.dataBak.item.data.deadline).toFixed(2)
        }
        self.data.receivedAmount = '0'
        self.data.time = ''
        self.data.typeTitle = '标的状态'
        self.data.typeValue = '未满标'
      },
      /**
       * 获取还款中的投资详情
       */
      getRecycleDetail () {
        var self = this
        self.data.title = self.dataBak.item.data.borrowTitle
        self.data.investTime = self.dataBak.item.data.auditTime
        self.data.investAmount = self.dataBak.item.data.realAmount
        if (self.dataBak.item.data.isDayThe === 1) {
          self.data.interest = ((self.dataBak.item.data.realAmount * ((self.dataBak.item.data.annualRate / 100) / 12)).toFixed(2) * self.dataBak.item.data.deadline).toFixed(2)
        } else {
          self.data.interest = ((self.dataBak.item.data.realAmount * ((self.dataBak.item.data.annualRate / 100) / 360)).toFixed(2) * self.dataBak.item.data.deadline).toFixed(2)
        }
        self.data.receivedAmount = '0'
        self.data.time = ''
        self.data.typeTitle = '满标时间'
        self.data.typeValue = self.dataBak.item.time
      },
      /**
       * 获取已还清的投资详情
       */
      getRecycledDetail () {
        var self = this
        console.log(self.dataBak.item)
        self.data.title = self.dataBak.item.data.borrowTitle
        self.data.investTime = self.dataBak.item.data.realRepayDate
        self.data.investAmount = self.dataBak.item.data.realAmount
        if (self.dataBak.item.data.isDayThe === 1) {
          self.data.interest = ((self.dataBak.item.data.realAmount * ((self.dataBak.item.data.annualRate / 100) / 12)).toFixed(2) * self.dataBak.item.data.deadline).toFixed(2)
        } else {
          self.data.interest = ((self.dataBak.item.data.realAmount * ((self.dataBak.item.data.annualRate / 100) / 360)).toFixed(2) * self.dataBak.item.data.deadline).toFixed(2)
        }
        self.data.receivedAmount = self.dataBak.item.data.realAmount
        self.data.time = ''
        self.data.typeTitle = '满标时间'
        self.data.typeValue = self.dataBak.item.time
      },
      init () {
        var self = this
        if (self.$route.params.item === undefined) {
          self.$router.push({name: 'investment'})
        } else {
          self.dataBak = self.$route.params
          if (self.dataBak.listType === 1) {
            self.getTenderDetail()
          } else if (self.dataBak.listType === 2) {
            self.getRecycleDetail()
          } else {
            self.getRecycledDetail()
          }
        }
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>
