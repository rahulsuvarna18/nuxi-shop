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

<script setup lang="ts">
import { computed } from "vue";

definePageMeta({
  middleware: ["auth"],
});

const user = useSupabaseUser();

const errorMessage = ref<string>("");

interface InfoState {
  name: string;
  description: string;
  price: string;
}

const info = ref<InfoState>({
  name: "",
  description: "",
  price: "",
});

const isButtonDisabled = computed(() => {
  for (let key in info.value) {
    if (!key) return true;
  }
  return false;
});

const handleSubmit = async () => {
  const body = {
    ...info.value,
    price: parseInt(info.value.price),
    listerId: user.value ? user.value.id : new Date().getMilliseconds(),
  };

  try {
    const res = await $fetch(`/api/iceCream`, {
      method: "post",
      body,
    });
    navigateTo("/profile/listings");
  } catch (err: any) {
    // no sure if err: any is the right way as setting it
    //to an object is throwing an error and TS accepts only any or unknown type
    errorMessage.value = err.statusMessage;
  }

  info.value.name = "";
  info.value.price = "";
  info.value.description = "";
};
</script>
