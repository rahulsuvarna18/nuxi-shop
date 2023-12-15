<template>
  <div>
    <div class="rounded overflow-hidden flex justify-center items-center mb-4">
      <NuxtLink to="/profile/listings/create" class="back-button"
        >Create a listing</NuxtLink
      >
    </div>

    <div>
      <div v-for="listing in listings">
        <div class="list-container shadow">
          <h1 class="text-2xl">{{ listing.name }}</h1>
          <p class="text-blue-400">Price: ${{ listing.price }}</p>
          <button @click="handleDelete(listing.id)">Delete</button>
          <LoadingSpinner v-if="isLoading" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});

const user = useSupabaseUser();
const isLoading = ref(false);

const { data: listings, refresh } = await useFetch(
  `/api/iceCream/user/${user.value.id}`
);

const handleDelete = async (id) => {
  isLoading.value = true;
  await $fetch(`/api/iceCream/${id}`, {
    method: "delete",
  });
  refresh();
  isLoading.value = false;
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

.list-container {
  display: grid;
  grid-template-columns: 20rem 12rem 2rem;
  justify-content: center;
  align-items: center;
  padding: 1.2rem;
  grid-column-gap: 20rem;
}
</style>
