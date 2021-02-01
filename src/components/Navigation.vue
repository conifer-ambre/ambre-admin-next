<template>
  <div :class="`navigation ${navigation&&'navigation-actived'}`">
    <div class="cursor-pointer" @click="handleSwitch">Navigation</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue'

export default defineComponent({
  name: 'Navigation',
  props: {
    navigation: {
      type: Boolean,
      require: true
    }
  },
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
