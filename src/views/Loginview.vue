<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Header from '../components/Header.vue'

const router = useRouter();
const username = ref("");
const password = ref("");
const error = ref(false);

const login = () => {
  if (username.value === "tmdb" && password.value === "movies") {
    router.push("/purchase");
  } else {
    error.value = true;
  }
};

</script>

<template>
  <div class="login-container">
    <Header/>
    <form @submit.prevent="login()">
      <input type="text" v-model="username" placeholder="Username" />
      <br/>
      <input type="password" v-model="password" placeholder="Password" />
      <br/>
      <button id="login">Login</button>
    </form>
    <div v-if="error" class="error">
      <p>Incorrect username or password. Type the correct username and password, and try again.</p>
    </div>
  </div>
</template>

<style scoped>

</style>