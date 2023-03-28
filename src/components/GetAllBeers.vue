s
<script setup>
import { reactive, ref, onMounted } from 'vue'
import Card from './Card.vue'
import axios from 'axios'

const state = reactive({
  beersList: []
})

const fetchBeer = async () => {
  try {
    const response = await axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=50')
    state.beersList = response.data
  } catch (error) {
    console.log(error.message)
  }
}

fetchBeer()
</script>

<template>
  <div class="component-data">
    <template v-for="(beer, index) in state.beersList" :key="index">
      <Card :beerDetails="beer" />
    </template>
  </div>
</template>

<style>
.component-data {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
</style>
