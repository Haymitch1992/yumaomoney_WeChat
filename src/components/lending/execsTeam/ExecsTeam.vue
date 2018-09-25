<template>
  <div>
    <x-header>高管团队</x-header>
    <group>
      <div class="p20">
        <h2 class="title">周江华<span>董事长兼CEO</span></h2>
        <div class="content">全面负责公司战略计划、品牌定位和企业管理。金融工商管理硕士（MBA），曾任职于中国科学院，先后从事信息技术研究和战略管理等工作，对战略发展及互联网信息技术有着深刻的见解和丰富的实战经验。周江华先生同时是北京航天航空大学金融管理硕士(MBA)、北京大学普惠金融研修班学员、2010年西班牙巴塞罗那大学访问学者、中国服务贸易协会商业保理委员会常务委员。</div>
      </div>
    </group>
    <group>
      <div class="p20">
        <h2 class="title">王明澈<span>董事</span></h2>
        <div class="content">回联集团董事长，鱼猫金服创始人。长期致力于企业系统管理、品牌、策略、战略规划。王明澈先生同时任深圳市企业家协会副会长、深圳市泉州商会名誉会长、广东省福建商会副会长、重庆市巴南工商联副主席。</div>
      </div>
    </group>
    <group>
      <div class="p20">
        <h2 class="title">陈玉书<span>独立董事</span></h2>
        <div class="content">第十届、第十一届全国政协委员，现任香港繁荣集团董事长，香港特区第一届政府推委会委员，中华慈善总会创始人、副会长，中国残疾人福利基金会业务顾问，曾任香港保良局主席，香港太平绅士，北京国际关系学院教授，香港音乐专科学校董等等</div>
      </div>
    </group>
    <group>
      <div class="p20">
        <h2 class="title">王军<span>风险控制总监</span></h2>
        <div class="content">具有中级会计师职称。在基金、证券、期货等方面有多年从业经验。从事过投资系统业务咨询、成本管理、财务分析、资金结算、产品架构设计等工作。曾全程参与过多个私募基金股权项目及证券市场投资项目，在风险控制领域对基础业务流程梳理、风险辨识、产品架构设计、风控工具选择等方面有丰富的工作经验。自2016年加入鱼猫金服以来，在公司运作、金融创新以及公司风控体系、风控制度的建立等方面提出了独到见解。</div>
      </div>
    </group>
    <group>
      <div class="p20">
        <h2 class="title">彭毅<span>技术总监</span></h2>
        <div class="content">对于网站的研发与建设工作（包括网站架构设计、网站建设、维护、产品研发、网络安全等相关技术的管理工作）有着超过10年的工作经验,已经为众多政府、组织、行业和企业提供过解决方案和实施，受到相应好评。曾就职于大北农集团、农信通、魅力城乡、中国茶叶流通协会、百度；中国首个农业门户网站中国农网创始人、设计者和开发者。在架构设计、前端开发、项目开发与运营、数据库、服务器部署、电子商务、大数据服务等方面都有多年项目实施经验。已经为众多政府、组织、行业和企业提供过解决方案和实施，受到相应好评。</div>
      </div>
    </group>
  </div>
</template>

<script>
  import { Group, XHeader } from 'vux'

  export default {
    name: 'ExecsTeam',
    components: {
      Group,
      XHeader
    },
    data () {
      return {}
    }
  }
</script>

<style>
  .p20{
    padding: 20px;
  }

  .title{
    text-align: center;
  }

  .title span{
    font-size: 14px;
  }

  .content{
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-indent:2em;
  }
</style>
