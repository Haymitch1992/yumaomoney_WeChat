<template>
  <div>
    <x-header :left-options="leftOptions" @on-click-back="goBack()">员工信息分布</x-header>
    <group title="年龄分布">
      <v-chart :data="data.age">
        <v-scale y :options="yOptions" />
        <v-tooltip disabled />
        <v-pie :radius="0.85" series-field="name" :colors="['#3aacf2','#86d9f3','#aee7ff','#ccefff']" />
        <v-legend :options="ageOptions" />
      </v-chart>
    </group>
    <group title="学历分布">
      <v-chart :data="data.degree">
        <v-scale y :options="yOptions" />
        <v-tooltip disabled />
        <v-pie :radius="0.85" series-field="name" :colors="['#3aacf2','#86d9f3','#aee7ff','#ccefff']" />
        <v-legend :options="degreeOptions" />
      </v-chart>
    </group>
    <group title="工作年限">
      <v-chart :data="data.workingLife">
        <v-scale y :options="yOptions" />
        <v-tooltip disabled />
        <v-pie :radius="0.85" series-field="name" :colors="['#3aacf2','#86d9f3','#aee7ff','#ccefff']" />
        <v-legend :options="workingLifeOptions" />
      </v-chart>
    </group>
  </div>
</template>

<script>
  import { Group, XHeader, VChart, VArea, VPie, VScale, VTooltip, VLegend } from 'vux'

  const age = {
    '20岁-25岁': '33.33%',
    '26岁-30岁': '51.52%',
    '30岁以上': '15.15%'
  }

  const degree = {
    '大专': '27.27%',
    '本科': '48.49%',
    '研究生以上': '24.24%'
  }

  const workingLife = {
    '1年-2年': '9.09%',
    '2年-3年': '33.33%',
    '3年以上': '57.58%'
  }
  export default {
    name: 'Employees',
    components: {
      Group,
      XHeader,
      VChart,
      VArea,
      VPie,
      VScale,
      VTooltip,
      VLegend
    },
    data () {
      return {
        leftOptions: {
          preventGoBack: true
        },
        ageOptions: {
          position: 'right',
          itemFormatter (val) {
            return val + '  ' + age[val]
          }
        },
        degreeOptions: {
          position: 'right',
          itemFormatter (val) {
            return val + '  ' + degree[val]
          }
        },
        workingLifeOptions: {
          position: 'right',
          itemFormatter (val) {
            return val + '  ' + workingLife[val]
          }
        },
        yOptions: {
          formatter (val) {
            return val * 100 + '%'
          }
        },
        age,
        degree,
        workingLife,
        data: {
          age: [
            { name: '20岁-25岁', percent: 0.33, a: '1' },
            { name: '26岁-30岁', percent: 0.51, a: '1' },
            { name: '30岁以上', percent: 0.15, a: '1' }
          ],
          degree: [
            { name: '大专', percent: 0.27, a: '1' },
            { name: '本科', percent: 0.48, a: '1' },
            { name: '研究生以上', percent: 0.24, a: '1' }
          ],
          workingLife: [
            { name: '1年-2年', percent: 0.09, a: '1' },
            { name: '2年-3年', percent: 0.33, a: '1' },
            { name: '3年以上', percent: 0.57, a: '1' }
          ]
        }
      }
    },
    methods: {
      goBack () {
        this.$router.push({name: 'disclosure', params: {listType: 2}})
      }
    }
  }
</script>

<style>
</style>
