<template>
  <div class="investment">
    <x-header :left-options="leftOptions" @on-click-back="goBack()">我的投资</x-header>
    <tab style="z-index: 20">
      <tab-item :selected="list.listType === 1" @on-item-click="list.listType = 1">融资中</tab-item>
      <tab-item :selected="list.listType === 2" @on-item-click="list.listType = 2">还款中</tab-item>
      <tab-item :selected="list.listType === 3" @on-item-click="list.listType = 3">已还清</tab-item>
    </tab>
    <div style="position: relative; top: -10px; z-index: 10;" :class="{ minContainer: (dataTender.length<5) }" v-show="list.listType === 1">
      <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-scroll-bottom="loadMore('Tender')"
                :use-pulldown="!typeTender" :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
                lock-x ref="scrollerBottom" height="-48">
        <div>
          <group label-width="4.5em" label-margin-right="2em" label-align="right" v-for="item in dataTender" :key="item.key">
            <panel :list="item.panel" :type="item.type" @on-img-error="onImgError" @click.native="goDetail(item)"></panel>
          </group>
          <divider v-show="typeTender">没有更多数据了~</divider>
          <load-more v-show="!typeTender" tip="加载中"></load-more>
        </div>
      </scroller>
    </div>
    <div style="position: relative; top: -10px; z-index: 10;" :class="{ minContainer: (dataRecycle.length<5) }" v-show="list.listType === 2">
      <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-pullup-loading="loadMore('Recycle')"
                use-pulldown :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
                lock-x ref="scrollerBottom" height="-48">
        <div>
          <group label-width="4.5em" label-margin-right="2em" label-align="right" v-for="item in dataRecycle" :key="item.key">
            <panel :list="item.panel" :type="item.type" @on-img-error="onImgError" @click.native="goDetail(item)"></panel>
          </group>
          <divider v-show="typeRecycle">没有更多数据了~</divider>
          <load-more v-show="!typeRecycle" tip="加载中"></load-more>
        </div>
      </scroller>
    </div>
    <div style="position: relative; top: -10px; z-index: 10;" :class="{ minContainer: (dataRecycled.length<5) }" v-show="list.listType === 3">
      <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-pullup-loading="loadMore('Recycled')"
                use-pulldown :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
                lock-x ref="scrollerBottom" height="-48">
        <div>
          <group label-width="4.5em" label-margin-right="2em" label-align="right" v-for="item in dataRecycled" :key="item.key">
            <panel :list="item.panel" :type="item.type" @on-img-error="onImgError" @click.native="goDetail(item)"></panel>
          </group>
          <divider v-show="typeRecycled">没有更多数据了~</divider>
          <load-more v-show="!typeRecycled" tip="加载中"></load-more>
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
        dataTender: [],
        dataRecycle: [],
        dataRecycled: [],
        typeTender: false,
        typeRecycle: false,
        typeRecycled: false,
        noLoginShow: false,
        curPageTender: 1,
        curPageRecycle: 1,
        curPageRecycled: 1,
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
            if (type === 'Tender') {
              self.curPageTender++
              self.getTenderList()
            } else if (type === 'Recycle') {
              self.curPageRecycle++
              self.getRecycleList()
            } else if (type === 'Recycled') {
              self.curPageRecycled++
              self.getRecycledList()
            }
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
       * 获取招标中的投资列表
       */
      getTenderList () {
        var self = this
        if (self.typeTender === false) {
          self.$http.post(process.env.BASE_API + '/apihomeBorrowTenderInList.do', {params: { 'curPage': self.curPageTender }})
            .then(function (res) {
              if (res.data === 'noLogin') {
                self.noLoginShow = true
              } else if (res.data.data === '') {
                self.typeTender = true
              } else {
                _.each(res.data.data, function (v, k) {
                  var item = {
                    key: v.id,
                    type: '4',
                    progress: parseInt(v.progress),
                    panel: [
                      {
                        title: v.borrowTitle,
                        desc: '投资金额:' + v.investAmount + ' 期限：' + v.deadline + `${v.isDayThe === 1 ? '个月' : '天'}`,
                        meta: {
                          source: '年利率',
                          date: '7% + ' + (parseInt(v.annualRate) - 7) + '%',
                          other: '投资时间： ' + moment(v.investTime, 'YYYY-MM-DD').format('YYYY-MM-DD')
                        }
                      }
                    ]
                  }
                  self.dataTender.push(item)
                })
                if (res.data.data.length < 10) {
                  self.typeTender = true
                }
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      },
      /**
       * 获取还款中的投资列表
       */
      getRecycleList () {
        var self = this
        if (self.typeRecycle === false) {
          self.$http.post(process.env.BASE_API + '/apihomeBorrowRecycleList.do', {params: { 'curPage': self.curPageRecycle }})
            .then(function (res) {
              if (res.data === 'noLogin') {
                self.noLoginShow = true
              } else if (res.data.data === '') {
                self.typeRecycle = true
              } else {
                _.each(res.data.data, function (v, k) {
                  var item = {
                    key: v.id,
                    type: '4',
                    progress: parseInt(v.progress),
                    panel: [
                      {
                        title: v.borrowTitle,
                        desc: '投资金额:' + v.realAmount + ' 期限：' + v.deadline + `${v.isDayThe === 1 ? '个月' : '天'}`,
                        meta: {
                          source: '年利率',
                          date: '7% + ' + (parseInt(v.annualRate) - 7) + '%',
                          other: '满标时间： ' + moment(v.auditTime, 'YYYY-MM-DD').format('YYYY-MM-DD')
                        }
                      }
                    ]
                  }
                  self.dataRecycle.push(item)
                })
                if (res.data.data.length < 10) {
                  self.typeRecycle = true
                }
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      },
      /**
       * 获取已还清的投资列表
       */
      getRecycledList () {
        var self = this
        if (self.typeRecycled === false) {
          self.$http.post(process.env.BASE_API + '/apihomeBorrowRecycledList.do', {params: { 'curPage': self.curPageRecycled }})
            .then(function (res) {
              if (res.data === 'noLogin') {
                self.noLoginShow = true
              } else if (res.data.data === '') {
                self.typeRecycled = true
              } else {
                _.each(res.data.data, function (v, k) {
                  var item = {
                    key: v.id,
                    type: '4',
                    progress: parseInt(v.progress),
                    panel: [
                      {
                        title: v.borrowTitle,
                        desc: '投资金额:' + v.realAmount + ' 期限：' + v.deadline + `${v.isDayThe === 1 ? '个月' : '天'}`,
                        meta: {
                          source: '年利率',
                          date: '7% + ' + (parseInt(v.annualRate) - 7) + '%',
                          other: '还清时间： ' + moment(v.auditTime, 'YYYY-MM-DD').format('YYYY-MM-DD')
                        }
                      }
                    ]
                  }
                  self.dataRecycled.push(item)
                })
                if (res.data.data.length < 10) {
                  self.typeRecycled = true
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
        self.getTenderList()
        self.getRecycleList()
        self.getRecycledList()
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
  .investment .minContainer .xs-container {
    height: 95vh;
  }
</style>

