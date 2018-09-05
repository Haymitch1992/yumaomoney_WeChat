<template>
  <div>
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
    name: 'Lending',
    components: {
      Group,
      Cell,
      XHeader
    },
    data () {
      return {
        msg: 'Hello World!'
      }
    }
  }
</script>

<style>
</style>
