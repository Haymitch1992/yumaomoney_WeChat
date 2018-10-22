<template>
  <div>
    <x-header>三方账号管理</x-header>
    <group>
      <cell title="微信" value="解绑" is-link></cell>
      <cell title="QQ" value="添加绑定" is-link></cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader } from 'vux'

  export default {
    name: 'ThirdParty',
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
