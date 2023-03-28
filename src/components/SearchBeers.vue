<script setup>
import { ref } from 'vue'

const emit = defineEmits(['find_beer'])
const searchBeer = ref('')
const HandleSearch = (value) => {
  emit('find_beer', value)
}
</script>

<template>
  <div class="container--input">
    <input type="text" name="" id="" placeholder="Find a beer..." v-model="searchBeer" />
    <button @click="HandleSearch(searchBeer)">Search</button>
    <button>Clear</button>
  </div>
</template>

<style>
.container--input {
  width: 100%;
  height: 80px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container--input input {
  height: 40px;
  width: 300px;
  border: none;
  border-radius: 5px;
  padding-left: 10px;
}
.container--input button {
  height: 40px;
  width: 90px;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
}
</style>
