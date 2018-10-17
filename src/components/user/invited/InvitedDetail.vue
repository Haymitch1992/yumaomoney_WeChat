<template>
  <div>
    <x-header>我的邀请</x-header>
    <div class="center pt20 f24">邀请列表</div>
    <div class="pw20 h20">
      <div class="fl">累计邀请:23人</div>
      <div class="fr">累计返现:55元</div>
    </div>
    <group>
      <div class="p15 f12">
        <x-table full-bordered>
          <thead>
          <tr>
            <th>受邀用户</th>
            <th>状态</th>
            <th>获得奖励</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>13******672</td>
            <td>已投资</td>
            <td>2元</td>
          </tr>
          <tr>
            <td>13******673</td>
            <td>已注册</td>
            <td>2元</td>
          </tr>
          </tbody>
        </x-table>
      </div>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XTable } from 'vux'

  export default {
    name: 'InvitedDetail',
    components: {
      Group,
      Cell,
      XHeader,
      XTable
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
