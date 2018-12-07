<template>
  <div>
    <x-header>优惠券</x-header>
    <tab>
      <tab-item :selected="list.listType === 1" @on-item-click="list.listType = 1">未使用</tab-item>
      <tab-item :selected="list.listType === 2" @on-item-click="list.listType = 2">已使用</tab-item>
      <tab-item :selected="list.listType === 3" @on-item-click="list.listType = 3">已过期</tab-item>
    </tab>
    <div v-if="list.listType === 1">
      <group title="未使用红包共5个，共计499元"></group>
      <div class="coupons-card" v-for="item in data.coupons">
        <div class="card-title"></div>
        <div class="card-middle">
          <div class="fl card-left">
            <div class="left-title">{{item.money}}</div>
          </div>
          <div class="fr card-right">
            <div class="right-title">使用范围: {{item.range}}</div>
          </div>
        </div>
        <div class="card-bottom">
          <div class="fl card-left">
            <div class="left-content">投资: {{item.terms}}</div>
          </div>
          <div class="fr card-right">
            <div class="right-content">有效期: {{item.time}}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="list.listType === 2">
      <group title="已使用红包共5个，共计499元"></group>
      <div class="coupons-card coupons-card-used" v-for="item in data.couponsUsed">
        <div class="card-title"></div>
        <div class="card-middle">
          <div class="fl card-left">
            <div class="left-title">{{item.money}}</div>
          </div>
          <div class="fr card-right">
            <div class="right-title">使用范围: {{item.range}}</div>
          </div>
        </div>
        <div class="card-bottom">
          <div class="fl card-left">
            <div class="left-content">投资: {{item.terms}}</div>
          </div>
          <div class="fr card-right">
            <div class="right-content">有效期: {{item.time}}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="list.listType === 3">
      <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-pullup-loading="loadMore('CouponsExpired')"
                use-pulldown :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
                lock-x ref="scrollerBottom" height="-48">
        <div>
          <group title="已过期红包共5个，共计499元"></group>
          <div class="coupons-card coupons-card-expired" v-for="item in data.couponsExpired">
            <div class="card-title"></div>
            <div class="card-middle">
              <div class="fl card-left">
                <div class="left-title">{{item.money}}</div>
              </div>
              <div class="fr card-right">
                <div class="right-title">使用范围: {{item.range}}</div>
              </div>
            </div>
            <div class="card-bottom">
              <div class="fl card-left">
                <div class="left-content">投资: {{item.terms}}</div>
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
  </div>
</template>

<script>
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
        onFetching: false,
        curPageCoupons: 1,
        curPageCouponsUsed: 1,
        curPageCouponsExpired: 1,
        type: {
          couponsExpired: false
        },
        data: {
          coupons: [
            {
              money: '100元',
              range: '全部标的',
              terms: '10000抵100元',
              time: '2018-11-08 09:15:00'
            },
            {
              money: '50元',
              range: '全部标的',
              terms: '5000抵50元',
              time: '2018-11-18 09:15:00'
            },
            {
              money: '50元',
              range: '全部标的',
              terms: '5000抵50元',
              time: '2018-12-08 09:15:00'
            }
          ],
          couponsUsed: [
            {
              money: '50元',
              range: '全部标的',
              terms: '5000抵50元',
              time: '2018-08-08 09:15:00'
            },
            {
              money: '100元',
              range: '全部标的',
              terms: '10000抵100元',
              time: '2018-07-08 09:15:00'
            },
            {
              money: '50元',
              range: '全部标的',
              terms: '5000抵50元',
              time: '2018-06-08 09:15:00'
            }
          ],
          couponsExpired: [
            {
              money: '50元',
              range: '全部标的',
              terms: '5000抵50元',
              time: '2018-08-08 09:15:00'
            },
            {
              money: '100元',
              range: '全部标的',
              terms: '10000抵100元',
              time: '2018-07-08 09:15:00'
            },
            {
              money: '50元',
              range: '全部标的',
              terms: '5000抵50元',
              time: '2018-07-08 09:15:00'
            },
            {
              money: '100元',
              range: '全部标的',
              terms: '10000抵100元',
              time: '2018-06-08 09:15:00'
            },
            {
              money: '50元',
              range: '全部标的',
              terms: '5000抵50元',
              time: '2018-06-08 09:15:00'
            }
          ]
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
        console.log('请求数据Coupons')
      },
      getCouponsUsedList () {
        console.log('请求数据CouponsUsed')
      },
      getCouponsExpiredList () {
        console.log('请求数据CouponsExpired')
      },
      init () {
        var self = this
        if ((self.$http.defaults.headers.tokenClientkey === undefined) && self.$cookies.get('tokenClientkey')) {
          self.$http.defaults.headers.tokenClientkey = self.$cookies.get('tokenClientkey')
        }
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>
