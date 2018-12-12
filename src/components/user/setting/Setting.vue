<template>
  <div>
    <x-header>设置</x-header>
    <group>
      <cell title="账户与安全" is-link link="/user/setting/safe"></cell>
      <cell title="三方账号管理" is-link link="/user/setting/thirdParty"></cell>
      <!--<cell title="地址管理" is-link link="/user/setting/address"></cell>-->
      <cell title="关于" is-link link="/user/setting/about"></cell>
      <cell title="清除缓存" @click.native="handleClear"></cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader } from 'vux'

  export default {
    name: 'Setting',
    components: {
      Group,
      Cell,
      XHeader
    },
    data () {
      return {}
    },
    methods: {
      handleClear () {
        var self = this
        window.localStorage.clear()
        window.sessionStorage.clear()
        self.$router.push('/home')
      }
    }
  }
</script>
