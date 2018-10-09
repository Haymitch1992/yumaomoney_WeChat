<template>
  <div>
    <x-header>个人中心</x-header>
    <group>
      <cell title="会员中心" is-link></cell>
      <cell title="实名认证" value="王**（110*******0016）"></cell>
      <cell title="手机号" value="136****2672" is-link></cell>
      <cell title="银行卡" value="已绑定" is-link></cell>
      <cell title="风险测评" value="保守型" is-link></cell>
    </group>
    <div class="submit-box">
      <x-button @click.native="iconType = 'success'" type="primary">安全退出</x-button>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XButton } from 'vux'

  export default {
    name: 'Center',
    components: {
      Group,
      Cell,
      XHeader,
      XButton
    },
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello World!'
      }
    }
  }
</script>
