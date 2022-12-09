<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

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
    <h1>Company Name</h1>
    <form @submit.prevent="login()">
    <label>LOGIN</label>
    <br />
      <input type="text" v-model="username" placeholder="Username" />
      <br />
      <input type="password" v-model="password" placeholder="Password" />
      <br />
      <button id="login">LOGIN</button>
    </form>
    <div v-if="error" class="error">
      <p>Incorrect username or password. Type the correct username and password, and try again.</p>
    </div>
  </div>
</template>

<style scoped>
* {
  text-align: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

h1 {
  text-align: left;
}

label {
  font-size: 400%;
  font-weight: bold;
}

form {
  width: 100%
}

input {
  color: white;
  font-size: 200%;
  background-color: #c5c6c7;
  padding:1%;
  border-color: white;
}

button {
  font-size: 200%;
}

p {
  background-color: rgba(255, 5, 5, 0.247);
}
</style>