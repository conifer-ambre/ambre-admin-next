<template>
  <div class="app flex-ju-between">
    <ambre-navigation :navigation="navigation" @switch="handleSwitch"></ambre-navigation>
    <div class="flex-1">
      <ambre-header @switch="handleSwitch"></ambre-header>
      <router-view class="app-view"/>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {}
})
export default class App extends Vue {
  private navigation = false
  handleSwitch () {
    this.navigation = !this.navigation
  }
}
</script>
