<template>
  <div :class="`control ${control&&'control-active'}`">
    <div class="padding-top-25 padding-bottom-25 padding-left-25 padding-right-25">
      <!-- avatar -->
      <div class="flex-justify-center">
        <div v-show="control" class="control-avatar cursor-pointer" @click="handleControl">
          <img src="@/assets/image/avatar.png" alt="">
        </div>
      </div>
      <div class="control-block">
        <!-- info -->
        <div class="text-align-center">
          <div class="padding-top-20 font-weight-bold">CONIFERCHINA.COM</div>
          <div class="font-size-14 color-7f7f7f padding-top-10">WEB Engineer</div>
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
