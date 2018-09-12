<template>
  <div>
    <x-header>客服与反馈</x-header>

    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <div class="ph-20">
        <div class="text-center title">鱼猫金服</div>
        <div class="text-center ph-20"><span class="msg font12">任何意见或建议等，都可通过以下方式咨询哦</span></div>
        <a href="tel:400-887-4777">
          <div class="text-center m-img"></div>
        </a>
        <div class="text-center title">拨打客服电话</div>
        <div class="text-center ph-20"><span class="msg font12">服务时间9：00-20：00（节假日至18：00）</span></div>
      </div>
    </group>

    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <cell title="帮助中心" is-link link="/user/help"></cell>
      <cell title="在线客服" is-link link="https://www.sobot.com/chat/oldh5/index.html?sysNum=e4068d62da3b41e69a8f47a6929a6826"></cell>
      <cell title="意见反馈" value="您的意见对我们很重要" is-link link="/user/feedback"></cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, Masker } from 'vux'
  export default {
    name: 'contactUs',
    components: {
      Group,
      Cell,
      XHeader,
      Masker
    },
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .font12{
    font-size: 12px;
  }

  .ph-20{
    padding: 20px 0;
  }

  .text-center{
    text-align: center;
  }

  .title{

  }

  .msg{
    color: #666;
  }

  .m-img {
    background: url('../../../assets/images/phone.png') no-repeat;
    background-position: center center;
    width: 64px;
    height: 64px;
    margin: 0 auto 20px;
  }
</style>
