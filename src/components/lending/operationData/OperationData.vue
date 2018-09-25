<template>
  <div>
    <x-header>运营数据</x-header>
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

    <group title="平台用户数据" label-width="4.5em" label-margin-right="2em" label-align="right">

    </group>

    <group title="出借总额排行" label-width="4.5em" label-margin-right="2em" label-align="right">
      <panel :list="rankingData" type="1" @on-img-error="onImgError"></panel>
    </group>
  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'
  import { Group, GroupTitle, XHeader, Grid, GridItem, VChart, VScale, VTooltip, VArea, VLine, Panel } from 'vux'

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
      Panel
    },
    data () {
      return {
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
        rankingData: [
          {
            src: 'http://39.107.59.233/images/wechat/p5-01.png',
            title: '1'
          },
          {
            src: 'http://39.107.59.233/images/wechat/p5-02.png',
            title: '2'
          },
          {
            src: 'http://39.107.59.233/images/wechat/p5-03.png',
            title: '3'
          }
        ]
      }
    },
    methods: {
      onImgError (item, $event) {
        console.log(item, $event)
      },
      getData () {
        var self = this
        axios.post(process.env.BASE_API + '/operationalDataInit.do?t=' + new Date().getTime(), null)
          .then(function (res) {
            self.data = res.data
            self.data.time = moment(self.data.saveDate).format('YYYY-MM-DD')
            self.data.timeRelative = moment(self.data.saveDate).diff('2015-01-28', 'days')
            self.lendingData.push({ date: moment(self.data.saveDate).format('YYYY-MM'), value: self.data.investAmount })
            self.rankingData[0].title = self.data.rankingOne
            self.rankingData[1].title = self.data.rankingTwo
            self.rankingData[2].title = self.data.rankingThree
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      init () {
        var self = this
        self.getData()
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
