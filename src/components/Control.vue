<template>
  <div :class="`control ${control&&'control-active'}`">
    <div class="pt-25 pb-25 pl-25 pr-25">
      <!-- avatar -->
      <div class="flex-ju-center">
        <div v-show="control" class="control-avatar cursor-pointer" @click="handleControl">
          <img src="@/assets/image/avatar.png" alt="">
        </div>
      </div>
      <div class="control-block">
        <!-- info -->
        <div class="text-center">
          <div class="pt-20 font-weight-bold">CONIFERCHINA.COM</div>
          <div class="text-14 color-7f7f7f pt-10">WEB Engineer</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue'

export default defineComponent({
  name: 'Control',
  props: {
    control: {
      type: Boolean,
      require: true
    }
  },
  setup (props, context) {
    const data = reactive({
      handleControl () {
        console.log(props)
        context.emit('control')
      }
    })
    return {
      ...toRefs(data)
    }
  }
})
</script>
