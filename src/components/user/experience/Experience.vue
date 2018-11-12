<template>
  <div>
    <x-header>体验金</x-header>
    <tab>
      <tab-item :selected="list.listType === 1" @on-item-click="list.listType = 1">未使用</tab-item>
      <tab-item :selected="list.listType === 2" @on-item-click="list.listType = 2">已使用</tab-item>
      <tab-item :selected="list.listType === 3" @on-item-click="list.listType = 3">已过期</tab-item>
    </tab>
    <div v-if="list.listType === 1">
      <group :gutter="37"></group>
      <div class="experience-card" v-for="item in data.experience">
        <div class="card-title">
          <div class="fl card-left">
            <div class="left-title">体验金</div>
          </div>
          <div class="fr card-right">
            <div class="right-title">使用范围: 体验标</div>
          </div>
        </div>
        <div class="card-middle">
          <div class="fl card-left">
            <div class="left-title">{{item.money}}</div>
          </div>
          <div class="fr card-right">
            <div class="right-title">未使用</div>
          </div>
        </div>
        <div class="card-bottom">
          <div class="fl card-left">
            <div class="left-content">有效期: {{item.time}}</div>
          </div>
          <div class="fr card-right">
            <div class="right-content"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="list.listType === 2">
      <group :gutter="37"></group>
      <div class="experience-card" v-for="item in data.experienceUsed">
        <div class="card-title">
          <div class="fl card-left">
            <div class="left-title">体验金</div>
          </div>
          <div class="fr card-right">
            <div class="right-title">使用范围: 体验标</div>
          </div>
        </div>
        <div class="card-middle">
          <div class="fl card-left">
            <div class="left-title">{{item.money}}</div>
          </div>
          <div class="fr card-right">
            <div class="right-title">已使用</div>
          </div>
        </div>
        <div class="card-bottom">
          <div class="fl card-left">
            <div class="left-content">有效期: {{item.time}}</div>
          </div>
          <div class="fr card-right">
            <div class="right-content"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="list.listType === 3">
      <group :gutter="37"></group>
      <div class="experience-card experience-card-expired" v-for="item in data.experienceExpired">
        <div class="card-title">
          <div class="fl card-left">
            <div class="left-title">体验金</div>
          </div>
          <div class="fr card-right">
            <div class="right-title">使用范围: 体验标</div>
          </div>
        </div>
        <div class="card-middle">
          <div class="fl card-left">
            <div class="left-title">{{item.money}}</div>
          </div>
          <div class="fr card-right">
            <div class="right-title">已过期</div>
          </div>
        </div>
        <div class="card-bottom">
          <div class="fl card-left">
            <div class="left-content">有效期: {{item.time}}</div>
          </div>
          <div class="fr card-right">
            <div class="right-content"></div>
          </div>
        </div>
      </div>
    </div>
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
        data: {
          experience: [
            {
              money: '8888元',
              time: '2018年08月08日-2018年10月08日',
              type: '1'
            },
            {
              money: '8888元',
              time: '2018年08月08日-2018年10月08日',
              type: '1'
            },
            {
              money: '8888元',
              time: '2018年08月08日-2018年10月08日',
              type: '1'
            }
          ],
          experienceUsed: [
            {
              money: '8888元',
              time: '2018年08月08日-2018年10月08日',
              type: '2'
            },
            {
              money: '8888元',
              time: '2018年08月08日-2018年10月08日',
              type: '2'
            },
            {
              money: '8888元',
              time: '2018年08月08日-2018年10月08日',
              type: '2'
            },
            {
              money: '8888元',
              time: '2018年08月08日-2018年10月08日',
              type: '2'
            }
          ],
          experienceExpired: [
            {
              money: '8888元',
              time: '2018年08月08日-2018年10月08日',
              type: '3'
            },
            {
              money: '8888元',
              time: '2018年08月08日-2018年10月08日',
              type: '3'
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
