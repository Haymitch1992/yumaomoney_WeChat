<template>
  <div>
    <x-header>合同模板</x-header>
    <div class="vux-demo">
      <img class="logo" src="../../../assets/images/logo.png">
    </div>
    <group title="cell demo">
      <cell title="第一" value="cool" is-link></cell>
      <cell title="第二" value="cool" is-link></cell>
      <cell title="第三" value="cool" is-link></cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader } from 'vux'

  export default {
    name: 'Contract',
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
