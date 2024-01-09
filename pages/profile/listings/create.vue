<template>
  <v-container class="w-50">
    <v-row class="d-flex flex-col mt-2">
      <v-label text="Name"></v-label>
      <v-text-field
        v-model="info.name"
        variant="outlined"
        rounded
      ></v-text-field>
    </v-row>

    <v-row class="d-flex flex-col mt-2">
      <v-label text="Price"></v-label>
      <v-text-field
        v-model="info.price"
        variant="outlined"
        rounded
      ></v-text-field>
    </v-row>

    <v-row class="d-flex flex-col mt-2 rounded-xl">
      <v-label text="Description"></v-label>
      <v-textarea v-model="info.description" variant="outlined"></v-textarea>
    </v-row>

    <v-btn
      @click="handleSubmit"
      :disabled="isButtonDisabled"
      color="#0d6efd"
      rounded
      text="Submit"
    >
    </v-btn>

    <p v-if="errorMessage">{{ errorMessage }}</p>
  </v-container>
</template>

<script setup>
import { computed } from "vue";

definePageMeta({
  middleware: ["auth"],
});

const user = useSupabaseUser();

const errorMessage = ref("");

const info = useState("adInfo", () => {
  return {
    name: "",
    description: "",
    price: "",
  };
});

const isButtonDisabled = computed(() => {
  for (let key in info.value) {
    if (!info.value[key]) return true;
  }
  return false;
});

const handleSubmit = async () => {
  const body = {
    ...info.value,
    price: parseInt(info.value.price),
    listerId: user.value.id,
  };

  try {
    const res = await $fetch(`/api/iceCream`, {
      method: "post",
      body,
    });
    navigateTo("/profile/listings");
  } catch (err) {
    errorMessage.value = err.statusMessage;
  }

  info.value.name = "";
  info.value.price = "";
  info.value.description = "";
};
</script>
