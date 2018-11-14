<template>
  <div>
    <x-header :left-options="leftOptions" @on-click-back="goBack()">标的详情</x-header>
    <group>
      <cell title="项目名称" value="测试好友邀请01"></cell>
      <cell title="合同模板" is-link link="/user/investment/contract"></cell>
      <cell title="投资时间" value="2018年10月09日 23:45:34"></cell>
      <cell title="投资金额" value="500元"></cell>
      <cell title="已收金额" value="0元"></cell>
      <cell title="预计收益" value="30元"></cell>
      <cell title="预计本息" value="530元"></cell>
      <cell v-if="(data.time === '')" title="标的状态" :value="data.type"></cell>
      <cell v-if="(data.time !== '')" title="满标时间" :value="data.time"></cell>
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
    <div class="pt20 ">
      <div class="submit-box">
        <x-button @click.native="goFinanceDetail" type="primary">进入标的</x-button>
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
          type: '未满标',
          time: '2018年10月09日'
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
        this.$router.push({name: 'investment', params: {listType: self.dataBak.listType}})
      },
      init () {
        var self = this
        self.dataBak = self.$route.params
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>
