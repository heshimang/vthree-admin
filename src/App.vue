<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

let name = ref('heshimang')

function changeName() {
  name.value = 'John'
}
</script>

<template>
  <a-config-provider>
    <HelloWorld :msg="name" />
    <button @click="changeName">change name</button>
    <router-view></router-view>
  </a-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
