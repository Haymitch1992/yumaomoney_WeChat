<template>
  <div>
    <x-header>详情</x-header>
    <group>
      <div class="helpTitle">问：{{title}}</div>
    </group>
    <group>
      <div class="helpDetail" v-html="detail">
        {{detail}}
      </div>
    </group>
  </div>
</template>

<script>
  import qs from 'qs'
  import { Group, XHeader, XInput } from 'vux'
  export default {
    name: 'HelpDetail',
    components: {
      Group,
      XHeader,
      XInput
    },
    data () {
      return {
        id: '',
        title: '',
        detail: ''
      }
    },
    methods: {
      getDetail () {
        var self = this
        self.$http.post(process.env.BASE_API + '/callcenterAnswer.do?shoveDate' + new Date().getTime(), qs.stringify({ 'id': self.id }))
          .then(function (res) {
            self.detail = res.data
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      init () {
        var self = this
        self.id = self.$route.params.id
        self.title = self.$route.params.title
        self.getDetail()
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>

<style>
  .helpTitle{
    padding: 20px 10px;
  }
  .helpDetail{
    padding: 20px 10px;
  }
</style>
