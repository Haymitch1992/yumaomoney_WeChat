<template>
  <div>
    <x-header>收益计算器</x-header>
    <group>
      <x-input title="投资金额(元)" v-model="data.cash" :is-type="moreThan0" placeholder="单笔投资不小于0元"></x-input>
      <selector title="投资期限" direction="rtl" :options="termList" v-model="data.term"></selector>
      <selector title="年化收益" direction="rtl" :options="earnsList" v-model="data.earnsCeiling"></selector>
      <selector title="还款方式" direction="rtl" :options="wayList" v-model="data.way"></selector>
    </group>
    <div class="pt15">
      <div class="submit-box">
        <x-button type="primary" @click.native="calculating">开始计算</x-button>
      </div>
    </div>
    <toast v-model="type.show" type="warn">{{type.msg}}</toast>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XButton, XInput, Selector, Toast } from 'vux'

  export default {
    name: 'Calculator',
    components: {
      Group,
      Cell,
      XHeader,
      XButton,
      XInput,
      Selector,
      Toast
    },
    data () {
      return {
        data: {
          cash: '',
          term: '1',
          earnsCeiling: '10',
          way: '1',
          interest: null,
          list: [
            {
              label: '本息合计:',
              value: ''
            },
            {
              label: '到期本金:',
              value: ''
            },
            {
              label: '净利息收入共:',
              value: ''
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
          {key: '1', value: '按月付息，到期还本'},
          {key: '2', value: '到期还本付息'}
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
      calculating () {
        var self = this
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
        self.data.interest = (self.data.cash * (self.data.earnsCeiling / 100) / 12).toFixed(2) * self.data.term
        self.data.list[0].value = Math.floor(self.data.cash) + self.data.interest + '元'
        self.data.list[1].value = Math.floor(self.data.cash) + '元'
        self.data.list[2].value = self.data.interest + '元'
        this.$router.push({
          name: `calculatorDetail`,
          params: {
            data: self.data
          }
        })
      },
      getFrom () {
        var self = this
        if (self.$route.params && self.$route.params.data) {
          self.data = self.$route.params.data
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
