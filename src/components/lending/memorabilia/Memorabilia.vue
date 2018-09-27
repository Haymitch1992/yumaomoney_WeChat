<template>
  <div>
    <x-header :left-options="leftOptions" @on-click-back="goBack()">重大事项</x-header>
    <group>
      <div class="table-box">
        <x-table full-bordered>
          <tbody>
          <tr>
            <td>合并、分立、解散或者申请破产</td>
            <td>无</td>
          </tr>
          <tr>
            <td>从业机构受到刑事处罚</td>
            <td>无</td>
          </tr>
          <tr>
            <td>从业机构受到重大行政处罚</td>
            <td>无</td>
          </tr>
          <tr>
            <td>重大诉讼或者仲裁事项</td>
            <td>无</td>
          </tr>
          <tr>
            <td class="more-text">实际控制人与持股 5%以上的股东、董事、监事、高级管理 人员的变更信息</td>
            <td>无</td>
          </tr>
          <tr>
            <td class="more-text">实际控制人与持股 5%以上的 股东、董事、监事、高级管理 人员涉及的重大诉讼或者仲裁事项或重大行政处罚</td>
            <td>无</td>
          </tr>
          </tbody>
        </x-table>
      </div>
    </group>
  </div>
</template>

<script>
  import { Group, XHeader, XTable } from 'vux'

  export default {
    name: 'Memorabilia',
    components: {
      Group,
      XHeader,
      XTable
    },
    data () {
      return {
        leftOptions: {
          preventGoBack: true
        }
      }
    },
    methods: {
      goBack () {
        this.$router.push({name: 'disclosure', params: {listType: 1}})
      }
    }
  }
</script>

<style>
  .table-box{
    padding: 15px;
    font-size: 12px;
  }
  .table-box table tbody tr td{
    text-align: left;
    padding: 0 10px;
  }
  .table-box table tbody tr .more-text {
    padding: 10px;
    line-height: 20px;
  }
</style>
