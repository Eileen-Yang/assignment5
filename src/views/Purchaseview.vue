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
  console.log(movies.value)
  response.value = (await axios.get(`https://api.themoviedb.org/3/trending/movie/week`, {
    params: {
      api_key: "289d7511f89338dfaa9d5bc06621094c",
    },
  })).data['movies'];
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
  <div>
    <h1>TRENDING MOVIES</h1>
    <div v-if="getMovies()">
      <img v-for="movies in response" :src="(`https://image.tmdb.org/t/p/w500/` + movies.poster_path)"
        @click="openModal(id)" />
    </div>
  </div>
    <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />

</template>

<style scoped>
h1 {
  text-align: left;
  font-size: 300%;
  padding-left: 2%;
}
</style>