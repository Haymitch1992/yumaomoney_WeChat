<template>
  <div>
    <x-header>个人中心</x-header>
    <group gutter="0">
      <div class="header">
        <div class="fl">
          <div class="user"></div>
        </div>
        <div class="userContent fl">
          <div class="h30">188****6369</div>
          <div class="h30 pt10">
            <span class="mini-card">VIP0</span>
            <span class="mini-card">已实名</span>
            <span class="mini-card">已开通存管</span>
          </div>
        </div>
      </div>
    </group>
    <group>
      <cell title="会员中心" is-link link="/user/center/member"></cell>
      <cell title="实名认证" value="王**（110*******0016）"></cell>
      <cell title="手机号" value="136****2672" is-link link="/user/center/changeNumber"></cell>
      <cell title="银行卡" value="已绑定" is-link link="/user/center/changeCard"></cell>
      <cell title="风险测评" value="保守型" is-link link="/user/center/question"></cell>
    </group>
    <div class="pt20 ">
      <div class="submit-box">
        <x-button @click.native="iconType = 'success'" type="primary">安全退出</x-button>
      </div>
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
        msg: 'Hello World!'
      }
    }
  }
</script>

<style>
  .header {
    padding: 20px;
    height: 70px;
    margin-bottom: 20px;
  }
  .userContent {
    margin-left: 10px;
    height: 50px;
  }
  .user {
    background: url("../../../assets/images/user.png") no-repeat;
    background-size: cover;
    width: 70px;
    height: 70px;
    border: 1px solid #707070;
    border-radius: 35px;
    box-sizing: border-box;
  }
  .mini-card {
    background: #d7d7d7;
    padding: 5px;
  }
</style>
