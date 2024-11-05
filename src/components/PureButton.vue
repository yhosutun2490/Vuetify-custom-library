<template>
  <button class="button">{{ text }}</button>
</template>
<script setup>
import {ref} from 'vue'
const text = ref('五號按鈕')
</script>
<style scoped>
.button {
  border: 2px solid grey;
  padding: 5px 10px;
  border-radius: 8px;
  background: orangered;
}
</style>