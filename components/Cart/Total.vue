<template>
  <p>Total: {{ cartStore.total }}€</p>
  <button class="back-button" @click="navigateTo('/menu')">
    Add more from the menu
  </button>
</template>

<script setup>
import { useCartStore } from "../../stores/cart";

const cartStore = useCartStore();
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
