<template>
  <v-container
    v-if="cartStore.cartInfo.length"
    class="d-flex ga-3 flex-col align-start justify-center w-25"
  >
    <CartItems
      v-for="(cartItem, i) in cartStore.cartInfo"
      :key="i"
      :item="cartItem as CartItem"
    />
    <CartTotal :total="cartStore.total" />
  </v-container>
  <v-container class="d-flex flex-col align-center justify-center ga-2" v-else>
    <CartEmpty />
  </v-container>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cart";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
};

useHead({
  title: "Ice Cream Cart",
});

const cartStore = useCartStore();
</script>
