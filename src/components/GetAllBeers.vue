<script setup>
import { computed, reactive } from 'vue'
import Card from './Card.vue'
import SearchBar from '../components/SearchBeers.vue'
import { listOfAllBeer, findASpecificBeer } from '../service/api'
const state = reactive({
  beersList: []
})

const getAllBeers = async () => {
  try {
    const response = await listOfAllBeer()
    state.beersList = response
  } catch (error) {
    console.log(error.message)
  }
}
getAllBeers()

const findBeers = computed(() => {
  const find = async (e) => {
    let beerResearch = e
    try {
      return (state.beersList = await findASpecificBeer(beerResearch))
    } catch (error) {
      console.log(error.message)
    }
  }
  return find
})
</script>

<template>
  <section class="component-data">
    <SearchBar @send_research="findBeers" @clear_research="fetchBeer" />
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
