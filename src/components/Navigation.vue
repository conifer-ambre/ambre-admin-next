<template>
  <div :class="`navigation ${navigation && 'navigation-active'}`">
    <!-- block -->
    <div class="navigation-block">
      <!-- logo -->
      <div class="flex-justify-align-start">
        <div class="cursor-pointer font-size-14 font-weight-bold white-space-nowrap">
          <span>CONIFERCHINA</span>
          <span v-show="navigation">.COM</span>
        </div>
      </div>
      <!-- switch -->
      <div
        :class="
          `iconfont cursor-pointer font-size-24 margin-top-20 margin-bottom-20 ${
            navigation ? 'icon-menu' : 'icon-list'
          }`
        "
        @click="handleNavigation"
      ></div>
      <!-- navigation -->
      <div class="navigation-item" v-for="(item, index) in list" :key="index">
        <div
          class="flex-justify-align-start padding-bottom-20 padding-top-20 cursor-pointer"
          @click="item.check = !item.check"
        >
          <div :class="`iconfont ${item.icon} font-size-24 navigation-iconfont`"></div>
          <div
            v-if="navigation"
            class="white-space-nowrap padding-left-10 font-weight-bold font-size-14"
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
            class="navigation-child-item padding-left-35 cursor-pointer font-size-14 white-space-nowrap"
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
