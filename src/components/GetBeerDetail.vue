<script setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.params.id)

const state = reactive({
  beerdetails: []
})

async function fetchBeerdetail() {
  const response = await fetch(`https://api.punkapi.com/v2/beers/${route.params.id}`).then(
    (response) => response.json()
  )
  return response
}
state.beerdetails = await fetchBeerdetail()
console.log(state.beerdetails)
</script>

<template>
  <h1>{{ state.beerdetails.name }}</h1>
</template>

<style></style>
