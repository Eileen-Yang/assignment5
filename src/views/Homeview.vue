<script setup>
import { useRouter } from "vue-router";
import Siteheader from '../components/Siteheader.vue'
import Sitehero from '../components/Sitehero.vue'

const router = useRouter();

</script>

<template>
  <div class="home-container">
    <Siteheader />
    <Sitehero />
  </div>
</template>

<style scoped>
  * {
    margin-top: 2%;
  }
</style>