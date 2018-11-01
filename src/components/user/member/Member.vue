<template>
  <div class="member">
    <x-header>会员中心</x-header>
    <group gutter="0">
      <div class="memberHeader">
        <div class="fl">
          <div class="user"></div>
        </div>
        <div class="userContent fl">
          <div class="h30">小猫钓鱼 <span class="vipStatus " :class="'v'+level">VIP{{level}}</span></div>
          <div class="h30 f14">当前等级超过了50%的鱼猫小伙伴</div>
        </div>
      </div>
      <!--进度条-->
      <div class="progress">
        <div class="progress-num">30%</div>
        <div class="progress-out">
          <div class="progress-in"></div>
        </div>
      </div>
    </group>
    <group title="VIP会员等级">
      <flexbox :gutter="0">
        <flexbox-item :span="3">
          <div style="border-left: 3px solid #ed4e49;margin-bottom: 200px;margin-right: 10px">
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
            <div class="h40 vipText">专享礼包</div>
            <div v-if="level===0">
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelCash"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">免费提现</div>
                  <div class="h20">1次</div>
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
                  <div class="h20">2次</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelBirthday1"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">生日惊喜</div>
                  <div class="h20">18元投资红包</div>
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
                  <div class="h20">3次</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelUpgrade2"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">升级奖励</div>
                  <div class="h20">18元投资红包</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelBirthday2"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">生日惊喜</div>
                  <div class="h20">18元投资红包</div>
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
                  <div class="h20">4次</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelUpgrade3"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">升级奖励</div>
                  <div class="h20">18元投资红包</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelBirthday3"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">生日惊喜</div>
                  <div class="h20">18元投资红包</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelWelfare3"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">月享福利</div>
                  <div class="h20">每月28日50元专属投资红包</div>
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
                  <div class="h20">5次</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelUpgrade4"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">升级奖励</div>
                  <div class="h20">18元投资红包</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelBirthday4"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">生日惊喜</div>
                  <div class="h20">18元投资红包</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelWelfare4"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">月享福利</div>
                  <div class="h20">每月28日50元专属投资红包</div>
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
                  <div class="h20">6次</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelUpgrade5"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">升级奖励</div>
                  <div class="h20">18元投资红包</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelBirthday5"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">生日惊喜</div>
                  <div class="h20">18元投资红包</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelWelfare5"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">月享福利</div>
                  <div class="h20">每月28日50元专属投资红包</div>
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
                  <div class="h20">7次</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelUpgrade6"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">升级奖励</div>
                  <div class="h20">18元投资红包</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelBirthday6"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">生日惊喜</div>
                  <div class="h20">18元投资红包</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelWelfare6"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h20">月享福利</div>
                  <div class="h20">每月28日50元专属投资红包</div>
                </div>
              </div>
              <div style="height: 70px">
                <div class="fl">
                  <div class="levelSpecial6"></div>
                </div>
                <div class="giftContent fl">
                  <div class="h50">节日专属好礼(线下)</div>
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

<style lang="less">
  .member{
    .user {
      background: #D0D0D0 url("../../../assets/images/icon/user-icon_13.png") no-repeat;
      background-size: cover;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      box-sizing: border-box;
      margin-top:4px;
    }
    .userContent {
      margin-left:10px;
      color: #666;
    }
    .vipStatus{
      background: #C2C9D3;
      color: #666;
      padding:2px 6px;
      font-size:12px;
      border-radius: 6px;
      line-height: 30px;
      position: relative;
      top:-2px;
    }
    .vipStatus.v0{
      background: #C2C9D3;
      color: #666;
    }
    .vipStatus.v1{
      background: #F6C2AC;
      color: #8A6556;
    }
    .vipStatus.v2{
      background: #C2C9D3;
      color: #666;
    }
    .vipStatus.v3{
      background: #E0B56C;
      color: #946D31;
    }
    .vipStatus.v4{
      background: #f1eded;
      color: #919192;
    }
    .vipStatus.v5{
      background: #F8CBAA;
      color: #946D31;
    }
    .vipStatus.v6{
      background: #2D2D2D;
      color: #FCD4AF;
    }
    .weui-cells__title{
      margin-top:0;
      margin-bottom:0;
      line-height: 44px;
      background: #fff;
      border-top: 12px solid #f5f5f5;
    }
    .vux-flex-row{
      padding-top:10px;
    }
    .progress{
      width: 90%;
      margin:0 auto 20px;
      .progress-num{
        text-align: right;
        padding-right:10px;
        font-size:14px;
        color: #FF5555;
        margin-bottom:4px;
      }
      .progress-out{
        background: #EEEEEE;
        border-radius: 6px;
        overflow: hidden;
        width: 100%;
        height:8px;
        margin:0 auto;
      }
      .progress-in{
        background: #FF5555;
        width: 30%;
        height:8px;
      }

    }
    .vipBottom {
      height: 400px;
      font-size:14px;
      .vipText{
        border-bottom:1px solid #EBEBEB;
        margin-bottom:10px;
        width:94%;
      }
    }
    .vipList {
      border: 1px solid #EBEBEB;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      border-top: 0;
      border-left: 0;
      box-sizing: border-box;
      background: #fff;
      color: #ed4e49;
      font-size:14px;
    }
    .vipList:first-child{
      border-top: 1px solid #EBEBEB;
    }
    .vipActive {
      box-sizing: border-box;
      background: #ed4e49;
      color: #fff;
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
      margin-top:6px;
    }

    .memberHeader {
      padding: 20px;
      padding-bottom: 0;
      height: 70px;
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
      width: 44px;
      height: 44px;
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
      margin-left: 14px;
      height: 50px;
      margin-top:2px;
      color: #666;
    }
  }

</style>
