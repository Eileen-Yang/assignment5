<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import Sitefooter from '../components/Sitefooter.vue'

const router = useRouter();

const response = ref(null);
const getData = async (url, params) => {
  try {
    return await axios.get(url, params);
  } catch (error) {
    console.log(error);
  }
};
const getMovies = async () => {
  response.value = (await axios.get(`https://api.themoviedb.org/3/trending/${media_type}/${time_window}`, {
    params: {
      api_key: "289d7511f89338dfaa9d5bc06621094c",
    },
  })).data;
};
</script>

<template>
  <div class="purchase-container">
  <h1>Company Name</h1>
  <Sitefooter/>
  <div v-if="response" class="movies-container">
    <p> {{ response.title }}</p>
    <p>Release Date: {{ response.release_date }}</p>
    <img :src="`https://image.tmdb.org/t/p/w500/${response.poster_path}`" />
  </div>
  </div>
</template>

<style scoped>
</style>