<template>
  <div>
    <x-header><a slot="right" @click="goTo()">我的邀请</a>邀请好友</x-header>
    <group title="cell demo">
      <cell title="第一" value="cool" is-link></cell>
      <cell title="第二" value="cool" is-link></cell>
      <cell title="第三" value="cool" is-link></cell>
    </group>
    <div class="pt20 ">
      <div class="submit-box">
        <x-button @click.native="status = false" type="primary">邀请好友</x-button>
        <x-button @click.native="showHideOnBlur = true" type="primary">扫码邀请</x-button>
        <x-button @click.native="status = false" type="primary">活动规则</x-button>
      </div>
    </div>
    <div>
      <x-dialog v-model="showHideOnBlur" class="dialog-demo" hide-on-blur>
        <div class="img-box">
          <!--<img src="https://ws1.sinaimg.cn/large/663d3650gy1fq6824ur1dj20ia0pydlm.jpg" style="max-width:100%">-->
          <img src="../../../assets/images/invited.png" style="max-width:100%">
        </div>
        <div @click="showHideOnBlur=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XButton, XDialog } from 'vux'

  export default {
    name: 'Invited',
    components: {
      Group,
      Cell,
      XHeader,
      XButton,
      XDialog
    },
    data () {
      return {
        showHideOnBlur: false
      }
    },
    methods: {
      goTo () {
        this.$router.push({
          name: `invitedDetail`,
          params: {}
        })
      }
    }
  }
</script>


<style lang="less" scoped>
  @import '~vux/src/styles/close';

  .dialog-demo {
    .weui-dialog{
      border-radius: 8px;
      padding-bottom: 8px;
    }
    .dialog-title {
      line-height: 30px;
      color: #666;
    }
    .img-box {
      height: 530px;
      overflow: hidden;
    }
    .vux-close {
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }
</style>
