<template>
  <div>
    <x-header>体验金</x-header>
    <tab>
      <tab-item :selected="list.listType === 1" @on-item-click="list.listType = 1">未使用</tab-item>
      <tab-item :selected="list.listType === 2" @on-item-click="list.listType = 2">已使用</tab-item>
      <tab-item :selected="list.listType === 3" @on-item-click="list.listType = 3">已过期</tab-item>
    </tab>
    <group v-if="list.listType === 1">
      <div class="coupons-card">
        <div class="coupons-card-title"></div>
        <div class="coupons-card-middle">
          <div class="fl coupons-card-left">
            <div class="coupons-card-left-title">8888元</div>
          </div>
          <div class="fr coupons-card-right">
            <div class="coupons-card-right-title">使用范围: 体验标</div>
          </div>
        </div>
        <div class="coupons-card-bottom">
          <div class="fl">
            <div class="coupons-card-left-content">有效期: 2018年08月08日-2018年10月08日</div>
          </div>
        </div>
      </div>
      <div class="coupons-card">
        <div class="coupons-card-title"></div>
        <div class="coupons-card-middle">
          <div class="fl coupons-card-left">
            <div class="coupons-card-left-title">8888元</div>
          </div>
          <div class="fr coupons-card-right">
            <div class="coupons-card-right-title">使用范围: 体验标</div>
          </div>
        </div>
        <div class="coupons-card-bottom">
          <div class="fl">
            <div class="coupons-card-left-content">有效期: 2018年08月08日-2018年10月08日</div>
          </div>
        </div>
      </div>
      <div class="coupons-card">
        <div class="coupons-card-title"></div>
        <div class="coupons-card-middle">
          <div class="fl coupons-card-left">
            <div class="coupons-card-left-title">8888元</div>
          </div>
          <div class="fr coupons-card-right">
            <div class="coupons-card-right-title">使用范围: 体验标</div>
          </div>
        </div>
        <div class="coupons-card-bottom">
          <div class="fl">
            <div class="coupons-card-left-content">有效期: 2018年08月08日-2018年10月08日</div>
          </div>
        </div>
      </div>
    </group>
    <group v-if="list.listType === 2">
      <div class="coupons-card">
        <div class="coupons-card-title">已使用</div>
        <div class="coupons-card-middle">
          <div class="fl coupons-card-left">
            <div class="coupons-card-left-title">8888元</div>
          </div>
          <div class="fr coupons-card-right">
            <div class="coupons-card-right-title">使用范围: 体验标</div>
          </div>
        </div>
        <div class="coupons-card-bottom">
          <div class="fl">
            <div class="coupons-card-left-content">有效期: 2018年08月08日-2018年10月08日</div>
          </div>
        </div>
      </div>
      <div class="coupons-card">
        <div class="coupons-card-title">已使用</div>
        <div class="coupons-card-middle">
          <div class="fl coupons-card-left">
            <div class="coupons-card-left-title">8888元</div>
          </div>
          <div class="fr coupons-card-right">
            <div class="coupons-card-right-title">使用范围: 体验标</div>
          </div>
        </div>
        <div class="coupons-card-bottom">
          <div class="fl">
            <div class="coupons-card-left-content">有效期: 2018年08月08日-2018年10月08日</div>
          </div>
        </div>
      </div>
      <div class="coupons-card">
        <div class="coupons-card-title">已使用</div>
        <div class="coupons-card-middle">
          <div class="fl coupons-card-left">
            <div class="coupons-card-left-title">8888元</div>
          </div>
          <div class="fr coupons-card-right">
            <div class="coupons-card-right-title">使用范围: 体验标</div>
          </div>
        </div>
        <div class="coupons-card-bottom">
          <div class="fl">
            <div class="coupons-card-left-content">有效期: 2018年08月08日-2018年10月08日</div>
          </div>
        </div>
      </div>
    </group>
    <group v-if="list.listType === 3">
      <div class="coupons-card">
        <div class="coupons-card-shadow">
          <div class="shadow-box">
            <span class="shadow-line"></span>
            <span class="shadow-text">已过期</span>
            <span class="shadow-line"></span>
          </div>
        </div>
        <div class="coupons-card-title"></div>
        <div class="coupons-card-middle">
          <div class="fl coupons-card-left">
            <div class="coupons-card-left-title">8888元</div>
          </div>
          <div class="fr coupons-card-right">
            <div class="coupons-card-right-title">使用范围: 体验标</div>
          </div>
        </div>
        <div class="coupons-card-bottom">
          <div class="fl">
            <div class="coupons-card-left-content">有效期: 2018年08月08日-2018年10月08日</div>
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
        <div class="coupons-card-title"></div>
        <div class="coupons-card-middle">
          <div class="fl coupons-card-left">
            <div class="coupons-card-left-title">8888元</div>
          </div>
          <div class="fr coupons-card-right">
            <div class="coupons-card-right-title">使用范围: 体验标</div>
          </div>
        </div>
        <div class="coupons-card-bottom">
          <div class="fl">
            <div class="coupons-card-left-content">有效期: 2018年08月08日-2018年10月08日</div>
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
        <div class="coupons-card-title"></div>
        <div class="coupons-card-middle">
          <div class="fl coupons-card-left">
            <div class="coupons-card-left-title">8888元</div>
          </div>
          <div class="fr coupons-card-right">
            <div class="coupons-card-right-title">使用范围: 体验标</div>
          </div>
        </div>
        <div class="coupons-card-bottom">
          <div class="fl">
            <div class="coupons-card-left-content">有效期: 2018年08月08日-2018年10月08日</div>
          </div>
        </div>
      </div>
    </group>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, Tab, TabItem } from 'vux'

  export default {
    name: 'Experience',
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

<style>
  .coupons-card {
    position: relative;
    margin: 15px;
    height: 150px;
    padding-top: 0px;
    border-radius: 15px;
    background: #f2f2f2;
    font-size: 12px;
  }
  .coupons-card-shadow {
    position: absolute;
    width: 100%;
    height: 150px;
    border-radius: 15px;
    background-color: rgba(51, 51, 51, 0.7);
    z-index: 10;
  }
  .coupons-card .shadow-box{
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding-top: 50px;
    text-align: center;
    color: #fff;
  }
  .coupons-card .shadow-line{
    display: inline-block;
    border-bottom: 1px solid #f2f2f2;
    width: 30%;
    position: relative;
    top: -5px;
    margin: 0 5px;
  }
  .coupons-card-title {
    padding-left: 60%;
    text-align: center;
    width: 40%;
    height: 50px;
    line-height: 50px;
  }
  .coupons-card-middle {
    height: 50px;
  }
  .coupons-card-bottom {
    height: 50px;
  }
  .coupons-card-left {
    width: 60%;
    height: 50px;
  }
  .coupons-card-right {
    width: 40%;
    height: 50px;
  }
  .coupons-card-left-title {
    height: 50px;
    line-height: 50px;
    padding-left: 15px;
    font-size: 35px;
    font-weight: 700;
  }
  .coupons-card-left-content {
    height: 50px;
    line-height: 50px;
    padding-left: 15px;
  }
  .coupons-card-right-title {
    height: 50px;
    line-height: 50px;
    padding-right: 15px;
  }
  .coupons-card-right-content {
    height: 50px;
    line-height: 50px;
    padding-right: 15px;
  }
</style>
