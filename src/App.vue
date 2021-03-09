<template>
  <div class="app flex-ju-between">
    <ambre-navigation :navigation="navigation" @navigation="handleNavigation"></ambre-navigation>
    <div class="flex-1">
      <ambre-header @navigation="handleNavigation" @control="handleControl"></ambre-header>
      <router-view @control="handleControl" class="app-view"/>
    </div>
    <ambre-control :control="control" @control="handleControl"></ambre-control>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {}
})
export default class App extends Vue {
  private navigation = true
  private control = true
  private device = 'PC'
  handleNavigation () {
    this.navigation = !this.navigation
  }

  handleControl () {
    this.control = !this.control
  }

  // device
  mounted () {
    if (document.body.clientWidth <= 1024) {
      this.device = 'H5'
    } else {
      this.device = 'PC'
    }
    sessionStorage.setItem('device', this.device)
  }
}
</script>
