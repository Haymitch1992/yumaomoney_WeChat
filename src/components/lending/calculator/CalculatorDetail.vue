<template>
  <div>
    <x-header :left-options="leftOptions" @on-click-back="goBack()">收益计算器</x-header>
    <group>
      <cell title="计算结果"></cell>
      <cell-form-preview :list="data.list"></cell-form-preview>
    </group>
    <group title="产品收益" label-width="4.5em" label-margin-right="2em" label-align="right">
      <v-chart
        ref="demo"
        :data="incomeData">
        <v-bar />
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
        leftOptions: {
          preventGoBack: true
        },
        incomeData: [
          { year: '银行活期', sales: 0.3 },
          { year: '银行定期', sales: 1.5 },
          { year: '货币基金', sales: 5 },
          { year: '鱼猫金服', sales: 12 }
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
      goBack () {
        var self = this
        self.$router.push({
          name: `calculator`,
          params: {
            data: self.data
          }
        })
      },
      getFrom () {
        var self = this
        self.data = self.$route.params.data
        self.incomeData[3].sales = self.data.earnsCeiling
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
