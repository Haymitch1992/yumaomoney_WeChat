<template>
  <div>
    <x-header>资产明细</x-header>
    <tab>
      <tab-item :selected="list.listType === 1" @on-item-click="list.listType = 1">总资产</tab-item>
      <tab-item :selected="list.listType === 2" @on-item-click="list.listType = 2">昨日收益</tab-item>
      <tab-item :selected="list.listType === 3" @on-item-click="list.listType = 3">累计收益</tab-item>
    </tab>
    <group v-show="list.listType === 1">
      <group label-width="4.5em" label-margin-right="2em" label-align="right">
        <v-chart
          :data="genderData"
          :padding="[20, 'auto']">
          <v-tooltip disabled />
          <v-scale y :options="yOptions" />
          <v-pie :radius="0.85" :inner-radius="0.7" series-field="name" :colors="['#ef7800','#f19c00','#5eccff','#3f87ce','#b77b10']" />
          <v-legend :options="genderOptions" />
          <v-guide type="html" :options="htmlOptions" ref="child"/>
        </v-chart>

      </group>
    </group>
    <group v-show="list.listType === 2">
      <div class="assetsBox">
        <div>昨日预估收益(元)</div>
        <div class="title">{{list.assetsAll}}</div>
      </div>
      <cell title="标的" :value="list.subject"></cell>
      <cell title="体验金" :value="list.experience"></cell>
    </group>
    <group  v-show="list.listType === 3">
      <cell title="第一" value="cool" is-link></cell>
      <cell title="第二" value="cool" is-link></cell>
      <cell title="第三" value="cool" is-link></cell>
    </group>
  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'
  import $ from 'jquery'
  import { Group, Cell, XHeader, Tab, TabItem, VChart, VTooltip, VScale, VPie, VLegend, VGuide } from 'vux'

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
      VLegend,
      VGuide
    },
    data () {
      return {
        data: {},
        list: {
          assetsAll: '1023.15',
          subject: '1011.20',
          experience: '11.20',
          totalAssets: null,
          listType: 1
        },
        yOptions: {
          formatter (val) {
            return val * 100
          }
        },
        genderMap,
        genderOptions: {
          position: 'right',
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
          position: [ '50%', '45%' ],
          html: `
          <div style="width: 250px;height: 40px;text-align: center;">
            <div style="font-size: 16px">总资产(元)</div>
            <div id="totalAssets" style="font-size: 24px">****</div>
          </div>`
        }
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
          { name: '可用余额', percent: self.data.periodOne, a: '1' },
          { name: '代收本金', percent: self.data.periodTwo, a: '1' },
          { name: '代收收益', percent: self.data.periodThree, a: '1' },
          { name: '代收奖励', percent: self.data.periodFour, a: '1' },
          { name: '冻结金额', percent: self.data.periodThree, a: '1' }
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
        setTimeout(function () {
//          $('#totalAssets').html(self.data.totalAssets)
          $('#totalAssets').html(99999999.99)
        }, 1)
      },
      /**
       * 获取数据
       */
      getData () {
        var self = this
        axios.post(process.env.BASE_API + '/operationalDataInit.do?t=' + new Date().getTime(), null)
          .then(function (res) {
            self.data = res.data
            self.data.time = moment(self.data.saveDate).format('YYYY-MM-DD')
            self.data.timeRelative = moment(self.data.saveDate).diff('2015-01-28', 'days')
            self.data.periodOne = parseFloat(self.data.periodOne) + 1000000
            self.data.periodTwo = parseFloat(self.data.periodTwo) + 222500
            self.data.periodThree = parseFloat(self.data.periodThree) + 22300
            self.data.periodFour = parseFloat(self.data.periodFour) + 5100
            self.data.totalAssets = self.data.periodOne + self.data.periodTwo + self.data.periodThree * 2 + self.data.periodFour
            self.data.totalAssets = parseFloat(self.data.totalAssets).toFixed(2)
            self.initChart()
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      /**
       * 初始化
       */
      init () {
        var self = this
        self.getFrom()
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
  .assetsBox {
    padding: 10px 15px;
  }
  .assetsBox .title {
    font-size: 24px;
  }
</style>
