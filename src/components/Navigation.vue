<template>
  <div :class="`navigation ${navigation&&'navigation-actived'}`">
    <!-- block -->
    <div class="navigation-block">
      <!-- logo -->
      <div class="flex-ju-al-start">
        <div class="cursor-pointer text-14 font-weight-bold white-space-nowrap">
          <span>CONIFERCHINA</span>
          <span v-show="navigation">.COM</span>
        </div>
      </div>
      <!-- switch -->
      <div :class="`iconfont cursor-pointer text-24 mt-20 mb-20 ${navigation?'icon-menu':'icon-list'}`" @click="handleSwitch"></div>
      <!-- navigation -->
      <div class="navigation-item flex-ju-al-start pb-20 pt-20 cursor-pointer" v-for="(item,index) in list" :key="index">
        <div :class="`iconfont ${item.icon} text-24 navigation-iconfont`"></div>
        <div v-if="navigation" class="white-space-nowrap pl-10 font-weight-bold text-14">{{item.label}}</div>
      </div>
    </div>
    <!-- support -->
    <div class="navigation-support">
      <div class="navigation-support-card flex-ju-al-start pl-20">
        <div>
          <div class="font-weight-bold text-14">SUPPORT</div>
          <div v-show="navigation" class="text-12">coniferchina@gmail.com</div>
        </div>
      </div>
    </div>
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
      list: [
        {
          label: 'Dashboard',
          icon: 'icon-monitor'
        },
        {
          label: 'Document',
          icon: 'icon-book'
        },
        {
          label: 'Class library',
          icon: 'icon-tag'
        },
        {
          label: 'Component library',
          icon: 'icon-grid'
        },
        {
          label: 'Setting',
          icon: 'icon-settings'
        }
      ],
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
