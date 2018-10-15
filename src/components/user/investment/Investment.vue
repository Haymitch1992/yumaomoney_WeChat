<template>
  <div>
    <x-header>我的投资</x-header>
    <tab>
      <tab-item :selected="tab.tabType === 1" @on-item-click="tab.tabType = 1">融资中</tab-item>
      <tab-item :selected="tab.tabType === 2" @on-item-click="tab.tabType = 2">还款中</tab-item>
      <tab-item :selected="tab.tabType === 3" @on-item-click="tab.tabType = 3">已还清</tab-item>
    </tab>
    <group label-width="4.5em" label-margin-right="2em" label-align="right" v-for="item in list" :key="item.key">
      <panel :list="item.panel" :type="item.type" @on-img-error="onImgError"></panel>
    </group>
    <group title="cell demo">
      <cell title="标的详情" value="cool" is-link link="/user/investment/investmentDetail"></cell>
    </group>
  </div>
</template>

<script>
  import axios from 'axios'
  import _ from 'lodash'
  import moment from 'moment'
  import { Group, Cell, XHeader, Tab, TabItem, Panel } from 'vux'

  export default {
    name: 'Investment',
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
        list: []
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
        axios.get(process.env.BASE_API + '/financeJson.do', {params: { 'curPage': self.curPage }})
          .then(function (res) {
            _.each(res.data, function (v, k) {
              var item = {
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
