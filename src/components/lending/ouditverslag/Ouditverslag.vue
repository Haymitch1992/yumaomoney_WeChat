<template>
  <div>
    <x-header>审计报告</x-header>
    <div style="margin: 10px;overflow: hidden;" v-for="item in list">
      <masker style="border-radius: 2px;" :opacity="0">
        <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
          <div slot="content" class="m-title">
            <a :href="item.link">{{item.title}}</a>
          </div>
      </masker>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, Masker } from 'vux'

  export default {
    name: 'Ouditverslag',
    components: {
      Group,
      Cell,
      XHeader,
      Masker
    },
    data () {
      return {
        list: [
          {
            title: '查看详情',
            img: require('@/assets/images/sjbg-2017.jpeg'),
            link: 'https://www.yumaomoney.com/integrated/report_2017.pdf'
          },
          {
            title: '查看详情',
            img: require('@/assets/images/sjbg-2016.jpg'),
            link: 'https://www.yumaomoney.com/integrated/report_2016.pdf'
          }, {
            title: '查看详情',
            img: require('@/assets/images/sjbg-2015.jpg'),
            link: 'https://www.yumaomoney.com/integrated/report_2015.pdf'
          }
        ]
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

  .m-time {
    font-size: 12px;
    padding-top: 4px;
    border-top: 1px solid #f0f0f0;
    display: inline-block;
    margin-top: 5px;
  }
</style>
