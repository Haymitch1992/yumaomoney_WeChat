<template>
  <div>
    <x-header>运营报告</x-header>
    <tab>
      <tab-item :selected="listType === '2018'" @on-item-click="listType = '2018'">2018</tab-item>
      <tab-item :selected="listType === '2017'" @on-item-click="listType = '2017'">2017</tab-item>
    </tab>
    <div style="margin: 10px;overflow: hidden;" v-for="item in list[listType]">
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
  import { Group, XHeader, Tab, TabItem, Masker } from 'vux'

  export default {
    name: 'OperationReport',
    components: {
      Group,
      XHeader,
      Tab,
      TabItem,
      Masker
    },
    data () {
      return {
        list: {
          '2018': [
            {
              title: '查看详情',
              img: require('@/assets/images/operationReport/yybg-2018-08.png'),
              link: 'https://www.yumaomoney.com/activity/report/img/report_n8/yybg-2018-08-detail.png'
            },
            {
              title: '查看详情',
              img: require('@/assets/images/operationReport/yybg-2018-07.png'),
              link: 'https://www.yumaomoney.com/moblieNewPage/pdf/yybg-2018-07-detail.jpg'
            }, {
              title: '查看详情',
              img: require('@/assets/images/operationReport/yybg-2018-06.png'),
              link: 'https://www.yumaomoney.com/moblieNewPage/pdf/yybg-2018-06-detail.jpg'
            }, {
              title: '查看详情',
              img: require('@/assets/images/operationReport/yybg-2018-05.png'),
              link: 'https://www.yumaomoney.com/moblieNewPage/pdf/yybg-2018-05-detail.jpg'
            }, {
              title: '查看详情',
              img: require('@/assets/images/operationReport/yybg-2018-04.png'),
              link: 'https://www.yumaomoney.com/moblieNewPage/pdf/yybg-2018-04-detail.jpg'
            }, {
              title: '查看详情',
              img: require('@/assets/images/operationReport/yybg-2018-03.png'),
              link: 'https://www.yumaomoney.com/moblieNewPage/pdf/yybg-2018-03-detail.jpg'
            }, {
              title: '查看详情',
              img: require('@/assets/images/operationReport/yybg-2018-02.png'),
              link: 'https://www.yumaomoney.com/moblieNewPage/pdf/yybg-2018-02-detail.jpg'
            }, {
              title: '查看详情',
              img: require('@/assets/images/operationReport/yybg-2018-01.png'),
              link: 'https://www.yumaomoney.com/moblieNewPage/pdf/yybg-2018-01-detail.jpg'
            }
          ],
          '2017': [
            {
              title: '查看详情',
              img: require('@/assets/images/operationReport/yybg-2017-12.png'),
              link: 'https://www.yumaomoney.com/moblieNewPage/pdf/yybg-2017-12-detail.jpg'
            }, {
              title: '查看详情',
              img: require('@/assets/images/operationReport/yybg-2017-11.png'),
              link: 'https://www.yumaomoney.com/moblieNewPage/pdf/yybg-2017-11-detail.jpg'
            }, {
              title: '查看详情',
              img: require('@/assets/images/operationReport/yybg-2017-10.png'),
              link: 'https://www.yumaomoney.com/moblieNewPage/pdf/yybg-2017-10-detail.jpg'
            }, {
              title: '查看详情',
              img: require('@/assets/images/operationReport/yybg-2017-09.png'),
              link: 'https://www.yumaomoney.com/moblieNewPage/pdf/yybg-2017-09-detail.jpg'
            }, {
              title: '查看详情',
              img: require('@/assets/images/operationReport/yybg-2017-08.png'),
              link: 'https://www.yumaomoney.com/moblieNewPage/pdf/yybg-2017-08-detail.jpg'
            }
          ]
        },
        listType: '2018'
      }
    }
  }
</script>

<style>
  .m-img {
    padding-bottom: 42%;
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
    top: 85%;
    transform: translateY(-50%);
  }

  .m-title a{
    color: #fff;
  }
</style>
