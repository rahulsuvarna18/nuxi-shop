<template>
  <div class="main-container">
    <div v-if="cartStore.cartInfo.length">
      <div v-for="item in cartStore.cartInfo" :key="item.id" class="container">
        <h1>Name: {{ item.name }}</h1>

        <p>Quantity: {{ item.quantity }} x {{ item.price }}€</p>
        <p>Total: {{ item.totalPrice }}€</p>
        <div>
          <button @click="cartStore.add(item.id)">+</button>
          <button @click="cartStore.remove(item.id)">-</button>
        </div>
        <button @click="cartStore.removeProduct(item.id)">
          Delete Product
        </button>
      </div>
      <p>Total: {{ cartStore.total }}€</p>
      <button class="back-button" @click="navigateTo('/menu')">
        Add more from the menu
      </button>
    </div>
    <div v-else>
      <p>No items in the cart</p>
      <button class="back-button">
        <NuxtLink to="/menu">Back To Menu</NuxtLink>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useCartStore } from "../../stores/cart";

import { useLocalStorage } from "@vueuse/core";

useHead({
  title: "Ice Cream Cart",
});

// const route = useRoute();

// const routeParams = route.params;

const cartStore = useCartStore();
</script>

<style scoped>
.main-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2rem;
}

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
  padding: 6px 12px;
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
</style>
