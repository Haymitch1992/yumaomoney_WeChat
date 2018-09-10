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
      <cell :title="item.title" is-link :key="item.id" v-for="item in list"></cell>
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
        msg: 'Hello World!',
        list: [
          {
            id: '001',
            title: '银行资金存管上线对我们有什么影响？',
            link: '/feedback'
          },
          {
            id: '002',
            title: '什么是鱼猫福利根据地？',
            link: ''
          },
          {
            id: '003',
            title: '充值是否有手续费？充值有上限吗？',
            link: ''
          },
          {
            id: '004',
            title: '注册/登录',
            link: ''
          },
          {
            id: '005',
            title: '账户安全',
            link: ''
          },
          {
            id: '006',
            title: '充值/提现',
            link: ''
          },
          {
            id: '007',
            title: '投资相关',
            link: ''
          },
          {
            id: '008',
            title: '积分/红包',
            link: ''
          },
          {
            id: '009',
            title: '鱼猫根据地',
            link: ''
          },
          {
            id: '010',
            title: '资金存管',
            link: ''
          }
        ],
        value: '',
        results: []
      }
    },

    methods: {
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
