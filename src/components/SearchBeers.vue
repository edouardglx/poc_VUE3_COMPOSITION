<script setup>
import { ref } from 'vue'
const emit = defineEmits(['send_research', 'clear_research'])
const searchBeer = ref('')
</script>

<template>
  <section class="section--search">
    <input type="text" name="" id="" placeholder="Find a beer..." v-model="searchBeer" />
    <button @click="$emit('send_research', searchBeer)">Search</button>
    <button v-if="searchBeer.length > 0" @click="$emit('clear_research', (searchBeer = ''))">
      Clear
    </button>
  </section>
</template>

<style>
.section--search {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
input {
  height: 40px;
  width: 300px;
  border: none;
  border-radius: 5px;
  padding-left: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
button {
  height: 40px;
  width: 90px;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  cursor: pointer;
}
</style>
