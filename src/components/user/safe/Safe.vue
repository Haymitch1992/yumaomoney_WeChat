<template>
  <div>
    <x-header>账户与安全</x-header>
    <group>
      <cell title="修改登录密码" is-link link="/user/setting/safe/reviseLogin"></cell>
      <cell title="修改交易密码" is-link link="/user/setting/safe/reviseDeal"></cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader } from 'vux'

  export default {
    name: 'Safe',
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
