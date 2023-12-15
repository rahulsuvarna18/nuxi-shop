<template>
  <div class="main-container">
    <div v-if="cartStore.cartInfo.length">
      <CartItems />
      <CartTotal />
    </div>
    <div v-else>
      <CartEmpty />
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "../../stores/cart";

useHead({
  title: "Ice Cream Cart",
});

const cartStore = useCartStore();
</script>

<style scoped>
.main-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
