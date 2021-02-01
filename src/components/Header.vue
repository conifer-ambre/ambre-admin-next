<template>
  <div class="font-bold">Header</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {}
})
export default class Header extends Vue {
  msg!: string
}
</script>
