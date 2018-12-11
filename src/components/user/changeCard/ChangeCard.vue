<template>
  <div>
    <x-header>银行卡</x-header>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <panel :list="bankList" type="1" @on-img-error="onImgError" @click.native="show = true"></panel>
    </group>
    <div v-transfer-dom>
      <popup v-model="show" height="230px" is-transparent>
        <div style="width: 95%;background-color:#fff;height:206px;margin:0 auto;border-radius:5px;padding-top:10px;">
          <div style="padding:20px 15px;">
            <x-button type="primary">预留手机号变更</x-button>
            <x-button type="primary">解绑银行卡</x-button>
            <x-button @click.native="show = false">取消</x-button>
          </div>
        </div>
      </popup>
    </div>
    <alert v-model="noLoginShow" title="登录失效" @on-hide="logout('login')">请重新登录</alert>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { TransferDom, Group, Cell, XHeader, Panel, Popup, XButton, AlertModule, Alert } from 'vux'

  export default {
    name: 'ChangeCard',
    directives: {
      TransferDom
    },
    components: {
      Group,
      Cell,
      XHeader,
      Panel,
      Popup,
      XButton,
      AlertModule,
      Alert
    },
    data () {
      return {
        data: {
          cash: '',
          balance: 10000
        },
        noLoginShow: false,
        show: false,
        bankList: [],
        bankJson: [],
        banks: {
          ABOC: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/ABC-icon.png',
              title: '中国农业银行',
              desc: '单笔限额100万元，单日限额500万元'
            }
          ],
          COMM: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/BCM-icon.png',
              title: '交通银行',
              desc: '单笔限额100万元，单日限额100万元'
            }
          ],
          BJCN: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/BOB-icon.png',
              title: '北京银行',
              desc: '单笔限额100万元，单日限额100万元'
            }
          ],
          BKCH: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/BOC-icon.png',
              title: '中国银行',
              desc: '单笔限额5万元，单日限额5万元'
            }
          ],
          PCBC: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/CCB-icon.png',
              title: '中国建设银行',
              desc: '单笔限额100万元，单日限额200万元'
            }
          ],
          EVER: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/CEB-icon.png',
              title: '中国光大银行',
              desc: '单笔限额50万元，单日限额50万元'
            }
          ],
          FJIB: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/CIB-icon.png',
              title: '兴业银行',
              desc: '单笔限额100万元，单日限额100万元'
            }
          ],
          CIBK: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/CITIC-icon.png',
              title: '中信银行',
              desc: '单笔限额40万元，单日限额100万元'
            }
          ],
          CMBC: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/CMB-icon.png',
              title: '招商银行',
              desc: '单笔限额100万元，单日限额200万元'
            }
          ],
          GDBK: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/CGB-icon.png',
              title: '广发银行',
              desc: '单笔限额100万元，单日限额200万元'
            }
          ],
          HXBK: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/HXB-icon.png',
              title: '华夏银行',
              desc: '单笔限额100万元，单日限额200万元'
            }
          ],
          ICBK: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/ICBC-icon.png',
              title: '中国工商银行',
              desc: '单笔限额100万元，单日限额200万元'
            }
          ],
          MSBC: [
            {
              src: 'http://39.107.59.233/images/wechat/banks/CMBC-icon.png',
              title: '中国民生银行',
              desc: '单笔限额100万元，单日限额200万元'
            }
          ],
          SZDB: [
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
      /**
       * 获取数据
       */
      getData () {
        var self = this
        self.$http.post(process.env.BASE_API + '/apihome.do', null)
          .then(function (res) {
            /**
             * 验证登录是否失效
             */
            if (res.data === 'noLogin') {
              self.noLoginShow = true
            } else {
              self.$cookies.set('apiHomeData', res.data.data, '1d')
              self.bankList = []
              self.bankList.push(self.banks[res.data.data.bankMap.bankcode][0])
              var num = ' 尾号' + res.data.data.bankMap.cardNo.substr(-4)
              self.bankList[0].title += num
              self.data.balanceBak = self.data.balance.toFixed(2)
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      /**
       * 获取银行列表
       */
      getJson () {
        var self = this
        self.$http.post(process.env.BASE_API + '/jsonData/bank_kj.json', null)
          .then(function (res) {
            self.bankJson = res.data
            _.each(self.bankJson, function (v) {
              self.banks[v.BankName][0].desc = `单笔限额${v.once}元，单日限额${v.day}元`
            })
            self.getData()
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      /**
       * 登录失效跳转
       */
      logout () {
        var self = this
        window.localStorage.removeItem('Flag')
        self.$store.dispatch('setUser', false)
        self.$cookies.remove('tokenClientkey')
        self.$cookies.remove('apiHomeData')
        self.$router.push('/start/login')
      },
      init () {
        var self = this
        if (self.$cookies.get('apiHomeData')) {
          self.bankList = []
          self.bankList.push(self.banks[self.$cookies.get('apiHomeData').bankMap.bankcode][0])
          var num = ' 尾号' + self.$cookies.get('apiHomeData').bankMap.cardNo.substr(-4)
          self.bankList[0].title += num
          self.data.balanceBak = self.data.balance.toFixed(2)
        }
        if ((self.$http.defaults.headers.tokenClientkey === undefined) && self.$cookies.get('tokenClientkey')) {
          self.$http.defaults.headers.tokenClientkey = self.$cookies.get('tokenClientkey')
        }
        self.getJson()
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
