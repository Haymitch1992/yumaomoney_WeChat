<template>
  <div>
    <x-header>信息披露</x-header>
    <tab>
      <tab-item :selected="listType === 1" @on-item-click="listType = 1">基本信息</tab-item>
      <tab-item :selected="listType === 2" @on-item-click="listType = 2">公司架构</tab-item>
      <tab-item :selected="listType === 3" @on-item-click="listType = 3">运营数据</tab-item>
      <tab-item :selected="listType === 4" @on-item-click="listType = 4">对外公告</tab-item>
    </tab>
    <group v-show="listType === 1">
      <cell title="工商信息" is-link link="/lending/disclosure/sakeInligting"></cell>
      <cell title="分支机构" is-link link="/lending/disclosure/tanKantore"></cell>
      <cell title="重大事项" is-link link="/lending/disclosure/memorabilia"></cell>
      <cell title="审计报告" is-link link="/lending/disclosure/ouditverslag"></cell>
      <cell title="企业资质" is-link link="/lending/disclosure/kwalifikasie"></cell>
    </group>
    <group v-show="listType === 2">
      <cell title="高管团队" is-link link="/lending/disclosure/execsTeam"></cell>
      <cell title="组织架构" is-link link="/lending/disclosure/groupArchitecture"></cell>
      <cell title="员工信息分布" is-link link="/lending/disclosure/employees"></cell>
    </group>
    <group v-show="listType === 3">
      <cell title="运营数据" is-link link="/lending/disclosure/operationData"></cell>
      <cell title="运营报告" is-link link="/lending/disclosure/operationReport"></cell>
    </group>
    <group v-show="listType === 4">
      <cell title="官网公告" is-link link="/lending/disclosure/websiteNotice"></cell>
      <cell title="到期还款" is-link link="/lending/disclosure/repayment"></cell>
      <cell title="支付公告" is-link link="/lending/disclosure/payNotice"></cell>
      <cell title="媒体报告" is-link link="/lending/disclosure/mediaReport"></cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, Tab, TabItem } from 'vux'

  export default {
    name: 'Disclosure',
    components: {
      Group,
      Cell,
      XHeader,
      Tab,
      TabItem
    },
    data () {
      return {
        listType: 1
      }
    },
//    beforeRouteEnter (to, from, next) {
//      console.log(vm)
//      self.fromPath = from.path
//      console.log(self.fromPath)
//      console.log(self.listType)
//      next()
//    },
    methods: {
      getFrom () {
        console.log(this.$router.history)
      },
      init () {
        var self = this
        self.getFrom()
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>

<style>
</style>
