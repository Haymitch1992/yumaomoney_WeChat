<template>
  <div>
    <x-header>添加收货人</x-header>
    <group>
      <x-input v-model="data.uName" type="text" :min="1" title="姓名" placeholder="请输入收货人姓名"></x-input>
      <x-input mask="9999 999 9999" :max="13" v-model="data.phone" keyboard="number" title="手机号码" placeholder="请输入手机号码"></x-input>
      <x-input v-model="data.postcode" :min="6" :max="6" type="number" title="邮政编码" placeholder="请输入邮政编码"></x-input>
      <div id="address">{{data.address}}</div>
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
  import MobileSelect from 'mobile-select'
  import _ from 'lodash'

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
          address: '所在区域',
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
    },
    mounted () {
      var _this = this
      var mobileSelect = new MobileSelect({
        trigger: '#address',
        title: '所在区域',
        address: '',
        ensureBtnColor: '#1AAD19',
        wheels: [
          {data: [
            {
              id: '110000',
              title: '北京',
              children: [
                {
                  id: '110000',
                  title: '北京市',
                  children: [
                    {id: '110101', title: '东城区'},
                    {id: '110102', title: '西城区'},
                    {id: '110105', title: '朝阳区'},
                    {id: '110106', title: '朝阳区'},
                    {id: '110107', title: '丰台区'},
                    {id: '110108', title: '石景山区'},
                    {id: '110109', title: '海淀区'},
                    {id: '110110', title: '门头沟区'},
                    {id: '110111', title: '房山区'},
                    {id: '110112', title: '通州区'},
                    {id: '110113', title: '顺义区'},
                    {id: '110114', title: '昌平区'},
                    {id: '110115', title: '大兴区'},
                    {id: '110116', title: '怀柔区'},
                    {id: '110117', title: '平谷区'},
                    {id: '110118', title: '密云区'},
                    {id: '110119', title: '延庆区'}
                  ]
                }
              ]
            },
            {
              id: '130000',
              title: '河北省',
              children: [
                {
                  id: '130100',
                  title: '石家庄市',
                  children: [
                    {id: '130102', title: '长安区'},
                    {id: '130104', title: '桥西区'},
                    {id: '130105', title: '新华区'},
                    {id: '130107', title: '井径矿区'},
                    {id: '130108', title: '裕华区'},
                    {id: '130109', title: '藁城区'},
                    {id: '130110', title: '鹿泉区'},
                    {id: '130111', title: '栾城区'},
                    {id: '130121', title: '井陉县'},
                    {id: '130123', title: '正定县'},
                    {id: '130125', title: '行唐县'},
                    {id: '130126', title: '灵寿县'},
                    {id: '130127', title: '高邑县'},
                    {id: '130128', title: '深泽县'},
                    {id: '130129', title: '赞皇县'},
                    {id: '130130', title: '无极县'},
                    {id: '130131', title: '平山县'},
                    {id: '130132', title: '元氏县'},
                    {id: '130133', title: '赵县'},
                    {id: '130183', title: '晋州市'},
                    {id: '130184', title: '新乐市'},
                    {id: '139002', title: '辛集市'}
                  ]
                },
                {
                  id: '130200',
                  title: '唐山市',
                  children: [
                    {id: '130202', title: '路南区'},
                    {id: '130203', title: '路北区'},
                    {id: '130204', title: '古冶区'},
                    {id: '130205', title: '开平区'},
                    {id: '130207', title: '丰南区'},
                    {id: '130208', title: '丰润区'},
                    {id: '130209', title: '曹妃甸区'},
                    {id: '130223', title: '滦州市'},
                    {id: '130224', title: '滦南县'},
                    {id: '130225', title: '乐亭县'},
                    {id: '130227', title: '迁西县'},
                    {id: '130229', title: '玉田县'},
                    {id: '130281', title: '遵化市'},
                    {id: '130283', title: '迁安市'}
                  ]
                },
                {id: '130300', title: '秦皇岛市'},
                {id: '130400', title: '邯郸市'},
                {id: '130500', title: '邢台市'},
                {id: '130600', title: '保定市'},
                {id: '130700', title: '张家口市'},
                {id: '130800', title: '承德市'},
                {id: '130900', title: '沧州市'},
                {id: '131000', title: '廊坊市'},
                {id: '131100', title: '衡水市'},
                {id: '131200', title: '雄安新区'}
              ]
            }
          ]}
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
              address += ' ' + v.title
            }
          })
          _this.data.address = address
        }
      })
      console.log(mobileSelect)
    }
  }
</script>

<style>
  #address {
    padding: 10px 15px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  #address::before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #D9D9D9;
    color: #D9D9D9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    left: 15px;
  }
  .mobileSelect .content {
    text-indent: 0em;
  }
</style>
