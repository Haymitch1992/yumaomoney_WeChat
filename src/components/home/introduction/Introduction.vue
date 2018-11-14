<template>
  <div>
    <x-header>服务介绍</x-header>
    <group>
      <cell title="还款方式" :value="(data.method === '1') ? '按月付息，到期还本' : '一次性，到期还本'"></cell>
      <cell title="标的性质" :value="data.properties"></cell>
      <cell title="截止日期" :value="data.time"></cell>
      <cell title="剩余天数">
        <clocker :time="data.time"></clocker>
      </cell>
      <cell title="借款人状态" :value="(data.status === '1') ? '企业生产经营正常' : '企业生产经营异常'"></cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, Clocker } from 'vux'

  export default {
    name: 'Introduction',
    components: {
      Group,
      Cell,
      XHeader,
      Clocker
    },
    data () {
      return {
        data: {
          method: '1',
          properties: '信用借款',
          time: '2018-12-18 12:18:00',
          status: '1'
        }
      }
    }
  }
</script>
