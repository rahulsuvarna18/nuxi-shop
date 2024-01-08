<template>
  <div class="container">
    <h1>{{ iceCream.name }}</h1>
    <p>{{ iceCream.description }}</p>
    <p>Price: ${{ iceCream.price }}</p>

    <v-btn
      to="/menu"
      color="#0d6efd"
      height="3rem"
      width="8rem"
      @click="cartStore.add(iceCream.id)"
      >Add To Cart</v-btn
    >
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cart.js";

const cartStore = useCartStore();

interface MenuItem {
  iceCream: {
    id: number;
    name: string;
    description: string;
    price: number;
    listerId: string;
  };
}

const props = defineProps<MenuItem>();
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
</style>
