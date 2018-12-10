<template>
  <div class="user-container">
    <group gutter="0">
      <div class="header">
        <div class="header-top">
          <div class="fl">
            <img class="user" :src="origin+'/'+data.homeMap.personalHead" @click="jump('/user/center')" v-if="data.homeMap.personalHead !== ''">
            <img class="user" :src="origin+'/images/default-img.jpg'" @click="jump('/user/center')" v-if="data.homeMap.personalHead === ''">
          </div>
          <div class="userContent fl">
            <div class="h30">{{data.homeMap.usernameBak}}</div>
            <div class="h30" v-show="data.cgtStatus === '0'">待开户</div>
            <div class="h30" v-show="data.cgtStatus === '2'">审核中</div>
            <div class="h30" v-show="data.cgtStatus === '3'">已退回</div>
            <div class="h30" v-show="data.cgtStatus === '4'">已拒绝</div>
            <div class="h30" v-show="data.cgtStatus === '5'">待激活</div>
            <div class="h30" v-show="data.cgtStatus === '15'">待绑卡</div>
            <div class="h30" v-show="data.cgtStatus === '20'">开户成功</div>
          </div>
          <div class="fr">
            <div>
              <div class="cog" @click="jump('/user/setting')"></div>
            </div>
            <div class="eyeBox">
              <div :class="[ active ? 'eye' : 'eye-off' ]" @click="active = !active"></div>
            </div>
          </div>
        </div>
        <flexbox :gutter="0">
          <flexbox-item>
            <div class="" @click="jumpParams('assets', 1)">
              <div class="center f20" v-show="active">{{data.accmountStatisMap.accountSum}}</div>
              <div class="center f20" v-show="!active">****</div>
              <div class="center f14 mT4">总资产</div>
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class=" middleItem" @click="jumpParams('assets', 2)">
              <div class="center f20" v-show="active">{{data.lastMonthDetails.lastMonthRevenue}}</div>
              <div class="center f20" v-show="!active">****</div>
              <div class="center f14 mT4">上月收益</div>
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="" @click="jumpParams('assets', 3)">
              <div class="center f20" v-show="active">{{data.totalRevenue}}</div>
              <div class="center f20" v-show="!active">****</div>
              <div class="center f14 mT4">累计收益</div>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
    </group>
    <group>
      <div class="balanceRow">
        <grid :show-lr-borders="false" >
            <div class="m10 f14 fl">账户余额：<span v-show="active">{{data.accmountStatisMap.usableAmount}}</span><span v-show="!active">****</span>元</div>
          <div class="m10 f14 fr" @click="jump('/user/cash')">提现</div>
            <div class="splitLine fr"></div>
          <div class="m10 f14 fr textC" @click="jump('/user/recharge')">充值</div>
        </grid>
      </div>
      <grid :show-lr-borders="false" >
        <grid-item link="/user/investment" label="我的投资" key="0">
          <img slot="icon" src="../../assets/images/icon/icon-investment.png">
        </grid-item>
        <grid-item link="/user/calendar" label="回款日历" key="1">
          <img slot="icon" src="../../assets/images/icon/icon-calendar.png">
        </grid-item>
        <grid-item link="/user/note" label="资金记录" key="2">
          <img slot="icon" src="../../assets/images/icon/icon-note.png">
        </grid-item>
      </grid>
      <grid :show-lr-borders="false" >
        <grid-item link="/user/coupons" label="优惠券" key="0">
          <img slot="icon" src="../../assets/images/icon/icon-coupons.png">
        </grid-item>
        <grid-item link="/user/experience" label="体验金" key="1">
          <img slot="icon" src="../../assets/images/icon/icon-experience.png">
        </grid-item>
        <grid-item link="/user/auto" label="自动投标" key="2">
          <img slot="icon" src="../../assets/images/icon/icon-auto.png">
        </grid-item>
      </grid>
      <grid :show-lr-borders="false" >
        <grid-item link="/user/invited" label="邀请好友" key="0">
          <img slot="icon" src="../../assets/images/icon/icon-invited.png">
        </grid-item>
        <grid-item link="/user/message" label="我的消息" key="1">
          <img slot="icon" src="../../assets/images/icon/icon-message.png">
        </grid-item>
        <grid-item link="/user/contactUs" label="客服与反馈" key="2">
          <img slot="icon" src="../../assets/images/icon/icon-contactUs.png">
        </grid-item>
      </grid>
    </group>
    <alert v-model="noLoginShow" title="登录失效" @on-hide="logout">请重新登录</alert>
  </div>
