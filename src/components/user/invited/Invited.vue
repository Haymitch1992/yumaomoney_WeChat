<template>
  <div class="invited">
    <x-header><a slot="right" @click="goTo()">转入</a>邀请奖励</x-header>
    <div class="center pt20 f24">邀请列表</div>
    <div class="pw20 h20">
      <div class="fl">累计邀请:23人</div>
      <div class="fr">累计返现:55元</div>
    </div>
    <group>
      <div class="p15 f12">
        <x-table full-bordered>
          <thead>
          <tr>
            <th>受邀用户</th>
            <th>状态</th>
            <th>获得奖励</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>13******672</td>
            <td>已投资</td>
            <td>2元</td>
          </tr>
          <tr>
            <td>13******673</td>
            <td>已注册</td>
            <td>2元</td>
          </tr>
          </tbody>
        </x-table>
      </div>
    </group>
    <div class="submit-box">
      <x-button @click.native="shareType = true" type="primary">邀请好友</x-button>
      <x-button @click.native="sweepType = true" type="primary">扫码邀请</x-button>
      <x-button @click.native="rulesType = true" type="primary">活动规则</x-button>
    </div>
    <div>
      <x-dialog v-model="shareType" class="dialog-demo" hide-on-blur>
        <p class="dialog-title">复制链接邀请好友</p>
        <span class="dialog-title"></span>
        <p class="dialog-title">点击复制按钮，分享给好友吧!</p>
        <x-textarea :max="200" name="detail" :show-counter="false" v-model="detail" :height="150"></x-textarea>
        <div>
          <x-button class="copyBtn" type="primary" v-clipboard:copy="detail" v-clipboard:success="onCopy" v-clipboard:error="onError">复制</x-button>
        </div>
      </x-dialog>
    </div>
    <div>
      <x-dialog v-model="sweepType" class="dialog-demo" hide-on-blur>
        <div class="img-box">
          <!--<img src="https://ws1.sinaimg.cn/large/663d3650gy1fq6824ur1dj20ia0pydlm.jpg" style="max-width:100%">-->
          <img src="../../../assets/images/invited.png" style="max-width:100%">
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
            <div class="center f24 pt20">活动规则</div>
            <div class="p15 f12">
              <x-table full-bordered>
                <thead>
                <tr>
                  <th>好友首投金额(元)</th>
                  <th>我的奖励(元)</th>
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
            <div class="p20 f12">
              *温馨提示
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
  import { Group, Cell, XHeader, XButton, XDialog, Popup, XTable, XTextarea, Toast } from 'vux'

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
      Toast
    },
    data () {
      return {
        shareType: false,
        sweepType: false,
        rulesType: false,
        copySuccess: false,
        copyError: false,
        detail: '我携手鱼猫金服给你送来104元现金，和我一起乐享钱程！https://www.yumaomoney.com/reg.do?istarget=1&id=13688888888'
      }
    },
    methods: {
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
          name: `invitedDetail`,
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
      }
    }
  }
</script>


<style lang="less" scoped>
  @import '~vux/src/styles/close';

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
