<template>
  <div>
    <x-header>添加收货人</x-header>
    <group>
      <x-input v-model="data.uName" type="text" :min="1" title="姓名" placeholder="请输入收货人姓名"></x-input>
      <x-input mask="9999 999 9999" :max="13" v-model="data.phone" keyboard="number" title="手机号码" placeholder="请输入手机号码"></x-input>
      <x-input v-model="data.postcode" :min="6" :max="6" type="number" title="邮政编码" placeholder="请输入邮政编码"></x-input>
      <x-input v-model="data.detail" type="text" :min="1" title="详细地址" placeholder="街道、楼牌号等详细地址"></x-input>
    </group>
    <div class="p15">
      <check-icon :value.sync="data.default" type="plain">设为默认收货地址</check-icon>
    </div>
    <div class="pt20 ">
      <div class="submit-box">
        <x-button @click.native="save" type="primary">保存</x-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XInput, Checklist, CheckIcon, XButton } from 'vux'

  export default {
    name: 'Consignee',
    components: {
      Group,
      Cell,
      XHeader,
      XInput,
      Checklist,
      CheckIcon,
      XButton
    },
    data () {
      return {
        data: {
          uName: '',
          phone: '',
          postcode: '',
          default: ''
        },
        positive: function (value) {
          return {
            valid: value >= 0,
            msg: '单笔金额需大于0'
          }
        }
      }
    },
    methods: {
      save () {
        var self = this
        console.log(self.data)
      }
    }
  }
</script>

<style>
</style>
