<template>
  <div class="homePage">
    <!--微信端不显示头部-->
    <!--<div class="header-box">-->
      <!--<x-header :left-options='{showBack: false}' class="header-fixed">出借列表</x-header>-->
    <!--</div>-->
      <div>
        <swiper loop auto :list="swiper_list" v-model="swiper_index" @on-index-change="swiper_onIndexChange"></swiper>

        <!--官方公告-->
        <div class="notice">
          <flexbox>
            <flexbox-item :span="1/12">
              <span class="noticeIcon"></span>
            </flexbox-item>
            <flexbox-item>
              <marquee>
                <marquee-item v-for="item in notice_list" :key="item.id" @click.native="goDetail(item)" class="align-middle">{{item.title}}</marquee-item>
                <!--<marquee-item v-for="item in notice_list" :key="item.id" :link="href+'/frontNewsDetails.do?id='+item.id" class="align-middle">{{item.title}}</marquee-item>-->
              </marquee>
            </flexbox-item>
            <flexbox-item :span="1/12" @click.native="goList()">
                <span class="noticeMore"></span>
            </flexbox-item>
          </flexbox>
        </div>
        <!--项目展示-->
        <div class="borrowList">
          <div class="borrow-item">
            <p class="borrow-title">
              <span class="m-r-4">核心企业贷 YM01-0946</span>
            </p>
            <div class="borrow-info clearfloat">
              <dl class="b-l">
                <dt class="borrow-num color-1">
                  <span>11</span>%
                </dt>
                <dd>年出借利率</dd>
              </dl>
              <dl class="b-m">
                <dt class="borrow-num"><span>4</span>个月</dt>
                <dd>借款期限</dd>
              </dl>
              <dl class="b-m-2">
                <dt class="borrow-num"><span>50</span>万元</dt>
                <dd>借款金额</dd>
              </dl>
              <div class="b-r">
                <a href="/#/lending/financeDetail?id=1209" class="borrow-btn">立即赚钱</a>
              </div>
            </div>
            <p class="earnings">万元出借预期收益<span class="margin-span">366.68</span>元</p>
          </div>
          <div class="borrow-item">
            <p class="borrow-title">
              <span class="m-r-4">核心企业贷 YM01-0946</span>
            </p>
            <div class="borrow-info clearfloat">
              <dl class="b-l">
                <dt class="borrow-num color-1">
                  <span>11</span>%
                </dt>
                <dd>年出借利率</dd>
              </dl>
              <dl class="b-m">
                <dt class="borrow-num"><span>4</span>个月</dt>
                <dd>借款期限</dd>
              </dl>
              <dl class="b-m-2">
                <dt class="borrow-num"><span>50</span>万元</dt>
                <dd>借款金额</dd>
              </dl>
              <div class="b-r">
                <a href="/#/lending/financeDetail?id=1209" class="borrow-btn">立即赚钱</a>
              </div>
            </div>
            <p class="earnings">万元出借预期收益<span class="margin-span">366.68</span>元</p>
          </div>
        </div>
        <!--平台背景-->
        <div class="advantage">
          <p>累计交易总额：700,000,000元</p>
          <grid :show-lr-borders="false" >
            <grid-item link="/user/aboutMe" label="了解鱼猫" key="0">
              <img slot="icon" src="../../assets/images/aboutMe.png">
            </grid-item>
            <grid-item link="/home/safety" label="安全保障" key="1">
              <img slot="icon" src="../../assets/images/active.png">
            </grid-item>
            <grid-item link="http://a.app.qq.com/o/simple.jsp?pkgname=com.ionicframework.yumao958693" label="app下载" key="2">
              <img slot="icon" src="../../assets/images/appDown.png">
            </grid-item>
            <grid-item link="/home/disclosure" label="信息披露" key="3">
              <img slot="icon" src="../../assets/images/linkme.png">
            </grid-item>
          </grid>
        </div>
      </div>

  </div>
</template>

