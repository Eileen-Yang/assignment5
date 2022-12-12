<script setup>
</script>

<template>
  <div class="header-container">
    <h1>Company Name</h1>
    <RouterLink to="/login" custom v-slot="{ navigate }">
      <button @click="navigate" role="link">LOGIN</button>
    </RouterLink>
  </div>
</template>

<style scoped>
* {
  margin: 0px;
  padding: 1%;
}

.header-container {
  display: flex;
}

h1 {
  padding-left: 1%;
  padding-right: 64%;
  font-size: 300%;
}

button {
  background-color: #c5c6c7;
  color: white;
  border-radius: 12px;
  font-size: 150%;
}
</style>