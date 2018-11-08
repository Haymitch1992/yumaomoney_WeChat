<template>
  <div>
    <!--背景图-->
    <div class="center-bg">
      <x-header>个人中心</x-header>
      <!--状态信息-->
      <div class="header">
        <div class="fl">
          <div class="user"></div>
        </div>
        <div class="userContent fl">
          <div class="h30">188****6369</div>
          <div class="h30 ">
            <span class="mini-card vipStatus" :class="'v'+level">VIP{{level}}</span>
            <span class="mini-card textB">已实名</span>
            <span class="mini-card textC">已开通存管</span>
          </div>
        </div>
      </div>
    </div>
    <!--操作-->
    <div class="operation">
      <group>
        <cell title="会员中心" is-link link="/user/center/member"></cell>
        <cell title="实名认证" value="王**（110*******0016）"></cell>
        <cell title="手机号" value="136****2672" is-link link="/user/center/changeNumber"></cell>
        <cell title="银行卡" value="已绑定" is-link link="/user/center/changeCard"></cell>
        <cell title="风险测评" value="保守型" is-link link="/user/center/question"></cell>
      </group>
    </div>
    <div class="pt20 ">
      <div class="submit-box">
        <x-button @click.native="logout" type="primary">安全退出</x-button>
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
        href: '',
        level: 1
      }
    },
    methods: {
      init () {
        var self = this
        self.href = window.location.origin
      },
      logout () {
        var self = this
        window.localStorage.removeItem('Flag')
        self.$store.dispatch('setUser', false)
        self.$router.push('/home')
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>

<style lang="less">
  .center-bg{
    height:200px;
    background: #F6F6F6 url("../../../assets/images/center-bg.jpg") no-repeat 0 -60px;
    background-size:cover;
    .vux-header{
      background: transparent;
    }
    .vux-header .vux-header-left .vux-header-back{
      opacity: 0;
    }
    .header {
      height: 150px;
      width: 94%;
      margin:0 auto;
      background: #fff;
      padding:40px 0;
      box-sizing: border-box;
      .userContent {
        margin-left:10px;
        margin-top:4px;
      }
    }
    .vipStatus.v0{
      background: #C2C9D3;
      color: #666;
    }
    .vipStatus.v1{
      background: #F6C2AC;
      color: #8A6556;
    }
    .vipStatus.v2{
      background: #C2C9D3;
      color: #666;
    }
    .vipStatus.v3{
      background: #E0B56C;
      color: #946D31;
    }
    .vipStatus.v4{
      background: #f1eded;
      color: #919192;
    }
    .vipStatus.v5{
      background: #F8CBAA;
      color: #946D31;
    }
    .vipStatus.v6{
      background: #2D2D2D;
      color: #FCD4AF;
    }
    .textB{
      background: #FE9494;
    }
    .textC{
      background: #FFAD95;
    }
  }
  .operation{
    width: 94%;
    margin:0 auto;
    .weui-cell{
      padding:14px;
      font-size:16px;
    }
    .weui-cell__ft{
      font-size: 14px;
    }
  }

  .user {
    background: #FE9494 url("../../../assets/images/icon/user-icon_13.png") no-repeat;
    background-size: cover;
    width: 70px;
    height: 70px;
    border-radius: 35px;
    box-sizing: border-box;
    margin-left:20px;
  }
  .mini-card {
    padding: 4px 8px;
    font-size:12px;
    border-radius: 6px;
    color: #fff;
    margin-right:6px;
  }
  .submit-box{
    width:94%;
    margin:30px auto 0;
    padding:0;
    .weui-btn{
      line-height: 2.5;
    }
    button{
      background: #FF3E3F;
      color: #fff;

    }
  }
</style>
