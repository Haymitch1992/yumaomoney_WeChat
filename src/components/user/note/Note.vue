<template>
  <div class="note">
    <x-header>资金记录</x-header>
    <tab>
      <tab-item :selected="tab.tabType === 1" @on-item-click="tab.tabType = 1">充值记录</tab-item>
      <tab-item :selected="tab.tabType === 2" @on-item-click="tab.tabType = 2">提现记录</tab-item>
      <tab-item :selected="tab.tabType === 3" @on-item-click="tab.tabType = 3">投资记录</tab-item>
      <tab-item :selected="tab.tabType === 4" @on-item-click="tab.tabType = 4">还款记录</tab-item>
      <tab-item :selected="tab.tabType === 5" @on-item-click="tab.tabType = 5">其他</tab-item>
    </tab>
    <group :class="{ minContainer: (data.recharge.length<5) }" title="成功充值：123456789.45元" v-if="tab.tabType === 1">
      <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-scroll-bottom="loadMore('Recharge')"
                :use-pulldown="!typeTender" :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
                lock-x ref="scrollerBottom" height="-48">
        <div>
          <cell :title="item.title" :inline-desc='item.time' :value="item.value" :key="item.id" v-for="item in data.recharge"></cell>
          <divider v-show="parm.recharge">没有更多数据了~</divider>
          <load-more v-show="!parm.recharge" tip="加载中"></load-more>
        </div>
      </scroller>
    </group>
    <group :class="{ minContainer: (data.cash.length<5) }" title="累计提现成功：123456789.45元" v-if="tab.tabType === 2">
      <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-scroll-bottom="loadMore('Cash')"
                :use-pulldown="!typeTender" :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
                lock-x ref="scrollerBottom" height="-48">
        <div>
          <cell :title="item.title" :inline-desc='item.time' :value="item.value" :key="item.id" v-for="item in data.cash"></cell>
          <divider v-show="parm.cash">没有更多数据了~</divider>
          <load-more v-show="!parm.cash" tip="加载中"></load-more>
        </div>
      </scroller>
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
    <alert v-model="noLoginShow" title="登录失效" @on-show="onShow" @on-hide="logout">请重新登录</alert>
  </div>
</template>

