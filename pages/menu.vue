<template>
  <v-container class="flex flex-col justify-center items-center">
    <Menu
      v-for="iceCream in iceCreams"
      :key="iceCream.id"
      :iceCream="iceCream"
    />
  </v-container>
</template>

<script setup>
useHead({
  title: "Ice Cream Menu",
});

const iceCreams = await useFetchIceCreams({});
</script>
