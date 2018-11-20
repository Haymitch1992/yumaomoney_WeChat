<template>
  <div>
    <x-header>转入</x-header>
    <tab>
      <tab-item :selected="tab.tabType === 1" @on-item-click="tab.tabType = 1">转入余额</tab-item>
      <tab-item :selected="tab.tabType === 2" @on-item-click="tab.tabType = 2">转入银行卡</tab-item>
    </tab>
    <div class="recharge" v-show="tab.tabType === 1">
      <group label-width="4.5em" label-margin-right="2em" label-align="right">
        <panel :list="rechargeBankList" type="1" @on-img-error="onImgError"></panel>
        <div class="cashBox">
          <div>金额</div>
          <x-input  v-model="data.recharge.cash" :is-type="moreThan100" placeholder="请输入充值金额"></x-input>
        </div>
        <div class="cashBox">充值后:{{data.recharge.balance+Math.floor(data.recharge.cash)}}元</div>
      </group>
      <div class="submit-box">
        <x-button @click.native="iconType = 'success'" type="primary">确认转入</x-button>
      </div>
    </div>
    <div class="cash">
      <div v-show="tab.tabType === 2">
        <group label-width="4.5em" label-margin-right="2em" label-align="right">
          <panel :list="cashBankList" type="1" @on-img-error="onImgError"></panel>
          <div class="cashBox">
            <div>余额:{{data.balanceBak}}元</div>
            <x-input v-model="data.cash.cash" :is-type="moreThan100" placeholder="单笔提现不小于100元"></x-input>
          </div>
          <div class="cashBox">
            <div >手续费:1元</div>
            <div v-if="(data.cash.cash>=100)&&(data.cash.cash<=data.cash.balance)">到账金额:{{data.cash.cash-1}}元</div>
            <div v-if="(data.cash.cash<100)||(data.cash.cash>data.cash.balance)">到账金额:0元</div>
          </div>
        </group>
        <div style="margin: 50px auto 0; width: 94%;">
          <x-button @click.native="iconType = 'success'" type="primary">确认转入</x-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, Tab, TabItem, Panel, XInput, XButton } from 'vux'

  export default {
    name: 'InvitedDetail',
    components: {
      Group,
      Cell,
      XHeader,
      Tab,
      TabItem,
      Panel,
      XInput,
      XButton
    },
    data () {
      return {
        tab: {
          tabType: 1
        },
        data: {
          recharge: {
            type: 'YM',
            num: '5415',
            cash: '',
            balance: 10000
          },
          cash: {
            type: 'BOB',
            num: '5415',
            cash: '',
            balance: 10000
          }
        },
        rechargeBankList: [],
        cashBankList: [],
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
          ],
          YM: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/YM-icon.png',
              title: '鱼猫金服',
              desc: ''
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
        self.rechargeBankList.push(self.banks[self.data.recharge.type][0])
        self.data.recharge.balanceBak = self.data.recharge.balance.toFixed(2)
        self.cashBankList.push(self.banks[self.data.cash.type][0])
        var cashNum = '<span class = "bankNum">尾号' + self.data.cash.num + '</span>'
        self.cashBankList[0].title += cashNum
        self.data.cash.balanceBak = self.data.cash.balance.toFixed(2)
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>
