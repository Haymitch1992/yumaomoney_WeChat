<template>
  <div class="invited">
    <div class="invited-top">
      <x-header><a slot="right" @click="goTo()">领取</a>邀请奖励</x-header>
      <div>
        <div class="invited-num pt40 f22">累计奖励:{{invitedMoney + invitedReward}}元</div>
        <div class="center-box h50">
          <div class="fl">首投奖励:{{invitedMoney}}元</div>
          <div class="fr">出借奖励:{{invitedReward}}元</div>
        </div>
      </div>
    </div>
    <group>
      <cell :title="'累计邀请：'+ invitedNum + '人'"></cell>
    </group>
    <group>
      <div class="pb20 f12 over-box">
        <x-table full-bordered>
          <thead>
          <tr>
            <th>受邀用户</th>
            <th>首投金额</th>
            <th>奖励金额</th>
            <th>红包金额</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in dataList">
            <td>{{item.username | desensitization}}</td>
            <td>{{item.firstMoney}}</td>
            <td>{{item.rewardAmount}}</td>
            <td>{{item.rewardAmount | toReward}}</td>
          </tr>
          </tbody>
        </x-table>
      </div>
    </group>
    <div class="submit-box">
      <x-button :gradients="['#FF2719', '#FF61AD']" @click.native="shareType = true">邀请好友</x-button>
      <x-button :gradients="['#FF2719', '#FF61AD']" @click.native="sweepType = true">扫码邀请</x-button>
      <x-button :gradients="['#FF2719', '#FF61AD']" @click.native="rulesType = true">活动规则</x-button>
    </div>
    <div>
      <x-dialog v-model="shareType" class="dialog-demo" hide-on-blur>
        <p class="dialog-title">复制链接邀请好友</p>
        <x-textarea :max="200" name="detail" :show-counter="false" v-model="detail" ></x-textarea>
        <div>
          <x-button class="copyBtn" type="primary" v-clipboard:copy="detail" v-clipboard:success="onCopy" v-clipboard:error="onError">复制</x-button>
        </div>
      </x-dialog>
    </div>
    <div>
      <x-dialog v-model="sweepType" class="dialog-demo" hide-on-blur>
        <div class="img-box">
          <div class="qrcode-bg">
            <qrcode :value="'https://www.yumaomoney.com/reg.do?istarget=1&type=1&id='+userName" type="img"></qrcode>
          </div>
        </div>
        <div @click="sweepType=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
    <div>
      <popup v-model="rulesType" height="100%">
        <div class="popupFull">
          <group>
            <div class="rule-title">活动规则 </div>
            <div class="p15 f12">
              <x-table full-bordered>
                <thead>
                <tr>
                  <th>好友首投金额</th>
                  <th>我的奖励</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>5000元≤首投＜50000元</td>
                  <td>10元现金加40出借红包</td>
                </tr>
                <tr>
                  <td>50000元≤首投＜100000元</td>
                  <td>30元现金加50出借红包</td>
                </tr>
                <tr>
                  <td>首投≥100000元</td>
                  <td>60元现金加50出借红包</td>
                </tr>
                </tbody>
              </x-table>
            </div>
            <div class="p20 f12 rule-text">
              <h4>*温馨提示</h4>
              <div>1.您邀请的单个好友首次出借达到相应的金额（出借标的不限），您即可获得相应的现金及红包奖励。</div>
              <div>2.现金奖励于个人中心——好友邀请奖励中领取，可直接提现。</div>
              <div>3.红包奖励于个人中心—好友邀请奖励中领取，有效期为30天，使用比例为1%，出借可抵现。</div>
              <div>4.邀请奖励无上限，邀请越多，奖励越多。</div>
              <div>5.本次活动所有环节，如有用户通过作弊行为或恶意扰乱活动的正常开展，鱼猫金服将取消用户参与活动的资格并保留进一步追究其责任的权利；法律范围内，本次活动的最终解释权归鱼猫金服所有。如有疑问，请咨询客服400-887-4777。</div>
            </div>
          </group>
          <div class="pt20">
            <div class="submit-box">
              <x-button @click.native="rulesType = false" type="primary">关闭</x-button>
            </div>
          </div>
        </div>
      </popup>
    </div>
    <toast v-model="copySuccess" type="text" :time="800" is-show-mask text="复制成功" position="middle"></toast>
    <toast v-model="copyError" type="text" :time="800" is-show-mask text="复制失败" position="middle"></toast>
  </div>
</template>

