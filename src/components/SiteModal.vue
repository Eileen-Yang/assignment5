<script setup>
import axios from "axios";

const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);

let data = (await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
  params: {
    api_key: '289d7511f89338dfaa9d5bc06621094c',
    append_to_response: "videos",
  }
})).data;
console.log(data);

</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <div class="movie-information">
          <h1>{{ data.title }}</h1>
          <h1>Release Date: {{data.release_date}}</h1>
          <img :src="`https://image.tmdb.org/t/p/w500/${data.poster_path}`" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
* {
  background-color: #1F2123;
}

.modal-outer-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000099;
  z-index: 3;
}

.modal-outer-container .modal-inner-container {
  color: white;
  width: clamp(280px, 100%, 800px);
  height: 400px;
  position: relative;
}

.modal-outer-container .modal-inner-container .close-button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  background: #1F2123;
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
}

</style>
