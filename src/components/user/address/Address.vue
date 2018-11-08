<template>
  <div class="address">
    <x-header><a slot="right" @click="goNew()">新增地址</a>地址管理</x-header>
    <group label-width="4.5em" label-margin-right="2em" label-align="right" v-for="item in list" :key="item.key">
      <panel :list="item.panel" :type="item.type"></panel>
      <div class="actionBar h30">
        <div class="fr" @click="deleteItem(item)"><div class="delete fl"></div>删除</div>
        <div class="fr" @click="goEdit(item)"><div class="edit fl"></div>编辑</div>
      </div>
    </group>
    <actionsheet v-model="data.deleteType" :menus="deleteMmenus" @on-click-menu="click" @on-click-menu-delete="onDelete" show-cancel></actionsheet>
    <toast type="success" v-model="data.showSuccess">成功删除</toast>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, Panel, Actionsheet, Toast } from 'vux'

  export default {
    name: 'Address',
    components: {
      Group,
      Cell,
      XHeader,
      Panel,
      Actionsheet,
      Toast
    },
    data () {
      return {
        data: {
          deleteType: false,
          showSuccess: false,
          deleteItem: []
        },
        list: [
          {
            panel: [{
              key: 0,
              title: '大树 180****1849',
              desc: '北京市朝阳区高碑店君天大厦4005'
            }],
            type: '4'
          },
          {
            panel: [{
              key: 1,
              title: '大树 180****1849',
              desc: '北京市朝阳区高碑店君天大厦4005'
            }],
            type: '4'
          }
        ],
        deleteMmenus: {
          'title.noop': '确定删除么？',
          delete: '<span style="color:red">确定</span>'
        }
      }
    },
    methods: {
      goNew () {
        this.$router.push({
          name: `consignee`,
          params: {}
        })
      },
      goEdit () {
        this.$router.push({
          name: `consigneeEdit`,
          params: {}
        })
      },
      deleteItem (item) {
        var self = this
        self.data.deleteType = true
        self.data.deleteItem = item
      },
      click (key) {
        var self = this
        console.log(key)
        console.log(self.data.deleteItem)
      },
      onDelete () {
        var self = this
        self.data.showSuccess = true
      }
    }
  }
</script>

<style>
  .edit {
    background: url("../../../assets/images/edit.png") no-repeat;
    background-size: cover;
    width: 30px;
    height: 30px;
  }
  .delete {
    background: url("../../../assets/images/delete.png") no-repeat;
    background-size: cover;
    width: 30px;
    height: 30px;
  }
  .address .actionBar{
    padding: 5px 15px;
  }
</style>
