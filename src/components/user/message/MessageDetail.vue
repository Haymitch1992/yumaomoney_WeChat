<template>
  <div>
    <x-header :left-options="leftOptions" @on-click-back="goBack()">信息详情</x-header>
    <group>
      <cell title="理财投资成功报告" value="2018-10-9 23:23:23"></cell>
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
        leftOptions: {
          preventGoBack: true
        },
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
      goBack () {
        var self = this
        this.$router.push({name: 'message', params: {listType: self.data.listType}})
      },
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
