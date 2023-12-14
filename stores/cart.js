import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { ref, reactive } from "vue";

export const useCartStore = defineStore("cart", {
  state: () => ({
    allIceData: reactive([]),
    cartContent: ref({}),
    isLoading: ref(false),
  }),

  persist: true,

  actions: {
    async getData() {
      const data = await useFetchIceCreams();
      this.allIceData = data;
    },

    add(productId) {
      if (!this.cartContent || typeof this.cartContent !== "object") {
        this.cartContent = {};
      }

      if (this.cartContent.hasOwnProperty(productId)) {
        this.cartContent[productId] = {
          productId,
          quantity: this.cartContent[productId].quantity + 1,
        };
      } else {
        this.cartContent[productId] = {
          productId,
          quantity: 1,
        };
      }
      navigateTo("/cart");
    },

    remove(productId) {
      this.isLoading = true;
      if (!this.cartContent[productId]) {
        return;
      }
      this.cartContent[productId].quantity -= 1;

      if (this.cartContent[productId].quantity === 0) {
        delete this.cartContent[productId];
      }
      this.isLoading = false;
    },

    removeProduct(productId) {
      this.isLoading = true;
      delete this.cartContent[productId];
      this.isLoading = false;
    },
  },

  getters: {
    cartInfo() {
      if (!this.cartContent || typeof this.cartContent !== "object") {
        return [];
      }

      return Object.keys(this.cartContent).map((productId) => {
        const product = this.cartContent[productId];

        return {
          id: product.productId,
          quantity: product.quantity,
          name: this.allIceData.find((x) => x.id === product.productId).name,
          price: this.allIceData.find((x) => x.id === product.productId).price,
          totalPrice:
            product.quantity *
            this.allIceData.find((x) => x.id === product.productId).price,
        };
      });
    },

    total() {
      return Object.keys(this.cartContent).reduce((acc, id) => {
        const product = this.allIceData.find((p) => p.id === parseInt(id));
        if (product) {
          return acc + product.price * this.cartContent[id].quantity;
        }
        return acc + 0;
      }, 0);
    },

    loadingStatus(state) {
      console.log(state.isLoading);
      return state.isLoading;
    },
  },
});
