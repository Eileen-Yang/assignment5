<script setup>
import axios from "axios";
import { ref } from 'vue';
import SiteModal from '../components/SiteModal.vue';
import SiteFooter from '../components/SiteFooter.vue'

let data = (await axios.get(`https://api.themoviedb.org/3/trending/movie/day`, {
  params: {
    api_key: '289d7511f89338dfaa9d5bc06621094c',
  }
})).data.results;
console.log(data);

const showModal = ref(false);
const selectedId = ref(0);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <h1>TRENDING MOVIES</h1>
  <div class="purchase-container">
    <img v-for="movie in data" @click="openModal(movie.id)" class="poster"
      :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" />
  </div>
  <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  <Suspense>
    <SiteFooter />
  </Suspense>
</template>

<style scoped>
h1 {
  padding-left: 1.5%;
  padding-right: 64%;
  font-size: 300%;
}

.poster {
  width: 24%;
  aspect-ratio: 2/3;
  padding: 0.5%;
}

img:hover {
  cursor: pointer;
}

.SiteFooter {
  font-size: 100%;
}
</style>