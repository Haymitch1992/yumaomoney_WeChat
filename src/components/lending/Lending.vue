<template>
  <div>
    <swiper loop auto :list="swiper_list" v-model="swiper_index" @on-index-change="swiper_onIndexChange"></swiper>
    <grid :show-lr-borders="false" >
      <grid-item label="关于我们" key="0">
        <img slot="icon" src="../../assets/linkme.png">
      </grid-item>
      <grid-item label="在线活动" key="1">
        <img slot="icon" src="../../assets/appDown.png">
      </grid-item>
      <grid-item label="app下载" key="2">
        <img slot="icon" src="../../assets/active.png">
      </grid-item>
      <grid-item label="联系我们" key="3">
        <img slot="icon" src="../../assets/aboutMe.png">
      </grid-item>
    </grid>
    <group label-width="4.5em" label-margin-right="2em" label-align="right" v-for="item in list">
      <panel :list="item.panel" :type="item.type" @on-img-error="onImgError"></panel>
      <x-progress :percent="item.progress" :show-cancel="false"></x-progress>
    </group>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <card :header="{title: '测试活动' }" :footer="{title: 'More',link: '/component/panel'}">
        <p slot="content" class="card-padding">融资额度:100.00万元 期限：2个月</p>
      </card>
    </group>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <card>
        <img slot="header" src="http://placeholder.qiniudn.com/640x300" style="width:100%;display:block;">
        <div slot="content" class="card-padding">
          <p style="color:#999;font-size:12px;">Posted on January 21, 2015</p>
          <p style="font-size:14px;line-height:1.2;">Quisque nibh hendrerit..</p>
        </div>
      </card>
    </group>
  </div>
</template>

<script>
  import { XHeader, Swiper, Grid, GridItem, Group, Card, Panel, XProgress } from 'vux'

  export default {
    name: 'Lending',
    components: {
      XHeader,
      Swiper,
      Grid,
      GridItem,
      Group,
      Card,
      Panel,
      XProgress
    },
    methods: {
      swiper_onIndexChange (index) {
        this.swiper_index = index
      },
      onImgError (item, $event) {
        console.log(item, $event)
      }
    },
    data () {
      return {
        swiper_list: [
          {
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
          }
        ],
        list: [
          {
            panel: [
              {
                src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                title: 'YM01-B-0702',
                desc: '融资额度:100.00万元 期限：2个月',
                url: '/financeDetail?id=147',
                meta: {
                  source: '年利率',
                  date: '7% + 5%',
                  other: '完成比例： 30%'
                }
              }
            ],
            type: '4',
            progress: 30
          },
          {
            panel: [
              {
                src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                title: 'YM01-A-0902',
                desc: '融资额度:50.00万元 期限：30天',
                url: {
                  path: '/financeDetail?id=148',
                  replace: false
                },
                meta: {
                  source: '年利率',
                  date: '7% + 3%',
                  other: '完成比例： 60%'
                }
              }
            ],
            type: '4',
            progress: 60
          }
        ],
        swiper_index: 1
      }
    }
  }
</script>

<style>
</style>