<script>
  import qs from 'qs'
  import { Group, Cell, XHeader, XButton, XDialog, Popup, XTable, XTextarea, Qrcode } from 'vux'

  export default {
    name: 'Invited',
    components: {
      Group,
      Cell,
      XHeader,
      XButton,
      XDialog,
      Popup,
      XTable,
      XTextarea,
      Qrcode
    },
    data () {
      return {
        sTime: '2016-06-27 18:00:00', // 好友邀请查询起始时间
        eTime: '2019-09-01 18:00:00', // 好友邀请查询截止时间
        shareType: false,
        sweepType: false,
        rulesType: false,
        copySuccess: false,
        copyError: false,
        detail: '',
        dataList: [],
        invitedNum: 0,
        invitedMoney: 0,
        invitedReward: 0,
        userName: ''
      }
    },
    filters: {
      desensitization: function (value) {
        if (!value) return ''
        return value.slice(0, 2) + '***' + value.slice(-2)
      },
      toReward: function (value) {
        if (!value) return '0'
        if (value === 10) {
          return 40
        } else if (value === 30) {
          return 50
        } else if (value === 60) {
          return 50
        } else {
          return 0
        }
      }
    },
    methods: {
      // 计算数据
      repairDate: function (data) {
        for (var i = 0; i < data.length; i++) {
          // 出借好友累加
          if (data[i].firstInvestFlag === 1 && data[i].rewardAmount !== 0) {
            this.invitedNum += 1
          }
          // 获得奖励累加
          if (data[i].receiveStatus === 1) {
            this.invitedMoney += data[i].rewardAmount
          }
          // 投资红包累加
          if (data[i].receiveStatus === 1) {
            if (data[i].rewardAmount === 10) {
              this.invitedReward += 40
            } else if (data[i].rewardAmount === 30) {
              this.invitedReward += 50
            } else if (data[i].rewardAmount === 60) {
              this.invitedReward += 50
            }
          }
        }
      },
      // 页面初始化数据
      getInfo () {
        var self = this
        self.$http.post(process.env.BASE_API + '/apirecommendInit.do', qs.stringify({ 'sTime': self.sTime, 'eTime': self.eTime }))
          .then(function (res) {
            if (res.data === 'noLogin') {
              self.$router.push('/start/login')
            } else if (res.data.returnVal === 'nouser') {
              console.log('没有进行好友邀请')
            } else {
              // 循环展示邀请列表
              self.dataList = res.data
              self.repairDate(res.data)
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      // 复制成功
      onCopy (e) {
        var self = this
        self.shareType = false
        self.showPosition('success')
        console.log(e)
      },
      // 复制失败
      onError (e) {
        var self = this
        self.showPosition('error')
        console.log(e)
      },
      goTo () {
        this.$router.push({
          name: `into`,
          params: {}
        })
      },
      showPosition (type) {
        var self = this
        if (type === 'success') {
          self.copySuccess = true
        } else if (type === 'error') {
          self.copyError = true
        }
      },
      getUserName () {
        var self = this
        if (self.$cookies.get('apiHomeData')) {
          self.data = self.$cookies.get('apiHomeData')
          self.userName = self.data.homeMap.username
          self.detail = '我携手鱼猫金服给你送来106.88元现金，和我一起乐享钱程！https://www.yumaomoney.com/reg.do?istarget=1&id=' + self.data.homeMap.username
        } else {
          console.log('登录状态失效')
        }
      }
    },
    created () {
      var self = this
      if ((self.$http.defaults.headers.tokenClientkey === undefined) && self.$cookies.get('tokenClientkey')) {
        self.$http.defaults.headers.tokenClientkey = self.$cookies.get('tokenClientkey')
      }
      this.getInfo()
      // 获取个人信息
      this.getUserName()
    }
  }
</script>


<style lang="less">
  @import '~vux/src/styles/close';
  .invited{
    height: 100vh;
    background: #fff;
    .vux-label, .weui-cell__ft .weui-loading{
      font-size: 16px;
    }
    .weui-textarea{
      margin: 14px 0;
      line-height: 30px;
      font-size: 12px;
    }
    .over-box{
      max-height: 120px;
      overflow-y: auto;
    }
    .dialog-demo .dialog-title{
      font-size: 14px;
      line-height: 40px;
    }
    .rule-title{
      font-size: 18px;
      border-bottom: 1px solid #f5f5f5;
      line-height: 40px;
      text-align: center;
    }
    .rule-text{
      line-height: 30px;
      h4{
        font-size: 16px;
        color: #e2c841;
      }
    }
    .weui-dialog{
      width: 300px;
    }
    .invited-top{
      background: #FD7879;
      background: -webkit-linear-gradient(#FD7879, #FE4141); /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(#FD7879, #FE4141); /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(#FD7879, #FE4141); /* Firefox 3.6 - 15 */
      background: linear-gradient(#FD7879, #FE4141); /* 标准的语法（必须放在最后） */
      color: #fff;
    }
    .vux-header{
      background: transparent;
    }
    .center-box{
      height: 60px;
      line-height: 60px;
    }
    .center-box>div{
      width: 50%;
      text-align: center;
      border: 1px solid #e69393;
      box-sizing: border-box;
      border-bottom: 0;
    }
    .center-box>div:last-child{
      border-left: 0;
    }
    .invited-num{
      padding: 20px 0 30px;
      text-align: center;
      font-size: 22px;
    }
    .vux-table th{
      background: #FF4747;
      color: #fff;
    }
    .vux-table td:before, .vux-table th:before{
      border-bottom: 1px solid #fd5050;
    }
    .vux-table td:after, .vux-table th:after{
      border-bottom: 1px solid #fd5050;
    }
    .qrcode-bg{
      width: 300px;
      background: url(/activity/20180626/img/qr-code-bg.jpg) no-repeat;
      background-size: cover;
      height: 530px;
      position: relative;
      img{
        height: 160px;
        width: 160px;
        position: absolute;
        bottom: 140px;
        left: 70px;
      }
    }
    .dialog-demo .weui-dialog{
      padding-bottom: 0;
    }
  }
  .dialog-demo {
    .weui-dialog{
      border-radius: 8px;
      padding-bottom: 8px;
    }
    .dialog-title {
      line-height: 30px;
      color: #666;
    }
    .img-box {
      height: 530px;
      overflow: hidden;
    }
    .vux-close {
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }
  .invited .popupFull {
    width:100%;
    height:100%;
  }
  .invited .copyBtn {
    border-radius: 3px;
  }
</style>
