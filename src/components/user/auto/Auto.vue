<template>
  <div class="auto-invest">
    <x-header>自动投标</x-header>
    <group>
      <x-switch title="自动投标状态" v-model="data.autoType"></x-switch>
    </group>
    <div class="" v-if="pageNum === '1'">

      <div class="no-accredit"></div>
      <form id="cancle_invest" action="/cgt/authorizationUser.do" method="post">
        <input type="hidden" name="authList" value="TENDER" />
        <input type="submit" value="授权" class="go-accredit">
      </form>
    </div>
    <group>
      <cell title="单笔投资金额" value="10000.00"></cell>
      <cell title="保留账户金额" value="10000.00"></cell>
      <cell title="授权金额" value="10000.00"></cell>
      <cell title="授权期限" value="2019年08月9日"></cell>
    </group>
    <group>
      <cell title="年化收益" value="10%至15%"></cell>
      <cell title="投资期限" value="1至5个月"></cell>
      <cell title="年化收益" value="还本付息，到期还本"></cell>
    </group>
    <div class="pt20">
      <div class="submit-box">
        <x-button @click.native="change" type="primary">修改规则</x-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XInput, Selector, Datetime, Checklist, Radio, XButton, CheckIcon, XSwitch } from 'vux'

  export default {
    name: 'Auto',
    components: {
      Group,
      Cell,
      XHeader,
      XInput,
      Selector,
      Datetime,
      Checklist,
      Radio,
      XButton,
      CheckIcon,
      XSwitch
    },
    data () {
      return {
        data: {
          amount: null,
          save: '',
          earns: '年化收益',
          earnsLower: '11',
          earnsCeiling: '11',
          termCeiling: '4',
          termLower: '6',
          wayType: [],
          saveType: '0',
          agreement: false,
          autoType: false,
          pageNum: ''
        },
        earnsList: [
          {key: '8', value: '8%'},
          {key: '9', value: '9%'},
          {key: '10', value: '10%'},
          {key: '11', value: '11%'},
          {key: '12', value: '12%'},
          {key: '13', value: '13%'},
          {key: '14', value: '14%'}
        ],
        termList: [
          {key: '1', value: '1月'},
          {key: '2', value: '2月'},
          {key: '3', value: '3月'},
          {key: '4', value: '4月'},
          {key: '5', value: '5月'},
          {key: '6', value: '6月'},
          {key: '7', value: '7月'},
          {key: '8', value: '8月'},
          {key: '9', value: '9月'},
          {key: '10', value: '10月'},
          {key: '11', value: '11月'},
          {key: '12', value: '12月'}
        ],
        wayList: [ {key: '1', value: '还款方式:按月分析，到期还本'} ],
        saveList: [
          {key: '0', value: '无需保留金额'},
          {key: '1', value: '需保留金额'}
        ],
        positive: function (value) {
          return {
            valid: value >= 0,
            msg: '单笔金额需大于0'
          }
        }
      }
    },
    methods: {
      change () {
        var self = this
        this.$router.push({name: 'autoEdit', params: self.data})
      },
      saveTypeChange (val, label) {
        var self = this
        self.data.save = ''
        console.log('change', val, label)
      },
      autoCheck () {
        var self = this
        self.status = true
      },
      getInfo () {
        var self = this
        self.$http.post(process.env.BASE_API + '/apigetAutomaticBidMap.do')
          .then(function (res) {
            if (res.data === 'noLogin') {
              console.log('未登录')
            } else if (res.data.data === '') {
              console.log('没有数据')
            } else {
              // 若未授权 跳转新网授权 成功的回调页面 设置自动投标参数
              // 若已授权 判断是否设置过 如果没有 跳转设置自动投标参数
              // 否则 留在当前页面
              if (res.data.data.status === '0') {
                self.pageNum = '1'
              } else {
                self.pageNum = '2'
              }
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    created () {
      var self = this
      self.getInfo()
      // 初始化的时候获取 自动投标状态
    }
  }
</script>
<style lang="less">
  .auto-invest{
    .no-accredit{
      background: #f5f5f5;
      height: 200px;
      width: 100%;
      margin:20px 0;
    }
    .go-accredit{
      display: block;
      width: 94%;
      height: 40px;
      line-height: 40px;
      margin: 0 auto;
      background: #E64340;
      color: #fff;
      border-radius: 6px;
    }
  }
</style>
