<script setup>
import axios from 'axios'
import { ref } from 'vue'

//   if (searchBeer) {
//     try {
//       const response = await axios.get(
//         `https://api.punkapi.com/v2/beers/?beer_name=` + `${searchBeer}`
//       )
//       data.value = response.data
//       console.log(data.value)
//       emit('find_beer', data.value)
// const data = ref([])
//     } catch (error) {
//       console.log(error.message)
//     }
//   }

const emit = defineEmits(['send_research'])
const searchBeer = ref('')
console.log(searchBeer.value)
</script>

<template>
  <div class="container--input">
    <input type="text" name="" id="" placeholder="Find a beer..." v-model="searchBeer" />
    <button @click="$emit('send_research', searchBeer)">Search</button>
    <p>{{ searchBeer }}</p>
    <button>Clear</button>
  </div>
</template>

<style>
.container--input {
  width: 100%;
  height: 80px;
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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.container--input button {
  height: 40px;
  width: 90px;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  cursor: pointer;
}
</style>
