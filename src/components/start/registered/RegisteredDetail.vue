<template>
  <div>
    <x-header>注册</x-header>
    <div class="p15">已向手机{{parames.phoneBak}}发送验证码</div>
    <group>
      <x-input v-model="data.code" :min="4" :max="4" type="text" title="验证码" ref="refCode"
               @on-change="keyDown()" placeholder="请输入验证码" required>
        <x-button slot="right" type="primary" mini @click.native="sendCode" :disabled="data.sendCodeType">重新发送验证码 {{data.time}}</x-button>
      </x-input>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XInput, XButton } from 'vux'

  export default {
    name: 'RegisteredDetail',
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
          time: '',
          sendCodeType: false
        },
        parames: {}
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
