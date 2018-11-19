<template>
  <div class="calendar">
    <div class="calendar-bg">
      <x-header>回款日历</x-header>
      <div class="calendar-box">
        <inline-calendar
          ref="calendar"
          @on-change="onChange"
          @on-view-change="onViewChange"
          class="inline-calendar-demo"
          :show.sync="show"
          v-model="value"
          start-date="2014-10-01"
          end-date=""
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
          :disable-weekend="disableWeekend">
        </inline-calendar>
      </div>
    </div>
    <div class="detailsInfo">
      <div class="monthSumDiv">
        本月回款总额：<span>{{monthSum | toFix2 }}</span>元
      </div>
      <div class="monthSumDiv">
        今日回款总额：<span>{{todaySum | toFix2 }}</span>元
      </div>
      <table>
        <tr>
          <th>项目名称</th>
          <th>期限</th>
          <th>金额</th>
          <th>状态</th>
        </tr>
        <tbody>
          <tr v-for="item in showArr">
            <td>{{item.borrowTitle}}</td>
            <td>{{item.repayPeriod}}</td>
            <td>{{(item.earn + item.forpayPrincipal) | toFix2}}</td>
            <td>{{prepayment(item.repayDate, item.repayStatus)}}</td>
          </tr>
        </tbody>
      </table>
    </div>
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
        jsonStr: '[{"realRepayDate":null,"borrowTitle":"贸易通 YM01-TDBL-2018-1","forpayInterest":2750,"repayStatus":1,"forpayPrincipal":0,"manage":0,"repayPeriod":"5/6","principalBalance":300000,"isLate":1,"username":"qycs1213","isWebRepay":1,"repayDate":"2018-11-02","earn":2750,"lateDay":0,"forFI":0},{"realRepayDate":null,"borrowTitle":"贸易通 YM01-TDBL-2018-1","forpayInterest":91.67,"repayStatus":1,"forpayPrincipal":0,"manage":0,"repayPeriod":"5/6","principalBalance":10000,"isLate":1,"username":"qycs1213","isWebRepay":1,"repayDate":"2018-11-02","earn":91.67,"lateDay":0,"forFI":0},{"realRepayDate":null,"borrowTitle":"贸易通YM01-TDBL-2018-01","forpayInterest":7.5,"repayStatus":1,"forpayPrincipal":0,"manage":0,"repayPeriod":"5/6","principalBalance":1000,"isLate":1,"username":"qycs1213","isWebRepay":1,"repayDate":"2018-11-07","earn":7.5,"lateDay":0,"forFI":0},{"realRepayDate":null,"borrowTitle":"贸易通YM01-TDBL-2018-01","forpayInterest":7.5,"repayStatus":1,"forpayPrincipal":0,"manage":0,"repayPeriod":"5/6","principalBalance":1000,"isLate":1,"username":"qycs1213","isWebRepay":1,"repayDate":"2018-11-07","earn":7.5,"lateDay":0,"forFI":0},{"realRepayDate":null,"borrowTitle":"贸易通YM01-TDBL-2018-01","forpayInterest":7.5,"repayStatus":1,"forpayPrincipal":0,"manage":0,"repayPeriod":"5/6","principalBalance":1000,"isLate":1,"username":"qycs1213","isWebRepay":1,"repayDate":"2018-11-07","earn":7.5,"lateDay":0,"forFI":0},{"realRepayDate":null,"borrowTitle":"YM01-A-0902","forpayInterest":84.93,"repayStatus":1,"forpayPrincipal":0,"manage":0,"repayPeriod":"3/5","principalBalance":10000,"isLate":1,"username":"13812340063","isWebRepay":1,"repayDate":"2018-11-13","earn":84.93,"lateDay":0,"forFI":0},{"realRepayDate":null,"borrowTitle":"YM01-A-0902","forpayInterest":84.93,"repayStatus":1,"forpayPrincipal":0,"manage":0,"repayPeriod":"3/5","principalBalance":10000,"isLate":1,"username":"13812340063","isWebRepay":1,"repayDate":"2018-11-13","earn":84.93,"lateDay":0,"forFI":0},{"realRepayDate":null,"borrowTitle":"YM01-A-0902","forpayInterest":84.93,"repayStatus":1,"forpayPrincipal":0,"manage":0,"repayPeriod":"3/5","principalBalance":10000,"isLate":1,"username":"13812340063","isWebRepay":1,"repayDate":"2018-11-13","earn":84.93,"lateDay":0,"forFI":0},{"realRepayDate":null,"borrowTitle":"YM01-A-0902","forpayInterest":84.94,"repayStatus":1,"forpayPrincipal":0,"manage":0,"repayPeriod":"3/5","principalBalance":10000,"isLate":1,"username":"13812340063","isWebRepay":1,"repayDate":"2018-11-13","earn":84.94,"lateDay":0,"forFI":0},{"realRepayDate":null,"borrowTitle":"YM01-A-0902","forpayInterest":84.93,"repayStatus":1,"forpayPrincipal":0,"manage":0,"repayPeriod":"3/5","principalBalance":10000,"isLate":1,"username":"13812340063","isWebRepay":1,"repayDate":"2018-11-13","earn":84.93,"lateDay":0,"forFI":0},{"realRepayDate":"2018-08-16","borrowTitle":"YMJF-XBT-0815","forpayInterest":310,"repayStatus":2,"forpayPrincipal":0,"manage":0,"repayPeriod":"3/4","principalBalance":30000,"isLate":1,"username":"13812340056","isWebRepay":1,"repayDate":"2018-11-18","earn":310,"lateDay":0,"forFI":0},{"realRepayDate":"2018-08-16","borrowTitle":"YMJF-XBT-0815","forpayInterest":110,"repayStatus":2,"forpayPrincipal":30000,"manage":0,"repayPeriod":"4/4","principalBalance":0,"isLate":1,"username":"13812340056","isWebRepay":1,"repayDate":"2018-11-29","earn":110,"lateDay":0,"forFI":0}]',
        infoObject: '',
        showArr: '',
        currentYear: '',
        currentMonth: '',
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
        weeksList: ['周日', '周一', '周二', '周三', '周四', '周五', '周六 '],
        useCustomFn: true,
        buildSlotFn: () => '',
        disablePast: false,
        disableFuture: true,
        disableWeekend: false,
        monthSum: 0,
        todaySum: 0
      }
    },
    filters: {
      toFix2: function (value) {
        if (!value) return '0.00'
        return value.toFixed(2)
      }
    },
    watch: {
      replace (val) {
        this.replaceTextList = val ? {
          'TODAY': '今'
        } : {}
      },
      useCustomFn (val) {

      }
    },
    methods: {
      prepayment: function (prepayTime, prepayStatus) {
        console.log(prepayTime, prepayStatus)
        if (prepayStatus === 1) {
          return '待支付'
        }
        if (prepayStatus === 2 && new Date().getTime() - new Date(prepayTime).getTime() < 0) {
          return '已支付'
        } else {
          return '提前还款'
        }
      },
      onChange (val) {
        this.showArr = []
        console.log('on-change', val)
        this.todaySum = 0
        for (let i = 0; i < this.infoObject.length; i++) {
          if (this.infoObject[i].repayDate === val) {
            this.showArr.push(this.infoObject[i])
            this.todaySum = this.todaySum + this.infoObject[i].earn + this.infoObject[i].forpayPrincipal // 今日回款 = 利息 + 本金
          }
        }
      },
      onViewChange (val, count) {
        console.log('on view change', val, count)
        this.currentYear = val.year
        this.currentMonth = val.month
        document.getElementsByClassName('calendar-month-txt')[0].innerHTML = this.currentYear + '年' + this.currentMonth + '月'
        // 发出请求
        this.getInfo(this.currentYear, this.currentMonth)
      },
      getInfo (year, month) {
        if (month === 10) {
          this.jsonStr = '[{"realRepayDate":null,"borrowTitle":"贸易通 YM01-TDBL-2018-1","forpayInterest":2750,"repayStatus":1,"forpayPrincipal":0,"manage":0,"repayPeriod":"4/6","principalBalance":300000,"isLate":1,"username":"qycs1213","isWebRepay":1,"repayDate":"2018-10-03","earn":2750,"lateDay":0,"forFI":0},{"realRepayDate":"2018-08-27","borrowTitle":"测试项目","forpayInterest":116.67,"repayStatus":2,"forpayPrincipal":30000,"manage":0,"repayPeriod":"2/2","principalBalance":0,"isLate":1,"username":"15810540479","isWebRepay":1,"repayDate":"2018-10-03","earn":116.67,"lateDay":0,"forFI":0},{"realRepayDate":null,"borrowTitle":"贸易通 YM01-TDBL-2018-1","forpayInterest":91.67,"repayStatus":1,"forpayPrincipal":0,"manage":0,"repayPeriod":"4/6","principalBalance":10000,"isLate":1,"username":"qycs1213","isWebRepay":1,"repayDate":"2018-10-03","earn":91.67,"lateDay":0,"forFI":0},{"realRepayDate":null,"borrowTitle":"贸易通YM01-TDBL-2018-01","forpayInterest":7.5,"repayStatus":1,"forpayPrincipal":0,"manage":0,"repayPeriod":"4/6","principalBalance":1000,"isLate":1,"username":"qycs1213","isWebRepay":1,"repayDate":"2018-10-07","earn":7.5,"lateDay":0,"forFI":0},{"realRepayDate":null,"borrowTitle":"贸易通YM01-TDBL-2018-01","forpayInterest":7.5,"repayStatus":1,"forpayPrincipal":0,"manage":0,"repayPeriod":"4/6","principalBalance":1000,"isLate":1,"username":"qycs1213","isWebRepay":1,"repayDate":"2018-10-07","earn":7.5,"lateDay":0,"forFI":0},{"realRepayDate":null,"borrowTitle":"贸易通YM01-TDBL-2018-01","forpayInterest":7.5,"repayStatus":1,"forpayPrincipal":0,"manage":0,"repayPeriod":"4/6","principalBalance":1000,"isLate":1,"username":"qycs1213","isWebRepay":1,"repayDate":"2018-10-07","earn":7.5,"lateDay":0,"forFI":0},{"realRepayDate":null,"borrowTitle":"YM01-A-0902","forpayInterest":82.2,"repayStatus":1,"forpayPrincipal":0,"manage":0,"repayPeriod":"2/5","principalBalance":10000,"isLate":1,"username":"13812340063","isWebRepay":1,"repayDate":"2018-10-13","earn":82.2,"lateDay":0,"forFI":0},{"realRepayDate":null,"borrowTitle":"YM01-A-0902","forpayInterest":82.19,"repayStatus":1,"forpayPrincipal":0,"manage":0,"repayPeriod":"2/5","principalBalance":10000,"isLate":1,"username":"13812340063","isWebRepay":1,"repayDate":"2018-10-13","earn":82.19,"lateDay":0,"forFI":0},{"realRepayDate":null,"borrowTitle":"YM01-A-0902","forpayInterest":82.19,"repayStatus":1,"forpayPrincipal":0,"manage":0,"repayPeriod":"2/5","principalBalance":10000,"isLate":1,"username":"13812340063","isWebRepay":1,"repayDate":"2018-10-13","earn":82.19,"lateDay":0,"forFI":0},{"realRepayDate":null,"borrowTitle":"YM01-A-0902","forpayInterest":82.19,"repayStatus":1,"forpayPrincipal":0,"manage":0,"repayPeriod":"2/5","principalBalance":10000,"isLate":1,"username":"13812340063","isWebRepay":1,"repayDate":"2018-10-13","earn":82.19,"lateDay":0,"forFI":0},{"realRepayDate":null,"borrowTitle":"YM01-A-0912","forpayInterest":93.42,"repayStatus":1,"forpayPrincipal":0,"manage":0,"repayPeriod":"2/3","principalBalance":10000,"isLate":1,"username":"13812340063","isWebRepay":1,"repayDate":"2018-10-13","earn":93.42,"lateDay":0,"forFI":0},{"realRepayDate":null,"borrowTitle":"YM01-A-0902","forpayInterest":82.19,"repayStatus":1,"forpayPrincipal":0,"manage":0,"repayPeriod":"2/5","principalBalance":10000,"isLate":1,"username":"13812340063","isWebRepay":1,"repayDate":"2018-10-13","earn":82.19,"lateDay":0,"forFI":0},{"realRepayDate":"2018-08-16","borrowTitle":"YMJF-XBT-0815","forpayInterest":300,"repayStatus":2,"forpayPrincipal":0,"manage":0,"repayPeriod":"2/4","principalBalance":30000,"isLate":1,"username":"13812340056","isWebRepay":1,"repayDate":"2018-10-18","earn":300,"lateDay":0,"forFI":0},{"realRepayDate":null,"borrowTitle":"YM01-A-0912","forpayInterest":24.11,"repayStatus":1,"forpayPrincipal":10000,"manage":0,"repayPeriod":"3/3","principalBalance":0,"isLate":1,"username":"13812340063","isWebRepay":1,"repayDate":"2018-10-21","earn":24.11,"lateDay":0,"forFI":0}]'
        }
        let arr = []
        var self = this
        this.infoObject = JSON.parse(this.jsonStr)
        self.monthSum = 0
        for (let i = 0; i < self.infoObject.length; i++) {
          arr[i] = self.infoObject[i].repayDate
          self.monthSum = self.infoObject[i].earn + self.infoObject[i].forpayPrincipal // 本月回款 = 利息 + 本金
        }
        this.buildSlotFn = (line, index, data) => {
          return arr.indexOf(data.formatedDate) !== -1 ? '<div style="font-size:12px;text-align:center;line-height: 4px;height: 8px;"><span style="display:inline-block;width:5px;height:5px;background-color:red;border-radius:50%;"></span></div>' : '<div style="height:8px;"></div>'
        }
      }
    }
  }
