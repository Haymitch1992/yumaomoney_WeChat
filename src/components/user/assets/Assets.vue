<template>
  <div>
    <x-header>资产明细</x-header>
    <tab>
      <tab-item :selected="list.listType === 1" @on-item-click="list.listType = 1">总资产</tab-item>
      <tab-item :selected="list.listType === 2" @on-item-click="list.listType = 2">上月收益</tab-item>
      <tab-item :selected="list.listType === 3" @on-item-click="list.listType = 3">累计收益</tab-item>
    </tab>
    <group  v-show="list.listType === 1" label-width="4.5em" label-margin-right="2em" label-align="right">
      <div class="totalAssetsBox">
        <div class="center">总资产</div>
        <div class="center totalAssetTitle">
          <countup :start-val="10" :end-val="data.accountSum" :duration="1" :decimals="2" class="title"></countup>元
        </div>
      </div>
      <v-chart :data="genderData">
        <v-tooltip disabled/>
        <v-scale y :options="yOptions" />
        <v-pie :radius="1" :inner-radius="0.6" series-field="name" :colors="['#ff5151','#ffc12c','#ff5b77','#5980ff','#66e0ff']" />
        <v-legend :options="genderOptions" />
        <v-guide type="html" :options="htmlOptions" ref="child"/>
      </v-chart>
    </group>
    <group v-show="list.listType === 2">
      <div class="assetsBox">
        <div>上月收益(元)</div>
        <countup :start-val="1" :end-val="data.lastMonthRevenue" :duration="1" :decimals="2" class="title"></countup>
      </div>
      <cell title="平台奖励" :value="data.lastMonthRewardAmount"></cell>
      <cell title="邀请奖励" :value="data.lastMonthRecommendAmount"></cell>
      <cell title="出借收益" :value="data.lastMonthPayInterest"></cell>
      <group title="近半年收益走势(元/月)" label-width="4.5em" label-margin-right="2em" label-align="right">
        <v-chart :data="trendData" prevent-default>
          <v-scale x :tick-count="3" />
          <v-scale y :min="0" />
          <v-tooltip :show-item-marker="false" show-x-value />
          <v-area shape="smooth" :colors="gradient" />
          <v-line shape="smooth" :colors="gradient" />
        </v-chart>
      </group>
    </group>
    <div v-show="list.listType === 3">
      <group>
        <div class="assetsBox">
          <div>累计收益(元)</div>
          <countup :start-val="1" :end-val="data.totalRevenue" :duration="1" :decimals="2" class="title"></countup>
        </div>
      </group>
      <group>
        <cell title="平台奖励" :value="data.allrewardAmount"></cell>
        <cell title="邀请奖励" :value="data.allrecommendAmount"></cell>
        <cell title="出借收益" :value="data.allPayInterest "></cell>
      </group>
    </div>
    <alert v-model="noLoginShow" title="登录失效" @on-show="onShow" @on-hide="logout">请重新登录</alert>
  </div>
</template>

