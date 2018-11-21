<template>
  <div class="calculator">
    <x-header>收益计算器</x-header>
    <div v-if="showPage==0">
      <group>
        <x-input title="投资金额" text-align="right" v-model="data.cash" :is-type="moreThan0" placeholder="元"></x-input>
        <selector title="投资期限" direction="rtl" :options="termList" v-model="data.term" ></selector>
        <selector title="年化收益" direction="rtl" :options="earnsList" v-model="data.earnsCeiling"></selector>
        <selector title="还款方式" direction="rtl" readonly :options="wayList" v-model="data.way"></selector>
      </group>
      <toast v-model="type.show" type="cancel">{{type.msg}}</toast>
      <div class="submit-box">
        <x-button type="primary"  @click.native="calculating">开始计算</x-button>
      </div>
    </div>
    <div v-if="showPage==1">
      <group>
        <cell title="计算结果"></cell>
        <cell-form-preview :list="data.list"></cell-form-preview>
      </group>
      <group title="产品收益" label-width="4.5em" label-margin-right="2em" label-align="right">
        <v-chart
          ref="demo"
          :data="incomeData">
          <v-bar :colors="gradient" />
          <v-tooltip :show-item-marker="false" />
        </v-chart>
      </group>
      <div class="submit-box">
        <x-button type="primary" @click.native="clearPage">重新计算</x-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, CellFormPreview, XButton, XInput, Selector, Toast, VChart, VTooltip, VBar } from 'vux'

  export default {
    name: 'Calculator',
    components: {
      Group,
      Cell,
      XHeader,
      XButton,
      CellFormPreview,
      XInput,
      Selector,
      Toast,
      VChart,
      VTooltip,
      VBar
    },
    data () {
      return {
        showPage: 0,
        gradient: [
          [0, '#ffc12c'],
          [0.5, '#ff5151'],
          [1, '#5980ff']
        ],
        incomeData: [
          { name: '银行一年定期', 年利率: 2.75 },
          { name: '某宝', 年利率: 2.5 },
          { name: '货币基金', 年利率: 5 },
          { name: '鱼猫金服', 年利率: 12 }
        ],
        data: {
          cash: '',
          term: '1',
          earnsCeiling: '10',
          way: '1',
          interest: null,
          list: [
            {
              label: '到期收益:',
              value: '1'
            },
            {
              label: '利息共收入:',
              value: '2'
            },
            {
              label: '平均每月利息:',
              value: '3'
            }
          ]
        },
        type: {
          show: false,
          msg: ''
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
        wayList: [
          {key: '1', value: '按月付息，到期还本'}
        ],
        moreThan0: function (value) {
          return {
            valid: value >= 0,
            msg: '单笔投资不小于0元'
          }
        }
      }
    },
    methods: {
      clearPage () {
        this.showPage = 0
      },
      calculating () {
        var self = this
        console.log('开始')
        if (self.data.cash === '') {
          self.type.msg = '投资金额必填'
          self.type.show = true
          return
        }
        if (self.data.term === '') {
          self.type.msg = '投资期限必选'
          self.type.show = true
          return
        }
        if (self.data.earnsCeiling === '') {
          self.type.msg = '年化收益必选'
          self.type.show = true
          return
        }
        console.log('开始2')
        self.data.interest = (self.data.cash * (self.data.earnsCeiling / 100) / 12).toFixed(2) * self.data.term
        self.data.list[0].value = self.data.cash + self.data.interest + '元'
        self.data.list[1].value = (self.data.interest).toFixed(2) + '元'
        self.data.list[2].value = (self.data.cash * (self.data.earnsCeiling / 100) / 12).toFixed(2) + '元'
        console.log('开始3')
        self.showPage = 1
        self.incomeData[3].年利率 = self.data.earnsCeiling
        console.log(111444)
      },
      getFrom () {
        var self = this
        if (self.$cookies.get('calculatorData')) {
          self.data = self.$cookies.get('calculatorData')
          self.$cookies.remove('calculatorData')
        }
      },
      init () {
        var self = this
        self.getFrom()
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>
<style lang="less">
  .calculator{
    background: #fff;
    .vux-header{
      background-color: #fff;
    }
    .vux-header .vux-header-left a, .vux-header .vux-header-left button, .vux-header .vux-header-right a, .vux-header .vux-header-right button{
      color: #fff;
    }
    .vux-header .vux-header-left .left-arrow:before{
      border: 1px solid #666;
      border-width: 1px 0 0 1px;
    }
    .vux-header-title-area, .vux-header .vux-header-title{
      color: #666;
    }
    .weui-label{
      font-size: 14px;
    }
    .weui-select{
      font-size: 14px;
      color: #666;
    }
    .vux-selector-readonly{
      font-size: 14px;
      line-height: 24px;
    }
    .weui-cells:before{
      border-top: none;
    }
    .weui-input{
      color: #666;
    }
    .submit-box{
      width: 94%;
      margin: 0 auto;
      padding: 60px 0;
      .weui-btn{
        line-height: 2.5;
      }
    }

  }

</style>
