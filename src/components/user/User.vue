<template>
  <div>
    <group gutter="0">
      <div class="header">
        <div class="fl">
          <div class="user" @click="jump('/user/center')"></div>
        </div>
        <div class="userContent fl">
          <div class="h30">188****6369</div>
          <div class="h30 pt10">未开户</div>
        </div>
        <div class="fr">
          <div>
            <div class="cog" @click="jump('/user/setting')"></div>
          </div>
          <div class="pt10">
            <div :class="[ active ? 'eye' : 'eye-off' ]" @click="active = !active"></div>
          </div>
        </div>
      </div>
      <flexbox :gutter="0">
        <flexbox-item>
          <div class="p10" @click="jumpParams('assets', 1)">
            <div class="center" v-show="active">2132.63</div>
            <div class="center" v-show="!active">****</div>
            <div class="center f14">昨日收益</div>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="p10" @click="jumpParams('assets', 2)">
            <div class="center" v-show="active">315.01</div>
            <div class="center" v-show="!active">****</div>
            <div class="center f14">累计收益</div>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="p10" @click="jumpParams('assets', 3)">
            <div class="center" v-show="active">2132.63</div>
            <div class="center" v-show="!active">****</div>
            <div class="center f14">当前总资产</div>
          </div>
        </flexbox-item>
      </flexbox>
    </group>
    <group>
      <grid :show-lr-borders="false" >
        <div class="m10 f14 fl">账户余额：<span v-show="active">2000000.23</span><span v-show="!active">****</span>元</div>
        <div class="m10 f14 fr" @click="jump('/user/recharge')">充值</div>
        <div class="splitLine fr"></div>
        <div class="m10 f14 fr" @click="jump('/user/cash')">提现</div>
      </grid>
      <grid :show-lr-borders="false" >
        <grid-item link="/user/investment" label="我的投资" key="0">
          <img slot="icon" src="../../assets/images/aboutMe.png">
        </grid-item>
        <grid-item link="/user/calendar" label="回款日历" key="1">
          <img slot="icon" src="../../assets/images/active.png">
        </grid-item>
        <grid-item link="/user/note" label="资金记录" key="2">
          <img slot="icon" src="../../assets/images/linkme.png">
        </grid-item>
      </grid>
      <grid :show-lr-borders="false" >
        <grid-item link="/user/coupons" label="优惠券" key="0">
          <img slot="icon" src="../../assets/images/aboutMe.png">
        </grid-item>
        <grid-item link="/user/experience" label="体验金" key="1">
          <img slot="icon" src="../../assets/images/active.png">
        </grid-item>
        <grid-item link="/user/auto" label="自动投标" key="2">
          <img slot="icon" src="../../assets/images/linkme.png">
        </grid-item>
      </grid>
      <grid :show-lr-borders="false" >
        <grid-item link="/user/invited" label="邀请好友" key="0">
          <img slot="icon" src="../../assets/images/aboutMe.png">
        </grid-item>
        <grid-item link="/user/message" label="通知中心" key="1">
          <img slot="icon" src="../../assets/images/active.png">
        </grid-item>
        <grid-item link="/user/contactUs" label="客服与反馈" key="2">
          <img slot="icon" src="../../assets/images/linkme.png">
        </grid-item>
      </grid>
    </group>
  </div>
</template>

<script>
  import { Group, Grid, GridItem, Cell, XHeader, Flexbox, FlexboxItem } from 'vux'

  export default {
    name: 'UserHome',
    components: {
      Group,
      Grid,
      GridItem,
      Cell,
      XHeader,
      Flexbox,
      FlexboxItem
    },
    data () {
      return {
        active: false
      }
    },
    methods: {
      jump (path) {
        this.$router.push({path: path})
      },
      jumpParams (name, params) {
        this.$router.push({name: name, params: {listType: params}})
      }
    }
  }
</script>

<style>
  .splitLine {
    margin: 5px 0 5px;
    border-left: 1px solid #D9D9D9;
    height: 29px;
  }
  .header {
    padding: 20px;
    height: 70px;
    margin-bottom: 20px;
  }
  .userContent {
    margin-left: 10px;
    height: 50px;
  }
  .user {
    background: url("../../assets/images/user.png") no-repeat;
    background-size: cover;
    width: 70px;
    height: 70px;
    border: 1px solid #707070;
    border-radius: 35px;
    box-sizing: border-box;
  }
  .cog {
    background: url("../../assets/images/cog.png") no-repeat;
    background-size: cover;
    width: 30px;
    height: 30px;
  }
  .eye {
    background: url("../../assets/images/eye.png") no-repeat;
    background-size: cover;
    width: 30px;
    height: 30px;
  }
  .eye-off {
    background: url("../../assets/images/eye-off.png") no-repeat;
    background-size: cover;
    width: 30px;
    height: 30px;
  }
</style>
