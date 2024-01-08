<template>
  <p>Total: {{ total }}€</p>
  <v-btn color="#0d6efd" to="menu"> Add more from the menu </v-btn>
</template>

<script setup lang="ts">
interface CartTotal {
  total: number;
}

const props = defineProps<CartTotal>();
</script>
