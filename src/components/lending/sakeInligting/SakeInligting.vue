<template>
  <div>
    <x-header>工商信息</x-header>
    <group>
      <div class="table-box">
        <x-table full-bordered>
          <tbody>
          <tr>
            <td style="width: 100px">公司全称</td>
            <td>鱼猫投融（北京）网络科技有限公司</td>
          </tr>
          <tr>
            <td>平台名称</td>
            <td>鱼猫金服</td>
          </tr>
          <tr>
            <td>注册/经营地址</td>
            <td class="more-text">北京市朝阳区高碑店乡半壁店村南街1131号4005-1室</td>
          </tr>
          <tr>
            <td>统一社会信用代码</td>
            <td>91110105317952261C</td>
          </tr>
          <tr>
            <td>注册资本</td>
            <td>5000万元人民币</td>
          </tr>
          <tr>
            <td>实缴注册资本</td>
            <td>5000万元人民币</td>
          </tr>
          <tr>
            <td>成立时间</td>
            <td>2014年09月28日</td>
          </tr>
          <tr>
            <td>经营期限至</td>
            <td>2034年09月28日</td>
          </tr>
          <tr>
            <td>股东股权占比</td>
            <td class="more-text">王明澈（92%）<br>周江华（8%）</td>
          </tr>
          <tr>
            <td>经营状态</td>
            <td>开业</td>
          </tr>
          <tr>
            <td>经营范围</td>
            <td class="more-text">技术推广服务；计算机系统服务；数据处理；经济贸易咨询；投资管理；会议服务；市场调查；软件开发。（企业依法自主选择经营项目，开展经营活动；依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事本市产业政策禁止和限制类项目的经营活动。）</td>
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
    name: 'SakeInligting',
    components: {
      Group,
      XHeader,
      XTable
    },
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello World!'
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
