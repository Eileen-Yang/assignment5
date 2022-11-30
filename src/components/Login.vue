<script setup>
import { ref } from 'vue'

const name = ref("");
const email = ref("");
const showData = ref(false);
const submitEvent = () => {
  showData.value = true;
};
</script>

<template>
<div class="login-container">
    <form @submit.prevent="submitEvent()">
      <input type="text" placeholder="Name" v-model="name" required />
      <br />
      <input type="email" placeholder="Email" v-model="email" required />
      <br />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<style scoped>

</style>
