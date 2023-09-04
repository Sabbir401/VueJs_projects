<script setup>
  import {ref} from "vue"
  import {RouterView} from "vue-router"
  import Nav from "./components/nav.vue"

  const randomState = ref("")
</script>

<template>
  <div>
    {{ randomState }}
    <!-- <button @click="randomState = 'Hello There'">Click</button> -->
    <Nav />
    <RouterView/>
  </div>
</template>

<style scoped>

</style>
