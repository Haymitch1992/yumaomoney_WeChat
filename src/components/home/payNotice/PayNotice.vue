<template>
  <div>
    <x-header :left-options="leftOptions" @on-click-back="goBack()">支付公告</x-header>
    <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-pullup-loading="loadMore"
              lock-x ref="scrollerBottom" height="-48">
      <group>
        <cell primary="title" v-for="item in data" :value="item.pubdate" @click.native="jump(item)" :key="item.id" is-link>
          <span slot="title" class="cell-overflow-xl">{{item.title}}</span>
        </cell>
      </group>
      <divider v-show="(parmes.pageNum === parmes.pageNext)">没有更多了</divider>
      <load-more v-show="(parmes.pageNum !== parmes.pageTotal)" tip="加载中"></load-more>
    </scroller>
  </div>
</template>

<script>
  import _ from 'lodash'
  import $ from 'jquery'
  import { Group, XHeader, Cell, Scroller, LoadMore, Divider } from 'vux'

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
    name: 'PayNotice',
    components: {
      Group,
      XHeader,
      Cell,
      Scroller,
      LoadMore,
      Divider
    },
    data () {
      return {
        parmes: {
          type: true,
          ac: 'list',
          id: 10,
          pageSize: 20,
          pageNum: 1,
          pageNext: null,
          pagePre: null,
          pageTotal: null,
          total: null
        },
        data: [],
        leftOptions: {
          preventGoBack: true
        },
        pullupDefaultConfig: pullupDefaultConfig
      }
    },
    methods: {
      jump (item) {
        this.$router.push({name: 'noticeDetail', params: {item: item}})
      },
      goBack () {
        this.$router.push({name: 'disclosure', params: {listType: 4}})
      },
      getList () {
        var self = this
        if (!self.parmes.type || (self.parmes.pageNum === self.parmes.pageNext)) {
          return
        }
        self.parmes.type = false
        $.getJSON('https://yumaomoney.com/api/jsonPage.php?ac=list&id=' + self.parmes.id + '&pageNum=' + (self.parmes.pageNext ? self.parmes.pageNext : self.parmes.pageNum) + '&pageSize=' + self.parmes.pageSize + '&jsoncallback=?', function (data) {
          self.parmes.pageNum = data.pageNum
          self.parmes.pageNext = data.pageNext
          self.parmes.pagePre = data.pagePre
          self.parmes.pageTotal = data.pageTotal
          self.parmes.total = data.total
          _.each(data.data, function (v) {
            v.title = v.title.replace(/^【\d{4}-\d{2}-\d{2}】/g, '')
            self.data.push(v)
          })
          self.parmes.type = true
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
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>
