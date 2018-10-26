<template>
  <div>
    <x-header>注册</x-header>
    <div class="p15">已向手机{{parames.phoneBak}}发送验证码</div>
    <group>
      <x-input v-model="data.code" :min="4" :max="4" type="text" title="验证码" ref="refCode"
               @on-change="keyDown()"  placeholder="请输入验证码" required>
        <x-button slot="right" type="primary" mini @click.native="sendCode" :disabled="data.sendCodeType">重新发送验证码 {{data.time}}</x-button>
      </x-input>
      <x-input v-model="data.newCode" :min="8" :max="16" type="password" title="密码 "
               :is-type="positive" ref="refnewCode" @on-change="keyDown('refnewCode')" placeholder="含字母和数字8-16位字符" required></x-input>
    </group>
    <div class="pt20 center">
      <check-icon :value.sync="data.agreement" type="plain">我已经阅读并同意服务协议和隐私条款</check-icon>
    </div>
    <div class="pt20">
      <div class="submit-box">
        <x-button @click.native="save" type="primary" :disabled="data.disabled || !data.agreement">完成注册</x-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XInput, XButton, CheckIcon } from 'vux'

  export default {
    name: 'RegisteredDetail',
    components: {
      Group,
      Cell,
      XHeader,
      XInput,
      XButton,
      CheckIcon
    },
    data () {
      return {
        data: {
          time: '',
          agreement: false,
          sendCodeType: false
        },
        parames: {},
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
      sendCode () {
        var self = this
        self.data.time = 60
        self.data.sendCodeType = true
        self.time()
        console.log('发送验证码')
      },
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
      keyDown () {
        var self = this
        if (self.$refs.refCode.valid === true && self.data.code !== '' &&
        self.$refs.refnewCode.valid === true && self.data.newCode !== ''
        ) {
          self.data.disabled = false
        } else {
          self.data.disabled = true
        }
      },
      save () {
        var self = this
        self.$router.push({name: 'login'})
      },
      getFrom () {
        var self = this
        self.parames = self.$route.params.data || {}
        self.sendCode()
        console.log(self.data)
      },
      init () {
        var self = this
        self.getFrom()
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>
