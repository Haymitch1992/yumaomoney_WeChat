<template>
  <div class="coupons">
    <x-header>优惠券</x-header>
    <tab>
      <tab-item :selected="list.listType === 1" @on-item-click="list.listType = 1">未使用</tab-item>
      <tab-item :selected="list.listType === 2" @on-item-click="list.listType = 2">已使用</tab-item>
      <tab-item :selected="list.listType === 3" @on-item-click="list.listType = 3">已过期</tab-item>
    </tab>
    <div :class="{ minContainer: (data.coupons.length<5) }" v-show="list.listType === 1">
      <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-pullup-loading="loadMore('Coupons')"
                use-pulldown :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
                lock-x ref="scrollerBottom" height="-48">
        <div>
          <group :title="`未使用红包共${totalNumCoupons}个，共计${totalAmountCoupons}元`"></group>
          <div class="coupons-card" v-for="item in data.coupons">
            <div class="card-title"></div>
            <div class="card-middle">
              <div class="fl card-left">
                <div class="left-title">{{item.amount}}元</div>
              </div>
              <div class="fr card-right">
                <div class="right-title">使用范围: 全部标的</div>
              </div>
            </div>
            <div class="card-bottom">
              <div class="fl card-left">
                <div class="left-content">投资: {{item.minInvestAmount}}抵{{item.amount}}元</div>
              </div>
              <div class="fr card-right">
                <div class="right-content">有效期: {{item.time}}</div>
              </div>
            </div>
          </div>
          <divider v-show="type.coupons">没有更多数据了~</divider>
          <load-more v-show="!type.coupons" tip="加载中"></load-more>
        </div>
      </scroller>
    </div>
    <div :class="{ minContainer: (data.couponsUsed.length<5) }" v-show="list.listType === 2">
      <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-pullup-loading="loadMore('CouponsUsed')"
                use-pulldown :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
                lock-x ref="scrollerBottom" height="-48">
        <div>
          <group :title="`已使用红包共${totalNumCouponsUsed}个，共计${totalAmountCouponsUsed}元`"></group>
          <div class="coupons-card coupons-card-used" v-for="item in data.couponsUsed">
            <div class="card-title"></div>
            <div class="card-middle">
              <div class="fl card-left">
                <div class="left-title">{{item.amount}}元</div>
              </div>
              <div class="fr card-right">
                <div class="right-title">使用范围: 全部标的</div>
              </div>
            </div>
            <div class="card-bottom">
              <div class="fl card-left">
                <div class="left-content">投资: {{item.minInvestAmount}}抵{{item.amount}}元</div>
              </div>
              <div class="fr card-right">
                <div class="right-content">有效期: {{item.time}}</div>
              </div>
            </div>
          </div>
          <divider v-show="type.couponsUsed">没有更多数据了~</divider>
          <load-more v-show="!type.couponsUsed" tip="加载中"></load-more>
        </div>
      </scroller>
    </div>
    <div :class="{ minContainer: (data.couponsExpired.length<5) }" v-show="list.listType === 3">
      <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-pullup-loading="loadMore('CouponsExpired')"
                use-pulldown :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
                lock-x ref="scrollerBottom" height="-48">
        <div>
          <group :title="`已过期红包共${totalNumCouponsExpired}个，共计${totalAmountCouponsExpired}元`"></group>
          <div class="coupons-card coupons-card-expired" v-for="item in data.couponsExpired">
            <div class="card-title"></div>
            <div class="card-middle">
              <div class="fl card-left">
                <div class="left-title">{{item.amount}}元</div>
              </div>
              <div class="fr card-right">
                <div class="right-title">使用范围: 全部标的</div>
              </div>
            </div>
            <div class="card-bottom">
              <div class="fl card-left">
                <div class="left-content">投资: {{item.minInvestAmount}}抵{{item.amount}}元</div>
              </div>
              <div class="fr card-right">
                <div class="right-content">有效期: {{item.time}}</div>
              </div>
            </div>
          </div>
          <divider v-show="type.couponsExpired">没有更多数据了~</divider>
          <load-more v-show="!type.couponsExpired" tip="加载中"></load-more>
        </div>
      </scroller>
    </div>
    <alert v-model="noLoginShow" title="登录失效" @on-hide="logout">请重新登录</alert>
  </div>
</template>

