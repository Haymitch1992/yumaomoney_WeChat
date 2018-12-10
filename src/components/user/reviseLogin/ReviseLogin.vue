<template>
  <div>
    <x-header>修改登录密码</x-header>
    <div v-if="data.type === 1">
      <group>
        <x-input class="weui-vcode" v-model="data.code" :min="4" :max="4" type="text" title="短信验证码"
                 placeholder="请输入短信验证码" ref="refCode" @on-change="keyDownCode()" required>
          <x-button slot="right" type="primary" mini @click.native="sendCode" :disabled="data.sendCodeType">重新发送验证码 {{data.time}}</x-button>
        </x-input>
      </group>
      <div class="pt20">
        <div class="submit-box">
          <x-button @click.native="checkCode" type="primary" :disabled="data.disabledCode">提交验证码</x-button>
        </div>
      </div>
    </div>
    <div v-if="data.type === 2">
      <group>
        <x-input v-model="data.oldCode" :min="8" :max="16" type="password" title="原密码 " placeholder="请输入原密码"
                 ref="refOldCode" @on-change="keyDown()" required></x-input>
      </group>
      <group>
        <x-input v-model="data.newCode" :min="8" :max="16" type="password" title="新密码 "
                 :is-type="positive" ref="refNewCode" @on-change="keyDown()" placeholder="含字母和数字8-16位字符" required></x-input>
        <x-input v-model="data.newCodeBak" :min="8" :max="16" type="password" title="确认密码"
                 :is-type="positive" ref="refNewCodeBak" @on-change="keyDown()" placeholder="含字母和数字8-16位字符" required></x-input>
      </group>
      <div class="pt20">
        <div class="submit-box">
          <x-button @click.native="save" type="primary" :disabled="data.disabled">修改登录密码</x-button>
        </div>
      </div>
    </div>
    <toast v-model="data.toastCallBack" type="warn" :time="1000" is-show-mask :text="data.msgPhoneCheck" position="middle"></toast>
    <toast v-model="data.toastSame" type="warn" :time="1000" is-show-mask text="新密码与原密码不能相同" position="middle"></toast>
    <toast v-model="data.toastDifferent" type="warn" :time="1000" is-show-mask text="两次密码不相同" position="middle"></toast>
    <alert v-model="data.noLoginShow" title="登录失效" @on-hide="logout">请重新登录</alert>
    <alert v-model="data.changeCodeShow" title="修改成功" @on-hide="logout">请重新登录</alert>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XInput, XButton, Toast, AlertModule, Alert } from 'vux'
  import qs from 'qs'

  export default {
    name: 'ReviseLogin',
    components: {
      Group,
      Cell,
      XHeader,
      XInput,
      XButton,
      Toast,
      AlertModule,
      Alert
    },
    data () {
      return {
        data: {
          code: '',
          oldCode: '',
          newCode: '',
          newCodeBak: '',
          time: 60,
          type: 1,
          sendCodeType: false,
          disabled: true,
          disabledCode: true,
          noLoginShow: false,
          changeCodeShow: false,
          toastSame: false,
          toastDifferent: false,
          toastCallBack: false,
          msgPhoneCheck: false
        },
        positive: function (value) {
          if (value.search(/[0-9]/) === -1) {
            return {
              msg: '登录密码必须包含数字'
            }
          } else if (value.search(/[a-zA-Z]/) === -1) {
            return {
              msg: '登录密码必须包含字母'
            }
          } else {
            return {
              valid: value.length < 16,
              msg: '登录密码由8-16位字母和数字组成'
            }
          }
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
       * 初始化
       */
      getQuestion () {
        var self = this
        self.$http.post(process.env.BASE_API + '/apigetQuestion.do', null)
          .then(function (res) {
            if (res.data === 'noLogin') {
              self.data.noLoginShow = true
            } else if (res.data.code === '1') {
              self.phoneCheck(res.data)
            } else if (res.data.code === '-1') {
              self.data.toastCallBack = true
              self.data.msgPhoneCheck = '初始化失败'
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      /**
       * 验证手机号
       */
      phoneCheck (data) {
        var self = this
        self.$http.post(process.env.BASE_API + '/apiphoneCheck.do', qs.stringify({'phone': data.data.bindingPhone}))
          .then(function (res) {
            if (res.data === 'noLogin') {
              self.data.noLoginShow = true
            } else if (res.data.ret === '1') {
              self.sendCode(res.data)
            } else if (res.data.ret === '-1') {
              self.data.toastCallBack = true
              self.data.msgPhoneCheck = '绑定手机号异常'
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      /**
       * 获取验证码
       */
      sendCode (data) {
        var self = this
        self.data.time = 60
        self.data.sendCodeType = true
        self.time()
        self.$http.post(process.env.BASE_API + '/apiSendSMS.do', qs.stringify({'phone': data.phone}))
          .then(function (res) {
            if (res.data === 'noLogin') {
              self.data.noLoginShow = true
            } else if (res.data === '1') {
              console.log(res.data)
            } else if (res.data === '2') {
              self.data.toastCallBack = true
              self.data.msgPhoneCheck = '手机验证码发送失败'
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      /**
       * 提交验证码
       */
      checkCode () {
        var self = this
        self.$http.post(process.env.BASE_API + '/apicheckUserAnswer.do', qs.stringify({'code': self.data.code}))
          .then(function (res) {
            if (res.data === 'noLogin') {
              self.data.noLoginShow = true
            } else if (res.data.code === '1') {
              console.log(res.data)
              self.data.type = 2
            } else if (res.data.code === '-1') {
              self.data.toastCallBack = true
              self.data.msgPhoneCheck = '手机验证码验证失败'
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      /**
       * 提交新密码
       */
      save () {
        var self = this
        if (self.data.oldCode === self.data.newCode) {
          self.data.toastSame = true
        } else if (self.data.newCode !== self.data.newCodeBak) {
          self.data.toastDifferent = true
        } else {
          var parmes = {}
          parmes.oldPassword = self.data.oldCode
          parmes.newPassword = self.data.newCode
          parmes.confirmPassword = self.data.newCodeBak
          parmes.type = 'login'
          self.$http.post(process.env.BASE_API + '/apiupdateLoginPass.do', qs.stringify(parmes))
            .then(function (res) {
              if (res.data === 'noLogin') {
                self.data.noLoginShow = true
              } else if (res.data === 1) {
                self.data.toastCallBack = true
                self.data.msgPhoneCheck = '新密码、确认新密码不一致'
              } else if (res.data === 2) {
                self.data.toastCallBack = true
                self.data.msgPhoneCheck = '旧密码输入错误'
              } else if (res.data === 3) {
                self.data.toastCallBack = true
                self.data.msgPhoneCheck = '变更失败'
              } else if (res.data === 4) {
                self.data.toastCallBack = true
                self.data.msgPhoneCheck = '新密码长度<6或>20'
              } else if (res.data === 5) {
                self.data.toastCallBack = true
                self.data.msgPhoneCheck = '账号异常'
              } else if (res.data === 6) {
                self.data.toastCallBack = true
                self.data.msgPhoneCheck = '新密码不能与旧密码一致'
              } else if (res.data === 8) {
                self.data.changeCodeShow = true
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      },
      /**
       * 倒计时
       */
      time () {
        var self = this
        setTimeout(function () {
          if (self.data.time === 1) {
            self.data.time = ''
            self.data.sendCodeType = false
          } else if (self.data.time > 1) {
            self.data.time--
            self.time()
          }
        }, 1000)
      },
      keyDownCode () {
        var self = this
        if (self.$refs.refCode.valid === true && self.data.code !== ''
        ) {
          self.data.disabledCode = false
        } else {
          self.data.disabledCode = true
        }
      },
      keyDown () {
        var self = this
        if (self.$refs.refOldCode.valid === true && self.data.oldCode !== '' &&
          self.$refs.refNewCode.valid === true && self.data.newCode !== '' &&
          self.$refs.refNewCodeBak.valid === true && self.data.newCodeBak !== ''
        ) {
          self.data.disabled = false
        } else {
          self.data.disabled = true
        }
      },
      init () {
        var self = this
        if ((self.$http.defaults.headers.tokenClientkey === undefined) && self.$cookies.get('tokenClientkey')) {
          self.$http.defaults.headers.tokenClientkey = self.$cookies.get('tokenClientkey')
        }
        self.getQuestion()
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>
