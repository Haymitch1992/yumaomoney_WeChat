<template>
  <div>
    <x-header>领取奖励</x-header>
    <!-- 奖励提现到账户-->
    <!-- 待领取金额-->
    <!-- 待领取红包-->
    <div>
      <group>
        <cell title="待领取金额" :value="list[0].value + list[1].value"></cell>
        <cell-form-preview :list="list"></cell-form-preview>
      </group>
      <group>
        <x-button type="warn" @click.native="receiveRewardBatch">领取奖励</x-button>
      </group>
    </div>
  </div>
</template>

<script>
  import qs from 'qs'
  import { Group, Cell, XHeader, Tab, TabItem, Panel, XInput, XButton, CellFormPreview } from 'vux'

  export default {
    name: 'Into',
    components: {
      Group,
      Cell,
      XHeader,
      Tab,
      TabItem,
      Panel,
      XInput,
      XButton,
      CellFormPreview
    },
    data () {
      return {
        sTime: '2016-06-27 18:00:00', // 好友邀请查询起始时间
        eTime: '2019-09-01 18:00:00', // 好友邀请查询截止时间
        list: [{
          label: '待领取金额',
          value: 0
        }, {
          label: '待领取红包',
          value: 0
        }]
      }
    },
    methods: {
      // 初始化获取数据
      getInfo () {
        var self = this
        self.$http.post(process.env.BASE_API + '/apirecommendInit.do', qs.stringify({ 'sTime': self.sTime, 'eTime': self.eTime }))
          .then(function (res) {
            if (res.data === 'noLogin') {
              self.$router.push('/start/login')
            } else if (res.data.returnVal === 'nouser') {
              console.log('没有进行好友邀请')
            } else {
              // 循环展示邀请列表
              for (var i = 0; i < res.data.length; i++) {
                if (res.data[i].receiveStatus === 0) {
                  self.list[0].value += res.data[i].rewardAmount
                  if (res.data[i].rewardAmount === 10) {
                    self.list[1].value += 40
                  } else if (res.data[i].rewardAmount === 30) {
                    self.list[1].value += 50
                  } else if (res.data[i].rewardAmount === 60) {
                    self.list[1].value += 50
                  }
                }
              }
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      // 领取奖励
      receiveRewardBatch: function () {
        var self = this
        self.$http.post(process.env.BASE_API + '/apireceiveRewardBatch.do', qs.stringify({ 'sTime': self.sTime, 'eTime': self.eTime }))
          .then(function (res) {
            if (res.data === 'noLogin') {
              self.$router.push('/start/login')
            } else if (res.data.returnVal === 'nouser') {
              console.log('没有进行好友邀请')
            } else {
              // 循环展示邀请列表
              console.log(res.data)
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    created () {
      this.getInfo()
    }
  }
</script>
