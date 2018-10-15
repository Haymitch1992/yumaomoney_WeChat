<template>
  <div>
    <x-header>三方账号管理</x-header>
    <group>
      <cell title="微信" is-link></cell>
      <cell title="QQ" is-link></cell>
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
