<template>
  <div>
    <x-header :left-options="leftOptions" @on-click-back="goBack()">收益计算器</x-header>
    <group>
      <cell title="计算结果"></cell>
      <cell-form-preview :list="data.list"></cell-form-preview>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, CellFormPreview } from 'vux'

  export default {
    name: 'CalculatorDetail',
    components: {
      Group,
      Cell,
      XHeader,
      CellFormPreview
    },
    data () {
      return {
        leftOptions: {
          preventGoBack: true
        },
        data: {}
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
