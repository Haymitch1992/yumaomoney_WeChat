<template>
  <div>
    <x-header>优惠券</x-header>
    <tab>
      <tab-item :selected="list.listType === 1" @on-item-click="list.listType = 1">未使用</tab-item>
      <tab-item :selected="list.listType === 2" @on-item-click="list.listType = 2">已使用</tab-item>
      <tab-item :selected="list.listType === 3" @on-item-click="list.listType = 3">已过期</tab-item>
    </tab>
    <div v-if="list.listType === 1">
      <group title="未使用红包共5个，共计499元"></group>
      <div class="coupons-card" v-for="item in data.coupons">
        <div class="card-title"></div>
        <div class="card-middle">
          <div class="fl card-left">
            <div class="left-title">{{item.money}}</div>
          </div>
          <div class="fr card-right">
            <div class="right-title">使用范围: {{item.range}}</div>
          </div>
        </div>
        <div class="card-bottom">
          <div class="fl card-left">
            <div class="left-content">投资: {{item.terms}}</div>
          </div>
          <div class="fr card-right">
            <div class="right-content">有效期: {{item.time}}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="list.listType === 2">
      <group :gutter="37"></group>
      <div class="coupons-card coupons-card-used" v-for="item in data.couponsUsed">
        <div class="card-title"></div>
        <div class="card-middle">
          <div class="fl card-left">
            <div class="left-title">{{item.money}}</div>
          </div>
          <div class="fr card-right">
            <div class="right-title">使用范围: {{item.range}}</div>
          </div>
        </div>
        <div class="card-bottom">
          <div class="fl card-left">
            <div class="left-content">投资: {{item.terms}}</div>
          </div>
          <div class="fr card-right">
            <div class="right-content">有效期: {{item.time}}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="list.listType === 3">
      <group :gutter="37"></group>
      <div class="coupons-card coupons-card-expired" v-for="item in data.couponsExpired">
        <div class="card-title"></div>
        <div class="card-middle">
          <div class="fl card-left">
            <div class="left-title">{{item.money}}</div>
          </div>
          <div class="fr card-right">
            <div class="right-title">使用范围: {{item.range}}</div>
          </div>
        </div>
        <div class="card-bottom">
          <div class="fl card-left">
            <div class="left-content">投资: {{item.terms}}</div>
          </div>
          <div class="fr card-right">
            <div class="right-content">有效期: {{item.time}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, Tab, TabItem } from 'vux'

  export default {
    name: 'Preferential',
    components: {
      Group,
      Cell,
      XHeader,
      Tab,
      TabItem
    },
    data () {
      return {
        data: {
          coupons: [
            {
              money: '100元',
              range: '全部标的',
              terms: '10000抵100元',
              time: '2018-11-08 09:15:00'
            },
            {
              money: '50元',
              range: '全部标的',
              terms: '5000抵50元',
              time: '2018-11-18 09:15:00'
            },
            {
              money: '50元',
              range: '全部标的',
              terms: '5000抵50元',
              time: '2018-12-08 09:15:00'
            }
          ],
          couponsUsed: [
            {
              money: '50元',
              range: '全部标的',
              terms: '5000抵50元',
              time: '2018-08-08 09:15:00'
            },
            {
              money: '100元',
              range: '全部标的',
              terms: '10000抵100元',
              time: '2018-07-08 09:15:00'
            },
            {
              money: '50元',
              range: '全部标的',
              terms: '5000抵50元',
              time: '2018-06-08 09:15:00'
            }
          ],
          couponsExpired: [
            {
              money: '50元',
              range: '全部标的',
              terms: '5000抵50元',
              time: '2018-08-08 09:15:00'
            },
            {
              money: '100元',
              range: '全部标的',
              terms: '10000抵100元',
              time: '2018-07-08 09:15:00'
            },
            {
              money: '50元',
              range: '全部标的',
              terms: '5000抵50元',
              time: '2018-07-08 09:15:00'
            },
            {
              money: '100元',
              range: '全部标的',
              terms: '10000抵100元',
              time: '2018-06-08 09:15:00'
            },
            {
              money: '50元',
              range: '全部标的',
              terms: '5000抵50元',
              time: '2018-06-08 09:15:00'
            }
          ]
        },
        list: {
          listType: 1
        }
      }
    }
  }
</script>
