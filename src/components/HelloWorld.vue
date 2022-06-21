<script setup lang="ts">
import { ref } from 'vue'
import { message } from 'ant-design-vue'

defineProps<{ msg: string }>()

const count = ref(0)

const sayHello = () => {
  message.success('Hello, Ant-design!')
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <a-button type="primary">Primary Button{{ count }}</a-button>
  <a-button @click="sayHello">Default Button</a-button>
  <a-button type="dashed">Dashed Button</a-button>
  <a-button type="text">Text Button</a-button>
  <a-button type="link">Link Button</a-button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
