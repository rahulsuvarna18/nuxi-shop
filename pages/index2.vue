<template>
  <!-- <div class="container"> -->
  <!-- <div>
        <NuxtLink to="/menu" class="nuxt-link">Menu</NuxtLink>
      </div>
      <div>
        <NuxtLink to="/menu" class="nuxt-link login">Login</NuxtLink>
      </div> -->

  <div>
    <!-- <div class="h-screen w-100 bg-no-repeat bg-cover bg-bottom ]"> -->
    <!-- <div
    class="relative h-screen w-100 bg-no-repeat bg-cover bg-bottom bg-[url('../../assets/images/home-screen-pic.jpg')]"
  > -->
    <!-- <div class="bg-[url('../../assets/images/home-screen-pic.jpg')]"> -->
    <!-- <div class="main-page-box"> -->
    <!-- <div class=""> -->
    <div
      class="z-10 absolute w-full h-full flex justify-center items-center real-container"
    >
      <!-- <div class="z-10 absolute w-full h-full flex justify-center items-center"> -->
      <div class="text-center w-1/2">
        <h1 class="text-8xl font-serif mb-10 text-white">Rahuls Ice Shop</h1>
        <button class="back-button">
          <NuxtLink to="/menu">Menu</NuxtLink>
        </button>
      </div>
    </div>

    <!-- <div class="z-1 absolute w-full h-full bg-black opacity-50"></div> -->
  </div>
  <!-- </div> -->
</template>

<script setup></script>

<style scoped>
/* .main-page-box {
    background-image: url("../../assets/images/home-screen-pic.jpg");
    background-size: cover;
  } */

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

.real-container {
  background-color: black;
}
/* .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  
    height: 70vh;
  } */

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