</template>

<script>
  import { Group, Grid, GridItem, Cell, XHeader, Flexbox, FlexboxItem, AlertModule, Alert } from 'vux'

  export default {
    name: 'UserHome',
    components: {
      Group,
      Grid,
      GridItem,
      Cell,
      XHeader,
      Flexbox,
      FlexboxItem,
      AlertModule,
      Alert
    },
    data () {
      return {
        active: false,
        data: {
          homeMap: {
            personalHead: ''
          },
          accmountStatisMap: {},
          lastMonthDetails: {}
        },
        origin: '',
        noLoginShow: false
      }
    },
    methods: {
      jump (path) {
        this.$router.push({path: path})
      },
      jumpParams (name, params) {
        this.$router.push({name: name, params: {listType: params}})
      },
      /**
       * 登录失效跳转
       */
      logout () {
        var self = this
        window.localStorage.removeItem('Flag')
        self.$store.dispatch('setUser', false)
        self.$cookies.remove('tokenClientkey')
        self.$cookies.remove('apiHomeData')
        self.$router.push('/start/login')
      },
      /**
       * 获取数据
       */
      getData () {
        var self = this
        self.$http.post(process.env.BASE_API + '/apihome.do', null)
          .then(function (res) {
            /**
             * 验证登录是否失效
             */
            if (res.data === 'noLogin') {
              self.noLoginShow = true
            } else {
              self.data = res.data.data
              self.$cookies.set('apiHomeData', self.data, '1d')
              self.data.homeMap.usernameBak = self.data.homeMap.username.substr(0, 3) + '****' + self.data.homeMap.username.substr(7)
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      init () {
        var self = this
        if (self.$cookies.get('apiHomeData')) {
          self.data = self.$cookies.get('apiHomeData')
        }
        if ((self.$http.defaults.headers.tokenClientkey === undefined) && self.$cookies.get('tokenClientkey')) {
          self.$http.defaults.headers.tokenClientkey = self.$cookies.get('tokenClientkey')
        }
        self.getData()
      }
    },
    created () {
      var self = this
      self.origin = self.GLOBAL.origin
      self.init()
    }
  }
</script>

<style lang="less">
  @themeColorA:#FF8584;
  @themeColorB:#FF5152;
  @textColorWhite:#fff;
  @textColor:#666;
  .user-container{
    .header{
      background: -webkit-linear-gradient(@themeColorA, @themeColorB); /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(@themeColorA, @themeColorB); /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(@themeColorA, @themeColorB); /* Firefox 3.6 - 15 */
      background: linear-gradient(@themeColorA, @themeColorB); /* 标准的语法 */
      color: @textColorWhite;
      padding: 20px;
      height: 150px;
      .header-top{
        height:100px;
      }
      .middleItem{
        border-right:1px solid #fff;
        border-left:1px solid #fff;
      }
    }
    .balanceRow{
      line-height: 30px;
      .weui-grids{
        padding:0 8px;
        color: @textColor;
      }
      .splitLine {
        margin: 18px 0 5px;
        border-left: 1px solid #D9D9D9;
        height: 14px;
      }

    }
    .f20{
      font-size: 20px;
    }
    .weui-grid__icon{
      margin:2px auto 8px;
    }
    .weui-grid__label span{
      color: @textColor;
    }
    .weui-grid:after{
      border-bottom:none;
    }
    .mT4{
      padding-top:4px;
    }
    .eyeBox{
      padding-top:20px;
    }
    .textC{
      color: @themeColorB;
    }
    .userContent {
      margin-left: 10px;
      height: 50px;
      padding-top:16px;
      padding-left:10px;
    }
    .user {
      background: url("../../assets/images/icon/user-icon_13.png") no-repeat;
      background-size: cover;
      width: 56px;
      height: 56px;
      box-sizing: border-box;
      margin-top:20px;
    }
    .cog {
      background: url("../../assets/images/icon/user-icon_10.png") no-repeat;
      background-size: cover;
      width: 24px;
      height: 24px;
    }
    .eye {
      background: url("../../assets/images/icon/user-icon_03.png") no-repeat;
      background-size: cover;
      width: 24px;
      height: 24px;
    }
    .eye-off {
      background: url("../../assets/images/icon/user-icon_05.png") no-repeat;
      background-size: cover;
      width: 24px;
      height: 24px;
    }
  }
</style>
