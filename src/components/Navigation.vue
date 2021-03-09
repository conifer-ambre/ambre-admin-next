<template>
  <div :class="`navigation ${navigation && 'navigation-active'}`">
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
      <div
        :class="
          `iconfont cursor-pointer text-24 mt-20 mb-20 ${navigation ? 'icon-menu' : 'icon-list'}`
        "
        @click="handleNavigation"
      ></div>
      <!-- navigation -->
      <div class="navigation-item" v-for="(item, index) in list" :key="index">
        <div class="flex-ju-al-start pb-20 pt-20 cursor-pointer" @click="item.check = !item.check">
          <div :class="`iconfont ${item.icon} text-24 navigation-iconfont`"></div>
          <div
            v-if="navigation"
            class="white-space-nowrap pl-10 font-weight-bold text-14"
            @click="handleRouter(item)"
          >
            {{ item.label }}
          </div>
          <div v-if="item.child && item.child.length" class="iconfont icon-more-vertical"></div>
        </div>
        <!-- child -->
        <div
          v-if="item.child"
          class="navigation-child"
          :style="`height:${item.check ? item.child.length * 30 : 0}px`"
          @click="handleRouter(item)"
        >
          <div
            v-for="(item, index) in item.child"
            :key="index"
            class="navigation-child-item pl-35 cursor-pointer text-14 white-space-nowrap"
          >
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Navigation',
  props: {
    navigation: {
      type: Boolean,
      require: true
    }
  },
  setup(props, context) {
    const router = useRouter()
    const data = reactive({
      list: [
        {
          label: 'Dashboard',
          icon: 'icon-monitor'
        },
        {
          label: 'Document',
          route: 'Document',
          icon: 'icon-book'
        },
        {
          label: 'library',
          icon: 'icon-tag',
          check: false,
          child: [
            {
              label: 'Class library'
            },
            {
              label: 'Component'
            }
          ]
        },
        {
          label: 'Setting',
          icon: 'icon-settings'
        }
      ],
      handleNavigation() {
        console.log(props)
        context.emit('navigation')
      },

      handleRouter(param) {
        router.push({ name: param.route })
      }
    })
    return {
      ...toRefs(data)
    }
  }
})
</script>
