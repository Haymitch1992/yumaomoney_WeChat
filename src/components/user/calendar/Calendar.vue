<template>
  <div>
    <x-header>回款日历</x-header>
    <inline-calendar
      ref="calendar"
      @on-change="onChange"
      @on-view-change="onViewChange"
      class="inline-calendar-demo"
      :show.sync="show"
      v-model="value"
      start-date="2016-04-01"
      end-date="2018-12-30"
      :range="range"
      :show-last-month="showLastMonth"
      :show-next-month="showNextMonth"
      :highlight-weekend="highlightWeekend"
      :return-six-rows="return6Rows"
      :hide-header="hideHeader"
      :hide-week-list="hideWeekList"
      :replace-text-list="replaceTextList"
      :weeks-list="weeksList"
      :render-function="buildSlotFn"
      :disable-past="disablePast"
      :disable-future="disableFuture"
      :disable-weekend="disableWeekend"
      :disable-date-function="disableDateFunction">
    </inline-calendar>
    <group>
      <cell title="选中值" :value="value"></cell>
      <cell title="开始日期" value="2016-04-01"></cell>
      <cell title="结束日期" value="2018-12-30"></cell>
    </group>

    <div style="margin: 15px;">
      <x-button type="primary" @click.native="$refs.calendar.switchViewToToday()">switchViewToToday</x-button>
      <x-button type="primary" @click.native="$refs.calendar.switchViewToMonth(2017, 12)">switchViewToMonth(2017, 12)</x-button>
      <x-button type="primary" @click.native="$refs.calendar.switchViewToMonth(2018, 10)">switchViewToMonth(2018, 10)</x-button>
      <x-button type="primary" @click.native="$refs.calendar.switchViewToCurrentValue()">switchViewToCurrentValue</x-button>
    </div>

    <group title="控制日期" style="margin-top: 30px;">
      <x-switch v-model="disablePast" title="禁止选择未来的日期"></x-switch>
      <x-switch v-model="disableFuture" title="禁止选择未来时间"></x-switch>
      <x-switch v-model="disableWeekend" title="禁止选则周末日期"></x-switch>
      <x-switch v-model="showLastMonth" title="显示上个月"></x-switch>
      <x-switch v-model="showNextMonth" title="显示下个月"></x-switch>
      <x-switch v-model="return6Rows" inline-desc="否则，日历的高度会发生改变" title="固定显示6行"></x-switch>
      <x-switch v-model="highlightWeekend" title="高亮周末"></x-switch>
      <cell title="选中值" :value="value"></cell>
    </group>
    <group title="控制导航部分">
      <x-switch v-model="hideHeader" title="隐藏日历头部"></x-switch>
      <x-switch v-model="hideWeekList" title="隐藏星期列表"></x-switch>
      <x-switch v-model="changeWeeksList" title="切换星期列表"></x-switch>
    </group>
    <group title="替换文本">
      <x-switch v-model="replace" title="替换日期文本"></x-switch>
    </group>
    <br>
    <div style="margin: 15px;">
      <x-button type="primary" @click.native="value='2020-11-11'"> 设置为 2020-11-11</x-button>
      <x-button type="primary" @click.native="value='2020-11-22'"> 设置为 2020-11-22</x-button>
      <x-button type="primary" @click.native="value='2016-08-09'"> 设置为 2016-08-09</x-button>
      <x-button type="primary" @click.native="value='TODAY'"> 设置为 today</x-button>
      <x-button type="primary" @click.native="value='2016-06-05'"> 设置为 2016-06-05</x-button>
    </div>
    <br>
    <group title="自定义日期单元格">
      <x-switch v-model="useCustomFn" inline-desc="为带有数字8的日期添加红点" title="在日期单元格中添加自定义内容"></x-switch>
    </group>

    <br>

    <divider> 按月份顺序渲染一系列日历</divider>
    <group>
      <cell title="选中值" :value="listValue"></cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, InlineCalendar, XSwitch, Radio, XButton, Divider } from 'vux'

  export default {
    name: 'Calendar',
    components: {
      Group,
      Cell,
      XHeader,
      InlineCalendar,
      XSwitch,
      Radio,
      XButton,
      Divider
    },
    data () {
      return {
        show: true,
        value: '',
        listValue: '',
        range: false,
        showLastMonth: true,
        showNextMonth: true,
        highlightWeekend: false,
        return6Rows: true,
        hideHeader: false,
        hideWeekList: false,
        replaceTextList: {},
        replace: false,
        changeWeeksList: false,
        weeksList: [],
        useCustomFn: false,
        buildSlotFn: () => '',
        disablePast: false,
        disableFuture: false,
        disableWeekend: false,
        disableDateFunction (date) {
          if (date.formatedDate === '2017-10-16') {
            return true
          }
        }
      }
    },
    watch: {
      replace (val) {
        this.replaceTextList = val ? {
          'TODAY': '今'
        } : {}
      },
      useCustomFn (val) {
        this.buildSlotFn = val ? (line, index, data) => {
          return /8/.test(data.date) ? '<div style="font-size:12px;text-align:center;"><span style="display:inline-block;width:5px;height:5px;background-color:red;border-radius:50%;"></span></div>' : '<div style="height:19px;"></div>'
        } : () => ''
      },
      changeWeeksList (val) {
        this.weeksList = val ? ['日', '一', '二', '三', '四', '五', '六 '] : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
      }
    },
    methods: {
      onChange (val) {
        console.log('on-change', val)
      },
      onViewChange (val, count) {
        console.log('on view change', val, count)
      }
    }
  }
</script>

<style lang="less" scoped>
  .inline-calendar-demo {
    background: rgba(255,255,255,0.9);
  }
</style>
