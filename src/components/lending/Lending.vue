<template>
  <div>
    <!--微信端不显示头部-->
    <!--<div class="header-box">-->
      <!--<x-header :left-options='{showBack: false}' class="header-fixed">出借列表</x-header>-->
    <!--</div>-->
    <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-pullup-loading="loadMore"
              use-pulldown :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
              lock-x ref="scrollerBottom" height="-48">
      <div>
        <swiper loop auto :list="swiper_list" v-model="swiper_index" @on-index-change="swiper_onIndexChange"></swiper>
        <grid :show-lr-borders="false" >
          <grid-item link="/user/aboutMe" label="关于我们" key="0">
            <img slot="icon" src="../../assets/images/aboutMe.png">
          </grid-item>
          <grid-item link="/events" label="在线活动" key="1">
            <img slot="icon" src="../../assets/images/active.png">
          </grid-item>
          <grid-item link="http://a.app.qq.com/o/simple.jsp?pkgname=com.ionicframework.yumao958693" label="app下载" key="2">
            <img slot="icon" src="../../assets/images/appDown.png">
          </grid-item>
          <grid-item link="/user/contactUs" label="联系我们" key="3">
            <img slot="icon" src="../../assets/images/linkme.png">
          </grid-item>
        </grid>
        <group label-width="4.5em" label-margin-right="2em" label-align="right" v-for="item in list" :key="item.key">
          <panel :list="item.panel" :type="item.type" @on-img-error="onImgError"></panel>
          <x-progress :percent="item.progress" :show-cancel="false"></x-progress>
        </group>
      </div>
    </scroller>
  </div>
</template>

<script>
  import axios from 'axios'
  import _ from 'lodash'
  import { XHeader, Swiper, Grid, GridItem, Group, Card, Panel, XProgress, Scroller } from 'vux'

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
      Scroller
    },
    data () {
      return {
        swiper_list: [
          {
            url: 'javascript:',
            img: 'http://39.107.59.233/activity/banner-wechat-008.png',
            title: '新版APP 亮点'
          }, {
            url: 'javascript:',
            img: 'http://39.107.59.233/activity/banner-wechat-003.jpg',
            title: '鱼猫新手专享'
          }, {
            url: 'javascript:',
            img: 'http://39.107.59.233/activity/banner-wechat-004.png', // 404
            title: '用户交易总额 突破7亿元',
            fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
          }
        ],
        list: [],
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
                    desc: '融资额度:' + v.borrowAmount + ' 期限：' + v.deadline,
                    url: '/financeDetail?id=149',
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

<style>
  .header-fixed{
    position: fixed;
    top: 0;
    z-index: 500;
    width: 100%;
  }
</style>
