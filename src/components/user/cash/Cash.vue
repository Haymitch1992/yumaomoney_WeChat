<template>
  <div>
    <x-header>提现</x-header>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <panel :list="bankList" type="1" @on-img-error="onImgError"></panel>
    </group>
    <group title="cell demo">
      <cell title="第一" value="cool" is-link></cell>
      <cell title="第二" value="cool" is-link></cell>
      <cell title="第三" value="cool" is-link></cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, Panel } from 'vux'

  export default {
    name: 'Cash',
    components: {
      Group,
      Cell,
      XHeader,
      Panel
    },
    data () {
      return {
        data: {
          type: 'BOB',
          num: '5415'
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
