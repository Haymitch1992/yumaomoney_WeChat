<template>
  <div>
    <x-header>引导页</x-header>
    <div class="vux-demo">
      <img class="logo" src="../../../assets/images/logo.png">
    </div>
    <group title="cell demo">
      <cell title="登录页" value="cool" is-link link="/start/login"></cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader } from 'vux'

  export default {
    name: 'Gesture',
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
