<template>
  <div class="homePage">
    <!--微信端不显示头部-->
    <!--<div class="header-box">-->
      <!--<x-header :left-options='{showBack: false}' class="header-fixed">出借列表</x-header>-->
    <!--</div>-->
    <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-scroll-bottom="loadMore()"
              use-pulldown :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
              lock-x ref="scrollerBottom" height="-48" style="top: -10px;">
      <div :class="{ minContainer: (list.length<6) }">
        <!--项目列表-->
        <group label-width="4.5em" label-margin-right="2em" label-align="right" v-for="item in list" :key="item.key">
          <panel :list="item.panel" :type="item.type" @on-img-error="onImgError" @click.native="goto(item)"></panel>
          <x-progress :percent="item.progress" :show-cancel="false"></x-progress>
        </group>
        <divider v-show="lending">没有更多数据了~</divider>
        <load-more v-show="!lending" tip="加载中"></load-more>
      </div>
    </scroller>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { XHeader, Swiper, Grid, GridItem, Group, Card, Panel, XProgress, Scroller, LoadMore, Divider } from 'vux'

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
    name: 'Lending',
    components: {
      XHeader,
      Swiper,
      Grid,
      GridItem,
      Group,
      Card,
      Panel,
      XProgress,
      Scroller,
      LoadMore,
      Divider
    },
    data () {
      return {
        onFetching: false,
        lending: false,
        list: [],
        curPage: 1,
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
       * 加载更多列表
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
       * 获取列表
       */
      getList () {
        var self = this
        if (self.lending === false) {
          self.$http.get(process.env.BASE_API + '/financeJson.do', {params: { 'curPage': self.curPage }})
            .then(function (res) {
              if (res.data === '') {
                self.lending = true
              } else {
                _.each(res.data, function (v) {
                  var item = {
                    data: v,
                    key: v.id,
                    type: '4',
                    progress: parseInt(v.progress),
                    panel: [
                      {
                        title: v.borrowTitle,
                        desc: '融资额度:' + v.borrowAmount + ' 期限：' + v.deadline,
                        meta: {
                          source: '年利率',
                          date: '7% + ' + (parseInt(v.annualRate) - 7) + '%',
                          other: '完成比例： ' + parseInt(v.progress) + '%'
                        }
                      }
                    ]
                  }
                  self.list.push(item)
                })
                if (res.data.length < 10) {
                  self.lending = true
                }
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      },
      goto (item) {
        var self = this
        self.$router.push({name: 'financeDetail', params: {data: item}})
      }
    },
    created () {
      var self = this
      self.getList()
    }
  }
</script>
<style lang="less">
  .homePage .vux-divider {
    padding: 5vh 0;
  }
  .homePage .minContainer .xs-container {
    height: 95vh;
  }
</style>
