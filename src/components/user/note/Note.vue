<template>
  <div>
    <x-header>资金记录</x-header>
    <tab>
      <tab-item :selected="tab.tabType === 1" @on-item-click="tab.tabType = 1">充值记录</tab-item>
      <tab-item :selected="tab.tabType === 2" @on-item-click="tab.tabType = 2">提现记录</tab-item>
      <tab-item :selected="tab.tabType === 3" @on-item-click="tab.tabType = 3">投资记录</tab-item>
      <tab-item :selected="tab.tabType === 4" @on-item-click="tab.tabType = 4">还款记录</tab-item>
      <tab-item :selected="tab.tabType === 5" @on-item-click="tab.tabType = 5">其他</tab-item>
    </tab>
    <group title="成功充值：123456789.45元" v-if="tab.tabType === 1">
      <cell :title="item.title" :inline-desc='item.time' :value="item.value" :key="item.id" v-for="item in data.recharge"></cell>
    </group>
    <group title="累计提现成功：123456789.45元" v-if="tab.tabType === 2">
      <cell :title="item.title" :inline-desc='item.time' :value="item.value" :key="item.id" v-for="item in data.cash"></cell>
    </group>
    <div v-if="tab.tabType === 3">
      <group title="累计提现成功：123456789.45元" label-width="4.5em" label-margin-right="2em" label-align="right" v-for="item in list" :key="item.key" v-if="item.index === 0">
        <panel :list="item.panel" :type="item.type" @on-img-error="onImgError" ></panel>
      </group>
      <group label-width="4.5em" label-margin-right="2em" label-align="right" v-for="item in list" :key="item.key" v-if="item.index !== 0">
        <panel :list="item.panel" :type="item.type" @on-img-error="onImgError"></panel>
      </group>
    </div>
    <group title="已收还款：123456789.45元" v-if="tab.tabType === 4">
      <cell :title="item.title" :inline-desc='item.time' :value="item.value" :key="item.id" v-for="item in data.repayment"></cell>
    </group>
    <group title="累计收益：123456789.45元" v-if="tab.tabType === 5">
      <cell :title="item.title" :inline-desc='item.time' :value="item.value" :key="item.id" v-for="item in data.other"></cell>
    </group>
  </div>
</template>

<script>
  import _ from 'lodash'
  import moment from 'moment'
  import { Group, Cell, XHeader, Tab, TabItem, Panel } from 'vux'

  export default {
    name: 'Note',
    components: {
      Group,
      Cell,
      XHeader,
      Tab,
      TabItem,
      Panel
    },
    data () {
      return {
        tab: {
          tabType: 1
        },
        list: [],
        data: {
          recharge: [
            {
              id: '1',
              title: '+10000.00元',
              time: '2017-12-23 16:00:00',
              value: '网银充值'
            },
            {
              id: '2',
              title: '+20000.00元',
              time: '2017-12-23 16:00:00',
              value: '快捷充值'
            },
            {
              id: '3',
              title: '+10000.00元',
              time: '2017-12-23 16:00:00',
              value: '网银充值'
            }
          ],
          cash: [
            {
              id: '1',
              title: '-10000.00元',
              time: '2017-12-23 16:00:00',
              value: 'T+1'
            },
            {
              id: '2',
              title: '-20000.00元',
              time: '2017-12-23 16:00:00',
              value: 'T+0'
            },
            {
              id: '3',
              title: '-10000.00元',
              time: '2017-12-23 16:00:00',
              value: '提现失败'
            }
          ],
          invest: [],
          repayment: [
            {
              id: '1',
              title: '+10000.00元',
              time: '2017-12-23 16:00:00',
              value: '项目名称 本金'
            },
            {
              id: '2',
              title: '+20000.00元',
              time: '2017-12-23 16:00:00',
              value: '项目名称 还息3/3'
            },
            {
              id: '3',
              title: '+10000.00元',
              time: '2017-12-23 16:00:00',
              value: '项目名称 还息3/2'
            },
            {
              id: '4',
              title: '+10000.00元',
              time: '2017-12-23 16:00:00',
              value: '项目名称 还息3/1'
            }
          ],
          other: [
            {
              id: '1',
              title: '10000.00元',
              time: '2017-12-23 16:00:00',
              value: '体验金利息'
            },
            {
              id: '2',
              title: '20000.00元',
              time: '2017-12-23 16:00:00',
              value: '邀请奖励'
            },
            {
              id: '3',
              title: '10000.00元',
              time: '2017-12-23 16:00:00',
              value: '逾期罚息'
            }
          ]
        }
      }
    },
    methods: {
      onImgError (item, $event) {
        console.log(item, $event)
      },
      /**
       * 获取列表
       */
      getList () {
        var self = this
        self.$http.get(process.env.BASE_API + '/financeJson.do', {params: { 'curPage': self.curPage }})
          .then(function (res) {
            _.each(res.data, function (v, k) {
              var item = {
                index: k,
                key: v.id,
                type: '4',
                progress: parseInt(v.progress),
                panel: [
                  {
                    title: v.borrowTitle,
                    desc: '投资金额:' + v.borrowAmount + ' 期限：' + v.deadline,
                    url: '/user/investment/investmentDetail?id=149',
                    meta: {
                      source: '年利率',
                      date: '7% + ' + (parseInt(v.annualRate) - 7) + '%',
                      other: '投资时间： ' + moment(v.autoBidEnableTime, 'YY-MM-DD hh:mm:ss').format('YYYY-MM-DD HH:mm:ss')
                    }
                  }
                ]
              }
              self.list.push(item)
            })
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    created () {
      var self = this
      self.getList()
    }
  }
</script>
