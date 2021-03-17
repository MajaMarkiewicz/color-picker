<template>
  <color-picker></color-picker>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ColorPicker from '@/components/Color-picker.vue'

@Options({
  components: {
    ColorPicker
  }
})
export default class Home extends Vue {}
</script>
