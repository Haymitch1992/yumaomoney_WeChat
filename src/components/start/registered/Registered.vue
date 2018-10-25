<template>
  <div>
    <x-header>注册</x-header>
    <group>
      <x-input :max="11" v-model="data.phone" keyboard="number" title="手机号"
               ref="refPhone" @on-change="keyDown()" placeholder="请输入手机号码"></x-input>
      <x-input :max="11" v-model="data.code" keyboard="text" title="邀请码" placeholder="选填"></x-input>
    </group>
    <div class="pt20 ">
      <div class="submit-box">
        <x-button @click.native="save" type="primary" :disabled="data.disabled">下一步</x-button>
      </div>
    </div>
    <toast v-model="data.toastMsg" type="warn" :time="1000" is-show-mask text="手机号位数有误" position="middle"></toast>
    <toast v-model="data.toastRegMsg" type="warn" :time="1000" is-show-mask text="手机号格式有误" position="middle"></toast>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XInput, XButton, Toast } from 'vux'

  export default {
    name: 'Registered',
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
          disabled: true,
          phone: '',
          code: '',
          toastMsg: false,
          toastRegMsg: false
        }
      }
    },
    methods: {
      save () {
        var self = this
        var reg = /^[1][3,4,5,7,8][0-9]{9}$/
        if (self.data.phone.length !== 11) {
          self.data.toastMsg = true
        } else if (!reg.test(self.data.phone)) {
          self.data.toastRegMsg = true
        } else {
          self.$router.push({name: 'registeredDetail'})
        }
      },
      keyDown () {
        var self = this
        if (self.$refs.refPhone.valid === true && self.data.phone !== '') {
          self.data.disabled = false
        } else {
          self.data.disabled = true
        }
      }
    }
  }
</script>
