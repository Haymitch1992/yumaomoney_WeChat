<template>
  <div>
    <x-header>安全保障</x-header>
    <!--<div class="box1-item" v-for="i in 10">{{i}}</div>-->
    <div class="page-container">
      <div class="fullpage-container">
        <div class="fullpage-wp" v-fullpage="opts">
          <div class="page-1 page">
            <p class="part-1" v-animate="{value: 'bounceInLeft'}">第一页</p>
          </div>
          <div class="page-2 page">
            <p class="part-2" v-animate="{value: 'bounceInRight'}">第二页</p>
          </div>
          <div class="page-3 page">
            <p class="part-3" v-animate="{value: 'bounceInRight'}">第三页</p>
          </div>
          <!--<div class="page-3 page">-->
            <!--<p class="part-3" v-animate="{value: 'bounceInLeft', delay: 0}">第三页1</p>-->
            <!--<p class="part-3" v-animate="{value: 'bounceInRight', delay: 600}">第三页2</p>-->
            <!--<p class="part-3" v-animate="{value: 'zoomInDown', delay: 1200}">第三页3</p>-->
          <!--</div>-->
        </div>
      </div>
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
        scrollTop: 0,
        opts: {
          start: 0,
          dir: 'v',
          duration: 500
        }
      }
    },
    methods: {
      onScroll (pos) {
        this.scrollTop = pos.top
      }
    },
    created () {
    }
  }
</script>

<style>
  .page-container {
    position: absolute;
    left: 0;
    top: 46px;
    width: 100%;
    height: 690px;
  }
  .page-1 {
    background: #1aad19;
  }
  .page-2 {
    background: #10aeff;
  }
  .page-3 {
    background: #ce3c39;
  }
</style>
