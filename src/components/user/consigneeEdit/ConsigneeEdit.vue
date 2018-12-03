<template>
  <div>
    <x-header>编辑收货人</x-header>
    <group>
      <x-input v-model="data.uName" type="text" :min="1" title="姓名  " placeholder="请输入收货人姓名"></x-input>
      <x-input mask="9999 999 9999" :max="13" v-model="data.phone" keyboard="number" title="手机号码" placeholder="请输入手机号码"></x-input>
      <x-input v-model="data.postcode" :min="6" :max="6" type="number" title="邮政编码" placeholder="请输入邮政编码"></x-input>
      <x-address @on-hide="logHide" @on-show="logShow" title="所在区域" v-model="data.address" :list="data.addressData"
                 @on-shadow-change="onShadowChange" placeholder="请选择地址" :show.sync="data.showAddress"></x-address>
      <x-input v-model="data.detail" type="text" :min="1" title="详细地址" placeholder="街道、楼牌号等详细地址"></x-input>
    </group>
    <div class="p15">
      <check-icon :value.sync="data.default" type="plain">设为默认收货地址</check-icon>
    </div>
    <div class="pt20">
      <div class="submit-box">
        <x-button @click.native="save" type="primary">保存</x-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XInput, Checklist, CheckIcon, XButton, XAddress, ChinaAddressV4Data } from 'vux'

  export default {
    name: 'ConsigneeEdit',
    components: {
      Group,
      Cell,
      XHeader,
      XInput,
      Checklist,
      CheckIcon,
      XButton,
      XAddress,
      ChinaAddressV4Data
    },
    data () {
      return {
        data: {
          uName: '大树',
          phone: '1803261849',
          postcode: '100022',
          address: ['110000', '110100', '110105'],
          detail: '高碑店君天大厦4005',
          default: true,
          title: '默认为空',
          addressData: ChinaAddressV4Data,
          showAddress: false
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
      },
      onShadowChange (ids, names) {
        console.log(ids, names)
      },
      logHide (str) {
        console.log('on-hide', str)
      },
      logShow () {
        console.log('on-show')
      }
    }
  }
</script>
