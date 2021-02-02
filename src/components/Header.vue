<template>
  <div class="header">
    <!-- <div class="cursor-pointer" @click="handleSwitch">Header</div> -->
    <div class="flex-ju-al-start pb-20">
      <div>Hi</div>
      <div class="font-weight-bold text-24 pl-10">CONIFERCHINA</div>
    </div>
    <div class="flex-ju-al-start">
      <div class="font-weight-bold">Dashboard</div>
      <div class="text-12 pl-10">2021-1-1 19:00</div>
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
      handleSwitch () {
        console.log(props)
        context.emit('switch')
      }
    })
    return {
      ...toRefs(data)
    }
  }
})
</script>
