<template>
  <div>
    <!--背景图-->
    <div class="center-bg">
      <x-header>个人中心</x-header>
      <!--状态信息-->
      <div class="header">
        <div class="fl">
          <img class="user" :src="origin+'/'+data.homeMap.personalHead" v-if="data.homeMap.personalHead !== ''">
          <img class="user" :src="origin+'/images/default-img.jpg'" v-if="data.homeMap.personalHead === ''">
        </div>
        <div class="userContent fl">
          <div class="h30">{{data.homeMap.usernameBak}}</div>
          <div class="h30 ">
            <span class="mini-card vipStatus" :class="'v'+data.homeMap.vipStatus">VIP{{data.homeMap.vipStatus * 1 + 1}}</span>
            <span class="mini-card textB">已实名</span>
            <span class="mini-card textC">已开通存管</span>
          </div>
        </div>
      </div>
    </div>
    <!--操作-->
    <div class="operation">
      <group>
        <cell title="会员中心" is-link link="/user/center/member"></cell>
        <cell title="实名认证" :value="data.homeMap.realNameBak+'('+data.homeMap.idNoBak+')'"></cell>
        <cell title="手机号" :value="data.homeMap.usernameBak" is-link link="/user/center/changeNumber"></cell>
        <cell title="银行卡" value="未绑定" is-link v-if="(data.bankMap === '')"></cell>
        <cell title="银行卡" :value="data.bankMap.cardStatus === '1' ? '已绑定' : data.bankMap.cardStatus === '2' ? '申请中' : '未绑定'"
              is-link link="/user/center/changeCard" v-if="(data.bankMap !== '')"></cell>
        <cell title="风险测评" value="未评测" is-link link="/user/center/question" v-show="(data.QuestionnaireMap.retKey === 'NotAnsweringQuestions')"></cell>
        <cell title="风险测评" :value="(data.QuestionnaireMap.scoreStatus === '1') ? '保守型' : (data.QuestionnaireMap.scoreStatus === '2') ? '稳健型' : '进取型'"
              is-link link="/user/center/question" v-show="(data.QuestionnaireMap.retKey === 'AnsweringQuestions')"></cell>
      </group>
    </div>
    <div class="pt20">
      <div class="submit-box">
        <x-button @click.native="logout('home')" type="primary">安全退出</x-button>
      </div>
    </div>
    <alert v-model="noLoginShow" title="登录失效" @on-hide="logout('login')">请重新登录</alert>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XButton, AlertModule, Alert } from 'vux'

  export default {
    name: 'Center',
    components: {
      Group,
      Cell,
      XHeader,
      XButton,
      AlertModule,
      Alert
    },
    data () {
      return {
        href: '',
        level: 1,
        origin: '',
        noLoginShow: false,
        data: {
          homeMap: {
            personalHead: ''
          },
          bankMap: {},
          QuestionnaireMap: {}
        }
      }
    },
    methods: {
      logout (type) {
        var self = this
        self.$http.post(process.env.BASE_API + '/apilogout.do', null)
          .then(function () {
            window.localStorage.removeItem('Flag')
            self.$store.dispatch('setUser', false)
            self.$cookies.remove('tokenClientkey')
            self.$cookies.remove('apiHomeData')
            if (type === 'home') {
              self.$router.push('/home')
            } else if (type === 'login') {
              self.$router.push('/start/login')
            }
          })
          .catch(function (error) {
            console.log(error)
          })
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
              self.$cookies.set('apiHomeData', res.data.data, '1d')
              self.data.homeMap.usernameBak = self.data.homeMap.username.substr(0, 3) + '****' + self.data.homeMap.username.substr(7)
              self.data.homeMap.idNoBak = self.data.homeMap.idNo
              let idNoRuten = self.data.homeMap.idNo.substring(3, 14)
              self.data.homeMap.idNoBak = self.data.homeMap.idNoBak.replace(idNoRuten, '*******')
              self.data.homeMap.realNameBak = self.data.homeMap.realName.substr(0, 1) + '**'
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      init () {
        var self = this
        self.href = window.location.origin
        if (self.$cookies.get('apiHomeData')) {
          self.data = self.$cookies.get('apiHomeData')
          self.data.homeMap.usernameBak = self.data.homeMap.username.substr(0, 3) + '****' + self.data.homeMap.username.substr(7)
          self.data.homeMap.idNoBak = self.data.homeMap.idNo
          let idNoRuten = self.data.homeMap.idNo.substring(3, 14)
          self.data.homeMap.idNoBak = self.data.homeMap.idNoBak.replace(idNoRuten, '*******')
          self.data.homeMap.realNameBak = self.data.homeMap.realName.substr(0, 1) + '**'
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
  .center-bg{
    height:200px;
    background: #F6F6F6 url("../../../assets/images/center-bg.jpg") no-repeat 0 -60px;
    background-size:cover;
    .vux-header{
      background: transparent;
    }
    .vux-header .vux-header-left .vux-header-back{
      opacity: 0;
    }
    .header {
      height: 150px;
      width: 94%;
      margin:0 auto;
      background: #fff;
      padding:40px 0;
      box-sizing: border-box;
      .userContent {
        margin-left:10px;
        margin-top:4px;
      }
    }
    .vipStatus.v1{
      background: #C2C9D3;
      color: #666;
    }
    .vipStatus.v2{
      background: #F6C2AC;
      color: #8A6556;
    }
    .vipStatus.v3{
      background: #C2C9D3;
      color: #666;
    }
    .vipStatus.v4{
      background: #E0B56C;
      color: #946D31;
    }
    .vipStatus.v5{
      background: #f1eded;
      color: #919192;
    }
    .vipStatus.v6{
      background: #F8CBAA;
      color: #946D31;
    }
    .vipStatus.v7{
      background: #2D2D2D;
      color: #FCD4AF;
    }
    .textB{
      background: #FE9494;
    }
    .textC{
      background: #FFAD95;
    }
  }
  .operation{
    width: 94%;
    margin:0 auto;
    .weui-cell{
      padding:14px;
      font-size:16px;
    }
    .weui-cell__ft{
      font-size: 14px;
    }
  }

  .user {
    background: #FE9494 url("../../../assets/images/icon/user-icon_13.png") no-repeat;
    background-size: cover;
    width: 70px;
    height: 70px;
    border-radius: 35px;
    box-sizing: border-box;
    margin-left:20px;
  }
  .mini-card {
    padding: 4px 8px;
    font-size:12px;
    border-radius: 6px;
    color: #fff;
    margin-right:6px;
  }
  .submit-box{
    width:94%;
    margin:30px auto 0;
    padding:0;
    .weui-btn{
      line-height: 2.5;
    }
    button{
      background: #FF3E3F;
      color: #fff;

    }
  }
</style>
