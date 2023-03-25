<script setup>
import axios from 'axios'
import { onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import Card from './Card.vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
const state = reactive({
  beersList: []
})

const FetchBeerDetail = async () => {
  try {
    const response = await axios.get(`https://api.punkapi.com/v2/beers/${props.id}`)
    state.beersList = response.data
    console.log(state.beersList[0])
  } catch (error) {
    console.log(error.message)
  }
}
FetchBeerDetail()
</script>

<template>
  <div class="component-data" v-if="state.beersList[0]">
    <Card :beerDetails="state.beersList[0]" />
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
