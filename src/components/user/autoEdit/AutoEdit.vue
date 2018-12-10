<template>
  <div class="autoEdit">
    <x-header>自动投标</x-header>
    <group>
      <cell title="银行授权状态（已授权）" >
        <form id="cancle_invest" action="/cgt/cancelAuthorizationUser.do" method="post">
          <input type="hidden" name="authList" value="TENDER" />
          <input type="submit" value="取消授权" class="cancel-btn">
        </form>
      </cell>
    </group>
    <group>
      <x-input v-model="data.bidAmount" type="number" title="单笔金额(元)" :is-type="positive" placeholder="请输入单笔出借金额"></x-input>
      <x-input v-model="data.rateStart" type="number" title="最低年化收益(%)" :is-type="positive" placeholder="请输入最低年化收益"></x-input>
      <x-input v-model="data.deadlineEnd" type="number" title="最长投资期限(月)" :is-type="positive" placeholder="请输入最长投资期限"></x-input>
      <x-switch title="设置保留金额" v-model="data.retain"></x-switch>
      <x-input v-if="data.retain" v-model="data.remandAmount" type="number" title="保留金额(元)" :is-type="positive" placeholder="请输入保留金额" ></x-input>
    </group>
    <div class="pt20 center agreement-box">
      <check-icon :value.sync="data.agreement" type="plain">已阅读并同意 <a href="">《鱼猫金服自动投标协议》</a></check-icon>
    </div>
    <div class="pt20">
      <div class="submit-box">
        <x-button @click.native="autoCheck" type="primary" :disabled="!data.agreement">开启自动投标</x-button>
      </div>
    </div>
  </div>
</template>

<script>
  import qs from 'qs'
  import { Group, Cell, XHeader, XInput, Selector, Radio, XButton, CheckIcon, XSwitch } from 'vux'

  export default {
    name: 'Auto',
    components: {
      Group,
      Cell,
      XHeader,
      XInput,
      Selector,
      Radio,
      XButton,
      CheckIcon,
      XSwitch
    },
    data () {
      return {
        data: {
          bidAmount: '',  // 单笔出借金额
          rateStart: '', // 最低年化收益
          deadlineEnd: '', // 最长出借期限
          remandAmount: 0, // 保留金额
          earnsData: [],
          earnsLower: '',
          earnsCeiling: '',
          termData: [],
          termLower: '',
          termCeiling: '',
          wayType: [],
          saveType: '0',
          agreement: false,
          retain: false
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
      autoCheck () {
        this.setInfo()
      },
      setInfo () {
        var remandNum = ''
        var self = this
        if (!self.data.retain) {
          remandNum = 0
        } else {
          remandNum = self.data.remandAmount
        }
        self.$http.post(process.env.BASE_API + '/apiautomaticBidModify.do', qs.stringify({ 'bidAmount': self.data.bidAmount, 'rateStart': self.data.rateStart, 'rateEnd': 15, 'deadlineStart': 1, 'deadlineEnd': self.data.deadlineEnd, 'remandAmount': remandNum, 'borrowWay': 3 }))
          .then(function (res) {
            if (res.data === 'noLogin') {
              console.log('未登录')
            } else if (res.data.data === '') {
              console.log('没有数据')
            } else {
              if (res.data.msg === '操作成功') {
                self.$vux.toast.show({
                  text: '设置成功',
                  type: 'success',
                  onHide () {
                    // 返回自动投标展示页
                    self.$router.push({ name: 'auto' })
                  }
                })
              } else {
                self.$vux.toast.show({
                  text: '设置失败',
                  type: 'cancel'
                })
              }
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      onShadowChange (ids, names) {
        console.log(ids, names)
      },
      logHide (str) {
        console.log('on-hide', str)
      },
      logShow () {
        console.log('on-show')
      }
    },
    created () {
      var self = this
      if ((self.$http.defaults.headers.tokenClientkey === undefined) && self.$cookies.get('tokenClientkey')) {
        self.$http.defaults.headers.tokenClientkey = self.$cookies.get('tokenClientkey')
      }
    }
  }
</script>
<style lang="less">
  .autoEdit{
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
    .agreement-box{
      .vux-check-icon>span{
        font-size: 14px;
        color: #666;
      }
      a{
        color: #ed4e49;
        margin:0 2px;
      }
      .weui-icon-circle{
        font-size: 20px;
      }
      .weui-icon-success-circle, .weui-icon-success-no-circle{
        font-size: 20px;
      }
    }
    .cancel-btn{
      border: none;
      background: #fff;
      text-decoration: underline;
      color: #35798e;
    }
  }
</style>