<script>
  import qs from 'qs'
  import _ from 'lodash'
  import { Group, Cell, XHeader, Tab, TabItem, Scroller, LoadMore, Divider, AlertModule, Alert } from 'vux'

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
    name: 'Preferential',
    components: {
      Group,
      Cell,
      XHeader,
      Tab,
      TabItem,
      Scroller,
      LoadMore,
      Divider,
      AlertModule,
      Alert
    },
    data () {
      return {
        noLoginShow: false,
        onFetching: false,
        curPageCoupons: 1,
        curPageCouponsUsed: 1,
        curPageCouponsExpired: 1,
        totalNumCoupons: 0,
        totalNumCouponsUsed: 0,
        totalNumCouponsExpired: 0,
        totalAmountCoupons: 0,
        totalAmountCouponsUsed: 0,
        totalAmountCouponsExpired: 0,
        type: {
          coupons: false,
          couponsUsed: false,
          couponsExpired: false
        },
        data: {
          coupons: [],
          couponsUsed: [],
          couponsExpired: []
        },
        list: {
          listType: 1
        },
        pullupDefaultConfig: pullupDefaultConfig,
        pulldownDefaultConfig: pulldownDefaultConfig
      }
    },
    methods: {
      onImgError (item, $event) {
        console.log(item, $event)
      },
      /**
       * 刷新页面
       */
      refresh () {
        console.log('refresh')
      },
      /**
       * 登录失效跳转
       */
      logout () {
        var self = this
        window.localStorage.removeItem('Flag')
        self.$store.dispatch('setUser', false)
        self.$cookies.remove('tokenClientkey')
        self.$cookies.remove('apiHomeData')
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
            if (type === 'Coupons') {
              self.curPageCoupons++
              self.getCouponsList()
            } else if (type === 'CouponsUsed') {
              self.curPageCouponsUsed++
              self.getCouponsUsedList()
            } else if (type === 'CouponsExpired') {
              self.curPageCouponsExpired++
              self.getCouponsExpiredList()
            }
            self.onFetching = false
          }, 2000)
        }
      },
      getCouponsList () {
        var self = this
        if (self.type.coupons === false) {
          self.$http.post(process.env.BASE_API + '/apihomeRewardManagementUnusedList.do', qs.stringify({ 'pageNum': self.curPageCoupons, 'pageSize': '5' }))
            .then(function (res) {
              if (res.data === 'noLogin') {
                self.noLoginShow = true
              } else if (res.data.data === undefined) {
                self.type.coupons = true
              } else {
                self.totalNumCoupons = res.data.TotalNum
                self.totalAmountCoupons = res.data.totalAmount
                _.each(res.data.data, function (v) {
                  var item = {
                    id: v.id,
                    amount: v.amount,
                    minInvestAmount: v.minInvestAmount,
                    time: v.limitTime
                  }
                  self.data.coupons.push(item)
                })
                if (res.data.data.length < 5) {
                  self.type.coupons = true
                }
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      },
      getCouponsUsedList () {
        var self = this
        if (self.type.couponsUsed === false) {
          self.$http.post(process.env.BASE_API + '/apihomeRewardManagementUsedList.do', qs.stringify({ 'pageNum': self.curPageCouponsUsed, 'pageSize': '5' }))
            .then(function (res) {
              if (res.data === 'noLogin') {
                self.noLoginShow = true
              } else if (res.data.data === undefined) {
                self.type.couponsUsed = true
              } else {
                self.totalNumCouponsUsed = res.data.TotalNum
                self.totalAmountCouponsUsed = res.data.totalAmount
                _.each(res.data.data, function (v) {
                  var item = {
                    id: v.id,
                    amount: v.amount,
                    minInvestAmount: v.minInvestAmount,
                    time: v.limitTime
                  }
                  self.data.couponsUsed.push(item)
                })
                if (res.data.data.length < 5) {
                  self.type.couponsUsed = true
                }
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      },
      getCouponsExpiredList () {
        var self = this
        if (self.type.couponsExpired === false) {
          self.$http.post(process.env.BASE_API + '/apihomeRewardManagementOvertimeList.do', qs.stringify({ 'pageNum': self.curPageCouponsExpired, 'pageSize': '5' }))
            .then(function (res) {
              if (res.data === 'noLogin') {
                self.noLoginShow = true
              } else if (res.data.data === undefined) {
                self.type.couponsExpired = true
              } else {
                self.totalNumCouponsExpired = res.data.TotalNum
                self.totalAmountCouponsExpired = res.data.totalAmount
                _.each(res.data.data, function (v) {
                  var item = {
                    id: v.id,
                    amount: v.amount,
                    minInvestAmount: v.minInvestAmount,
                    time: v.limitTime
                  }
                  self.data.couponsExpired.push(item)
                })
                if (res.data.data.length < 5) {
                  self.type.couponsExpired = true
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
        self.getCouponsList()
        self.getCouponsUsedList()
        self.getCouponsExpiredList()
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>
<style lang="less">
  .coupons .vux-divider {
    padding: 5vh 0;
  }
  .coupons .minContainer .xs-container {
    height: 95vh;
  }
</style>
