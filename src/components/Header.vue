<script setup>
import { reactive } from 'vue'

const state = reactive({
  login: false
})
const toto = 'hello world'

const Fetchdata = async () => {
  const response = await fetch('')
    .then((res) => res.json())
    .then((err) => err.message)
  return response
}
</script>

<template>
  <div class="header--component">
    <a href="#">Home</a>
    <a href="#">Login</a>
    <a href="#">Favoris</a>
  </div>
</template>

<style></style>
