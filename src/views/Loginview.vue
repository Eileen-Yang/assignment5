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
    <label>Login</label>
    <br />
      <input type="text" v-model="username" placeholder="Username" />
      <br />
      <input type="password" v-model="password" placeholder="Password" />
      <br />
      <button id="login">Login</button>
    </form>
    <div v-if="error" class="error">
      <p>Incorrect username or password. Type the correct username and password, and try again.</p>
    </div>
  </div>
</template>

<style scoped>
* {
  text-align: center;
}

h1 {
  text-align: left;
}

label {
  font-size: xx-large;
  font-weight: bold;
}

form {
  width: 100%
}

p {
  background-color: rgba(255, 5, 5, 0.247);
}
</style>