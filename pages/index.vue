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
  /* padding: 6px 12px; */
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
  /* margin: 0; */
  /* position: absolute; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  /* background-image: url("@/assets/images/home-screen-pic.jpg"); */
  background-image: url("@/assets/images/home-screen-pic.jpg");
  /* opacity: 0.5; */
  background-size: cover;
  /* height: 100vh; */
  height: 93vh;
  max-width: 100vw;
}

.nav {
  position: absolute;
  top: 0;
  width: 100vw;
}

/* .nuxt-link {
  background-color: green;
  padding: 5rem 10rem;
  border-radius: 10%;
  font-size: 5rem;
} */
/*
.login {
  background-color: rgb(0, 162, 255);
} */
</style>
