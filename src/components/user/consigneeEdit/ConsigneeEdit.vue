<template>
  <div>
    <x-header>编辑收货人</x-header>
    <group>
      <x-input v-model="data.uName" type="text" :min="1" title="姓名  " placeholder="请输入收货人姓名"></x-input>
      <x-input mask="9999 999 9999" :max="13" v-model="data.phone" keyboard="number" title="手机号码" placeholder="请输入手机号码"></x-input>
      <x-input v-model="data.postcode" :min="6" :max="6" type="number" title="邮政编码" placeholder="请输入邮政编码"></x-input>
      <div class="cascadeBox">
        <label style="width: 5em">所在区域</label>
        <div style="width: 75%">
          <div id="address">{{data.address}}</div>
        </div>
      </div>
      <x-input v-model="data.detail" type="text" :min="1" title="详细地址" placeholder="街道、楼牌号等详细地址"></x-input>
    </group>
    <div class="p15">
      <check-icon :value.sync="data.default" type="plain">设为默认收货地址</check-icon>
    </div>
    <div class="pt20 ">
      <div class="submit-box">
        <x-button @click.native="save" type="primary">保存{{data.randColor}}</x-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XInput, Checklist, CheckIcon, XButton } from 'vux'
  import MobileSelect from 'mobile-select'
  import _ from 'lodash'

  export default {
    name: 'ConsigneeEdit',
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
          addressData: this.GLOBAL.addressJson,
          uName: '大树',
          phone: '1803261849',
          postcode: '100022',
          address: '北京 北京市 朝阳区',
          detail: '高碑店君天大厦4005',
          default: true
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
    },
    mounted () {
      var self = this
      var mobileSelect = new MobileSelect({
        trigger: '#address',
        title: '所在区域',
        ensureBtnColor: '#1AAD19',
        position: [0, 0, 2],
        wheels: [
          {
            data: self.GLOBAL.addressJson
          }
        ],
        keyMap: {
          id: 'id',
          value: 'title',
          childs: 'children'
        },
        callback: function (indexArr, data) {
          var address = ''
          _.each(data, function (v, k) {
            if (k === 0) {
              address += v.title
            } else {
              address += '至' + v.title
            }
          })
          self.data.address = address
        }
      })
      console.log(mobileSelect)
    }
  }
</script>
