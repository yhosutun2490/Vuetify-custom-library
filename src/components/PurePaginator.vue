<template>
  <div v-if="true">
    <v-pagination :length="5" ref="paginationRef"></v-pagination>
  </div>

</template>
<script setup>
import {ref} from 'vue'
const paginationRef = ref(null)
</script>