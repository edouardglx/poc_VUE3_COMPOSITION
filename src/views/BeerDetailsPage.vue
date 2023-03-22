<script setup>
import GetBeerDetail from '../components/GetBeerDetail.vue'
</script>

<template>
  <Suspense>
    <GetBeerDetail />
    <template v-slot:fallback>Beer Data is Loading...</template>
  </Suspense>
  <RouterView />
</template>

<style></style>
