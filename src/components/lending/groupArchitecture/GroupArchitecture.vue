<template>
  <div>
    <x-header>组织架构</x-header>
    <group>
      <div class="box">
        <img class="group" src="../../../assets/images/groupArchitecture.png">
      </div>
    </group>
  </div>
</template>

<script>
  import { Group, XHeader } from 'vux'

  export default {
    name: 'GroupArchitecture',
    components: {
      Group,
      XHeader
    },
    data () {
      return {}
    }
  }
</script>

<style>
  .box {
    text-align: center;
  }
  .group {
    width: 100%;
  }
</style>
