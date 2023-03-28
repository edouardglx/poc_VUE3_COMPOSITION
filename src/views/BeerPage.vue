<script setup>
import GetAllBeers from '../components/GetAllBeers.vue'
import SearchBarVue from '../components/SearchBeers.vue'
import { ref } from 'vue'
const title = ref('Beers List')
const findaSpecificBeer = ref('')
console.log(findaSpecificBeer.value)
const findBeer = (value) => {
  findaSpecificBeer.value = value
}
</script>

<template>
  <div class="home-component">
    <SearchBarVue @find_beer="findBeer($event)" />
    <div class="component-title-home">
      <span>{{ title }}</span>
    </div>
    <Suspense>
      <GetAllBeers />
      <template v-slot:fallback>Data is Loading...</template>
    </Suspense>
  </div>
</template>

<style>
.home-component {
  width: 100vw;
  height: auto;
  box-sizing: border-box;
  min-height: 100vh;
  background: rgb(63, 94, 251);
  background: radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%);
}

.component-title-home {
  height: 80px;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  font-size: 40px;
}

.component-title-home span {
  margin: 20px;
}
</style>
