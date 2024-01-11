<template>
  <v-container class="d-flex ga-3 align-center justify-center">
    <h1>Name: {{ item.name }}</h1>
    <v-divider vertical></v-divider>

    <p>Quantity: {{ item.quantity }} x {{ item.price }}€</p>
    <v-divider vertical></v-divider>
    <p>Total: {{ item.totalPrice }}€</p>
    <v-divider vertical></v-divider>
    <v-btn color="#FAFAFA" @click="cartStore.add(item.id)" text="+"></v-btn>
    <v-btn color="#FAFAFA" @click="cartStore.remove(item.id)" text="-"></v-btn>
    <v-divider vertical></v-divider>
    <v-btn
      color="#fd0d71"
      @click="cartStore.removeProduct(item.id)"
      text=" Delete Product"
    ></v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { useCartStore } from "../../stores/cart";

const cartStore = useCartStore();

interface CartItem {
  item: {
    id: number;
    name: string;
    price: Number;
    quantity: number;
    totalPrice: Number;
  };
}

const props = defineProps<CartItem>();
</script>
