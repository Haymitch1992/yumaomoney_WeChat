<template>
  <div>
    <x-header>大事记</x-header>
    <tab style="z-index: 20">
      <tab-item :selected="tab.tabType === 1" @on-item-click="tab.tabType = 1">2018年</tab-item>
      <tab-item :selected="tab.tabType === 2" @on-item-click="tab.tabType = 2">2017年</tab-item>
      <tab-item :selected="tab.tabType === 3" @on-item-click="tab.tabType = 3">2016年</tab-item>
      <tab-item :selected="tab.tabType === 4" @on-item-click="tab.tabType = 4">2015年</tab-item>
      <tab-item :selected="tab.tabType === 5" @on-item-click="tab.tabType = 5">2014年</tab-item>
    </tab>
    <group v-if="tab.tabType === 1">
      <timeline>
        <timeline-item>
          <h4>6月</h4>
          <p>上线时间戳，多方保障出借人权益</p>
        </timeline-item>
        <timeline-item>
          <h4>5月</h4>
          <p>平台与富友支付建立合作</p>
        </timeline-item>
        <timeline-item>
          <h4>4月</h4>
          <p>全员开展反洗钱培训，深入提升控风险能力</p>
        </timeline-item>
        <timeline-item>
          <h4>3月</h4>
          <p>鱼猫金服开启HTTPS数据加密传输，全面保障用户信息安全</p>
        </timeline-item>
        <timeline-item>
          <h4>2月</h4>
          <p>平台与宝付支付建立合作</p>
          <p>平台与新网支付建立合作</p>
          <p>平台与安理律师事务所建立合作</p>
          <p>风险测评系统正式上线</p>
        </timeline-item>
        <timeline-item>
          <h4>1月</h4>
          <p>荣获“2017年度最具成长价值奖”</p>
          <p>上线电子签章</p>
          <p>鱼猫金服成立三周年</p>
        </timeline-item>
      </timeline>
    </group>
    <group v-if="tab.tabType === 2">
      <timeline>
        <timeline-item>
          <h4>9月</h4>
          <p>接入北京市互联网金融行业协会引导的“BITs”系统</p>
          <p>携手百度金融全面增强反欺诈风控</p>
        </timeline-item>
        <timeline-item>
          <h4>8月</h4>
          <p>用户投资总额突破5亿</p>
          <p>携手新网银行正式上线银行资金存管系统</p>
        </timeline-item>
        <timeline-item>
          <h4>7月</h4>
          <p>通过“国家公安部监制的信息安全等级保护三级备案”</p>
          <p>正式获得"中华人民共和国增值电信业务经营许可证"</p>
        </timeline-item>
        <timeline-item>
          <h4>4月</h4>
          <p>与新网银行正式签订资金存管合作协议</p>
        </timeline-item>
      </timeline>
    </group>
    <group v-if="tab.tabType === 3">
      <timeline>
        <timeline-item>
          <h4>11月</h4>
          <p>与河北省物流产业集团有限公司形成核心企业合作关系</p>
        </timeline-item>
        <timeline-item>
          <h4>10月</h4>
          <p>启动网贷存管通的技术对接项目</p>
        </timeline-item>
        <timeline-item>
          <h4>9月</h4>
          <p>成为北京市网贷行业协会观察员</p>
        </timeline-item>
        <timeline-item>
          <h4>8月</h4>
          <p>主动参与由北京市互联网金融风险专项整治领导小组办公室主导的金融摸底和风险排查检查工作，由东易律师事务所负责具体审查</p>
        </timeline-item>
        <timeline-item>
          <h4>3月</h4>
          <p>公司与宜信公司达成战略合作协议</p>
          <p>新纪录：标的21秒被秒空</p>
          <p>公司与太平洋保险公司、中国人保公司达成战略合作意向</p>
        </timeline-item>
        <timeline-item>
          <h4>2月</h4>
          <p>注册用户超过30万人</p>
        </timeline-item>
        <timeline-item>
          <h4>1月</h4>
          <p>品牌全面升级为鱼猫金服</p>
          <p>（www.yumaomoney.com）</p>
        </timeline-item>
      </timeline>
    </group>
    <group v-if="tab.tabType === 4">
      <timeline>
        <timeline-item>
          <h4>11月</h4>
          <p>人民网、新华网、光明网纷纷报道，公司创新的风控模式</p>
        </timeline-item>
        <timeline-item>
          <h4>8月</h4>
          <p>公司签约合安保理等6家保理公司</p>
        </timeline-item>
        <timeline-item>
          <h4>7月</h4>
          <p>公司成为全国商业保理专委会委员</p>
        </timeline-item>
        <timeline-item>
          <h4>1月</h4>
          <p>平台正式对外发布运行</p>
          <p>平台与连连支付，汇潮支付建立合作</p>
        </timeline-item>
      </timeline>
    </group>
    <group v-if="tab.tabType === 5">
      <timeline>
        <timeline-item>
          <h4>12月</h4>
          <p>与通达集团建立战略合作伙伴关系</p>
        </timeline-item>
        <timeline-item>
          <h4>11月</h4>
          <p>平台第一次内部测试</p>
        </timeline-item>
        <timeline-item>
          <h4>5月</h4>
          <p>团队组建</p>
        </timeline-item>
      </timeline>
    </group>
  </div>
</template>

<script>
  import { Group, XHeader, Tab, TabItem, Timeline, TimelineItem } from 'vux'

  export default {
    name: 'Memorabilia',
    components: {
      Group,
      XHeader,
      Tab,
      TabItem,
      Timeline,
      TimelineItem
    },
    data () {
      return {
        tab: {
          tabType: 1
        }
      }
    },
    methods: {}
  }
</script>
