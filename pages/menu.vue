<template>
  <div class="container">
    <Menu :iceCreams="iceCreams" />
  </div>
</template>

<script setup>
useHead({
  title: "Ice Cream Menu",
});

const route = useRoute();
const iceCreams = await useFetchIceCreams({
  minPrice: route.query.minPrice,
  maxPrice: route.query.maxPrice,
});
</script>

<style scoped>
.container {
  /* background-color: red; */

  /* position: absolute; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
}
</style>
