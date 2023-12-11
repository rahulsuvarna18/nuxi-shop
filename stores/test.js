import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useExampleStore = defineStore("example", {
  state: () => ({
    cartContent: useLocalStorage("cartContentxx", {}),
  }),

  actions: {
    updateData(newValue) {
      this.cartContent = newValue;
    },
  },
});
