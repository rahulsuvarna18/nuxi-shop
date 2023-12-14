<template>
  <div class="flex flex-col justify-center items-center">
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
