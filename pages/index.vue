<template>
  <v-layout>
    <v-container
      class="container d-flex justify-center align-center ga-4 h-screen"
    >
      <v-btn to="/menu" color="#0d6efd" height="4rem" width="9rem">Menu</v-btn>
      <v-btn
        to="/login"
        color="#0d6efd"
        height="4rem"
        width="9rem"
        text="Login"
      ></v-btn>
    </v-container>
  </v-layout>
</template>

<script setup lang="ts">
useHead({
  title: "Ice Cream Shop",
});
</script>

<style scoped>
.container {
  background-image: url("@/assets/images/home-screen-pic.jpg");
  background-size: cover;
  max-width: 100vw;
}
</style>
