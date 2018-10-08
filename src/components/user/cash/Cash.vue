<template>
  <div>
    <x-header>提现</x-header>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <panel :list="bankList" type="1" @on-img-error="onImgError"></panel>
    </group>
    <group>
      <div class="cellBox">余额:{{data.balanceBak}}元</div>
      <x-input title="提现金额(元)" v-model="data.cash" :is-type="moreThan100" placeholder="单笔提现不小于100元"></x-input>
    </group>
    <group>
      <div class="cellBox">手续费:1元</div>
      <div class="cellBox" v-if="(data.cash>=100)&&(data.cash<=data.balance)">到账金额:{{data.cash-1}}元</div>
      <div class="cellBox" v-if="(data.cash<100)||(data.cash>data.balance)">到账金额:0元</div>
    </group>
    <div style="padding:15px 50px;">
      <x-button @click.native="iconType = 'success'" type="primary">提交</x-button>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, Panel, XInput, XButton } from 'vux'

  export default {
    name: 'Cash',
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
          if (value < 100) {
            return {
              valid: value >= 100,
              msg: '单笔提现不小于100元'
            }
          } else {
            return {
              valid: value <= 10000,
              msg: '提现金额不可大于可提现金额'
            }
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
        var num = ' 尾号' + self.data.num
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

<style>
</style>
