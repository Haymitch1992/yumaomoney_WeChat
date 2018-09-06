<template>
  <div>
    <x-header>关于我们</x-header>
    <div style="overflow: hidden;" v-for="item in list">
      <masker style="border-radius: 2px;">
        <div class="m-img"></div>
        <div slot="content" class="m-title">
          基本介绍
          <br/>
          <span class="m-time">"鱼猫金服"在线融资平台隶属于鱼猫投融（北京）网络科技有限公司，是一家提供专业的供应链金融信息服务的互联网平台，面向个人和企业提供安全，透明，便捷，高收益的投融资服务。</span>
        </div>
      </masker>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, Masker } from 'vux'
  export default {
    name: 'aboutMe',
    components: {
      Group,
      Cell,
      XHeader,
      Masker
    },
    data () {
      return {
        list: [
          {
            title: '"鱼猫金服"在线融资平台隶属于鱼猫投融（北京）网络科技有限公司，是一家提供专业的供应链金融信息服务的互联网平台，面向个人和企业提供安全，透明，便捷，高收益的投融资服务。',
            img: 'http://39.107.59.233/activity/banner-wechat-003.jpg',
            time: '2018-05-18'
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .m-img {
    padding-bottom: 45%;
    display: block;
    position: relative;
    max-width: 100%;
    background: url('../../assets/aboutMebg1.png') no-repeat;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    border-radius: 2px;
  }

  .m-title {
    color: #fff;
    text-align: center;
    text-shadow: 0 0 2px rgba(0, 0, 0, .5);
    font-weight: 500;
    font-size: 16px;
    position: absolute;
    left: 0;
    right: 0;
    width: 80%;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
  }

  .m-time {
    font-size: 12px;
    padding-top: 4px;
    display: inline-block;
    margin-top: 5px;
  }
</style>
