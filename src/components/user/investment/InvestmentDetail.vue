<template>
  <div>
    <x-header>标的详情</x-header>
    <group>
      <cell title="项目名称" value="测试好友邀请01"></cell>
      <cell title="合同模板" is-link link="/user/investment/contract"></cell>
      <cell title="投资时间" value="2018年10月09日 23:45:34"></cell>
      <cell title="投资金额" value="500元"></cell>
      <cell title="已收金额" value="0元"></cell>
      <cell title="预计收益" value="30元"></cell>
      <cell title="预计本息" value="530元"></cell>
      <cell title="标的状态" value="未满标"></cell>
    </group>
    <div class="pt20 ">
      <div class="submit-box">
        <x-button @click.native="goFinanceDetail" type="primary">进入标的</x-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XButton } from 'vux'

  export default {
    name: 'InvestmentDetail',
    components: {
      Group,
      Cell,
      XHeader,
      XButton
    },
    data () {
      return {
        data: {}
      }
    },
    methods: {
      goFinanceDetail () {
        var self = this
        this.$router.push({name: 'financeDetail', params: self.data})
      }
    }
  }
</script>
