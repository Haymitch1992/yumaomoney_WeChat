<template>
  <div>
    <x-header>忘记密码</x-header>
    <group>
      <x-input mask="9999 999 9999" :max="13" v-model="data.phone" keyboard="number" title="手机号"
               ref="refPhone" @on-change="keyDown()" laceholder="请输入手机号码"></x-input>
      <x-input v-model="data.code" :min="4" :max="4" type="text" title="验证码" ref="refCode"
               @on-change="keyDown()" placeholder="请输入验证码" required>
        <x-button slot="right" type="primary" mini @click.native="sendCode" :disabled="data.sendCodeType">发送验证码 {{data.time}}</x-button>
      </x-input>
    </group>
    <div class="pt20 ">
      <div class="submit-box">
        <x-button @click.native="save" type="primary" :disabled="data.disabled">下一步</x-button>
      </div>
    </div>
    <toast v-model="data.toastMsg" type="warn" :time="1000" is-show-mask text="手机号与验证码不匹配" position="middle"></toast>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XInput, XButton, Toast } from 'vux'

  export default {
    name: 'Forger',
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
          time: '',
          phone: '',
          code: '',
          disabled: true,
          sendCodeType: false,
          toastMsg: false
        }
      }
    },
    methods: {
      save () {
        var self = this
        if (self.data.phone.length !== 11) {
          self.data.toastMsg = true
        } else {
          self.$router.push({name: 'reset', params: {data: self.data}})
        }
      },
      sendCode () {
        var self = this
        self.data.time = 60
        self.data.sendCodeType = true
        self.time()
        console.log('发送验证码')
      },
      keyDown () {
        var self = this
        if (self.$refs.refPhone.valid === true && self.data.phone !== '' &&
          self.$refs.refCode.valid === true && self.data.code !== ''
        ) {
          self.data.disabled = false
        } else {
          self.data.disabled = true
        }
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
      }
    }
  }
</script>
