<template>
  <div class="recharge">
    <x-header>充值</x-header>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <panel :list="bankList" type="1" @on-img-error="onImgError"></panel>
      <div class="cashBox">
        <div>金额</div>
        <x-input  v-model="data.cash" :is-type="moreThan100" placeholder="请输入充值金额"></x-input>
      </div>
      <div class="cashBox">充值后:{{data.balance+Math.floor(data.cash)}}元</div>
    </group>
    <div class="submit-box">
      <x-button @click.native="iconType = 'success'" type="primary">确定</x-button>
    </div>
    <div class="center">充值实时到账，免收手续费</div>
    <div class="center pt100">新网银行 | 鱼猫金服</div>
    <div class="center">充值资金将进入新网银行个人账户</div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, Panel, XInput, XButton } from 'vux'

  export default {
    name: 'Recharge',
    components: {
      Group,
      Cell,
      XHeader,
      Panel,
      XInput,
      XButton
    },
    data () {
      return {
        data: {
          type: 'BOB',
          num: '5415',
          cash: '',
          balance: 10000
        },
        bankList: [],
        banks: {
          ABC: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/ABC-icon.png',
              title: '中国农业银行',
              desc: '单笔限额100万元，单日限额200万元'
            }
          ],
          BCM: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/BCM-icon.png',
              title: '交通银行',
              desc: '单笔限额100万元，单日限额200万元'
            }
          ],
          BOB: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/BOB-icon.png',
              title: '北京银行',
              desc: '单笔限额100万元，单日限额200万元'
            }
          ],
          BOC: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/BOC-icon.png',
              title: '中国银行',
              desc: '单笔限额100万元，单日限额200万元'
            }
          ],
          CCB: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/CCB-icon.png',
              title: '中国建设银行',
              desc: '单笔限额100万元，单日限额200万元'
            }
          ],
          CEB: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/CEB-icon.png',
              title: '中国光大银行',
              desc: '单笔限额100万元，单日限额200万元'
            }
          ],
          CIB: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/CIB-icon.png',
              title: '兴业银行',
              desc: '单笔限额100万元，单日限额200万元'
            }
          ],
          CITIC: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/CITIC-icon.png',
              title: '中信银行',
              desc: '单笔限额100万元，单日限额200万元'
            }
          ],
          CMB: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/CMB-icon.png',
              title: '招商银行',
              desc: '单笔限额100万元，单日限额200万元'
            }
          ],
          CGB: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/CGB-icon.png',
              title: '广发银行',
              desc: '单笔限额100万元，单日限额200万元'
            }
          ],
          HXB: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/HXB-icon.png',
              title: '华夏银行',
              desc: '单笔限额100万元，单日限额200万元'
            }
          ],
          ICBC: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/ICBC-icon.png',
              title: '中国工商银行',
              desc: '单笔限额100万元，单日限额200万元'
            }
          ],
          CMBC: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/CMBC-icon.png',
              title: '中国民生银行',
              desc: '单笔限额100万元，单日限额200万元'
            }
          ],
          PABC: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/PABC-icon.png',
              title: '平安银行',
              desc: '单笔限额100万元，单日限额200万元'
            }
          ],
          PSBC: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/PSBC-icon.png',
              title: '中国邮政储蓄银行',
              desc: '单笔限额100万元，单日限额200万元'
            }
          ],
          SPDB: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/SPDB-icon.png',
              title: '浦发银行',
              desc: '单笔限额100万元，单日限额200万元'
            }
          ]
        },
        moreThan100: function (value) {
          return {
            valid: value >= 0,
            msg: '充值金额需大于0元'
          }
        }
      }
    },
    methods: {
      onImgError (item, $event) {
        console.log(item, $event)
      },
      init () {
        var self = this
        self.bankList.push(self.banks[self.data.type][0])
        var num = '<span class = "bankNum">尾号' + self.data.num + '</span>'
        self.bankList[0].title += num
        self.data.balanceBak = self.data.balance.toFixed(2)
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>
<style lang="less">
  .recharge{
    font-size: 14px;
    color: #666;
    .cashBox {
      width: 90%;
      margin: 0 auto;
      border-top: 1px solid #eee;
      font-size: 14px;
      line-height: 34px;
      padding: 10px 0;
    }
    .weui-cell:before{
        border: none;
    }
    .vux-header{
      background: #fff;
    }
    .vux-header-title-area, .vux-header .vux-header-title{
      color: #666;
    }
    .vux-header .vux-header-left .left-arrow:before{
      border: 1px solid #666;
      border-width: 1px 0 0 1px;
    }
    .vux-header-back{
      opacity: 0;
    }
    .weui-media-box{
      padding:10px 10px 20px;
    }
    .bankNum{
      font-size: 14px;
      color: #666;
      margin-left:6px;
    }
    .weui-media-box__title{
      line-height: 30px;
      position: relative;
      top:-6px;
    }
    .weui-cells{
      margin-top:0;
    }
    .weui-cell{
      padding: 0;
    }
    .weui-panel:after{
      border-bottom:0;
    }
    .weui-panel:before{
      border-top:0;
    }
    .submit-box{
      padding: 0;
      width: 94%;
      margin:50px auto 30px;
    }
  }
</style>
