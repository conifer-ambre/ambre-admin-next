<template>
  <div class="index">
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {}
})
export default class Index extends Vue {
  handleControl () {
    this.$emit('control')
  }
}
</script>
