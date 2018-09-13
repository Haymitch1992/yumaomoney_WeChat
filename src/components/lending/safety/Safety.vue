<template>
  <div>
    <x-header>安全保障</x-header>
    <div class="box1-item" v-for="i in 10 ">{{i}}</div>
    <div>
      <divider>scrollTop: {{scrollTop}}</divider>
      <scroller lock-x height="650px" @on-scroll="onScroll" ref="scrollerEvent">
        <div class="box2">
          <div class="box1-item" v-for="i in 10 ">{{i}}</div>
        </div>
      </scroller>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, Scroller, Divider } from 'vux'

  export default {
    name: 'Safety',
    components: {
      Group,
      Cell,
      XHeader,
      Divider,
      Scroller
    },
    data () {
      return {
        scrollTop: 0
      }
    },
    methods: {
      onScroll (pos) {
        this.scrollTop = pos.top
      },
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        console.log(scrollTop)
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style>
  .box1-item {
    width: 90%;
    height: 650px;
    background-color: #ccc;
    display:inline-block;
    margin-left: 5%;
    float: left;
    text-align: center;
    line-height: 650px;
  }
  .box2 {
    height: 3000px;
  }
</style>
