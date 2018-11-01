<template>
  <div>
    <x-header :left-options="leftOptions" @on-click-back="goBack()">分支机构</x-header>
    <group>
      <div class="table-box">
        <x-table full-bordered>
          <tbody>
          <tr>
            <td style="width: 100px">全称及简称</td>
            <td>鱼猫投融(北京)网络科技有限公司重庆分公司</td>
          </tr>
          <tr>
            <td>注册/经营地址</td>
            <td class="more-text">重庆市江北区溉澜溪组团G分区G09-4/03地块B5号楼11-办公1</td>
          </tr>
          <tr>
            <td>统一社会信用代码</td>
            <td>91500105MA5XEHKR72</td>
          </tr>
          <tr>
            <td>主要负责人</td>
            <td>王明澈</td>
          </tr>
          <tr>
            <td>登记机关</td>
            <td>重庆市工商行政管理局江北区分局</td>
          </tr>
          <tr>
            <td>成立时间</td>
            <td>2017年10月19日</td>
          </tr>
          <tr>
            <td>经营状态</td>
            <td>开业</td>
          </tr>
          <tr>
            <td>经营范围</td>
            <td class="more-text">软件开发；技术推广服务；计算机系统服务；数据处理（国家专项规定的除外）；会议服务；市场调查（国家专项规定的除外）。**【依法须经批准的项目，经相关部门批准后方可开展经营活动】</td>
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
    name: 'TanKantore',
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
