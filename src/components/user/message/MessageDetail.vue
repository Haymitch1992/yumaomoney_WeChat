<template>
  <div>
    <x-header>信息详情</x-header>
    <group>
      <cell :title="data.item.title" :value="data.item.time"></cell>
      <cell-form-preview :list="list"></cell-form-preview>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, CellFormPreview } from 'vux'

  export default {
    name: 'MessageDetail',
    components: {
      Group,
      Cell,
      XHeader,
      CellFormPreview
    },
    data () {
      return {
        list: [
          {
            label: '您投资的借款[气泡袋应收账款转让项目],',
            value: ''
          },
          {
            label: '第[1/4]期还款已经完成.',
            value: ''
          },
          {
            label: '本期应得总额:',
            value: '￥329.00元'
          }, {
            label: '其中本金部分为:',
            value: '￥300.00元'
          }, {
            label: '利息部分:',
            value: '￥29.00元'
          }, {
            label: '实得逾期罚息:',
            value: '￥0.00元'
          }, {
            label: '扣除投资管理费:',
            value: '￥0.00元'
          }, {
            label: '实得总额:',
            value: '￥329.00元'
          }
        ],
        data: {}
      }
    },
    methods: {
      init () {
        var self = this
        self.data = self.$route.params
        console.log(self.data)
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>
