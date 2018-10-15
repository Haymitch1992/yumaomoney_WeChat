<template>
  <div>
    <x-header>关于</x-header>
    <div class="center">
      <img class="logo" src="../../../assets/images/logo.jpg">
      <div>当期版本3.1.0</div>
    </div>
    <group>
      <cell title="功能介绍" is-link link="/user/setting/about/introduced"></cell>
      <cell title="去评分" is-link link="/user/setting/about/score"></cell>
      <cell title="特别声明" is-link link="/user/setting/about/statement"></cell>
      <cell title="服务协议" is-link link="/user/setting/about/agreement"></cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader } from 'vux'

  export default {
    name: 'About',
    components: {
      Group,
      Cell,
      XHeader
    },
    data () {
      return {}
    }
  }
</script>

<style>
  .logo {
    width: 100px;
  }
</style>
