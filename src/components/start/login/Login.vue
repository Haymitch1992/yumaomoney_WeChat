<template>
  <div>
    <x-header>登录页</x-header>
    <div class="vux-demo">
      <img class="logo" src="../../../assets/images/logo.png">
    </div>
    <group title="cell demo">
      <cell title="首页" value="cool" is-link link="/lending"></cell>
      <cell title="手势密码登录" value="cool" is-link link="/start/guide"></cell>
      <cell title="忘记密码" value="cool" is-link link="/start/forget"></cell>
      <cell title="注册页" value="cool" is-link link="/start/registered"></cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader } from 'vux'

  export default {
    name: 'Login',
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
