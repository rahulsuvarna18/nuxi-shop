<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useCartStore } from "../../stores/cart.ts";

const cartStore = useCartStore();

cartStore.getData();
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-leave-to,
.page-enter-from {
  opacity: 0;
  filter: blur(1rem);
}
</style>
