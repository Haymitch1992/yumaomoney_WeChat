<template>
  <div>
    <x-header>会员中心</x-header>
    <group gutter="0">
      <div class="memberHeader">
        <div class="fl">
          <div class="user"></div>
        </div>
        <div class="userContent fl">
          <div class="h30">188****6369</div>
          <div class="h30 pt10 f14">当前等级超过了50%的鱼猫小伙伴</div>
        </div>
      </div>
      <box gap="10px">
        <div class="fl pv10" style="width: 80%;">
          <x-progress :percent="percent" :show-cancel="false"></x-progress>
        </div>
        <div class="fl center" style="width: 20%;">
          30%
        </div>
      </box>
    </group>
    <group title="VIP会员等级">
      <flexbox :gutter="0">
        <flexbox-item :span="3">
          <div class="center pv15 vipList" :class="{ vipActive: (level===0) }" @click="changeLevel(0)">VIP0</div>
          <div class="center pv15 vipList" :class="{ vipActive: (level===1) }" @click="changeLevel(1)">VIP1</div>
          <div class="center pv15 vipList" :class="{ vipActive: (level===2) }" @click="changeLevel(2)">VIP2</div>
          <div class="center pv15 vipList" :class="{ vipActive: (level===3) }" @click="changeLevel(3)">VIP3</div>
          <div class="center pv15 vipList" :class="{ vipActive: (level===4) }" @click="changeLevel(4)">VIP4</div>
          <div class="center pv15 vipList" :class="{ vipActive: (level===5) }" @click="changeLevel(5)">VIP5</div>
          <div class="center pv15 vipList" :class="{ vipActive: (level===6) }" @click="changeLevel(6)">VIP6</div>
        </flexbox-item>
        <flexbox-item>
          <div class="vipTop">
            <div class="vipTitle center">{{levelName}}</div>
          </div>
          <div class="vipBottom">
            <div class="h40">专享礼包</div>
            <div style="height: 70px">
              <div class="fl">
                <div class="birthdayGift"></div>
              </div>
              <div class="giftContent fl">
                <div class="h20">生日惊喜</div>
                <div class="h20 pt10">{{birthdayTxt}}</div>
              </div>
            </div>
            <div style="height: 70px">
              <div class="fl">
                <div class="monthGift"></div>
              </div>
              <div class="giftContent fl">
                <div class="h20">月享福利</div>
                <div class="h20 pt10">{{monthTxt}}</div>
              </div>
            </div>
          </div>
        </flexbox-item>
      </flexbox>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XProgress, Box, Flexbox, FlexboxItem } from 'vux'

  export default {
    name: 'Member',
    components: {
      Group,
      Cell,
      XHeader,
      XProgress,
      Box,
      Flexbox,
      FlexboxItem
    },
    data () {
      return {
        percent: 30,
        level: 0,
        levelName: '',
        birthdayTxt: ''
      }
    },
    methods: {
      changeLevel (level) {
        var self = this
        self.level = level
        if ((level === 0)) {
          self.levelName = '普通会员'
          self.birthdayTxt = '18元投资红包'
          self.monthTxt = '每月28日5元专属投资红包'
        } else if ((level === 1)) {
          self.levelName = '青铜会员'
          self.birthdayTxt = '18元投资红包'
          self.monthTxt = '每月28日5元专属投资红包'
        } else if ((level === 2)) {
          self.levelName = '白银会员'
          self.birthdayTxt = '28元投资红包'
          self.monthTxt = '每月28日8元专属投资红包'
        } else if ((level === 3)) {
          self.levelName = '黄金会员'
          self.birthdayTxt = '38.8元投资红包'
          self.monthTxt = '每月28日10元专属投资红包'
        } else if ((level === 4)) {
          self.levelName = '白银会员'
          self.birthdayTxt = '68.8元投资红包'
          self.monthTxt = '每月28日20元专属投资红包'
        } else if ((level === 5)) {
          self.levelName = '钻石会员'
          self.birthdayTxt = '88.8元投资红包'
          self.monthTxt = '每月28日30元专属投资红包'
        } else if ((level === 6)) {
          self.levelName = '黑钻会员'
          self.birthdayTxt = '108.8元投资红包'
          self.monthTxt = '每月28日40元专属投资红包'
        }
      },
      init () {
        var self = this
        self.level = 1
        self.changeLevel(self.level)
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>

<style>
  .vipList {
    border-left: 3px solid #EBEBEB;
  }
  .vipActive {
    border-left: 3px solid #09BB07;
    color: #09BB07;
  }
  .vipTop {
    height: 190px;
    background: url("../../../assets/images/level0.png") no-repeat 0 0;
    background-size: cover;
  }
  .vipTitle {
    padding-top: 30px;
    height: 160px;
    line-height: 160px;
  }
  .vipBottom {
    height: 188px;
  }
  .memberHeader {
    padding: 20px;
    padding-bottom: 0;
    height: 70px;
  }
  .userContent {
    margin-left: 10px;
    height: 50px;
  }
  .user {
    background: url("../../../assets/images/user.png") no-repeat;
    background-size: cover;
    width: 70px;
    height: 70px;
    border: 1px solid #707070;
    border-radius: 35px;
    box-sizing: border-box;
  }
  .mini-card {
    background: #d7d7d7;
    padding: 5px;
  }
  .birthdayGift {
    background: url("../../../assets/images/gift.png") no-repeat;
    background-size: cover;
    width: 50px;
    height: 50px;
    border: 1px solid #707070;
    border-radius: 20px;
    box-sizing: border-box;
  }
  .monthGift {
    background: url("../../../assets/images/star-empty.png") no-repeat;
    background-size: cover;
    width: 50px;
    height: 50px;
    border: 1px solid #707070;
    border-radius: 20px;
    box-sizing: border-box;
  }
  .giftContent {
    margin-left: 10px;
    height: 50px;
  }
</style>
