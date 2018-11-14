<template>
  <div>
    <x-header>服务介绍</x-header>
    <group>
      <cell title="还款方式" value="按月付息，到期还本"></cell>
      <cell title="标的性质" value="信用借款"></cell>
      <cell title="截止日期" value="2018-12-18"></cell>
      <cell title="剩余天数">
        <clocker time="2018-12-18"></clocker>
      </cell>
      <cell title="借款人状态" value="企业生产经营正常"></cell>
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
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello World!'
      }
    }
  }
</script>
