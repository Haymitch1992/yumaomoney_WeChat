<template>
  <div>
    <x-header>关于我们</x-header>
    <div style="overflow: hidden;">
      <masker style="border-radius: 2px;">
        <div class="m-img"></div>
        <div slot="content" class="m-title">
          基本介绍
          <br/>
          <span class="m-time">"鱼猫金服"在线融资平台隶属于鱼猫投融（北京）网络科技有限公司，是一家提供专业的供应链金融信息服务的互联网平台，面向个人和企业提供安全，透明，便捷，高收益的投融资服务。</span>
        </div>
      </masker>

      <group label-width="4.5em" label-margin-right="2em" label-align="right">
        <grid :show-lr-borders="false" >
          <grid-item label="运营时间" key="0">
            <span class="grid-center">3年8个月</span>
          </grid-item>
          <grid-item label="用户投资总额" key="1">
            <span class="grid-center">7.76亿元</span>
          </grid-item>
        </grid>
        <grid :show-lr-borders="false" >
          <grid-item label="完美兑付率" key="0">
            <span class="grid-center">100%</span>
          </grid-item>
          <grid-item label="年化收益率" key="1">
            <span class="grid-center">9%-14%</span>
          </grid-item>
        </grid>
      </group>

      <group label-width="4.5em" label-margin-right="2em" label-align="right">
        <masker style="border-radius: 2px;">
          <div class="m-img2"></div>
          <div slot="content" class="m-title">
            <span class="inline-block"></span> 安全保障 <span class="inline-block"></span>
            <br/>
            <div style="margin-top: 10px">
              <scroller lock-y :scrollbar-x=false>
                <div class="scroller_box">
                  <div class="scroller_box_item" :class="'scroller_box_item'+item.key" v-for="item in list">
                    <h3>{{item.title}}</h3>
                    <h5>{{item.msg1}}</h5>
                    <h5>{{item.msg2}}</h5>
                  </div>
                </div>
              </scroller>
            </div>
          </div>
        </masker>
      </group>

      <group label-width="4.5em" label-margin-right="2em" label-align="right">
        <div class="msg_box">
          <div class="msg_item">
            <h4>客户服务</h4>
            <h5>客服电话：400-887-4777 (周一至周五 9:00-17:30)</h5>
            <h5>邮箱反馈：service@yumaomoney.com</h5>
          </div>
          <div class="msg_item">
            <h4>媒体合作</h4>
            <h5>联系电话：010-82293888转8051</h5>
            <h5>商务合作：marketing@yumaomoney.com</h5>
          </div>
          <div class="msg_item">
            <h4>企业融资</h4>
            <h5>联系电话：010-82293888转8015</h5>
            <h5>合作邮箱：partner@yumaomoney.com</h5>
            <h5>地址：北京市朝阳区高碑店君天大厦4005室</h5>
            <h5>邮箱：100023</h5>
            <h5>传真：010-67043722</h5>
          </div>
          <div style="padding:15px 50px;">
            <x-button link="/reg" type="primary">立即注册</x-button>
          </div>
        </div>
      </group>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, Masker, Grid, GridItem, Scroller, XButton } from 'vux'
  export default {
    name: 'aboutMe',
    components: {
      Group,
      Cell,
      XHeader,
      Masker,
      Grid,
      GridItem,
      Scroller,
      XButton
    },
    data () {
      return {
        list: [
          {
            title: '保理公司',
            msg1: '甄选保理',
            msg2: '用心合作',
            key: '1'
          },
          {
            title: '项目标的',
            msg1: '精选供应商',
            msg2: '严格信息审核',
            key: '2'
          },
          {
            title: '风险审查',
            msg1: '多方会审',
            msg2: '综合评价',
            key: '3'
          },
          {
            title: '控制手段',
            msg1: '严控回款	',
            msg2: '保障根本',
            key: '4'
          },
          {
            title: '贷后管理',
            msg1: '实时跟踪',
            msg2: '定期回访',
            key: '5'
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .m-img,.m-img2 {
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

  .m-img2 {
    background-image: url('../../assets/aboutMebg3.png');
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

  .grid-center {
    display: block;
    text-align: center;
    color: #FF465D;
    font-weight: 700;
    font-size: 1.2em;
  }
  .inline-block{
    display: inline-block;
    border-bottom: 1px solid #f2f2f2;
    width: 30%;
    position: relative;
    top: -5px;
    margin: 0 5px;
  }
  .scroller_box {
    height: 100px;
    position: relative;
    width: 820px;
    padding: 0 80px 0 45px;
  }
  .scroller_box_item {
    width: 108px;
    display:inline-block;
    float: left;
    text-align: center;
    line-height: 100px;
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgb(248, 42, 153)), to(rgb(249, 144, 137)));
    padding: 0.1em;
    border-radius: 5px;
    margin-left: 50px;
  }
  .scroller_box_item2 {
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgb(2, 82, 154)), to(rgb(2, 178, 165)));
  }
  .scroller_box_item3 {
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgb(47, 5, 165)), to(rgb(184, 1, 199)));
  }
  .scroller_box_item4 {
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgb(221, 79, 59)), to(rgb(255, 166, 2)));
  }
  .scroller_box_item5 {
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgb(254, 95, 95)), to(rgb(254, 153, 179)));
  }
  .scroller_box_item h3{
    height: 26px;
    line-height: 26px;
    font-size: 24px;
    margin-top: 10px;
  }
  .scroller_box_item h5{
    height: 15px;
    line-height: 15px;
    margin: 10px 0;
  }
  .msg_box{
    background: #fff;
    padding: 1.5em;
  }
  .msg_item{
    border-bottom: 1px solid #F2F2F2;
    padding-bottom: 10px;
  }
  .msg_item h4{
    color: #F85757;
    margin: 10px 0;
  }
  .msg_item h5{
    font-weight: 400;
  }
</style>
