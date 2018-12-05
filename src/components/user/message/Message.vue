<template>
  <div class="message">
    <x-header :left-options="leftOptions" @on-click-back="goBack()" :right-options="{showMore: true}" @on-click-more="goSetting()" style="z-index: 10">通知中心</x-header>
    <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-scroll-bottom="loadMore()"
              :use-pulldown="!typeTender" :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
              lock-x ref="scrollerBottom" height="-48" style="top: -10px;">
      <div>
        <group>
          <cell :title="item.title" :inline-desc='item.time' is-link :key="item.id" v-for="item in data" @click.native="goDetail(item)"></cell>
        </group>
        <divider v-show="type">没有更多数据了~</divider>
        <load-more v-show="!type" tip="加载中"></load-more>
      </div>
    </scroller>
    <div>
      <popup v-model="popupShow" height="100%">
        <div class="popupFull">
          <x-header :left-options="{showBack: false}">>信息详情</x-header>
          <div class="p10">
            <group>
              <cell :title="item.title" :value="item.time"></cell>
              <cell-form-preview :list="list"></cell-form-preview>
              <div class="messageDetail" v-html="item.data.mailContent">
                {{item.data.mailContent}}
            </div>
            </group>
          </div>
          <div class="pt20">
            <div class="submit-box">
              <x-button @click.native="popupShow = false" type="primary">关闭</x-button>
            </div>
          </div>
        </div>
      </popup>
    </div>
    <alert v-model="noLoginShow" title="登录失效" @on-hide="logout">请重新登录</alert>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, Scroller, LoadMore, Divider, AlertModule, Alert, Popup, CellFormPreview, XButton } from 'vux'
  import qs from 'qs'
  import _ from 'lodash'
  import moment from 'moment'

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
    name: 'Message',
    components: {
      Group,
      Cell,
      XHeader,
      Scroller,
      LoadMore,
      Divider,
      AlertModule,
      Alert,
      Popup,
      CellFormPreview,
      XButton
    },
    data () {
      return {
        leftOptions: {
          preventGoBack: true
        },
        data: [],
        item: {
          title: '---',
          time: '---',
          data: {}
        },
        curPage: 1,
        type: false,
        popupShow: false,
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
      loadMore () {
        var self = this
        if (self.onFetching) {
          // do something
        } else {
          self.onFetching = true
          setTimeout(() => {
            self.$refs.scrollerBottom.donePullup()
            self.curPage++
            self.getList()
            self.onFetching = false
          }, 2000)
        }
      },
      /**
       * 获取全部列表
       */
      getList () {
        var self = this
        if (self.type === false) {
          self.$http.post(process.env.BASE_API + '/apiquerySysMails.do', qs.stringify({ 'pageNum': self.curPage, 'pageSize': '10' }))
            .then(function (res) {
              console.log(res)
              if (res.data === 'noLogin') {
                self.noLoginShow = true
              } else if (res.data.data === '') {
                self.type = true
              } else {
                _.each(res.data.data, function (v) {
                  var item = {
                    id: v.id,
                    title: v.mailTitle,
                    time: moment(v.sendTime.time).format('YYYY-MM-DD hh:mm:ss'),
                    data: v
                  }
                  self.data.push(item)
                })
                if (res.data.data.length < 10) {
                  self.type = true
                }
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      },
      /**
       * 查看详情
       */
      goDetail (item) {
        var self = this
        self.popupShow = true
        self.item = item
//        self.$router.push({name: 'messageDetail', params: {item: item}})
      },
      goSetting () {
        this.$router.push({name: `pushSettings`, params: {}})
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
        self.getList()
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>
<style lang="less">
  .message .vux-divider {
    padding: 5vh 0;
  }
  .message .minContainer .xs-container {
    height: 95vh;
  }
</style>
