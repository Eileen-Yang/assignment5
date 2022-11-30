<script setup>
import { ref } from 'vue'
import Login from './components/Login.vue'
</script>

<template>
    <h1>Company Name</h1>
    <Suspense>
        <Login/>
    </Suspense>
</template>

<style scoped>

</style>