</script>
<style lang="less">
  .calendar{
    background: #fff;
  }
  .calendar-bg{
    background: url("../../../assets/images/calender-bg.png") no-repeat 0 0 ;
    background-size: 100%;
    .vux-header{
      background-color: transparent;
    }
    .calendar-box{
      width: 90%;
      margin: 10px auto 0;
      border-radius: 6px;
    }
    .inline-calendar{
      background: transparent;
    }
    .inline-calendar-demo table{
      background: #FFFFFF;
      border-radius: 10px;
      box-shadow: 0 2px 10px #ddd;
    }
    .vux-prev-icon, .vux-next-icon{
      border:2px solid #FFFFFF;
      border-top:none;
      border-right:none;
      width: 10px;
      height: 10px;
      top: 14px;
    }
    .inline-calendar th{
      color: #ff7475;
      padding-top:20px;
      font-size:14px;
    }
    .inline-calendar td > span.vux-calendar-each-date{
      font-size: 14px;
    }
    .inline-calendar a{
      color: #fff;
      font-size:16px;
    }
    .calendar-year{
      display: none;
    }
    .inline-calendar tr:last-child td{
      padding-bottom: 10px;
    }
    .calendar-header .calendar-month{
      width: 60%;
    }
    .inline-calendar td.current > span.vux-calendar-each-date {
      background-color: #ff7c7c;
    }
  }
  .detailsInfo{
    width: 94%;
    margin:20px auto ;
    padding-bottom: 20px;
  }
  .detailsInfo table{
    width: 100%;
    border-collapse: collapse;
  }
  .detailsInfo table th{
    background: #FFE1E1;
    color: #FF7879;
    border: 1px solid #ef9191;
    text-align: center;
    font-size: 14px;
    line-height: 30px;
  }
  .detailsInfo table td{
    border: 1px solid #FFE1E1;
    text-align: center;
    font-size: 14px;
    color: #666;
    line-height: 30px;
  }
  .calendar:after {
    content: "";
    border-bottom: none !important;
  }
  .monthSumDiv{
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }
</style>
