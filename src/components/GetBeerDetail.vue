<script setup>
import { reactive } from 'vue'
import Card from './Card.vue'
import { fetchBeerDetail } from '../service/api'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
const state = reactive({
  beersList: []
})

const fetchdetail = async () => {
  try {
    const response = await fetchBeerDetail(props.id)
    state.beersList = response
  } catch (error) {
    console.log(error.message)
  }
}
fetchdetail()
</script>

<template>
  <section v-if="state.beersList[0]">
    <Card :beerDetails="state.beersList[0]" />
  </section>
</template>

<style>
.section {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
</style>
