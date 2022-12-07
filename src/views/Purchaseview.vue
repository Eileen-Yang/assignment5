<script setup>
import { ref } from "vue";
import axios from "axios";

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
  response = (await axios.get(`https://api.themoviedb.org/3/trending/movie/day`, {
    params: {
      api_key: "289d7511f89338dfaa9d5bc06621094c",
    },
  })).data;
};
</script>

<template>
  <div class="purchase-container">
    <div v-if="getMovies()" v-for="item in response">
    </div>
  </div>
</template>

<style scoped>

</style>