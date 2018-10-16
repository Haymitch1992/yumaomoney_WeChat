<template>
  <div>
    <x-header>优惠券</x-header>
    <tab>
      <tab-item :selected="list.listType === 1" @on-item-click="list.listType = 1">未使用</tab-item>
      <tab-item :selected="list.listType === 2" @on-item-click="list.listType = 2">已使用</tab-item>
      <tab-item :selected="list.listType === 3" @on-item-click="list.listType = 3">已过期</tab-item>
    </tab>
    <group title="未使用红包共5个，共计499元" v-if="list.listType === 1">
      <div class="coupons-card">
        <div class="card-title"></div>
        <div class="card-middle">
          <div class="fl card-left">
            <div class="left-title">50元</div>
          </div>
          <div class="fr card-right">
            <div class="right-title">投资: 5000抵50元</div>
          </div>
        </div>
        <div class="card-bottom">
          <div class="fl card-left">
            <div class="left-content">有效期: 2018-08-08 09:15:00</div>
          </div>
          <div class="fr card-right">
            <div class="right-content">使用范围: 全部标的</div>
          </div>
        </div>
      </div>
      <div class="coupons-card">
        <div class="card-title"></div>
        <div class="card-middle">
          <div class="fl card-left">
            <div class="left-title">50元</div>
          </div>
          <div class="fr card-right">
            <div class="right-title">投资: 5000抵50元</div>
          </div>
        </div>
        <div class="card-bottom">
          <div class="fl card-left">
            <div class="left-content">有效期: 2018-08-08 09:15:00</div>
          </div>
          <div class="fr card-right">
            <div class="right-content">使用范围: 全部标的</div>
          </div>
        </div>
      </div>
      <div class="coupons-card">
        <div class="card-title"></div>
        <div class="card-middle">
          <div class="fl card-left">
            <div class="left-title">50元</div>
          </div>
          <div class="fr card-right">
            <div class="right-title">投资: 5000抵50元</div>
          </div>
        </div>
        <div class="card-bottom">
          <div class="fl card-left">
            <div class="left-content">有效期: 2018-08-08 09:15:00</div>
          </div>
          <div class="fr card-right">
            <div class="right-content">使用范围: 全部标的</div>
          </div>
        </div>
      </div>
    </group>
    <group v-if="list.listType === 2" :gutter="37">
      <div class="coupons-card">
        <div class="card-title">已使用</div>
        <div class="card-middle">
          <div class="fl card-left">
            <div class="left-title">50元</div>
          </div>
          <div class="fr card-right">
            <div class="right-title">投资: 5000抵50元</div>
          </div>
        </div>
        <div class="card-bottom">
          <div class="fl card-left">
            <div class="left-content">有效期: 2018-08-08 09:15:00</div>
          </div>
          <div class="fr card-right">
            <div class="right-content">使用范围: 全部标的</div>
          </div>
        </div>
      </div>
      <div class="coupons-card">
        <div class="card-title">已使用</div>
        <div class="card-middle">
          <div class="fl card-left">
            <div class="left-title">50元</div>
          </div>
          <div class="fr card-right">
            <div class="right-title">投资: 5000抵50元</div>
          </div>
        </div>
        <div class="card-bottom">
          <div class="fl card-left">
            <div class="left-content">有效期: 2018-08-08 09:15:00</div>
          </div>
          <div class="fr card-right">
            <div class="right-content">使用范围: 全部标的</div>
          </div>
        </div>
      </div>
      <div class="coupons-card">
        <div class="card-title">已使用</div>
        <div class="card-middle">
          <div class="fl card-left">
            <div class="left-title">50元</div>
          </div>
          <div class="fr card-right">
            <div class="right-title">投资: 5000抵50元</div>
          </div>
        </div>
        <div class="card-bottom">
          <div class="fl card-left">
            <div class="left-content">有效期: 2018-08-08 09:15:00</div>
          </div>
          <div class="fr card-right">
            <div class="right-content">使用范围: 全部标的</div>
          </div>
        </div>
      </div>
    </group>
    <group v-if="list.listType === 3" :gutter="37">
      <div class="coupons-card">
        <div class="coupons-card-shadow">
          <div class="shadow-box">
            <span class="shadow-line"></span>
            <span class="shadow-text">已过期</span>
            <span class="shadow-line"></span>
          </div>
        </div>
        <div class="card-title"></div>
        <div class="card-middle">
          <div class="fl card-left">
            <div class="left-title">50元</div>
          </div>
          <div class="fr card-right">
            <div class="right-title">投资: 5000抵50元</div>
          </div>
        </div>
        <div class="card-bottom">
          <div class="fl card-left">
            <div class="left-content">有效期: 2018-08-08 09:15:00</div>
          </div>
          <div class="fr card-right">
            <div class="right-content">使用范围: 全部标的</div>
          </div>
        </div>
      </div>
      <div class="coupons-card">
        <div class="coupons-card-shadow">
          <div class="shadow-box">
            <span class="shadow-line"></span>
            <span class="shadow-text">已过期</span>
            <span class="shadow-line"></span>
          </div>
        </div>
        <div class="card-title"></div>
        <div class="card-middle">
          <div class="fl card-left">
            <div class="left-title">50元</div>
          </div>
          <div class="fr card-right">
            <div class="right-title">投资: 5000抵50元</div>
          </div>
        </div>
        <div class="card-bottom">
          <div class="fl card-left">
            <div class="left-content">有效期: 2018-08-08 09:15:00</div>
          </div>
          <div class="fr card-right">
            <div class="right-content">使用范围: 全部标的</div>
          </div>
        </div>
      </div>
      <div class="coupons-card">
        <div class="coupons-card-shadow">
          <div class="shadow-box">
            <span class="shadow-line"></span>
            <span class="shadow-text">已过期</span>
            <span class="shadow-line"></span>
          </div>
        </div>
        <div class="card-title"></div>
        <div class="card-middle">
          <div class="fl card-left">
            <div class="left-title">50元</div>
          </div>
          <div class="fr card-right">
            <div class="right-title">投资: 5000抵50元</div>
          </div>
        </div>
        <div class="card-bottom">
          <div class="fl card-left">
            <div class="left-content">有效期: 2018-08-08 09:15:00</div>
          </div>
          <div class="fr card-right">
            <div class="right-content">使用范围: 全部标的</div>
          </div>
        </div>
      </div>
    </group>
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
        list: {
          listType: 1
        }
      }
    }
  }
</script>
