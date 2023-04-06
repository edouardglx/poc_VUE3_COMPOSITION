<script setup>
import { reactive, ref } from 'vue'
import Card from './Card.vue'
import axios from 'axios'
import SearchBar from '../components/SearchBeers.vue'

const state = reactive({
  beersList: []
})
</script>

<template>
  <div class="component-data">
    <SearchBar @send_research="findASpecificBeer" @clear_research="fetchBeer" />
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
