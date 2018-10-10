<template>
  <div>
    <x-header>换绑手机</x-header>
    <div v-if="type === 1">
      <group>
        <x-input title="手机号" class="weui-vcode">
          <x-button slot="right" type="primary" mini>获取验证码</x-button>
        </x-input>
        <x-input title="验证码" placeholder="请输入验证码"></x-input>
      </group>
      <div class="pt20">
        <div class="submit-box">
          <x-button @click.native="type = 2" type="primary">验证后绑定新手机号</x-button>
        </div>
      </div>
      <div class="pt100 center">若当前号码已不用或丢失，请联系<a href="https://www.sobot.com/chat/oldh5/index.html?sysNum=e4068d62da3b41e69a8f47a6929a6826">在线客服</a></div>
    </div>
    <div v-if="type === 2">
      <group>
        <x-input title="新手机号" class="weui-vcode">
          <x-button slot="right" type="primary" mini>获取验证码</x-button>
        </x-input>
        <x-input title="验证码" placeholder="请输入验证码"></x-input>
      </group>
      <div class="pt20">
        <div class="submit-box">
          <x-button @click.native="type = 1" type="primary">确认绑定</x-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Group, XHeader, XInput, XButton } from 'vux'

  export default {
    name: 'ChangeNumber',
    components: {
      Group,
      XHeader,
      XInput,
      XButton
    },
    data () {
      return {
        type: 1
      }
    }
  }
</script>
