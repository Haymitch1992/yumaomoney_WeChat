<template>
  <div>
    <x-header :left-options="leftOptions" @on-click-back="goBack()">组织架构</x-header>
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
      return {
        leftOptions: {
          preventGoBack: true
        }
      }
    },
    methods: {
      goBack () {
        this.$router.push({name: 'disclosure', params: {listType: 2}})
      }
    }
  }
</script>

<style>
  .box {
    text-align: center;
    padding: 20px 10px;
  }
  .group {
    width: 100%;
  }
</style>
