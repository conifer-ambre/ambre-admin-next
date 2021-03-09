<template>
  <div class="header flex-ju-al-between">
    <div>
      <div class="flex-ju-al-start">
        <div class="font-weight-bold">Dashboard</div>
        <div class="text-12 pl-10">01 Jan. 2020</div>
      </div>
    </div>
    <div class="flex-ju-al-end">
      <div class="iconfont icon-menu text-24 cursor-pointer header-icon mr-10" @click="handleNavigation"></div>
      <div class="iconfont icon-user text-24 cursor-pointer header-icon" @click="handleControl"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue'

export default defineComponent({
  name: 'Header',
  props: {},
  setup (props, context) {
    const data = reactive({
      handleNavigation () {
        console.log(props)
        context.emit('navigation')
      },
      handleControl () {
        context.emit('control')
      }
    })
    return {
      ...toRefs(data)
    }
  }
})
</script>
 