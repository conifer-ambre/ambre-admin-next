<template>
  <div class="header flex-justify-align-between">
    <div>
      <div class="flex-justify-align-start">
        <div class="font-weight-bold">Dashboard</div>
        <div class="font-size-12 padding-left-10">01 Jan. 2020</div>
      </div>
    </div>
    <div class="flex-justify-align-end">
      <div
        class="iconfont icon-menu font-size-24 cursor-pointer header-icon mr-10"
        @click="handleNavigation"
      ></div>
      <div
        class="iconfont icon-user font-size-24 cursor-pointer header-icon"
        @click="handleControl"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue'

export default defineComponent({
  name: 'Header',
  props: {},
  setup(props, context) {
    const data = reactive({
      handleNavigation() {
        console.log(props)
        context.emit('navigation')
      },
      handleControl() {
        context.emit('control')
      }
    })
    return {
      ...toRefs(data)
    }
  }
})
</script>
