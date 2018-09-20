<template>
  <div>
    <x-header>安全保障</x-header>
    <div class="box1-item" v-for="i in 10">{{i}}</div>
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
        pageNum: 10,
        currentPage: 1,
        option: {
          type: Object,
          arrowsType: 'animate',
          navbar: true,
          highlight: true,
          loop: true        // 是否开启滚动循环
        }
      }
    },
    methods: {
      onScroll (pos) {
        this.scrollTop = pos.top
      },
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        console.log(scrollTop)
      },
      changePage (index) {
        console.log(index)
        this.currentPage = index
        this.$emit('changePage', index)
      }
    },
    computed: {
      nextIndex () {
        if (this.currentPage === this.pageNum) {
          if (this.option.loop) {
            return 1
          } else {
            return this.pageNum
          }
        } else {
          return this.currentPage + 1
        }
      },
      prevIndex () {
        if (this.currentPage === 1) {
          if (this.option.loop) {
            return this.pageNum
          } else {
            return 1
          }
        } else {
          return this.currentPage - 1
        }
      }
    },
    created () {
      let self = this
      let timer = null
      let start = 0
      // 滚轮处理
      function scrollHandler (direction) {
        // 防止重复触发滚动事件
        if (timer != null) {
          return
        }
        if (direction === 'down') {
          self.changePage(self.nextIndex)
        } else {
          self.changePage(self.prevIndex)
        }
        timer = setTimeout(function () {
          clearTimeout(timer)
          timer = null
        }, 300)
      }
      // if (Object.hasOwnProperty.call(window,'onmousewheel')) {
      if (Object.hasOwnProperty.call(window, 'onmousewheel')) {
        // 监听滚轮事件
        window.addEventListener('mousewheel', function (event) {   // IE/Opera/Chrome
          let direction = event.wheelDelta > 0 ? 'up' : 'down'
          scrollHandler(direction)
        }, false)
      } else {
        window.addEventListener('DOMMouseScroll', function (event) {   // Firefox
          let direction = event.detail > 0 ? 'up' : 'down'
          scrollHandler(direction)
        }, false)
      }
      // 移动端触摸事件处理
      window.addEventListener('touchstart', function (event) {
        start = event.touches[0].clientY
      })
      window.addEventListener('touchmove', function (event) {
        event.preventDefault()
      })
      window.addEventListener('touchend', function (event) {
        let spacing = event.changedTouches[0].clientY - start
        let direction
        if (spacing > 50) {
          direction = 'up'
          scrollHandler(direction)
        } else if (spacing < -50) {
          direction = 'down'
          scrollHandler(direction)
        }
      })
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
