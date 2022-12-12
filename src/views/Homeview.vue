<script setup>
import { useRouter } from "vue-router";
import SiteHeader from '../components/SiteHeader.vue'
import SiteHero from '../components/SiteHero.vue'
import SiteFooter from '../components/SiteFooter.vue'

const router = useRouter();

</script>

<template>
  <div class="home-container">
    <Suspense>
      <SiteHeader />
    </Suspense>
    <Suspense>
      <SiteHero />
    </Suspense>
    <Suspense>
      <SiteFooter />
    </Suspense>
  </div>
</template>

<style scoped>

</style>