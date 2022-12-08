<script setup>
import { useRouter } from "vue-router";
import SiteHeader from '../components/SiteHeader.vue'
import SiteHero from '../components/SiteHero.vue'

const router = useRouter();

</script>

<template>
  <div class="home-container">
    <SiteHeader />
    <SiteHero />
  </div>
</template>

<style scoped>
  * {
    margin-top: 2%;
  }
</style>