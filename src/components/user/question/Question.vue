<template>
  <div>
    <x-header>风险测评</x-header>
    <div class="pt20 center">您的风险承受能力是</div>
    <div class="questionBox">{{userType}}</div>
    <div class="p20">{{detail}}</div>
    <div class="pt20" v-if="(data.QuestionnaireMap.modifyCount * 1>0)">
      <div class="submit-box">
        <x-button type="primary">再次评测</x-button>
      </div>
    </div>
    <div class="p20 center">您今年还有{{data.QuestionnaireMap.modifyCount}}次机会</div>
    <alert v-model="noLoginShow" title="登录失效" @on-hide="logout">请重新登录</alert>
  </div>
</template>

<script>
  import { Group, XButton, XHeader, AlertModule, Alert } from 'vux'

  export default {
    name: 'Question',
    components: {
      Group,
      XButton,
      XHeader,
      AlertModule,
      Alert
    },
    data () {
      return {
        userType: '暂无评级',
        detail: '',
        detailEnd: '',
        noLoginShow: false,
        data: {
          QuestionnaireMap: {}
        }
      }
    },
    methods: {
      /**
       * 登录失效跳转
       */
      logout () {
        var self = this
        window.localStorage.removeItem('Flag')
        self.$store.dispatch('setUser', false)
        self.$cookies.remove('tokenClientkey')
        self.$cookies.remove('apiHomeData')
        self.$router.push('/start/login')
      },
      /**
       * 获取数据
       */
      getData () {
        var self = this
        self.$http.post(process.env.BASE_API + '/apihome.do', null)
          .then(function (res) {
            /**
             * 验证登录是否失效
             */
            if (res.data === 'noLogin') {
              self.noLoginShow = true
            } else {
              self.data = res.data.data
              self.$cookies.set('apiHomeData', res.data.data, '1d')
              if ((self.data.QuestionnaireMap.scoreStatus === '1')) {
                self.userType = '保守型'
                self.detail = '您属于保守型出借人．您属于风险承受能力较低、投资很谨慎的投资者。应尽量回避波动性较大的投资产品，' +
                  '保护本金不受损失和保持资产流动性是首要目标。您在平台的出借资金不超过20万元。'
              } else if ((self.data.QuestionnaireMap.scoreStatus === '2')) {
                self.userType = '稳健型'
                self.detail = '您风险偏好较低，希望在保证本金安全的基础上能有增值收入，止损意识强，是一个比较平稳的出借人。' +
                  '适合投资于能够提供温和升值能力，投资价值有温和波动的产品。您在本平台的出借资金不超过80万元。'
              } else if ((self.data.QuestionnaireMap.scoreStatus === '3')) {
                self.userType = '进取型'
                self.detail = '您属于进取型出借人。您倾向于通过承受较高的风险以获取较高的回报的投资者，可以承受一定的投资波动，' +
                  '应根据个人的投资需求，将资产在高风险和低风险的产品之间进行分配，以取得投资组合的均衡发展。您在本平台的出借限额为不限额。'
              }
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      init () {
        var self = this
        if (self.$cookies.get('apiHomeData')) {
          self.data = self.$cookies.get('apiHomeData')
          if ((self.data.QuestionnaireMap.scoreStatus === '1')) {
            self.userType = '保守型'
            self.detail = '您属于保守型出借人．您属于风险承受能力较低、投资很谨慎的投资者。应尽量回避波动性较大的投资产品，' +
              '保护本金不受损失和保持资产流动性是首要目标。您在平台的出借资金不超过20万元。'
          } else if ((self.data.QuestionnaireMap.scoreStatus === '2')) {
            self.userType = '稳健型'
            self.detail = '您风险偏好较低，希望在保证本金安全的基础上能有增值收入，止损意识强，是一个比较平稳的出借人。' +
              '适合投资于能够提供温和升值能力，投资价值有温和波动的产品。您在本平台的出借资金不超过80万元。'
          } else if ((self.data.QuestionnaireMap.scoreStatus === '3')) {
            self.userType = '进取型'
            self.detail = '您属于进取型出借人。您倾向于通过承受较高的风险以获取较高的回报的投资者，可以承受一定的投资波动，' +
              '应根据个人的投资需求，将资产在高风险和低风险的产品之间进行分配，以取得投资组合的均衡发展。您在本平台的出借限额为不限额。'
          }
        }
        if ((self.$http.defaults.headers.tokenClientkey === undefined) && self.$cookies.get('tokenClientkey')) {
          self.$http.defaults.headers.tokenClientkey = self.$cookies.get('tokenClientkey')
        }
        self.getData()
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>

<style>
  .questionLogo {
    width: 100%;
  }
  .questionBox {
    background: url("../../../assets/images/question.png") no-repeat;
    background-size: cover;
    width: 150px;
    height: 150px;
    line-height: 150px;
    text-align: center;
    margin: 10px auto 0;
    color: #fff;
  }
</style>
