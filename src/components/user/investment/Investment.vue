<template>
  <div>
    <x-header>我的投资</x-header>
    <tab style="z-index: 20">
      <tab-item :selected="list.listType === 1" @on-item-click="list.listType = 1">融资中</tab-item>
      <tab-item :selected="list.listType === 2" @on-item-click="list.listType = 2">还款中</tab-item>
      <tab-item :selected="list.listType === 3" @on-item-click="list.listType = 3">已还清</tab-item>
    </tab>
    <div style="position: relative; top: -10px; z-index: 10;">
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
  </div>
</template>

<script>
  import _ from 'lodash'
  import moment from 'moment'
  import { Group, Cell, XHeader, Tab, TabItem, Panel, Scroller } from 'vux'

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
      Scroller
    },
    data () {
      return {
        list: {
          listType: 1
        },
        data: [],
        curPage: 1,
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
       * 加载更多列表
       */
      loadMore () {
        var self = this
        console.log('加载更多')
        self.$refs.scrollerBottom.donePullup()
        self.curPage++
        self.getList()
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
      getList () {
        var self = this
        self.$http.get(process.env.BASE_API + '/financeJson.do', {params: { 'curPage': self.curPage }})
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
                    meta: {
                      source: '年利率',
                      date: '7% + ' + (parseInt(v.annualRate) - 7) + '%',
                      other: '投资时间： ' + moment(v.autoBidEnableTime, 'YY-MM-DD hh:mm:ss').format('YYYY-MM-DD HH:mm:ss')
                    }
                  }
                ]
              }
              self.data.push(item)
            })
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      init () {
        var self = this
        self.list.listType = self.$route.params.listType ? self.$route.params.listType : 1
        self.getList()
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>
