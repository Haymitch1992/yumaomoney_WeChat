<template>
  <div>
    <x-header><a slot="right" @click="goTo()">收益计算器</a>标的详情</x-header>
    <div class="vux-demo">
      <img class="logo" src="../../../assets/images/logo.png">
    </div>
    <group title="cell demo">
      <cell title="新网投资" value="cool" is-link link="/lending/confirmInvestment"></cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader } from 'vux'

  export default {
    name: 'FinanceDetail',
    components: {
      Group,
      Cell,
      XHeader
    },
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello World!'
      }
    },
    methods: {
      goTo () {
        this.$router.push({
          name: `calculator`,
          params: {}
        })
      }
    }
  }
</script>

<style>
  .vux-demo {
    text-align: center;
  }
  .logo {
    width: 100px;
  }
</style>
