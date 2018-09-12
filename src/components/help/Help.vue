<template>
  <div>
    <x-header>帮助中心</x-header>
    <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      auto-scroll-to-top
      top="46px"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"></search>
    <group>
      <cell :title="item.title" is-link :key="item.id" v-for="item in list" @click.native="goHelpDetail(item.id, item.title)"></cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, Search } from 'vux'
  export default {
    name: 'Help',
    components: {
      Group,
      Cell,
      XHeader,
      Search
    },
    data () {
      return {
        list: [
          {
            id: '75',
            title: '为什么要开通银行存管账户？'
          },
          {
            id: '76',
            title: '如何开通银行存管账户？'
          },
          {
            id: '77',
            title: '为什么我的存管账户开通失败？'
          },
          {
            id: '116',
            title: '开户成功后，身份证号码可以更换吗？'
          },
          {
            id: '117',
            title: '一个账户可以绑定几张卡？'
          },
          {
            id: '118',
            title: '如何设置交易密码？'
          },
          {
            id: '119',
            title: '交易密码设置规则？'
          },
          {
            id: '120',
            title: '如何修改交易密码？'
          },
          {
            id: '121',
            title: '如何更新银行预留手机号？'
          }
        ],
        value: '',
        results: []
      }
    },

    methods: {
      goHelpDetail (id, title) {
        this.$router.push({
          name: `helpDetail`,
          params: {
            id: id,
            title: title
          }
        })
      },
      setFocus () {
        this.$refs.search.setFocus()
      },
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult (val) {
        console.log('on-change', val)
      },
      onSubmit () {
        this.$refs.search.setBlur()
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: 'on submit'
        })
      },
      onFocus () {
        console.log('on focus')
      },
      onCancel () {
        console.log('on cancel')
      }
    }
  }
</script>

<style>
</style>
