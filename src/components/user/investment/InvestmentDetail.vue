<template>
  <div>
    <x-header :left-options="leftOptions" @on-click-back="goBack()">标的详情</x-header>
    <group>
      <cell title="项目名称" :value="data.title"></cell>
      <cell title="合同模板" is-link link="/user/investment/contract"></cell>
      <cell title="投资时间" :value="data.investTime"></cell>
      <cell title="投资金额" :value="`${data.investAmount}元`"></cell>
      <cell v-show="dataBak.listType === 1" title="已收金额" :value="`${data.receivedAmount}元`"></cell>
      <cell v-show="dataBak.listType !== 1" title="已收金额" :value="`${data.receivedAmount}元(${data.receivedAmountLength}/${data.receivedAmountLengthAll})`"></cell>
      <cell title="预计收益" :value="`${data.interest}元`"></cell>
      <cell :title="data.investAmountTitle" :value="`${data.investAmount * 1 + data.interest * 1}元`"></cell>
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
        <tr v-for="item in data.tableData">
          <td>{{item.repayDate}}</td>
          <td>{{`${(item.forpayPrincipal === 0) ? '利息' : '本息'} ${item.forpayInterest * 1 + item.forpayPrincipal * 1}`}}</td>
          <td>{{`${(item.repayStatus === 1) ? '待还款' : '已还款'}`}}</td>
        </tr>
        </tbody>
      </x-table>
    </group>
    <div class="pt20">
      <div class="submit-box">
        <x-button @click.native="goFinanceDetail" type="primary" :disabled="dataBak.listType === 3">{{(dataBak.listType === 3) ? '标的已结清' :'进入标的'}}</x-button>
      </div>
    </div>
    <alert v-model="noLoginShow" title="登录失效" @on-hide="logout">请重新登录</alert>
  </div>
</template>

