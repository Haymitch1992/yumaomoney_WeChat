<template>
  <div class="invited">
    <x-header><a slot="right" @click="goTo()">我的邀请</a>邀请好友</x-header>
    <group title="cell demo">
      <cell title="第一" value="cool" is-link></cell>
      <cell title="第二" value="cool" is-link></cell>
      <cell title="第三" value="cool" is-link></cell>
    </group>
    <div class="pt20 ">
      <div class="submit-box">
        <x-button @click.native="status = false" type="primary">邀请好友</x-button>
        <x-button @click.native="sweepType = true" type="primary">扫码邀请</x-button>
        <x-button @click.native="rulesType = true" type="primary">活动规则</x-button>
      </div>
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
          <div class="pt20 ">
            <div class="submit-box">
              <x-button @click.native="rulesType = false" type="primary">关闭</x-button>
            </div>
          </div>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XButton, XDialog, Popup, XTable } from 'vux'

  export default {
    name: 'Invited',
    components: {
      Group,
      Cell,
      XHeader,
      XButton,
      XDialog,
      Popup,
      XTable
    },
    data () {
      return {
        sweepType: false,
        rulesType: false
      }
    },
    methods: {
      goTo () {
        this.$router.push({
          name: `invitedDetail`,
          params: {}
        })
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
</style>
