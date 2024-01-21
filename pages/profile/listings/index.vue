<template>
  <v-container>
    <v-row class="mb-4">
      <v-col class="text-center">
        <v-btn
          to="/profile/listings/create"
          text="Create a listing"
          color="#0d6efd"
        >
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="listing in listings" :key="listing.id">
        <v-card>
          <v-card-title class="text-2xl">{{ listing.name }}</v-card-title>
          <v-card-subtitle class="text-blue-400"
            >Price: ${{ listing.price }}</v-card-subtitle
          >
          <v-btn
            @click="handleDelete(listing.id)"
            color="#C62828"
            text="Delete"
          >
          </v-btn>
          <LoadingSpinner v-if="isLoading" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
useHead({
  title: "Dashboard",
});
definePageMeta({
  middleware: ["auth"],
});

const user = useSupabaseUser();
const isLoading = ref<boolean>(false);

const { data: listings, refresh } = await useFetch(
  `/api/iceCream/user/${user.value ? user.value.id : ""}`
);

const handleDelete = async (id: number) => {
  isLoading.value = true;
  await $fetch(`/api/iceCream/${id}`, {
    method: "delete",
  });
  refresh();
  isLoading.value = false;
};
</script>

<style scoped>
.list-container {
  display: grid;
  grid-template-columns: 20rem 12rem 2rem;
  justify-content: center;
  align-items: center;
  padding: 1.2rem;
  grid-column-gap: 20rem;
}
</style>
