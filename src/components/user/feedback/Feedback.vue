<template>
  <div>
    <x-header>意见反馈</x-header>
    <group>
      <x-input title="请输入问题" placeholder="长度在1~40位之间" :max="40"></x-input>
    </group>
    <group>
      <x-textarea title="请输入描述" :max="300" placeholder="长度在1~300位之间" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
      <uploader
        :max="varmax"
        :images="images"
        :handle-click="false"
        :show-header="false"
        :readonly="false"
        :upload-url="uploadUrl"
        name="img"
        :params="params"
        size="small"
        @preview="previewMethod"
        @add-image="addImageMethod"
        @remove-image="removeImageMethod"
      ></uploader>
    </group>
    <div class="submit-box">
      <x-button type="primary">提交</x-button>
    </div>
  </div>
</template>

<script>
  import { Group, XHeader, XInput, XButton, XTextarea } from 'vux'
  import Uploader from 'vux-uploader'

  export default {
    name: 'Feedback',
    components: {
      Group,
      XHeader,
      XInput,
      XButton,
      XTextarea,
      Uploader
    },
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        varmax: 9,
        uploadUrl: 'https://www.baidu.com',
        images: [],
        params: {}
      }
    },
    methods: {
      onEvent (event) {
        console.log('on', event)
      },
      previewMethod (event) {
        console.log('on', event)
      },
      addImageMethod (event) {
        console.log('on', event)
      },
      removeImageMethod (event) {
        console.log('on', event)
      }
    }
  }
</script>
