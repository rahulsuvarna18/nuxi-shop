<template>
  <div v-for="iceCream in iceCreams" :key="iceCream.id" class="container">
    <h1>{{ iceCream.name }}</h1>
    <p>{{ iceCream.description }}</p>
    <p>Price: ${{ iceCream.price }}</p>

    <button class="back-button" @click="cartStore.add(iceCream.id)">
      Add to cart
    </button>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cart.js";

const cartStore = useCartStore();

const props = defineProps({
  iceCreams: Array,
});
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 2rem;
  overflow: hidden;
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
