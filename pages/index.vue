<template>
  <div>
    <div class="container">
      <NuxtLink to="/menu" class="back-button">Menu</NuxtLink>
      <NuxtLink to="/login" class="back-button">Login</NuxtLink>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Ice Cream Shop",
});
</script>

<style scoped>
.back-button {
  cursor: pointer;
  outline: 0;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  border: 1px solid transparent;
  padding: 23px 51px;
  font-size: 16px;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.back-button:hover {
  color: #fff;
  background-color: #0b5ed7;
  border-color: #0a58ca;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-image: url("@/assets/images/home-screen-pic.jpg");
  background-size: cover;
  height: 93vh;
  max-width: 100vw;
}

.nav {
  position: absolute;
  top: 0;
  width: 100vw;
}
</style>
