<script setup>
const props = defineProps({
  beerDetails: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card">
    <img :src="beerDetails.image_url" alt="illustration" />
    <div class="card--infos">
      <div class="card--title">
        <h1>
          <router-link :to="{ name: 'beerDetails', params: { id: beerDetails.id } }"
            >{{ beerDetails.name.toUpperCase() }}
          </router-link>
        </h1>
      </div>
      <div class="card--details">
        <p>Date : {{ beerDetails.first_brewed }}</p>
        <br />
        <p>
          Tips :
          {{ beerDetails.brewers_tips }}
        </p>
        <br />
        <p>Taste</p>
        <br />
        <p v-for="(item, index) in beerDetails.food_pairing" :key="index">
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  min-width: 500px;
  height: 350px;
  width: 60%;
  background: whitesmoke;
  margin: 30px;
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
img {
  height: inherit;
  width: 30%;
  object-fit: contain;
}
.card--infos {
  width: 70%;
  height: 100%;
  box-sizing: border-box;
  background: #e1e4e8;
  border-radius: 15px;
}

.card--title {
  height: 20%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
}

.card--title h1 {
  font-size: 20px;
  font-weight: 600;
}

.card--details {
  width: 100%;
  height: 80%;
  box-sizing: border-box;
  padding: 10px;
}

.card--details p {
  text-align: justify;
  font-size: 20px;
}
</style>
