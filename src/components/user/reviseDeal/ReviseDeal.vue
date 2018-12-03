<template>
  <div>
    <x-header>修改交易密码</x-header>
    <group>
      <x-input v-model="data.code" :min="8" :max="16" type="password" title="原密码 " placeholder="请输入原密码"
               ref="refcode" @on-change="keyDown('refcode')" required></x-input>
    </group>
    <group>
      <x-input v-model="data.newCode" :min="8" :max="16" type="password" title="新密码 "
               :is-type="positive" ref="refnewCode" @on-change="keyDown('refnewCode')" placeholder="含字母和数字8-16位字符" required></x-input>
      <x-input v-model="data.newCodeBak" :min="8" :max="16" type="password" title="确认密码"
               :is-type="positive" ref="refnewCodeBak" @on-change="keyDown('refnewCodeBak')" placeholder="含字母和数字8-16位字符" required></x-input>
    </group>
    <div class="pt20">
      <div class="submit-box">
        <x-button @click.native="save" type="primary" :disabled="data.disabled">修改交易密码</x-button>
      </div>
    </div>
    <toast v-model="data.toastSame" type="warn" :time="1000" is-show-mask text="新密码与原密码不能相同" position="middle"></toast>
    <toast v-model="data.toastDifferent" type="warn" :time="1000" is-show-mask text="两次密码不相同" position="middle"></toast>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XInput, XButton, Toast } from 'vux'

  export default {
    name: 'ReviseDeal',
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
          newCode: '',
          newCodeBak: '',
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
        if (self.$refs.refcode.valid === true && self.data.code !== '' &&
          self.$refs.refnewCode.valid === true && self.data.newCode !== '' &&
          self.$refs.refnewCodeBak.valid === true && self.data.newCodeBak !== ''
        ) {
          self.data.disabled = false
        } else {
          self.data.disabled = true
        }
      }
    }
  }
</script>
