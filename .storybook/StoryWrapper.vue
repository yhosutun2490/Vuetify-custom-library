<template>
  <v-app>
    <v-main :theme="themeName">
      <slot name="story"></slot>
    </v-main>
  </v-app>
</template>
 
<script setup>
import {defineProps} from 'vue'
const props = defineProps({
  themeName: {
    type: String,
    default: 'light'
  }
})

</script>
<style scoped>

</style>