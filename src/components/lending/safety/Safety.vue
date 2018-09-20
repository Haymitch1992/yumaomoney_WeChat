<template>
  <div>
    <x-header class="header-fixed">安全保障</x-header>
    <div class="page-container">
      <div class="fullpage-container">
        <div class="fullpage-wp" v-fullpage="opts">
          <div class="page-1 page">
            <div class="part-1">
              <div class="title">存管上线</div>
              <div class="content-box">
                <div class="item">
                  <div class="item-title">账户独立</div>
                  <div class="item-content">账户信息有存管银行管理，资金交易均有用户授权银行执行操作。</div>
                </div>
                <div class="item">
                  <div class="item-title">交易安全</div>
                  <div class="item-content">用户授权后，银行根据交易指令进入账户间资金划转。</div>
                </div>
                <div class="item">
                  <div class="item-title">资金隔离</div>
                  <div class="item-content">用户资金与平台资金实现完全隔离，由存管银行对资金进行分账管理与监督。</div>
                </div>
              </div>
              <div class="foot">2017年8月21日，鱼猫金服携手<br>新网银行正式上线银行资金存管系统</div>
            </div>
          </div>
          <div class="page-2 page">
            <p class="part-2" v-animate="{value: 'bounceInRight'}">第二页</p>
          </div>
          <div class="page-3 page">
            <p class="part-3" v-animate="{value: 'bounceInRight'}">第三页</p>
          </div>
          <!--<div class="page-3 page">-->
            <!--<p class="part-3" v-animate="{value: 'bounceInLeft', delay: 0}">第三页1</p>-->
            <!--<p class="part-3" v-animate="{value: 'bounceInRight', delay: 600}">第三页2</p>-->
            <!--<p class="part-3" v-animate="{value: 'zoomInDown', delay: 1200}">第三页3</p>-->
          <!--</div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader } from 'vux'

  export default {
    name: 'Safety',
    components: {
      Group,
      Cell,
      XHeader
    },
    data () {
      return {
        scrollTop: 0,
        opts: {
          start: 0,
          dir: 'v',
          duration: 500
        }
      }
    },
    methods: {
    },
    created () {
    }
  }
</script>

<style>
  .page-container {
    position: absolute;
    left: 0;
    top: 0;
    padding-top: 46px;
    width: 100%;
    height: 100%;
  }
  .title {
    margin: 20px 30px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }
  .content-box {
    margin: 10px 30px;
    padding: 10px 20px;
    background: #fff;
  }
  .item {
    margin: 10px 0;
  }
  .item-title {
    margin: 10px 0;
    text-align: center;
    font-size: 18px;
    background: -webkit-linear-gradient(left, #9063ff , #605aff);     /* 背景色渐变 */
    -webkit-background-clip: text;         /* 规定背景的划分区域 */
    -webkit-text-fill-color: transparent;  /* 防止字体颜色覆盖 */
  }
  .item-content {
    margin: 10px 0;
    color: #695dff;
  }
  .foot {
    text-align: center;
    margin: 30px 30px 20px;
    color: #fff;
  }
  .page-1 {
    background: url('../../../assets/images/safety_bg.png') no-repeat;
    background-size: 100%;
  }
  .page-2 {
    background: #10aeff;
  }
  .page-3 {
    background: #ce3c39;
  }
</style>
