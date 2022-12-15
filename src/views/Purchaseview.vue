<script setup>
import axios from "axios";

let data = (await axios.get(`https://api.themoviedb.org/3/trending/movie/day`, {
    params: {
        api_key: '289d7511f89338dfaa9d5bc06621094c',
    }
})).data.results;
console.log(data);
</script>

<template>
  <div>
  <img v-for="movie in data" class="poster" :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"/>
  </div>
</template>

<style scoped>

</style>