<script>
  import _ from 'lodash'
  import moment from 'moment'
  import { XHeader, Swiper, Grid, GridItem, Group, Card, Panel, XProgress, Marquee, MarqueeItem, Flexbox, FlexboxItem } from 'vux'

  export default {
    name: 'Home',
    components: {
      XHeader,
      Swiper,
      Grid,
      GridItem,
      Group,
      Card,
      Panel,
      XProgress,
      Marquee,
      MarqueeItem,
      Flexbox,
      FlexboxItem
    },
    data () {
      return {
        href: '',
        data: [],
        swiper_list: [],
        notice_list: [],
        list: [],
        swiper_index: 0,
        num: 0
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
       * 获取轮播列表
       */
      getSwiperList () {
        var self = this
        self.$http.get(process.env.BASE_API + '/jsonData/activity.json')
          .then(function (res) {
            self.swiper_list = []
            _.each(res.data, function (v) {
              var item = {
                img: 'https://www.yumaomoney.com' + v.wechatBanner,
                title: v.title,
                url: v.wechatlink
              }
              self.swiper_list.push(item)
              self.num++
            })
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      /**
       * 获取轮播列表
       */
      getNoticeList () {
        var self = this
        // 测试存储cookie
        // self.$cookies.set('ymCookieUK', '123456789')
        self.$http.get(process.env.BASE_API + '/queryNewsListPage.do', {headers: {'X-AUTH-TOKEN': '123'}, params: { 'paramMap.PageNum': 1, 'paramMap.PageSize': 5 }})
          .then(function (res) {
            _.each(res.data, function (v) {
              v.publishTime = moment(v.publishTime).format('YYYY-MM-DD')
              self.notice_list.push(v)
            })
            console.log(self.notice_list)
          })
          .catch(function (error) {
            console.log(error)
          })
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
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      /**
       * 前往消息列表
       */
      goList () {
        var self = this
        self.$router.push({path: '/home/disclosure/websiteNotice'})
      },
      /**
       * 前往消息详情
       */
      goDetail (item) {
        var self = this
        window.location = self.href + '/frontNewsDetails.do?id=' + item.id
      },
      goto (item) {
        var self = this
        self.$router.push({name: 'financeDetail', params: {data: item}})
      }
    },
    created () {
      var self = this
      self.href = window.location.origin
      self.getList()
      self.getSwiperList()
      self.getNoticeList()
    }
  }
</script>
<style lang="less">
.clearfloat{
  zoom: 1;
}
.clearfloat:after{
  display: block;
  clear: both;
  content: '';
  visibility: hidden;
}
.borrowList{
  margin-top:6px;
  background: #fff;
  font-size: 12px;
  .borrow-item{
    width: 100%;
    padding:10px 0;
    box-sizing: border-box;
    background: #fff;
    color: #a3a3a3;
    margin:.3rem 0 0;
    padding:10px 20px;
    border-bottom:6px solid #f8f8f8;
  }
  .borrow-item:last-child{
    border-bottom: none;
  }
  .borrow-item .borrow-title{
    color: #666;
    font-size: 14px;
  }
  .m-r-4{
    margin-right:4px;
  }
  .borrow-item .borrow-num{
    font-size: 16px;
    color: #2c2c2c;
  }
  .borrow-item .borrow-num.color-1{
    color: #fd535e;
  }
  .borrow-item .borrow-num span{
    font-size:25px;
    color: #2c2c2c;
    font-family: sans-serif;
  }
  .borrow-item .borrow-num.color-1 span{
    color: #fd535e;
  }
  .borrow-info{
    padding: 10px 0 10px;
  }
  .borrow-item .b-l{
    width:25%;
    float: left;
    height:60px;
  }
  .borrow-item .b-m{
    width:25%;
    float: left;
    height:60px;
  }
  .borrow-item .b-m-2{
    width:30%;
    float: left;
    height:60px;
  }
  .borrow-item .b-r{
    width:20%;
    float: left;
    height:60px;
    line-height: 60px;
  }
  .borrow-btn{
    width: 100%;
    border-radius: 4px;
    color: #fff;
    background: #fd535e;
    text-align: center;
    line-height: 24px;
    display: inline-block;
    font-size: 14px;
  }
  .borrow-btn.status-4{
    background:#ddd;
  }
  .borrow-btn.status-5{
    background:#ddd;
  }
  .borrow-item .earnings{
    padding-top:8px;
    border-top:1px solid #f0f2f5;
  }
  .borrow-item .earnings span{
    color: #fd535e;
    margin:0 2px;
  }
  .margin-span{
    margin:0 2px;
  }
}
.advantage{
  margin-top:6px;
  background: #fff;
  padding:0 20px;
  color: #666;
  .weui-grid__label{
    color: #666;
  }
  p{
    text-align: center;
    margin:0;
    padding:0;
    font-size:14px;
    line-height: 30px;
  }
  .weui-grid__icon + .weui-grid__label{
    margin-top:2px;
  }
  .weui-grids:before{
    border:none;
  }
  .weui-grid:after{
    border:none;
  }
  .weui-grid{
    padding:10px;
  }
  .weui-grid:before{
    border:none;
  }
}
.notice{
  line-height: 44px;
  background: #fff;
  height: 44px;
  padding:0 14px;
  overflow: hidden;
  .noticeIcon{
    width:22px;
    height:22px;
    background: url("../../assets/images/icon/home-icon_05.png") no-repeat;
    background-size: cover;
    display: block;
    float: left;
  }
  .noticeMore{
    width:22px;
    height:22px;
    background: url("../../assets/images/icon/home-icon_03.png") no-repeat;
    background-size: cover;
    display: block;
    float: right;
  }
}

</style>
