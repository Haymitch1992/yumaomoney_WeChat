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
          <div style="padding-bottom: 200px">
            <div class="center pv15 vipList" :class="{ vipActive: (level===0) }" @click="changeLevel(0)">VIP0</div>
            <div class="center pv15 vipList" :class="{ vipActive: (level===1) }" @click="changeLevel(1)">VIP1</div>
            <div class="center pv15 vipList" :class="{ vipActive: (level===2) }" @click="changeLevel(2)">VIP2</div>
            <div class="center pv15 vipList" :class="{ vipActive: (level===3) }" @click="changeLevel(3)">VIP3</div>
            <div class="center pv15 vipList" :class="{ vipActive: (level===4) }" @click="changeLevel(4)">VIP4</div>
            <div class="center pv15 vipList" :class="{ vipActive: (level===5) }" @click="changeLevel(5)">VIP5</div>
            <div class="center pv15 vipList" :class="{ vipActive: (level===6) }" @click="changeLevel(6)">VIP6</div>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div>
            <div :class="'level'+level">
              <div class="vipTitle center"></div>
            </div>
          </div>
          <div class="vipBottom">
            <div class="h40">专享礼包</div>
            <div v-if="level===0">
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelCash"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">免费提现</div>
                  <div class="h20 pt10">1次</div>
                </div>
              </div>
            </div>
            <div v-if="level===1">
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelCash1"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">免费提现</div>
                  <div class="h20 pt10">2次</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelBirthday1"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">生日惊喜</div>
                  <div class="h20 pt10">18元投资红包</div>
                </div>
              </div>
            </div>
            <div v-if="level===2">
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelCash2"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">免费提现</div>
                  <div class="h20 pt10">3次</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelUpgrade2"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">升级奖励</div>
                  <div class="h20 pt10">18元投资红包</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelBirthday2"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">生日惊喜</div>
                  <div class="h20 pt10">18元投资红包</div>
                </div>
              </div>
            </div>
            <div v-if="level===3">
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelCash3"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">免费提现</div>
                  <div class="h20 pt10">4次</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelUpgrade3"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">升级奖励</div>
                  <div class="h20 pt10">18元投资红包</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelBirthday3"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">生日惊喜</div>
                  <div class="h20 pt10">18元投资红包</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelWelfare3"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">月享福利</div>
                  <div class="h20 pt10">每月28日50元专属投资红包</div>
                </div>
              </div>
            </div>
            <div v-if="level===4">
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelCash4"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">免费提现</div>
                  <div class="h20 pt10">5次</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelUpgrade4"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">升级奖励</div>
                  <div class="h20 pt10">18元投资红包</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelBirthday4"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">生日惊喜</div>
                  <div class="h20 pt10">18元投资红包</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelWelfare4"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">月享福利</div>
                  <div class="h20 pt10">每月28日50元专属投资红包</div>
                </div>
              </div>
            </div>
            <div v-if="level===5">
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelCash5"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">免费提现</div>
                  <div class="h20 pt10">6次</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelUpgrade5"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">升级奖励</div>
                  <div class="h20 pt10">18元投资红包</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelBirthday5"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">生日惊喜</div>
                  <div class="h20 pt10">18元投资红包</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelWelfare5"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">月享福利</div>
                  <div class="h20 pt10">每月28日50元专属投资红包</div>
                </div>
              </div>
            </div>
            <div v-if="level===6">
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelCash6"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">免费提现</div>
                  <div class="h20 pt10">4次</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelUpgrade6"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">升级奖励</div>
                  <div class="h20 pt10">18元投资红包</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelBirthday6"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">生日惊喜</div>
                  <div class="h20 pt10">18元投资红包</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelWelfare6"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">月享福利</div>
                  <div class="h20 pt10">每月28日50元专属投资红包</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelSpecial6"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">节日专属好礼(线下)</div>
                  <div class="h20 pt10">每月28日50元专属投资红包</div>
                </div>
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
  .level0 {
    background: url("../../../assets/images/level0.png") no-repeat center center;
    background-size: contain;
  }
  .level1 {
    background: url("../../../assets/images/level1.png") no-repeat center center;
    background-size: contain;
  }
  .level2 {
    background: url("../../../assets/images/level2.png") no-repeat center center;
    background-size: contain;
  }
  .level3 {
    background: url("../../../assets/images/level3.png") no-repeat center center;
    background-size: contain;
  }
  .level4 {
    background: url("../../../assets/images/level4.png") no-repeat center center;
    background-size: contain;
  }
  .level5 {
    background: url("../../../assets/images/level5.png") no-repeat center center;
    background-size: contain;
  }
  .level6 {
    background: url("../../../assets/images/level6.png") no-repeat center center;
    background-size: contain;
  }
  .vipTitle {
    height: 160px;
    line-height: 160px;
  }
  .vipBottom {
    height: 400px;
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
  .levelCash, .levelCash1, .levelCash2, .levelCash3, .levelCash4, .levelCash5, .levelCash6,
  .levelBirthday1, .levelBirthday2, .levelBirthday3, .levelBirthday4, .levelBirthday5, .levelBirthday6,
  .levelUpgrade2, .levelUpgrade3, .levelUpgrade4, .levelUpgrade5, .levelUpgrade6, .levelWelfare3,
  .levelWelfare4, .levelWelfare5, .levelWelfare6, .levelSpecial6 {
    background: url("../../../assets/images/icon/levelCash.png") no-repeat;
    background-size: cover;
    width: 50px;
    height: 50px;
  }
  .levelCash1 {
    background: url("../../../assets/images/icon/levelCash1.png") no-repeat;
    background-size: cover;
  }
  .levelCash2 {
    background: url("../../../assets/images/icon/levelCash2.png") no-repeat;
    background-size: cover;
  }
  .levelCash3 {
    background: url("../../../assets/images/icon/levelCash3.png") no-repeat;
    background-size: cover;
  }
  .levelCash4 {
    background: url("../../../assets/images/icon/levelCash4.png") no-repeat;
    background-size: cover;
  }
  .levelCash5 {
    background: url("../../../assets/images/icon/levelCash5.png") no-repeat;
    background-size: cover;
  }
  .levelCash6{
    background: url("../../../assets/images/icon/levelCash6.png") no-repeat;
    background-size: cover;
  }
  .levelBirthday1 {
    background: url("../../../assets/images/icon/levelBirthday1.png") no-repeat;
    background-size: cover;
  }
  .levelBirthday2 {
    background: url("../../../assets/images/icon/levelBirthday2.png") no-repeat;
    background-size: cover;
  }
  .levelBirthday3 {
    background: url("../../../assets/images/icon/levelBirthday3.png") no-repeat;
    background-size: cover;
  }
  .levelBirthday4 {
    background: url("../../../assets/images/icon/levelBirthday4.png") no-repeat;
    background-size: cover;
  }
  .levelBirthday5 {
    background: url("../../../assets/images/icon/levelBirthday5.png") no-repeat;
    background-size: cover;
  }
  .levelBirthday6 {
    background: url("../../../assets/images/icon/levelBirthday6.png") no-repeat;
    background-size: cover;
  }
  .levelUpgrade2 {
    background: url("../../../assets/images/icon/levelUpgrade2.png") no-repeat;
    background-size: cover;
  }
  .levelUpgrade3 {
    background: url("../../../assets/images/icon/levelUpgrade3.png") no-repeat;
    background-size: cover;
  }
  .levelUpgrade4 {
    background: url("../../../assets/images/icon/levelUpgrade4.png") no-repeat;
    background-size: cover;
  }
  .levelUpgrade5 {
    background: url("../../../assets/images/icon/levelUpgrade5.png") no-repeat;
    background-size: cover;
  }
  .levelUpgrade6 {
    background: url("../../../assets/images/icon/levelUpgrade6.png") no-repeat;
    background-size: cover;
  }
  .levelWelfare3 {
    background: url("../../../assets/images/icon/levelWelfare3.png") no-repeat;
    background-size: cover;
  }
  .levelWelfare4 {
    background: url("../../../assets/images/icon/levelWelfare4.png") no-repeat;
    background-size: cover;
  }
  .levelWelfare5 {
    background: url("../../../assets/images/icon/levelWelfare5.png") no-repeat;
    background-size: cover;
  }
  .levelWelfare6 {
    background: url("../../../assets/images/icon/levelWelfare6.png") no-repeat;
    background-size: cover;
  }
  .levelSpecial6 {
    background: url("../../../assets/images/icon/levelSpecial6.png") no-repeat;
    background-size: cover;
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
