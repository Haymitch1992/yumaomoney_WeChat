<template>
  <div>
    <x-header>启动页</x-header>
    <div class="vux-demo">
      <img class="logo" src="../../assets/images/logo.png">
    </div>
    <group title="cell demo">
      <cell title="引导页" value="cool" is-link link="/start/gesture"></cell>
      <cell title="首页" value="cool" is-link link="/home"></cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader } from 'vux'

  export default {
    name: 'Start',
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
