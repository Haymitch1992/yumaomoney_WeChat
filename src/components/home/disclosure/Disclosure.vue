<template>
  <div>
    <x-header :left-options="leftOptions" @on-click-back="goBack()">信息披露</x-header>
    <tab>
      <tab-item :selected="listType === 1" @on-item-click="listType = 1">基本信息</tab-item>
      <tab-item :selected="listType === 2" @on-item-click="listType = 2">公司架构</tab-item>
      <tab-item :selected="listType === 3" @on-item-click="listType = 3">运营数据</tab-item>
      <tab-item :selected="listType === 4" @on-item-click="listType = 4">对外公告</tab-item>
    </tab>
    <group v-show="listType === 1">
      <cell title="工商信息" is-link link="/home/disclosure/sakeInligting"></cell>
      <cell title="分支机构" is-link link="/home/disclosure/tanKantore"></cell>
      <cell title="重大事项" is-link link="/home/disclosure/issues"></cell>
      <cell title="审计报告" is-link link="/home/disclosure/ouditverslag"></cell>
      <cell title="企业资质" is-link link="/home/disclosure/kwalifikasie"></cell>
      <cell title="大事记" is-link link="/home/disclosure/memorabilia"></cell>
    </group>
    <group v-show="listType === 2">
      <cell title="高管团队" is-link link="/home/disclosure/execsTeam"></cell>
      <cell title="组织架构" is-link link="/home/disclosure/groupArchitecture"></cell>
      <cell title="员工信息分布" is-link link="/home/disclosure/employees"></cell>
    </group>
    <group v-show="listType === 3">
      <cell title="运营数据" is-link link="/home/disclosure/operationData"></cell>
      <cell title="运营报告" is-link link="/home/disclosure/operationReport"></cell>
    </group>
    <group v-show="listType === 4">
      <cell title="官网公告" is-link link="/home/disclosure/websiteNotice"></cell>
      <cell title="到期还款" is-link link="/home/disclosure/repayment"></cell>
      <cell title="支付公告" is-link link="/home/disclosure/payNotice"></cell>
      <cell title="媒体报告" is-link link="/home/disclosure/mediaReport"></cell>
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
        leftOptions: {
          preventGoBack: true
        },
        listType: 1
      }
    },
    methods: {
      goBack () {
        this.$router.push({path: '/home'})
      },
      getFrom () {
        var self = this
        self.listType = self.$route.params.listType ? self.$route.params.listType : 1
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