<script>
  import _ from 'lodash'
  import moment from 'moment'
  import { Group, Cell, XHeader, Tab, TabItem, Panel, Scroller, LoadMore, Divider, AlertModule, Alert } from 'vux'

  const pulldownDefaultConfig = {
    content: '下拉刷新',
    height: 40,
    autoRefresh: true,
    downContent: '下拉刷新',
    upContent: '释放后刷新',
    loadingContent: '正在刷新...',
    clsPrefix: 'xs-plugin-pulldown-'
  }
  const pullupDefaultConfig = {
    content: '上拉加载更多',
    pullUpHeight: 60,
    height: 40,
    autoRefresh: false,
    downContent: '释放后加载',
    upContent: '上拉加载更多',
    loadingContent: '加载中...',
    clsPrefix: 'xs-plugin-pullup-'
  }

  export default {
    name: 'Note',
    components: {
      Group,
      Cell,
      XHeader,
      Tab,
      TabItem,
      Panel,
      Scroller,
      LoadMore,
      Divider,
      AlertModule,
      Alert
    },
    data () {
      return {
        tab: {
          tabType: 1
        },
        list: [],
        data: {
          recharge: [],
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
        },
        parm: {
          recharge: false,
          curPageRecharge: 1,
          cash: false,
          curPageCash: 1
        },
        noLoginShow: false,
        pullupDefaultConfig: pullupDefaultConfig,
        pulldownDefaultConfig: pulldownDefaultConfig
      }
    },
    methods: {
      onImgError (item, $event) {
        console.log(item, $event)
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
      /**
       * 加载更多列表
       * type: 加载列表类型(Tender/Recycle/Recycled)
       */
      loadMore (type) {
        var self = this
        if (self.onFetching) {
          // do something
        } else {
          self.onFetching = true
          setTimeout(() => {
            self.$refs.scrollerBottom.donePullup()
            if (type === 'Recharge') {
              self.parm.curPageRecharge++
              self.getRechargeList()
            } else if (type === 'Cash') {
              self.curPageCash++
              self.getCashList()
            }
            self.onFetching = false
          }, 2000)
        }
      },
      /**
       * 获取充值列表
       */
      getRechargeList () {
        var self = this
        if (self.parm.recharge === false) {
          self.$http.get(process.env.BASE_API + '/apiqueryFundrecordList.do', {params: { 'pageNum': self.parm.curPageRecharge, 'momeyType': '存管通' }})
            .then(function (res) {
              if (res.data === 'noLogin') {
                self.noLoginShow = true
              } else if (res.data.data === '') {
                self.parm.recharge = true
              } else {
                _.each(res.data.data, function (v, k) {
                  var item = {
                    id: v.id,
                    title: `+${v.sum}元`,
                    time: moment(v.recordTime.time).format('YYYY-MM-DD hh:mm:ss'),
                    value: '网银充值'
                  }
                  self.data.recharge.push(item)
                  console.log(self.data.recharge)
                })
                if (res.data.data.length < 10) {
                  self.parm.recharge = true
                }
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      },
      /**
       * 获取提现列表
       */
      getCashList () {
        var self = this
        if (self.parm.cash === false) {
          self.$http.get(process.env.BASE_API + '/apiqueryFundrecordList.do', {params: { 'pageNum': self.parm.curPageCash, 'momeyType': '冻结提现金额' }})
            .then(function (res) {
              if (res.data === 'noLogin') {
                self.noLoginShow = true
              } else if (res.data.data === '') {
                self.parm.cash = true
              } else {
//                _.each(res.data.data, function (v, k) {
//                  var item = {
//                    key: v.id,
//                    type: '4',
//                    progress: parseInt(v.progress),
//                    panel: [
//                      {
//                        title: v.borrowTitle,
//                        desc: '投资金额:' + v.investAmount + ' 期限：' + v.deadline + `${v.isDayThe === 1 ? '个月' : '天'}`,
//                        meta: {
//                          source: '年利率',
//                          date: '7% + ' + (parseInt(v.annualRate) - 7) + '%',
//                          other: '投资时间： ' + moment(v.investTime, 'YYYY-MM-DD').format('YYYY-MM-DD')
//                        }
//                      }
//                    ]
//                  }
//                  self.dataTender.push(item)
//                })
                if (res.data.data.length < 10) {
                  self.parm.cash = true
                }
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      },
      /**
       * 获取提现列表
       */
      getCashList () {
        var self = this
        if (self.parm.cash === false) {
          self.$http.get(process.env.BASE_API + '/apiqueryFundrecordList.do', {params: { 'pageNum': self.parm.curPageCash, 'momeyType': '冻结提现金额' }})
            .then(function (res) {
              if (res.data === 'noLogin') {
                self.noLoginShow = true
              } else if (res.data.data === '') {
                self.parm.cash = true
              } else {
//                _.each(res.data.data, function (v, k) {
//                  var item = {
//                    key: v.id,
//                    type: '4',
//                    progress: parseInt(v.progress),
//                    panel: [
//                      {
//                        title: v.borrowTitle,
//                        desc: '投资金额:' + v.investAmount + ' 期限：' + v.deadline + `${v.isDayThe === 1 ? '个月' : '天'}`,
//                        meta: {
//                          source: '年利率',
//                          date: '7% + ' + (parseInt(v.annualRate) - 7) + '%',
//                          other: '投资时间： ' + moment(v.investTime, 'YYYY-MM-DD').format('YYYY-MM-DD')
//                        }
//                      }
//                    ]
//                  }
//                  self.dataTender.push(item)
//                })
                if (res.data.data.length < 10) {
                  self.parm.cash = true
                }
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
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
      },
      init () {
        var self = this
        if ((self.$http.defaults.headers.tokenClientkey === undefined) && self.$cookies.get('tokenClientkey')) {
          self.$http.defaults.headers.tokenClientkey = self.$cookies.get('tokenClientkey')
        }
        self.getRechargeList()
        self.getCashList()
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>
<style lang="less">
  .note .vux-divider {
    padding: 5vh 0;
  }
  .note .minContainer .xs-container {
    height: 95vh;
  }
</style>
