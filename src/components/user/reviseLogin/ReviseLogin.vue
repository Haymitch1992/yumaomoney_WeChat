<template>
  <div>
    <x-header>修改登录密码</x-header>
    <group>
      <x-input class="weui-vcode" v-model="data.code" :min="4" :max="4" type="text" title="短信验证码"
               placeholder="请输入短信验证码" ref="refCode" @on-change="keyDown()" required>
        <x-button slot="right" type="primary" mini @click.native="sendCode" :disabled="data.sendCodeType">重新发送验证码 {{data.time}}</x-button>
      </x-input>
    </group>
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
    <toast v-model="data.toastSame" type="warn" :time="1000" is-show-mask text="新密码与原密码不能相同" position="middle"></toast>
    <toast v-model="data.toastDifferent" type="warn" :time="1000" is-show-mask text="两次密码不相同" position="middle"></toast>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XInput, XButton, Toast } from 'vux'

  export default {
    name: 'ReviseLogin',
    components: {
      Group,
      Cell,
      XHeader,
      XInput,
      XButton,
      Toast
    },
    data () {
      return {
        data: {
          code: '',
          oldCode: '',
          newCode: '',
          newCodeBak: '',
          time: 60,
          sendCodeType: false,
          disabled: true,
          toastSame: false,
          toastDifferent: false
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
       * 获取验证码
       */
      sendCode () {
        var self = this
        self.data.time = 60
        self.data.sendCodeType = true
        self.time()
        console.log('发送验证码')
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
      save () {
        var self = this
        if (self.data.code === self.data.newCode) {
          self.data.toastSame = true
        } else if (self.data.newCode !== self.data.newCodeBak) {
          self.data.toastDifferent = true
        } else {
          console.log(self.data)
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
        self.sendCode()
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>
