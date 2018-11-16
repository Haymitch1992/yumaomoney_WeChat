<template>
  <div>
    <x-header>帮助中心</x-header>
    <div style="height: 40px">
      <search
        @result-click="resultClick"
        @on-change="getResult"
        :results="results"
        v-model="value"
        position="absolute"
        auto-scroll-to-top
        top="46px"
        @on-focus="onFocus"
        @on-cancel="onCancel"
        @on-submit="onSubmit"
        ref="search"></search>
    </div>
    <group >
      <cell :title="item.question" is-link :key="item.questionId" v-for="item in data" @click.native="goHelpDetail(item.questionId, item.question)"></cell>
    </group>
  </div>
</template>

<script>
  import qs from 'qs'
  import _ from 'lodash'
  import { Group, Cell, XHeader, Search } from 'vux'
  export default {
    name: 'Help',
    components: {
      Group,
      Cell,
      XHeader,
      Search
    },
    data () {
      return {
        data: [],
        list: [],
        value: '',
        results: []
      }
    },
    methods: {
      goHelpDetail (id, title) {
        this.$router.push({
          name: `helpDetail`,
          params: {
            id: id,
            title: title
          }
        })
      },
      getList () {
        var self = this
        self.$http.post(process.env.BASE_API + '/callcenter.do?shoveDate' + new Date().getTime(), qs.stringify({ 'cid': '-1', 'pageSize': '1000' }))
          .then(function (res) {
            self.list = res.data.questions
            self.data = self.list
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      setFocus () {
        this.$refs.search.setFocus()
      },
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult (val) {
        var self = this
        if (val) {
          self.$refs.search.setBlur()
          var reg = RegExp(val)
          self.data = _.filter(self.data, function (o) { return o.question.match(reg) })
        } else {
          self.data = self.list
        }
      },
      onSubmit (val) {
        var self = this
        if (val) {
          self.$refs.search.setBlur()
          var reg = RegExp(val)
          self.data = _.filter(self.data, function (o) { return o.question.match(reg) })
        } else {
          self.data = self.list
        }
      },
      onFocus () {
        console.log('on focus')
      },
      onCancel () {
        var self = this
        self.data = self.list
      },
      init () {
        var self = this
        self.getList()
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>
