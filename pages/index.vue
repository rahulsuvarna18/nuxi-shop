<template>
  <v-layout>
    <div class="container">
      <v-btn to="/menu" color="#0d6efd" height="4rem" width="9rem">Menu</v-btn>
      <v-btn to="/login" color="#0d6efd" height="4rem" width="9rem"
        >Login</v-btn
      >
    </div>
  </v-layout>
</template>

<script setup>
useHead({
  title: "Ice Cream Shop",
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-image: url("@/assets/images/home-screen-pic.jpg");
  background-size: cover;
  height: 95vh;
  max-width: 100vw;
}
</style>
