<script setup>
import GetAllBeers from '../components/GetAllBeers.vue'
</script>

<template>
  <section class="home-component">
    <Suspense>
      <GetAllBeers />
      <template v-slot:fallback>Data is Loading...</template>
    </Suspense>
  </section>
</template>

<style>
.home-component {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px;
}
</style>
