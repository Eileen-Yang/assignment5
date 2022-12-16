<script setup>
import axios from "axios";
import { ref } from 'vue';
import SiteModal from '../components/SiteModal.vue';

let data = (await axios.get(`https://api.themoviedb.org/3/trending/movie/week`, {
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
  <div>
    <img v-for="movie in data" @click="openModal(id)" class="poster"
      :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" />
  </div>
    <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
</template>

<style scoped>
h1 {
  padding-left: 1.5%;
  padding-right: 64%;
  font-size: 300%;
}

.poster {
  display: grid
}

img:hover {
  cursor: pointer;
}
</style>