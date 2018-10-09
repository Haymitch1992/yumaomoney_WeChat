<template>
  <div>
    <x-header :left-options="leftOptions" @on-click-back="goBack()">官网公告</x-header>
    <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-pullup-loading="loadMore"
              lock-x ref="scrollerBottom" height="-48">
      <group>
        <cell primary="title" v-for="item in data" :title="item.title" :value="item.publishTime" :link="href+'/frontNewsDetails.do?id='+item.id" :key="item.id" is-link></cell>
      </group>
      <divider v-show="(parmes.pageNum === parmes.pageTotal)">没有更多了</divider>
    </scroller>
  </div>
</template>

<script>
  import axios from 'axios'
  import _ from 'lodash'
  import moment from 'moment'
  import { Group, XHeader, Cell, Scroller, Divider } from 'vux'

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
    name: 'WebsiteNotice',
    components: {
      Group,
      XHeader,
      Cell,
      Scroller,
      Divider
    },
    data () {
      return {
        data: [],
        href: '',
        parmes: {
          type: true,
          ac: 'list',
          id: 10,
          pageSize: 20,
          pageNum: 0,
          pageNext: null,
          pagePre: null,
          pageTotal: 12,
          total: null
        },
        leftOptions: {
          preventGoBack: true
        },
        pullupDefaultConfig: pullupDefaultConfig
      }
    },
    methods: {
      goBack () {
        this.$router.push({name: 'disclosure', params: {listType: 4}})
      },
      getList () {
        var self = this
        if (!self.parmes.type || (self.parmes.pageNum === self.parmes.pageTotal)) {
          return
        }
        self.parmes.type = false
        axios.get(process.env.BASE_API + '/queryNewsListPage.do', {params: { 'paramMap.PageNum': self.parmes.pageNum + 1, 'paramMap.PageSize': self.parmes.pageSize }})
          .then(function (res) {
            self.parmes.pageNum++
            _.each(res.data, function (v) {
              v.publishTime = moment(v.publishTime).format('YYYY-MM-DD')
              self.data.push(v)
            })
            self.parmes.type = true
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      /**
       * 加载更多列表
       */
      loadMore () {
        var self = this
        self.$refs.scrollerBottom.donePullup()
        self.getList()
      },
      init () {
        var self = this
        self.getList()
        self.href = window.location.origin
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>