<script>
  import qs from 'qs'
  import _ from 'lodash'
  import { Group, Cell, XHeader, XButton, XTable, AlertModule, Alert } from 'vux'

  export default {
    name: 'InvestmentDetail',
    components: {
      Group,
      Cell,
      XHeader,
      XButton,
      XTable,
      AlertModule,
      Alert
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
          investAmountTitle: '预计本息',
          receivedAmount: 0,
          receivedAmountLength: 0,
          receivedAmountLengthAll: 0,
          interest: 0,
          typeTitle: '标的状态',
          typeValue: '未满标',
          tableData: []
        },
        noLoginShow: false,
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
       * 登录失效跳转
       */
      logout () {
        var self = this
        window.localStorage.removeItem('Flag')
        self.$store.dispatch('setUser', false)
        self.$cookies.remove('tokenClientkey')
        self.$router.push('/start/login')
      },
      /**
       * 获取招标中的投资详情
       */
//      getTenderDetail () {
//        var self = this
//        self.data.title = self.dataBak.item.data.borrowTitle
//        if (self.dataBak.item.data.isDayThe === 1) {
//          self.data.interest = ((self.dataBak.item.data.investAmount * ((self.dataBak.item.data.annualRate / 100) / 12)).toFixed(2) * self.dataBak.item.data.deadline).toFixed(2)
//        } else {
//          self.data.interest = ((self.dataBak.item.data.investAmount * ((self.dataBak.item.data.annualRate / 100) / 360)).toFixed(2) * self.dataBak.item.data.deadline).toFixed(2)
//        }
//        self.data.time = ''
//        self.data.investTime = self.dataBak.item.data.investTime
//        self.data.investAmount = self.dataBak.item.data.investAmount
//        self.data.receivedAmount = 0
//        self.data.typeTitle = '标的状态'
//        self.data.typeValue = '未满标'
//      },
      /**
       * 获取还款中的投资详情
       */
//      getRecycleDetail () {
//        var self = this
//        self.data.title = self.dataBak.item.data.borrowTitle
//        if (self.dataBak.item.data.isDayThe === 1) {
//          self.data.interest = ((self.dataBak.item.data.realAmount * ((self.dataBak.item.data.annualRate / 100) / 12)).toFixed(2) * self.dataBak.item.data.deadline).toFixed(2)
//        } else {
//          self.data.interest = ((self.dataBak.item.data.realAmount * ((self.dataBak.item.data.annualRate / 100) / 360)).toFixed(2) * self.dataBak.item.data.deadline).toFixed(2)
//        }
//        self.data.time = ''
//
//        self.data.investTime = self.dataBak.item.data.auditTime
//        self.data.investAmount = self.dataBak.item.data.realAmount
//        self.data.receivedAmount = 0
//        self.data.typeTitle = '满标时间'
//        self.data.typeValue = self.dataBak.item.time
//
//        self.$http.post(process.env.BASE_API + '/apihomeBorrowForpayDetail.do', qs.stringify({ 'id': self.dataBak.item.borrowId, 'iid': self.dataBak.item.id }))
//          .then(function (res) {
//            if (res.data === 'noLogin') {
//              self.noLoginShow = true
//            } else {
//              self.data.tableData = res.data
//              self.data.receivedAmountLengthAll = self.data.tableData.length
//              _.each(self.data.tableData, function (v) {
//                if (v.repayStatus === 2) {
//                  self.data.receivedAmount += (v.forpayInterest * 1) + (v.forpayPrincipal * 1)
//                  self.data.receivedAmountLength += 1
//                }
//              })
//            }
//          })
//          .catch(function (error) {
//            console.log(error)
//          })
//      },
      /**
       * 获取已还清的投资详情
       */
//      getRecycledDetail () {
//        var self = this
//        self.data.title = self.dataBak.item.data.borrowTitle
//        if (self.dataBak.item.data.isDayThe === 1) {
//          self.data.interest = ((self.dataBak.item.data.realAmount * ((self.dataBak.item.data.annualRate / 100) / 12)).toFixed(2) * self.dataBak.item.data.deadline).toFixed(2)
//        } else {
//          self.data.interest = ((self.dataBak.item.data.realAmount * ((self.dataBak.item.data.annualRate / 100) / 360)).toFixed(2) * self.dataBak.item.data.deadline).toFixed(2)
//        }
//        self.data.time = ''
//
//        self.data.investTime = self.dataBak.item.data.realRepayDate
//        self.data.investAmount = self.dataBak.item.data.realAmount
//        self.data.receivedAmount = self.dataBak.item.data.realAmount
//        self.data.typeTitle = '满标时间'
//        self.data.typeValue = self.dataBak.item.time
//
//        self.$http.post(process.env.BASE_API + '/apihomeBorrowHaspayDetail.do', qs.stringify({ 'id': self.dataBak.item.borrowId, 'iid': self.dataBak.item.id }))
//          .then(function (res) {
//            if (res.data === 'noLogin') {
//              self.noLoginShow = true
//            } else {
//              self.data.tableData = res.data
//              self.data.receivedAmountLengthAll = self.data.tableData.length
//              _.each(self.data.tableData, function (v) {
//                if (v.repayStatus === 2) {
//                  self.data.receivedAmount += (v.forpayInterest * 1) + (v.forpayPrincipal * 1)
//                  self.data.receivedAmountLength += 1
//                }
//              })
//            }
//          })
//          .catch(function (error) {
//            console.log(error)
//          })
//      },
      /**
       * 初始化投资详情
       */
      initDetail (type) {
        var self = this
        self.data.title = self.dataBak.item.data.borrowTitle
        if (self.dataBak.item.data.isDayThe === 1) {
          self.data.interest = ((self.dataBak.item.data.realAmount * ((self.dataBak.item.data.annualRate / 100) / 12)).toFixed(2) * self.dataBak.item.data.deadline).toFixed(2)
        } else {
          self.data.interest = ((self.dataBak.item.data.realAmount * ((self.dataBak.item.data.annualRate / 100) / 360)).toFixed(2) * self.dataBak.item.data.deadline).toFixed(2)
        }
        self.data.time = ''
        if (type === 1) {
          /**
           * 获取招标中的投资详情
           */
          self.data.investTime = self.dataBak.item.data.investTime
          self.data.investAmount = self.dataBak.item.data.investAmount
          self.data.receivedAmount = 0
          self.data.typeTitle = '标的状态'
          self.data.typeValue = '未满标'
        } else {
          self.data.investAmount = self.dataBak.item.data.realAmount
          self.data.typeTitle = '满标时间'
          self.data.investAmountTitle = '待收本息'
          self.data.typeValue = self.dataBak.item.time
          if (type === 2) {
            /**
             * 获取还款中的投资详情
             */
            self.data.investTime = self.dataBak.item.data.auditTime
            self.data.receivedAmount = 0
            let apiUrl = '/apihomeBorrowForpayDetail.do'
            self.getDetail(apiUrl)
          } else {
            /**
             * 获取还款中的投资详情
             */
            self.data.investTime = self.dataBak.item.data.realRepayDate
            self.data.receivedAmount = self.dataBak.item.data.realAmount
            let apiUrl = '/apihomeBorrowHaspayDetail.do'
            self.getDetail(apiUrl)
          }
        }
      },
      /**
       * 获取投资详情
       */
      getDetail (url) {
        var self = this
        self.$http.post(process.env.BASE_API + url, qs.stringify({ 'id': self.dataBak.item.borrowId, 'iid': self.dataBak.item.id }))
          .then(function (res) {
            if (res.data === 'noLogin') {
              self.noLoginShow = true
            } else {
              self.data.tableData = res.data
              self.data.receivedAmountLengthAll = self.data.tableData.length
              _.each(self.data.tableData, function (v) {
                if (v.repayStatus !== 1) {
                  self.data.receivedAmount += (v.forpayInterest * 1) + (v.forpayPrincipal * 1)
                  self.data.receivedAmountLength += 1
                }
              })
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      init () {
        var self = this
        if (self.$route.params.item === undefined) {
          self.$router.push({name: 'investment'})
        } else {
          self.dataBak = self.$route.params
          self.initDetail(self.dataBak.listType)
//          if (self.dataBak.listType === 1) {
//            self.getTenderDetail()
//          } else if (self.dataBak.listType === 2) {
//            self.getRecycleDetail()
//          } else {
//            self.getRecycledDetail()
//          }
        }
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>
