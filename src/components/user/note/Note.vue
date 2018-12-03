<template>
  <div class="note">
    <x-header>资金记录</x-header>
    <tab>
      <tab-item :selected="tab.tabType === 1" @on-item-click="tab.tabType = 1">全部</tab-item>
      <tab-item :selected="tab.tabType === 2" @on-item-click="tab.tabType = 2">转入记录</tab-item>
      <tab-item :selected="tab.tabType === 3" @on-item-click="tab.tabType = 3">转出记录</tab-item>
      <tab-item :selected="tab.tabType === 4" @on-item-click="tab.tabType = 4">出借记录</tab-item>
      <tab-item :selected="tab.tabType === 5" @on-item-click="tab.tabType = 5">还款记录</tab-item>
    </tab>
    <div :class="{ minContainer: (data.all.length<10) }" v-if="tab.tabType === 1">
      <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-scroll-bottom="loadMore('All')"
                :use-pulldown="!typeTender" :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
                lock-x ref="scrollerBottom" height="-48">
        <div>
          <group :gutter="10">
            <cell :title="item.title" :inline-desc='item.time' :value="item.value" :key="item.id" v-for="item in data.all"></cell>
          </group>
          <divider v-show="parm.all">没有更多数据了~</divider>
          <load-more v-show="!parm.all" tip="加载中"></load-more>
        </div>
      </scroller>
    </div>
    <div :class="{ minContainer: (data.recharge.length<10) }" v-if="tab.tabType === 2">
      <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-scroll-bottom="loadMore('Recharge')"
                :use-pulldown="!typeTender" :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
                lock-x ref="scrollerBottom" height="-48">
        <div>
          <group :title="`累计转入：${parm.sumRecharge}元`">
                <cell :title="item.title" :inline-desc='item.time' :value="item.value" :key="item.id" v-for="item in data.recharge"></cell>
          </group>
          <divider v-show="parm.recharge">没有更多数据了~</divider>
          <load-more v-show="!parm.recharge" tip="加载中"></load-more>
        </div>
      </scroller>
    </div>
    <div :class="{ minContainer: (data.cash.length<10) }" v-if="tab.tabType === 3">
      <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-scroll-bottom="loadMore('Cash')"
                :use-pulldown="!typeTender" :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
                lock-x ref="scrollerBottom" height="-48">
        <div>
          <group :title="`累计转出：${parm.sumCash}元`">
            <cell :title="item.title" :inline-desc='item.time' :value="item.value" :key="item.id" v-for="item in data.cash"></cell>
          </group>
          <divider v-show="parm.cash">没有更多数据了~</divider>
          <load-more v-show="!parm.cash" tip="加载中"></load-more>
        </div>
      </scroller>
    </div>
    <div :class="{ minContainer: (data.invest.length<5) }" v-if="tab.tabType === 4">
      <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-scroll-bottom="loadMore('Invest')"
                :use-pulldown="!typeTender" :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
                lock-x ref="scrollerBottom" height="-48">
        <div>
          <group :title="`累计出借：${parm.sumInvest}元`" label-width="4.5em" label-margin-right="2em" label-align="right" v-for="item in data.invest" :key="item.key" v-if="item.index === 0">
            <panel :list="item.panel" :type="item.type" @on-img-error="onImgError" ></panel>
          </group>
          <group label-width="4.5em" label-margin-right="2em" label-align="right" v-for="item in data.invest" :key="item.key" v-if="item.index !== 0">
            <panel :list="item.panel" :type="item.type" @on-img-error="onImgError"></panel>
          </group>
          <divider v-show="parm.invest">没有更多数据了~</divider>
          <load-more v-show="!parm.invest" tip="加载中"></load-more>
        </div>
      </scroller>
    </div>
    <div :class="{ minContainer: (data.repayment.length<10) }" v-if="tab.tabType === 5">
      <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-scroll-bottom="loadMore('Recharge')"
                :use-pulldown="!typeTender" :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
                lock-x ref="scrollerBottom" height="-48">
        <div>
          <group :title="`已收还款：${parm.sumRepayment}元`">
            <cell :title="item.title" :inline-desc='item.time' :value="item.value" :key="item.id" v-for="item in data.repayment"></cell>
          </group>
          <divider v-show="parm.repayment">没有更多数据了~</divider>
          <load-more v-show="!parm.repayment" tip="加载中"></load-more>
        </div>
      </scroller>
    </div>
    <alert v-model="noLoginShow" title="登录失效" @on-show="onShow" @on-hide="logout">请重新登录</alert>
  </div>
</template>

