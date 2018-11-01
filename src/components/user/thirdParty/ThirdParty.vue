<template>
  <div>
    <x-header>三方账号管理</x-header>
    <group>
      <cell title="微信" value="解绑" inline-desc='已绑定' is-link>
        <img slot="icon" width="40" style="display:block;margin-right:5px;" src="../../../assets/images/icon/wechat.png">
      </cell>
      <cell title="QQ" value="添加绑定" inline-desc='未绑定' is-link>
        <img slot="icon" width="40" style="display:block;margin-right:5px;" src="../../../assets/images/icon/qq.png">
      </cell>
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
