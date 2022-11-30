<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Header from '../components/Header.vue'

const router = useRouter ();
const username = ref("");
const password = ref("");
const error = ref(false);

const login = () => {
  if (username.value === "" && password.value === "") {
    router.push("/page2");
  }
};
</script>

<template>
    <div class="home-container">
        <h1>Home</h1>
    </div>
</template>

<style scoped>

</style>