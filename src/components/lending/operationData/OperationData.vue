<template>
  <div>
    <x-header :left-options="leftOptions" @on-click-back="goBack()">运营数据</x-header>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <group-title slot="title">平台运营情况<span style="float:right;">截止日期：{{data.time}}</span></group-title>
      <grid :show-lr-borders="false" >
        <grid-item label="累计出借总额" key="0">
          <span class="grid-center">{{data.investAmount}}元</span>
        </grid-item>
        <grid-item label="累计出借次数" key="1">
          <span class="grid-center">{{data.investNumber}}次</span>
        </grid-item>
      </grid>
      <grid :show-lr-borders="false" >
        <grid-item label="上线项目数" key="0">
          <span class="grid-center">{{data.lineNumber}}个</span>
        </grid-item>
        <grid-item label="借款企业数" key="1">
          <span class="grid-center">{{data.businessTotal}}个</span>
        </grid-item>
      </grid>
      <grid :show-lr-borders="false" :cols="2">
        <grid-item label="平台安全运营" key="0">
          <span class="grid-center">{{data.timeRelative}}天</span>
        </grid-item>
      </grid>
    </group>

    <group title="累积出借金额" label-width="4.5em" label-margin-right="2em" label-align="right">
      <v-chart :data="lendingData" prevent-default>
        <v-scale x :tick-count="3" />
        <v-scale y :min="0" />
        <v-tooltip :show-item-marker="false" show-x-value />
        <v-area />
        <v-line />
      </v-chart>
    </group>

    <group title="平台兑付数据" label-width="4.5em" label-margin-right="2em" label-align="right">
      <grid :show-lr-borders="false" >
        <grid-item label="已支付用户本金" key="0">
          <span class="grid-center">{{data.userPrincipal}}元</span>
        </grid-item>
        <grid-item label="已支付用户利息" key="1">
          <span class="grid-center">{{data.userInterest}}元</span>
        </grid-item>
      </grid>
      <grid :show-lr-borders="false" :cols="2">
        <grid-item label="到期兑付项目数" key="0">
          <span class="grid-center">{{data.cashNumber}}个</span>
        </grid-item>
      </grid>
    </group>

    <group title="产品收益" label-width="4.5em" label-margin-right="2em" label-align="right">
      <v-chart
        ref="demo"
        :data="incomeData">
        <v-bar />
        <v-tooltip :show-item-marker="false" />
      </v-chart>
    </group>

    <group title="出借产品周期" label-width="4.5em" label-margin-right="2em" label-align="right">
      <v-chart :data="cycleData"
               :padding="[20, 'auto']">
        <v-tooltip disabled />
        <v-scale y :options="yOptions" />
        <v-pie :radius="0.85":inner-radius="0.7" series-field="name" :colors="['#3aacf2','#86d9f3','#aee7ff','#ccefff']" />
        <v-legend :options="cycleOptions" />
      </v-chart>
    </group>

    <group title="出借平台分布" label-width="4.5em" label-margin-right="2em" label-align="right">
      <v-chart :data="platformData">
        <v-scale y :options="yOptions" />
        <v-tooltip disabled />
        <v-pie :radius="0.85" series-field="name" :colors="['#3aacf2','#aee7ff']" />
        <v-legend :options="platformOptions" />
      </v-chart>
    </group>

    <group title="用户总数" label-width="4.5em" label-margin-right="2em" label-align="right">
      <v-chart
        ref="demo"
        :data="userData">
        <v-bar />
        <v-tooltip :show-item-marker="false" />
      </v-chart>
    </group>

    <group title="年龄有多少" label-width="4.5em" label-margin-right="2em" label-align="right">
      <v-chart
        ref="demo"
        :data="ageData">
        <v-bar />
        <v-tooltip :show-item-marker="false" />
      </v-chart>
    </group>

    <group title="性别比例" label-width="4.5em" label-margin-right="2em" label-align="right">
      <v-chart
        :data="genderData"
        :padding="[20, 'auto']">
        <v-tooltip disabled />
        <v-scale y :options="yOptions" />
        <v-pie :radius="0.85" :inner-radius="0.7" series-field="name" :colors="['#3aacf2','#aee7ff']" />
        <v-legend :options="genderOptions" />
      </v-chart>
    </group>

    <group title="出借总额排行" label-width="4.5em" label-margin-right="2em" label-align="right">
      <panel :list="rankingData" type="1" @on-img-error="onImgError"></panel>
    </group>
  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'
  import { Group, GroupTitle, XHeader, Grid, GridItem, VChart, VScale, VTooltip, VArea, VLine, VBar, VPie, VLegend, VGuide, Panel } from 'vux'

  const cycleMap = {}
  const platformMap = {}
  const genderMap = {}

  export default {
    name: 'OperationData',
    components: {
      Group,
      GroupTitle,
      XHeader,
      Grid,
      GridItem,
      VChart,
      VScale,
      VTooltip,
      VArea,
      VLine,
      VBar,
      VPie,
      VLegend,
      VGuide,
      Panel
    },
    data () {
      return {
        leftOptions: {
          preventGoBack: true
        },
        data: {},
        lendingData: [
          { date: '2015-01', value: 901500 },
          { date: '2015-02', value: 4719200 },
          { date: '2015-03', value: 12287800 },
          { date: '2015-04', value: 20450000 },
          { date: '2015-05', value: 28463000 },
          { date: '2015-06', value: 39466500 },
          { date: '2015-07', value: 42161900 },
          { date: '2015-08', value: 45779000 },
          { date: '2015-09', value: 49052700 },
          { date: '2015-10', value: 52543300 },
          { date: '2015-11', value: 57820800 },
          { date: '2015-12', value: 63169400 },
          { date: '2016-01', value: 73544800 },
          { date: '2016-02', value: 78511500 },
          { date: '2016-03', value: 88971000 },
          { date: '2016-04', value: 102918870 },
          { date: '2016-05', value: 112051000 },
          { date: '2016-06', value: 124931000 },
          { date: '2016-07', value: 135031000 },
          { date: '2016-08', value: 149417700 },
          { date: '2016-09', value: 164301700 },
          { date: '2016-10', value: 178730800 },
          { date: '2016-11', value: 191741000 },
          { date: '2016-12', value: 216824200 },
          { date: '2017-01', value: 242580800 },
          { date: '2017-02', value: 255752200 },
          { date: '2017-03', value: 281131200 },
          { date: '2017-04', value: 300796200 },
          { date: '2017-05', value: 327798600 },
          { date: '2017-06', value: 354265400 },
          { date: '2017-07', value: 380612900 },
          { date: '2017-08', value: 406118700 },
          { date: '2017-09', value: 430463700 },
          { date: '2017-10', value: 449874700 },
          { date: '2017-11', value: 476861700 },
          { date: '2017-12', value: 495016300 },
          { date: '2018-01', value: 516424000 },
          { date: '2018-02', value: 523515000 },
          { date: '2018-03', value: 532494000 },
          { date: '2018-04', value: 546451200 },
          { date: '2018-05', value: 561953000 },
          { date: '2018-06', value: 571015200 },
          { date: '2018-07', value: 572103400 },
          { date: '2018-08', value: 595919000 }
        ],
        incomeData: [
          { year: '银行活期', sales: 0.3 },
          { year: '银行定期', sales: 1.5 },
          { year: '货币基金', sales: 5 },
          { year: '鱼猫金服', sales: 12 }
        ],
        yOptions: {
          formatter (val) {
            return val * 100 + '%'
          }
        },
        cycleOptions: {
          position: 'right',
          itemFormatter (val) {
            return val + '  ' + cycleMap[val]
          }
        },
        cycleMap,
        cycleData: [
          { name: '1个月', percent: 0, a: '1' },
          { name: '2个月', percent: 0, a: '1' },
          { name: '3个月', percent: 0, a: '1' },
          { name: '4个月', percent: 0, a: '1' }
        ],
        platformOptions: {
          position: 'right',
          itemFormatter (val) {
            return val + '  ' + platformMap[val]
          }
        },
        platformMap,
        platformData: [
          { name: '移动端出借额', percent: 40, a: '1' },
          { name: 'PC端出借额', percent: 60, a: '1' }
        ],
        userData: [
          { year: '2015-1', sales: 0 },
          { year: '2015-5', sales: 30000 },
          { year: '2015-12', sales: 200000 },
          { year: '2016-12', sales: 300000 },
          { year: '2017-3', sales: 320000 }
        ],
        ageData: [
          { year: '18-25岁', sales: 0 },
          { year: '25-35岁', sales: 0 },
          { year: '35-45岁', sales: 0 },
          { year: '45岁以上', sales: 0 }
        ],
        genderMap,
        genderOptions: {
          position: 'right',
          itemFormatter (val) {
            return val + '  ' + genderMap[val]
          }
        },
        genderData: [
          { name: '男性出借人', percent: 0, a: '1' },
          { name: '女性出借人', percent: 0, a: '1' }
        ],
        rankingData: [
          {
            src: 'http://39.107.59.233/images/wechat/p5-01.png',
            title: '第一名'
          },
          {
            src: 'http://39.107.59.233/images/wechat/p5-02.png',
            title: '第二名'
          },
          {
            src: 'http://39.107.59.233/images/wechat/p5-03.png',
            title: '第三名'
          }
        ]
      }
    },
    methods: {
      goBack () {
        this.$router.push({name: 'disclosure', params: {listType: 3}})
      },
      onImgError (item, $event) {
        console.log(item, $event)
      },
      initChart () {
        var self = this
        self.lendingData.push({ date: moment(self.data.saveDate).format('YYYY-MM'), value: self.data.investAmount })
        self.cycleData = [
          { name: '1个月', percent: self.data.periodOne, a: '1' },
          { name: '2个月', percent: self.data.periodTwo, a: '1' },
          { name: '3个月', percent: self.data.periodThree, a: '1' },
          { name: '4个月', percent: self.data.periodFour, a: '1' }
        ]
        self.userData.push({ year: moment(self.data.saveDate).format('YYYY-MM'), sales: self.data.userTotal })
        self.ageData = [
          { year: '18-25岁', sales: self.data.age1825 },
          { year: '25-35岁', sales: self.data.age2535 },
          { year: '35-45岁', sales: self.data.age3545 },
          { year: '45岁以上', sales: self.data.age45 }
        ]
        self.genderData = [
          { name: '男性出借人', percent: self.data.sexBoy, a: '1' },
          { name: '女性出借人', percent: self.data.sexGirl, a: '1' }
        ]
        self.rankingData = [
          {
            src: 'http://39.107.59.233/images/wechat/p5-01.png',
            title: self.data.rankingOne + '元'
          },
          {
            src: 'http://39.107.59.233/images/wechat/p5-02.png',
            title: self.data.rankingTwo + '元'
          },
          {
            src: 'http://39.107.59.233/images/wechat/p5-03.png',
            title: self.data.rankingThree + '元'
          }
        ]
        self.initMap()
      },
      initMap () {
        var self = this
        self.cycleData.map(obj => {
          cycleMap[obj.name] = obj.percent.toFixed(2) + '%'
        })
        self.platformData.map(obj => {
          platformMap[obj.name] = obj.percent.toFixed(2) + '%'
        })
        self.genderData.map(obj => {
          genderMap[obj.name] = obj.percent.toFixed(2) + '%'
        })
      },
      getData () {
        var self = this
        axios.post(process.env.BASE_API + '/operationalDataInit.do?t=' + new Date().getTime(), null)
          .then(function (res) {
            self.data = res.data
            self.data.time = moment(self.data.saveDate).format('YYYY-MM-DD')
            self.data.timeRelative = moment(self.data.saveDate).diff('2015-01-28', 'days')
            self.data.periodOne = parseFloat(self.data.periodOne)
            self.data.periodTwo = parseFloat(self.data.periodTwo)
            self.data.periodThree = parseFloat(self.data.periodThree)
            self.data.periodFour = parseFloat(self.data.periodFour)
            self.data.age1825 = parseFloat(self.data.age1825)
            self.data.age2535 = parseFloat(self.data.age2535)
            self.data.age3545 = parseFloat(self.data.age3545)
            self.data.age45 = parseFloat(self.data.age45)
            self.data.sexBoy = parseFloat(self.data.sexBoy)
            self.data.sexGirl = parseFloat(self.data.sexGirl)
            self.initChart()
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      init () {
        var self = this
        self.getData()
        self.initMap()
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>

<style>
  .grid-center {
    display: block;
    text-align: center;
    color: #FF465D;
    font-weight: 700;
    font-size: 1.2em;
  }
</style>
