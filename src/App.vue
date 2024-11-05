<template>
  <v-app>
    <v-main class="main">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import Paginator from "./components/Paginator" 
</script>
<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(109, 108, 108);
}
</style>