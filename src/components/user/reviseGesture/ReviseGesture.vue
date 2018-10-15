<template>
  <div>
    <x-header>修改手势密码</x-header>
    <group>
      <cell title="手势密码" is-link></cell>
      <cell title="修改手势密码" is-link></cell>
      <cell title="修改登录密码" is-link></cell>
      <cell title="修改交易密码" is-link></cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader } from 'vux'

  export default {
    name: 'ReviseGesture',
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
