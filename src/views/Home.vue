<!-- src/views/Home.vue -->
<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
})
</script>

<style scoped>
</style>
