<script setup>
import { ref } from "vue";
const name = ref("");
const email = ref("");
const showData = ref(false);
const submitEvent = () => {
  showData.value = true;
};
</script>

<template>
  <div class="login-container">
    <h1>Company Name</h1>
    <form @submit.prevent="submitEvent()">
      <input type="text" placeholder="Name" v-model="name" required />
      <br />
      <input type="email" placeholder="Email" v-model="email" required />
      <br />
      <button @click="">Login</button>
    </form>
    <div v-if="showData">
      <p>You submitted:</p>
      <p>{{ name }}</p>
      <p>{{ email }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
