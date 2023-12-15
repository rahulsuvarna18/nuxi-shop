<template>
  <div v-for="item in cartStore.cartInfo" :key="item.id" class="container">
    <h1>Name: {{ item.name }}</h1>

    <p>Quantity: {{ item.quantity }} x {{ item.price }}€</p>
    <p>Total: {{ item.totalPrice }}€</p>
    <div>
      <button @click="cartStore.add(item.id)">+</button>
      <button @click="cartStore.remove(item.id)">-</button>
    </div>
    <button class="delete-button" @click="cartStore.removeProduct(item.id)">
      Delete Product
    </button>
  </div>
</template>

<script setup>
import { useCartStore } from "../../stores/cart";

const cartStore = useCartStore();
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2rem;
}

.delete-button {
  cursor: pointer;
  outline: 0;
  color: #fff;
  background-color: #fd0d71;
  border-color: #fd0d71;
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

.delete-button:hover {
  color: #fff;
  background-color: #c10b57;
  border-color: #c10b57;
}
</style>
