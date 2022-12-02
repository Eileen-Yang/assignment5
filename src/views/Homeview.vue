<script setup>
import { useRouter } from "vue-router";
import Header from '../components/Header.vue'

const router = useRouter();

const login = () => {
  router.push("/login")
}
</script>

<template>
  <div class="home-container">
    <Header/>
    <button @click="login">Login</button>
  </div>
</template>

<style scoped>

</style>