<script>
  import _ from 'lodash'
  import moment from 'moment'
  import { Group, Cell, XHeader, Tab, TabItem, VChart, VTooltip, VScale, VPie, VLine, VArea, VLegend, VGuide, Countup, AlertModule, Alert } from 'vux'

  const genderMap = {}

  export default {
    name: 'Assets',
    components: {
      Group,
      Cell,
      XHeader,
      Tab,
      TabItem,
      VChart,
      VTooltip,
      VScale,
      VPie,
      VLine,
      VArea,
      VLegend,
      VGuide,
      Countup,
      AlertModule,
      Alert
    },
    data () {
      return {
        homeData: {},
        data: {
          accountSum: 0,
          totalRevenue: 0,
          lastMonthRevenue: 0,
          lastMonthRewardAmount: '0.00',
          lastMonthRecommendAmount: '0.00',
          lastMonthPayInterest: '0.00',
          allrewardAmount: '0.00',
          allrecommendAmount: '0.00',
          allPayInterest: '0.00'
        },
        list: {
          listType: 1
        },
        yOptions: {
          formatter (val) {
            return val * 100
          }
        },
        gradient: [
          [0, '#ffc12c'],
          [0.5, '#ff5151'],
          [1, '#5980ff']
        ],
        genderMap,
        genderOptions: {
          layout: 'horizontal',
          position: 'bottom',
          align: 'center',
          itemFormatter (val) {
            return val + '  ' + genderMap[val]
          }
        },
        genderData: [
          { name: '可用余额', percent: 0, a: '1' },
          { name: '代收本金', percent: 0, a: '1' },
          { name: '代收收益', percent: 0, a: '1' },
          { name: '代收奖励', percent: 0, a: '1' },
          { name: '冻结金额', percent: 0, a: '1' }
        ],
        htmlOptions: {
          position: [ '50%', '50%' ],
          html: `
             <div style="width: 250px;text-align: center">
              <div>资产比例</div>
             </div>`
        },
        trendData: [
          { date: '2018-01-01', value: 0 },
          { date: '2018-02-01', value: 0 },
          { date: '2018-03-01', value: 0 },
          { date: '2018-04-01', value: 0 },
          { date: '2018-05-01', value: 0 },
          { date: '2018-06-01', value: 0 }
        ],
        noLoginShow: false
      }
    },
    methods: {
      /**
       * 获取tab初始状态
       */
      getFrom () {
        var self = this
        self.list.listType = self.$route.params.listType ? self.$route.params.listType : 1
      },
      /**
       * 初始化label
       */
      initChart () {
        var self = this
        self.genderData = [
          { name: '可用余额:', percent: self.data.usableAmount, a: '1' },
          { name: '待收本金:', percent: self.data.forPayPrincipal, a: '1' },
          { name: '待收收益:', percent: self.data.forPayInterest, a: '1' },
          { name: '待收奖励:', percent: self.data.freezeAmount, a: '1' },
          { name: '冻结金额:', percent: self.data.otherEarnAmount, a: '1' }
        ]
        self.initMap()
      },
      /**
       * 加载label
       * 此处v-guide 不支持动态更新 暂时使用jq替换
       */
      initMap () {
        var self = this
        self.genderData.map(obj => {
          genderMap[obj.name] = obj.percent.toFixed(2) + '元'
        })
      },
      /**
       * 获取半年数据
       */
      getSixMonthData () {
        var self = this
        self.$http.post(process.env.BASE_API + '/sixMonthRevenue.do', null)
          .then(function (res) {
            /**
             * 验证登录是否失效
             */
            if (res.data === 'noLogin') {
              self.noLoginShow = true
            } else {
              self.trendData = []
              _.each(res.data.data.sixMonthRevenue, function (v, k) {
                self.trendData.unshift({date: k, value: v})
              })
              self.initChart()
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      /**
       * 获取数据
       */
      getData () {
        var self = this
        self.$http.post(process.env.BASE_API + '/apihome.do', null)
          .then(function (res) {
            /**
             * 验证登录是否失效
             */
            if (res.data === 'noLogin') {
              self.noLoginShow = true
            } else {
              self.homeData = _.cloneDeep(res.data.data)
              self.data.usableAmount = parseFloat(self.homeData.accmountStatisMap.usableAmount)
              self.data.forPayPrincipal = parseFloat(self.homeData.accmountStatisMap.forPayPrincipal)
              self.data.forPayInterest = parseFloat(self.homeData.accmountStatisMap.forPayInterest)
              self.data.freezeAmount = parseFloat(self.homeData.accmountStatisMap.freezeAmount)
              self.data.otherEarnAmount = parseFloat(self.homeData.accmountStatisMap.otherEarnAmount)
              self.data.accountSum = parseFloat(self.homeData.accmountStatisMap.accountSum)
              self.data.totalRevenue = parseFloat(self.homeData.totalRevenue)
              self.data.lastMonthRevenue = parseFloat(self.homeData.lastMonthDetails.lastMonthDetail)
              self.data.lastMonthRewardAmount = parseFloat(self.homeData.lastMonthDetails.lastMonthDetail.lastMonthRewardAmount).toFixed(2)
              self.data.lastMonthRecommendAmount = parseFloat(self.homeData.lastMonthDetails.lastMonthDetail.lastMonthRecommendAmount).toFixed(2)
              self.data.lastMonthPayInterest = parseFloat(self.homeData.lastMonthDetails.lastMonthDetail.lastMonthPayInterest).toFixed(2)
              self.data.allrewardAmount = parseFloat(self.homeData.allDetail.allrewardAmount).toFixed(2)
              self.data.allrecommendAmount = parseFloat(self.homeData.allDetail.allrecommendAmount).toFixed(2)
              self.data.allPayInterest = parseFloat(self.homeData.allDetail.allPayInterest).toFixed(2)
              self.getSixMonthData()
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      /**
       * 登录失效跳转
       */
      logout () {
        var self = this
        window.localStorage.removeItem('Flag')
        self.$store.dispatch('setUser', false)
        self.$cookies.remove('tokenClientkey')
        self.$router.push('/start/login')
      },
      onShow () {
        console.log('on show')
      },
      /**
       * 初始化
       */
      init () {
        var self = this
        if ((self.$http.defaults.headers.tokenClientkey === undefined) && self.$cookies.get('tokenClientkey')) {
          self.$http.defaults.headers.tokenClientkey = self.$cookies.get('tokenClientkey')
        }
        self.getFrom()
        self.getData()
        self.initMap()
      }
    },
    created () {
      var self = this
      self.init()
    }
    /**
     * 在v-chart渲染前加载数据
     */
//    beforeCreate () {
//      $.ajax({
//        url: process.env.BASE_API + '/operationalDataInit.do?t=' + new Date().getTime(),
//        async: false,
//        success: function (data) {
//          var periodOne = parseFloat(data.periodOne) + 1000000
//          var periodTwo = parseFloat(data.periodTwo) + 222500
//          var periodThree = parseFloat(data.periodThree) + 22300
//          var periodFour = parseFloat(data.periodFour) + 5100
//          totalAssets = periodOne + periodTwo + periodThree * 2 + periodFour
//          totalAssets = parseFloat(totalAssets).toFixed(2)
//          totalAssetsHtml = `
//             <div style="width: 250px;height: 40px;text-align: center">
//              <div style="font-size: 16px">总资产(元)</div>
//              <div style="font-size: 24px">` + totalAssets + `</div>
//             </div>
//            `
//        }
//      })
//    }
  }
</script>

<style>
  .totalAssetsBox {
    padding: 0 20px;
    position: relative;
    z-index: 10;
    top: 20px;
  }
  .totalAssetTitle {
    font-size: 24px
  }
  .assetsBox {
    padding: 10px 15px
  }
  .assetsBox .title {
    font-size: 24px
  }
</style>
