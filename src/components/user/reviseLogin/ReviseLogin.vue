<template>
  <div>
    <x-header>修改登录密码</x-header>
    <group>
      <x-input v-model="data.code" :min="8" :max="16" type="password" title="原密码 " placeholder="请输入原密码"></x-input>
    </group>
    <group>
      <x-input v-model="data.newCode" :min="8" :max="16" type="password" title="新密码 " :is-type="positive" placeholder="含字母和数字8-16位字符"></x-input>
      <x-input v-model="data.newCodeBak" :min="8" :max="16" type="password" title="确认密码" :is-type="positive" placeholder="含字母和数字8-16位字符"></x-input>
    </group>
    <div class="pt20 ">
      <div class="submit-box">
        <x-button @click.native="save" type="primary">修改登录密码</x-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XInput, XButton } from 'vux'

  export default {
    name: 'ReviseLogin',
    components: {
      Group,
      Cell,
      XHeader,
      XInput,
      XButton
    },
    data () {
      return {
        data: {
          code: '',
          newCode: '',
          newCodeBak: ''
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
          console.log('新密码不可与原密码相同')
        } else if (self.data.newCode !== self.data.newCodeBak) {
          console.log('两次密码不一致')
        } else {
          console.log(self.data)
        }
      }
    }
  }
</script>

<style>
</style>
