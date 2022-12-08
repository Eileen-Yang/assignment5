<script setup>
import { ref } from "vue";
import axios from "axios";
import SiteModal from '../components/SiteModal.vue'

const movies = ref("");
const response = ref(null);

const getData = async (url, params) => {
  try {
    return await axios.get(url, params);
  } catch (error) {
    console.log(error);
  }
};

const getMovies = async () => {
  response.value = (await axios.get(`https://api.themoviedb.org/3/trending/movie/day`, {
    params: {
      api_key: "289d7511f89338dfaa9d5bc06621094c",
    },
  })).data['result'];
};

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
  <h1>Trending Movies</h1>
  <div v-if="getMovies()" v-for="result in response" class="movies-container">
    <img v-bind:src="(`https://image.tmdb.org/t/p/w500/` + result.poster_path)" />
    <div>
    </div>
    <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  </div>
</template>

<style scoped>

</style>