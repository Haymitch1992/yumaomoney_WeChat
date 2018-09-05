<template>
  <div>
    <swiper loop auto :list="demo01_list" v-model="demo01_index" @on-index-change="demo01_onIndexChange"></swiper>
    <group title="cell demo">
      <cell title="第一" value="cool" is-link></cell>
      <cell title="第二" value="cool" is-link></cell>
      <cell title="第三" value="cool" is-link></cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, Swiper } from 'vux'

  const baseList = [{
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg',
    title: '邀好友享现金'
  }, {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
    title: '鱼猫新手专享'
  }, {
    url: 'javascript:',
    img: 'http://39.107.59.233/activity/banner-wechat-003.jpg', // 404
    title: '抢标有礼，标标返现',
    fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
  }]

  export default {
    name: 'Lending',
    components: {
      Group,
      Cell,
      XHeader,
      Swiper
    },
    methods: {
      demo01_onIndexChange (index) {
        this.demo01_index = index
      }
    },
    data () {
      return {
        demo01_list: baseList,
        demo01_index: 1
      }
    }
  }
</script>

<style>
</style>
