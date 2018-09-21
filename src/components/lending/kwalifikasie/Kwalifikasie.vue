<template>
  <div>
    <x-header class="header-fixed">企业资质</x-header>
    <div style="padding-top: 80px">
      <div v-for="src in list" style="text-align:center">
        <span style="font-size:20px;">Loading</span>
        <x-img :src="src" :webp-src="`${src}?type=webp`" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
      </div>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XImg } from 'vux'

  export default {
    name: 'Kwalifikasie',
    components: {
      Group,
      Cell,
      XHeader,
      XImg
    },
    data () {
      return {
        list: [
          'https://www.yumaomoney.com/activity/20170810/img/mCertificate-4.jpg',
          'https://www.yumaomoney.com/activity/20170810/img/mCertificate-1.jpg',
          'https://www.yumaomoney.com/activity/20170810/img/mCertificate-3.jpg'
        ]
      }
    },
    methods: {
      success (src, ele) {
        console.log('success load', src)
        const span = ele.parentNode.querySelector('span')
        ele.parentNode.removeChild(span)
      },
      error (src, ele, msg) {
        console.log('error load', msg, src)
        const span = ele.parentNode.querySelector('span')
        span.innerText = 'load error'
      }
    }
  }
</script>

<style>
  .m-img {
    padding-bottom: 65%;
    display: block;
    position: relative;
    max-width: 100%;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    border-radius: 2px;
  }

  .m-title {
    color: #fff;
    text-align: center;
    text-shadow: 0 0 2px rgba(0, 0, 0, .5);
    font-weight: 500;
    font-size: 16px;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    text-align: center;
    top: 80%;
    transform: translateY(-50%);
  }

  .m-title a{
    color: #fff;
  }
</style>
