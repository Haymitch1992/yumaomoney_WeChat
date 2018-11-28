<template>
  <div class="investment">
    <x-header :left-options="leftOptions" @on-click-back="goBack()">我的投资</x-header>
    <tab style="z-index: 20">
      <tab-item :selected="list.listType === 1" @on-item-click="list.listType = 1">融资中</tab-item>
      <tab-item :selected="list.listType === 2" @on-item-click="list.listType = 2">还款中</tab-item>
      <tab-item :selected="list.listType === 3" @on-item-click="list.listType = 3">已还清</tab-item>
    </tab>
    <div style="position: relative; top: -10px; z-index: 10;" v-show="list.listType === 1">
      <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-scroll-bottom="loadMore"
                :use-pulldown="!borrowTenderType" :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
                lock-x ref="scrollerBottom" height="-48">
        <div>
          <group label-width="4.5em" label-margin-right="2em" label-align="right" v-for="item in data" :key="item.key">
            <panel :list="item.panel" :type="item.type" @on-img-error="onImgError" @click.native="goDetail(item)"></panel>
          </group>
          <divider v-show="borrowTenderType">没有更多数据了~</divider>
          <load-more v-show="!borrowTenderType" tip="加载中"></load-more>
        </div>
      </scroller>
    </div>
    <div style="position: relative; top: -10px; z-index: 10;" v-show="list.listType === 2">
      <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-pullup-loading="loadMore"
                use-pulldown :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
                lock-x ref="scrollerBottom" height="-48">
        <div>
          <group label-width="4.5em" label-margin-right="2em" label-align="right" v-for="item in data" :key="item.key">
            <panel :list="item.panel" :type="item.type" @on-img-error="onImgError" @click.native="goDetail(item)"></panel>
          </group>
        </div>
      </scroller>
    </div>
    <div style="position: relative; top: -10px; z-index: 10;" v-show="list.listType === 3">
      <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-pullup-loading="loadMore"
                use-pulldown :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
                lock-x ref="scrollerBottom" height="-48">
        <div>
          <group label-width="4.5em" label-margin-right="2em" label-align="right" v-for="item in data" :key="item.key">
            <panel :list="item.panel" :type="item.type" @on-img-error="onImgError" @click.native="goDetail(item)"></panel>
          </group>
        </div>
      </scroller>
    </div>
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
    name: 'Investment',
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
        leftOptions: {
          preventGoBack: true
        },
        list: {
          listType: 1
        },
        onFetching: false,
        data: [],
        borrowTenderType: false,
        noLoginShow: false,
        curPageBorrowTender: 1,
        swiper_index: 1,
        pullupDefaultConfig: pullupDefaultConfig,
        pulldownDefaultConfig: pulldownDefaultConfig
      }
    },
    methods: {
      swiper_onIndexChange (index) {
        this.swiper_index = index
      },
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
       */
      loadMore () {
        var self = this
        if (self.onFetching) {
        } else {
          self.onFetching = true
          setTimeout(() => {
            console.log('加载更多')
            self.$refs.scrollerBottom.donePullup()
            self.curPageBorrowTender++
            self.getBorrowTenderInList()
            self.onFetching = false
          }, 2000)
        }
      },
      /**
       * 查看详情
       */
      goDetail (item) {
        var self = this
        this.$router.push({name: 'investmentDetail', params: {listType: self.list.listType, item: item}})
      },
      /**
       * 获取列表
       */
      getBorrowTenderInList () {
        var self = this
        if (self.borrowTenderType === false) {
          self.$http.get(process.env.BASE_API + '/apihomeBorrowTenderInList.do', {params: { 'curPage': self.curPageBorrowTender }})
            .then(function (res) {
              if (res.data === 'noLogin') {
                self.noLoginShow = true
              } else if (res.data.data === '') {
                self.borrowTenderType = true
              } else {
                _.each(res.data.data, function (v, k) {
                  var item = {
                    key: v.id,
                    type: '4',
                    progress: parseInt(v.progress),
                    panel: [
                      {
                        title: v.borrowTitle,
                        desc: '投资金额:' + v.borrowAmount + ' 期限：' + v.deadline,
                        meta: {
                          source: '年利率',
                          date: '7% + ' + (parseInt(v.annualRate) - 7) + '%',
                          other: '投资时间： ' + moment(v.investTime, 'YY-MM-DD hh:mm:ss').format('YYYY-MM-DD HH:mm:ss')
                        }
                      }
                    ]
                  }
                  self.data.push(item)
                })
                if (res.data.data.length < 10) {
                  self.borrowTenderType = true
                }
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      },
      goBack () {
        var self = this
        self.$router.push('/user')
      },
      init () {
        var self = this
        if ((self.$http.defaults.headers.tokenClientkey === undefined) && self.$cookies.get('tokenClientkey')) {
          self.$http.defaults.headers.tokenClientkey = self.$cookies.get('tokenClientkey')
        }
        self.list.listType = self.$route.params.listType ? self.$route.params.listType : 1
        self.getBorrowTenderInList()
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>
<style lang="less">
  .investment .vux-divider {
    padding: 5vh 0;
  }
</style>

