<script setup>
import GetBeerDetail from '../components/GetBeerDetail.vue'
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
</script>

<template>
  <section class="home-component">
    <Suspense>
      <GetBeerDetail :id="id" />
      <template v-slot:fallback>Beer Data is Loading...</template>
    </Suspense>
  </section>
</template>

<style>
.home-component {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}
</style>
