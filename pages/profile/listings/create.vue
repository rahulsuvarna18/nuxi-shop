<template>
  <div class="p-8">
    <div class="flex flex-col w-[100%] mt-2">
      <label for="" class="text-cyan-500 mb-1 text-sm">Name</label>
      <input type="text" class="p-2 border w-100 rounded" v-model="info.name" />
    </div>
    <div class="flex flex-col w-[100%] mt-2">
      <label for="" class="text-cyan-500 mb-1 text-sm">Price</label>
      <input
        type="text"
        class="p-2 border w-100 rounded"
        v-model="info.price"
      />
    </div>
    <div class="flex flex-col w-[100%] mt-2">
      <label for="" class="text-cyan-500 mb-1 text-sm">Description</label>
      <textarea
        type="text"
        class="p-2 border w-100 rounded"
        v-model="info.description"
      ></textarea>
    </div>
    <button
      @click="handleSubmit"
      :disabled="isButtonDisabled"
      class="bg-blue-400 text-white rounded py-2 px-7"
    >
      Submit
    </button>
    <p v-if="errorMessage" class="mt-3 text-red-400">{{ errorMessage }}</p>
  </div>
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
