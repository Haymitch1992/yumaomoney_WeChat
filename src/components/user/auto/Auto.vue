<template>
  <div class="auto-invest">
    <x-header :left-options="leftOptions" @on-click-back="goBack()">自动投标</x-header>
    <div v-if="data.pageNum === 'A'">
      <!--未授权-->
      <div class="no-accredit">
        <img src="../../../assets/images/auto-invest.png" alt="未授权自动投标" >
      </div>
      <form id="cancle_invest" action="/cgt/authorizationUser.do" method="post">
        <input type="hidden" name="authList" value="TENDER" />
        <input type="submit" value="授权自动投标" class="go-accredit">
      </form>
    </div>
    <div v-if="data.pageNum === 'B'">
      <!--已授权-->
      <group>
        <x-switch title="自动投标状态" prevent-default v-model="data.autoType" @on-click="changeStatus"></x-switch>
      </group>
      <group>
        <cell title="单笔投资金额" :value="data.bidAmount + '元'"></cell>
        <cell title="保留账户金额" :value="data.remandAmount + '元'"></cell>
        <cell title="授权金额" :value="data.amount + '元'"></cell>
        <cell title="授权期限" :value="data.effectivedate"></cell>
      </group>
      <group>
        <cell title="最长投资期限" :value="data.deadlineEnd + '个月'"></cell>
        <cell title="最低年化收益" :value="data.rateStart + '%'"></cell>
      </group>
      <div class="pt20">
        <div class="submit-box">
          <x-button @click.native="change" type="primary">修改规则</x-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import qs from 'qs'
  import { Group, Cell, XHeader, XInput, Selector, Datetime, Checklist, Radio, XButton, CheckIcon, XSwitch } from 'vux'

  export default {
    name: 'Auto',
    components: {
      Group,
      Cell,
      XHeader,
      XInput,
      Selector,
      Datetime,
      Checklist,
      Radio,
      XButton,
      CheckIcon,
      XSwitch
    },
    data () {
      return {
        leftOptions: {
          preventGoBack: true
        },
        data: {
          amount: null,
          effectivedate: '',
          rateStart: '', // 最低年化收益
          deadlineEnd: '', // 最长投资期限
          bidAmount: '', // 单笔投资金额
          remandAmount: '', // 保留金额
          autoType: '',
          pageNum: ''
        },
        positive: function (value) {
          return {
            valid: value >= 0,
            msg: '单笔金额需大于0'
          }
        }
      }
    },
    methods: {
      changeStatus (newVal, oldVal) {
        var self = this
        console.log(newVal, oldVal)
        self.$vux.loading.show({
          text: '正在提交...'
        })
        var s = ''
        if (self.data.autoType) {
          s = 99
        } else {
          s = 1
        }
        self.$http.post(process.env.BASE_API + '/apiautomaticBidSet.do', qs.stringify({ 's': s }))
          .then(function (res) {
            if (res.data === 'noLogin') {
              console.log('未登录')
            } else if (res.data.data === '') {
              console.log('没有数据')
            } else {
              if (res.data.msg === '自动投标状态变更成功') {
                self.data.autoType = newVal
              } else {
                self.data.autoType = oldVal
              }
              self.$vux.loading.hide()
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      goBack () {
        var self = this
        self.$router.push('/user')
      },
      change () {
        var self = this
        this.$router.push({name: 'autoEdit', params: self.data})
      },
      saveTypeChange (val, label) {
        var self = this
        self.data.save = ''
        console.log('change', val, label)
      },
      autoCheck () {
        var self = this
        self.status = true
      },
      getInfo () {
        var self = this
        self.$http.post(process.env.BASE_API + '/apigetAutomaticBidMap.do')
          .then(function (res) {
            if (res.data === 'noLogin') {
              console.log('未登录')
            } else if (res.data.data === '') {
              console.log('没有数据')
            } else {
              // 若未授权 跳转新网授权 成功的回调页面 设置自动投标参数
              // 若已授权 判断是否设置过 如果没有 跳转设置自动投标参数
              // 否则 留在当前页面
              if (res.data.data.status === '0') {
                self.data.pageNum = 'A'
              } else {
                self.data.rateStart = res.data.data.rateStart
                self.data.deadlineEnd = res.data.data.deadlineEnd
                self.data.effectivedate = res.data.data.effectivedate
                self.data.amount = res.data.data.amount
                self.data.bidAmount = res.data.data.bidAmount
                self.data.remandAmount = res.data.data.remandAmount
                if (res.data.data.bidStatus === '2') {
                  self.data.autoType = true
                } else {
                  self.data.autoType = false
                }
                self.data.pageNum = 'B'
              }
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    created () {
      var self = this
      if ((self.$http.defaults.headers.tokenClientkey === undefined) && self.$cookies.get('tokenClientkey')) {
        self.$http.defaults.headers.tokenClientkey = self.$cookies.get('tokenClientkey')
      }
      self.getInfo()
      // 初始化的时候获取 自动投标状态
    }
  }
</script>
<style lang="less">
  .auto-invest{
    .vux-header{
      background: #fff;
    }
    .vux-header-title-area, .vux-header .vux-header-title{
      color: #333;
    }
    .vux-header .vux-header-left .vux-header-back{
      visibility: hidden;
    }
    .vux-header .vux-header-left .left-arrow:before{
      border: 1px solid #333;
      border-width: 1px 0 0 1px;
    }
    .no-accredit{
      width: 100%;
      margin: 20px 0 40px;
      padding-top: 50px;
      padding-bottom: 20px;
      background: #fff;
      img{
        display: block;
        width: 50%;
        margin:0 auto;
      }
    }
    .go-accredit{
      display: block;
      width: 90%;
      height: 44px;
      line-height: 44px;
      margin: 0 auto;
      background: #E64340;
      color: #fff;
      border-radius: 6px;
      border: none;
      font-size: 16px;
    }
    .weui-cells{
      margin-top: 1em;
    }
    .weui-cell{
      font-size: 14px;
      padding: 15px;
    }
    .weui-label{
      width: 9em !important;
    }
    .submit-box{
      width: 100%;
    }
    .weui-btn{
      border-radius: 0;
    }
  }
</style>
