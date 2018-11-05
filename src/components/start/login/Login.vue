<template>
  <div>
    <x-header>登录</x-header>
    <group>
      <x-input :max="11" v-model="data.phone" keyboard="number" title="手机号"
               ref="refPhone" @on-change="keyDown()" laceholder="请输入手机号码"></x-input>
      <x-input v-model="data.password" :min="8" :max="16" type="password" title="密码 "
               ref="refPassword" @on-change="keyDown()" placeholder="含字母和数字8-16位字符" required></x-input>
      <x-input v-model="data.code" :min="4" :max="4" type="text" title="验证码" ref="refCode"
               @on-change="keyDown()" placeholder="请输入验证码" required>
        <img slot="right-full-height" src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg">
      </x-input>
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
      <div class="center pt10">
        若当前号码已不用或丢失，请联系<a href="https://www.sobot.com/chat/oldh5/index.html?sysNum=e4068d62da3b41e69a8f47a6929a6826">在线客服</a>
      </div>
    </div>
    <toast v-model="data.toastMsg" type="warn" :time="1000" is-show-mask text="账号密码不匹配" position="middle"></toast>
  </div>
</template>

<script>
  import qs from 'qs'
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
          password: '',
          code: '1234',
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
//          self.$router.push({name: 'home', params: {data: self.data}})
//          var params = {
//            paramMap : {
//              pageId : 'userlogin',
//              email : self.data.phone,
//              password : self.data.password,
//              code :  self.data.code
//            }
//          }
          var param = {}
          param['paramMap.pageId'] = 'userlogin'
          param['paramMap.email'] = self.data.phone
          param['paramMap.password'] = self.data.password
          param['paramMap.code'] = self.data.code
          param['paramMap.afterLoginUrl'] = '{session.afterLoginUrl}'
          self.$http.post(process.env.BASE_API + '/logining.do', qs.stringify(param))
            .then(function (res) {
              self.detail = res.data
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      },
      keyDown () {
        var self = this
        if (self.$refs.refPhone.valid === true && self.data.phone !== '' &&
          self.$refs.refPassword.valid === true && self.data.password !== '' &&
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
