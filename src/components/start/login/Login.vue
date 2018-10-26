<template>
  <div>
    <x-header>登录</x-header>
    <group>
      <x-input :max="11" v-model="data.phone" keyboard="number" title="手机号"
               ref="refPhone" @on-change="keyDown()" laceholder="请输入手机号码"></x-input>
      <x-input v-model="data.newCode" :min="8" :max="16" type="password" title="密码 "
               ref="refCode" @on-change="keyDown('refnewCode')" placeholder="含字母和数字8-16位字符" required></x-input>
    </group>
    <div class="pt20">
      <div class="submit-box">
        <x-button @click.native="login" type="primary" :disabled="data.disabled">登录</x-button>
      </div>
    </div>
    <div class="pw50 h30">
      <div class="fl"><a href="#/start/forget">忘记密码?</a></div>
      <div class="fr"><a href="#/start/registered">注册得福利</a></div>
    </div>
    <div class="pt100">
      <div class="center">
        若当前号码已不用或丢失，请联系<a href="https://www.sobot.com/chat/oldh5/index.html?sysNum=e4068d62da3b41e69a8f47a6929a6826">在线客服</a>
      </div>
    </div>
    <toast v-model="data.toastMsg" type="warn" :time="1000" is-show-mask text="账号密码不匹配" position="middle"></toast>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XInput, XButton, Toast } from 'vux'

  export default {
    name: 'Login',
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
          phone: '',
          disabled: false,
          toastMsg: false
        }
      }
    },
    methods: {
      login () {
        var self = this
        if (self.data.phone.length !== 11) {
          self.data.toastMsg = true
        } else {
          self.$router.push({name: 'lending', params: {data: self.data}})
        }
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
      }
    }
  }
</script>
