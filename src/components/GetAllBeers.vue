<script setup>
import { reactive } from 'vue'
import Card from './Card.vue'
import axios from 'axios'
import SearchBar from '../components/SearchBeers.vue'

const state = reactive({
  beersList: []
})

//LIST_OF_ALL_BEERS
const listOfAllBeer = async () => {
  try {
    const response = await axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=50')
    state.beersList = response.data
  } catch (error) {
    console.log(error.message)
  }
}
listOfAllBeer()
</script>

<template>
  <section class="component-data">
    <SearchBar @send_research="findASpecificBeer" @clear_research="fetchBeer" />
    <ul>
      <li v-for="(beer, index) in state.beersList" :key="index"><Card :beerDetails="beer" /></li>
    </ul>
  </section>
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
.component-data ul {
  margin: 0 auto;
  flex-direction: column;
  height: auto;
}
</style>
