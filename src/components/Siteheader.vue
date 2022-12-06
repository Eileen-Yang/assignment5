<script setup>
</script>

<template>
  <div class="header-container">
    <h1>Company Name</h1>
    <RouterLink to="/login" custom v-slot="{ navigate }">
      <button @click="navigate" role="link">Login</button>
    </RouterLink>
  </div>
</template>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  padding-top: 0.5%;
}

.header-container {
  display: flex;
}

h1 {
  padding-left: 1%;
  padding-right: 75%;
}
</style>