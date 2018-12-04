<template>
  <div>
    <x-header>信息详情</x-header>
    <group>
      <cell :title="data.item.title" :value="data.item.time"></cell>
      <cell-form-preview :list="list"></cell-form-preview>
      <div class="messageDetail" v-html="data.item.data.mailContent">
        {{data.item.data.mailContent}}
      </div>
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
        list: [],
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
<style>
  .messageDetail{
    padding: 10px 15px;
    color: #999;
    font-size: .9em;
    line-height: 2;
  }
</style>
