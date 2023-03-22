<script setup>
import GetData from '../components/GetData.vue'
</script>

<template>
  <div class="home-component">
    <div class="component-title-home">
      <span>Beers Lovers</span>
    </div>
    <Suspense>
      <GetData />
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
