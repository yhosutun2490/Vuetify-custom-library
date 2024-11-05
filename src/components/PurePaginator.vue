<template>
  <div v-if="true">
    <v-pagination :length="length" ref="paginationRef"></v-pagination>
  </div>

</template>
<script setup>
import {ref, defineProps} from 'vue'
const paginationRef = ref(null)
const props  = defineProps({
  length: {
    type: Number,
    default: 5
  }
})
</script>