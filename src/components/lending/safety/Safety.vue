<template>
  <div>
    <x-header>安全保障</x-header>
    <div class="page-container">
      <div class="fullpage-container">
        <div class="fullpage-wp" v-fullpage="opts">
          <div class="page-1 page">
            <div class="part-1 part" v-animate="{value: 'bounceInRight'}">
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
            <div class="part-2 part" v-animate="{value: 'bounceInRight'}">
              <div class="title">等保三级</div>
              <div class="content-box"></div>
              <div class="foot">2017年7月3日，鱼猫金服正式通过<br>国家公安监制的信息安全等级保护三级备案</div>
            </div>
          </div>
          <div class="page-3 page">
            <div class="part-3 part" v-animate="{value: 'bounceInRight'}">
              <div class="title">ICP经营许可</div>
              <div class="content-box"></div>
              <div class="foot">2017年7月18日，鱼猫金服获得<br>《中华人民共和国增值电信业务运营许可证》</div>
            </div>
          </div>
          <div class="page-4 page">
            <div class="part-4 part" v-animate="{value: 'bounceInRight'}">
              <div class="title">行业认证</div>
              <div class="content-box"></div>
              <div class="foot">2016年3月10日，<br>鱼猫金服成为安全"联盟信誉企业"</div>
            </div>
          </div>
          <div class="page-5 page">
            <div class="part-5 part" v-animate="{value: 'bounceInRight'}">
              <div class="title">专业风控</div>
              <div class="content-box">
                <ul>
                  <li type="circle">核心企业准入制</li>
                  <li type="circle">融资企业审核制</li>
                  <li type="circle">应收账款基本要求</li>
                  <li type="circle">项目管理</li>
                  <li type="circle">尽职调查</li>
                  <li type="circle">信用审核</li>
                </ul>
              </div>
              <div class="foot">风控体系完善，项目风险分散，实地尽职调查，<br>大数据系统识别，风险预警管理，催收方式。<br>标准化流程，大数据风控，<br>对每个项目进行严格把控。</div>
            </div>
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
    margin: 10px 30px 30px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }
  .content-box {
    margin: 10px 30px;
    padding: 10px 20px;
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
  .page {
    background: url('../../../assets/images/safety_bg.png') no-repeat 100%;
  }
  .part-1 .content-box {
    background: #fff;
  }
  .part-2 .content-box {
    width: 320px;
    height: 190px;
    margin: 100px auto;
    padding: 0;
    background: url('../../../assets/images/mCertificate-3.png') no-repeat center center;
    background-size: cover;
  }
  .part-3 .content-box {
    width: 230px;
    height: 333px;
    margin: 30px auto;
    padding: 0;
    background: url('../../../assets/images/mCertificate-1.png') no-repeat center center;
    background-size: cover;
  }
  .part-3 .foot {
    margin: 30px 15px 20px;
  }
  .part-4 .content-box {
    width: 230px;
    height: 333px;
    margin: 30px auto;
    padding: 0;
    background: url('../../../assets/images/mCertificate-2.png') no-repeat center center;
    background-size: cover;
  }
  .part-5 .content-box {
    width: 150px;
    margin: 30px auto;
    padding: 0 0 0 20px;
    font-size: 18px;
    color: #fff;
  }
  .part-5 li {
    margin: 10px 0;
  }
  .part-5 .foot {
    margin: 30px 10px 20px;
  }
</style>