<script>
  import qs from 'qs'
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
        data: {
          recharge: [],
          cash: [],
          invest: [],
          repayment: [],
          all: []
        },
        parm: {
          all: false,
          curPageAll: 1,
          sumAll: '0.00',
          recharge: false,
          curPageRecharge: 1,
          sumRecharge: '0.00',
          cash: false,
          curPageCash: 1,
          sumCash: '0.00',
          invest: false,
          curPageInvest: 1,
          sumInvest: '0.00',
          repayment: false,
          curPageRepayment: 1,
          sumRepayment: '0.00'
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
       * type: 加载列表类型(Recharge/Cash/Invest/Repayment)
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
              self.parm.curPageCash++
              self.getCashList()
            } else if (type === 'Invest') {
              self.parm.curPageInvest++
              self.getInvestList()
            } else if (type === 'Repayment') {
              self.parm.curPageRepayment++
              self.getRepaymentList()
            } else if (type === 'All') {
              self.parm.curPageAll++
              self.getList()
            }
            self.onFetching = false
          }, 2000)
        }
      },
      /**
       * 获取全部列表
       */
      getList () {
        var self = this
        if (self.parm.all === false) {
          self.$http.post(process.env.BASE_API + '/apiqueryFundrecordList.do', qs.stringify({ 'pageNum': self.parm.curPageAll, 'pageSize': '10' }))
            .then(function (res) {
              if (res.data === 'noLogin') {
                self.noLoginShow = true
              } else if (res.data.data === '') {
                self.parm.all = true
              } else {
                self.parm.sumAll = res.data.fundsum
                _.each(res.data.data, function (v) {
                  var item = {
                    id: v.id,
                    title: `${v.fundMode === '冻结提现金额' ? '-' : v.fundMode === '冻结投标金额' ? '-' : '+'}${v.handleSum}元`,
                    time: moment(v.recordTime.time).format('YYYY-MM-DD hh:mm:ss'),
                    value: `${v.fundMode === '存管通' ? '充值' : v.fundMode === '冻结提现金额' ? '提现' : v.fundMode === '冻结投标金额' ?
                      '投资' : v.fundMode === '投资收到还款' ? '还款' : v.fundMode === '返还提现金额' ? '提现失败' : '其他'}`
                  }
                  self.data.all.push(item)
                })
                if (res.data.data.length < 10) {
                  self.parm.all = true
                }
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      },
      /**
       * 获取充值列表
       */
      getRechargeList () {
        var self = this
        if (self.parm.recharge === false) {
          self.$http.post(process.env.BASE_API + '/apiqueryFundrecordList.do', qs.stringify({ 'pageNum': self.parm.curPageRecharge, 'pageSize': '10', 'momeyType': '存管通' }))
            .then(function (res) {
              if (res.data === 'noLogin') {
                self.noLoginShow = true
              } else if (res.data.data === '') {
                self.parm.recharge = true
              } else {
                self.parm.sumRecharge = res.data.fundsum
                _.each(res.data.data, function (v) {
                  var item = {
                    id: v.id,
                    title: `+${v.handleSum}元`,
                    time: moment(v.recordTime.time).format('YYYY-MM-DD hh:mm:ss'),
                    value: v.fundMode
                  }
                  self.data.recharge.push(item)
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
          self.$http.post(process.env.BASE_API + '/apiqueryFundrecordList.do', qs.stringify({ 'pageNum': self.parm.curPageCash, 'pageSize': '10', 'momeyType': '冻结提现金额' }))
            .then(function (res) {
              if (res.data === 'noLogin') {
                self.noLoginShow = true
              } else if (res.data.data === '') {
                self.parm.cash = true
              } else {
                self.parm.sumCash = res.data.fundsum
                _.each(res.data.data, function (v) {
                  var item = {
                    id: v.id,
                    title: `-${v.handleSum}元`,
                    time: moment(v.recordTime.time).format('YYYY-MM-DD hh:mm:ss'),
                    value: 'T+1'
                  }
                  self.data.cash.push(item)
                })
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
       * 获取出借列表
       */
      getInvestList () {
        var self = this
        if (self.parm.invest === false) {
          self.$http.post(process.env.BASE_API + '/apiqueryFundrecordList.do', qs.stringify({ 'pageNum': self.parm.curPageInvest, 'momeyType': '冻结投标金额', pageSize: '5' }))
            .then(function (res) {
              if (res.data === 'noLogin') {
                self.noLoginShow = true
              } else if (res.data.data === '') {
                self.parm.invest = true
              } else {
                self.parm.sumInvest = res.data.fundsum
                _.each(res.data.data, function (v, k) {
                  var item = {
                    index: k + (self.parm.curPageInvest - 1) * 5,
                    key: v.id,
                    type: '4',
                    panel: [
                      {
                        title: v.borrowTitle,
                        desc: '投资金额:' + v.handleSum + ' 期限：' + v.deadline + `${v.isDayThe === 1 ? '个月' : '天'}`,
                        meta: {
                          source: '年利率',
                          date: '7% + ' + (parseInt(v.annualRate) - 7) + '%',
                          other: '投资时间： ' + moment(v.recordTime.time).format('YYYY-MM-DD hh:mm:ss')
                        }
                      }
                    ]
                  }
                  self.data.invest.push(item)
                })
                if (res.data.data.length < 5) {
                  self.parm.invest = true
                }
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      },
      /**
       * 获取还款列表
       */
      getRepaymentList () {
        var self = this
        if (self.parm.repayment === false) {
          self.$http.post(process.env.BASE_API + '/apiqueryFundrecordList.do', qs.stringify({ 'pageNum': self.parm.curPageRepayment, 'pageSize': '10', 'momeyType': '投资收到还款' }))
            .then(function (res) {
              if (res.data === 'noLogin') {
                self.noLoginShow = true
              } else if (res.data.data === '') {
                self.parm.repayment = true
              } else {
                self.parm.sumRepayment = res.data.fundsum
                _.each(res.data.data, function (v) {
                  var item = {
                    id: v.id,
                    title: `+${v.handleSum}元`,
                    time: moment(v.recordTime.time).format('YYYY-MM-DD hh:mm:ss'),
                    value: '项目名称 还息3/1'
                  }
                  self.data.repayment.push(item)
                })
                if (res.data.data.length < 10) {
                  self.parm.repayment = true
                }
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      },
      init () {
        var self = this
        if ((self.$http.defaults.headers.tokenClientkey === undefined) && self.$cookies.get('tokenClientkey')) {
          self.$http.defaults.headers.tokenClientkey = self.$cookies.get('tokenClientkey')
        }
        self.getList()
        self.getRechargeList()
        self.getCashList()
        self.getInvestList()
        self.getRepaymentList()
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
