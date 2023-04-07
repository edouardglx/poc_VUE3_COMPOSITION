<script setup>
const props = defineProps({
  beerDetails: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="article">
    <div class="card--image">
      <img :src="beerDetails.image_url" :alt="beerDetails.name" />
    </div>
    <section class="card--details">
      <h1>
        <router-link :to="{ name: 'beerDetails', params: { id: beerDetails.id } }"
          >{{ beerDetails.name.toUpperCase() }}
        </router-link>
      </h1>
      <p>Date : {{ beerDetails.first_brewed }}</p>
      <p>Tips : {{ beerDetails.brewers_tips }}</p>
      <p>Taste :</p>
      <p v-for="(item, index) in beerDetails.food_pairing" :key="index">
        {{ item }}
      </p>
    </section>
  </article>
</template>

<style>
.article {
  border-radius: 15px;
  background: whitesmoke;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 300px;
  margin: 15px auto;
  width: 500px;
  max-width: 500px;
}

.card--image {
  min-width: 150px;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
}
.card--image img {
  width: 130px;
  height: inherit;
  object-fit: contain;
}

.card--details {
  background: #e1e4e8;
  border-radius: 5px;
  padding: 10px;
  margin: 0 10px 0 0;
  height: 80%;
}
.card--details h1 {
  margin: 0 0 20px;
}

.card--details p {
  margin: 5px 0;
  text-align: justify;
}
</style>
