<template>
  <div class="shadow rounded overflow-hidden flex justify-between mb-4">
    <NuxtLink to="/profile/listings/create" class="back-button"
      >Create a listing</NuxtLink
    >
    <div class="flex">
      <div class="p-3" v-for="listing in listings">
        <h1 class="text-2xl">{{ listing.name }}</h1>
        <p class="text-blue-400">${{ listing.price }}</p>
        <button @click="handleDelete(listing.id)">Delete</button>
      </div>
    </div>
    <div class="p-3 flex">
      >
      <!-- <p
        class="text-red-400 cursor-pointer"
        @click="emits('deleteClick', listing.id)"
      >
        Delete
      </p> -->
    </div>
  </div>
</template>

<script setup>
const user = useSupabaseUser();

const { data: listings, refresh } = await useFetch(
  `/api/iceCream/user/${user.value.id}`
);

const handleDelete = async (id) => {
  await $fetch(`/api/iceCream/${id}`, {
    method: "delete",
  });
  refresh();
};
</script>

<style scoped>
.back-button {
  cursor: pointer;
  outline: 0;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
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
.back-button:hover {
  color: #fff;
  background-color: #0b5ed7;
  border-color: #0a58ca;
}
</style>
