<template>
  <div class="calculator">
    <x-header>收益计算器</x-header>
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
  </div>
</template>

<script>
  import { Group, Cell, XHeader, CellFormPreview, VChart, VTooltip, VBar } from 'vux'

  export default {
    name: 'CalculatorDetail',
    components: {
      Group,
      Cell,
      XHeader,
      CellFormPreview,
      VChart,
      VTooltip,
      VBar
    },
    data () {
      return {
        gradient: [
          [0, '#ffc12c'],
          [0.5, '#ff5151'],
          [1, '#5980ff']
        ],
        incomeData: [
          { name: '银行活期', 年利率: 0.3 },
          { name: '银行定期', 年利率: 1.5 },
          { name: '货币基金', 年利率: 5 },
          { name: '鱼猫金服', 年利率: 12 }
        ],
        data: {
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
        }
      }
    },
    methods: {
      getFrom () {
        var self = this
        self.data = self.$route.params.data
        self.$cookies.set('calculatorData', self.data, '1d')
        self.incomeData[3].年利率 = self.data.earnsCeiling
      },
      init () {
        var self = this
        if (!self.$route.params.data) {
          self.$router.push({
            name: `calculator`,
            params: {}
          })
        } else {
          self.getFrom()
        }
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
  }
</style>
