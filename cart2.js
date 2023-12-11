import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    allIceData: [],
    cartContent: JSON.parse(localStorage.getItem("cartContent")) || {},
  }),

  actions: {
    async getData() {
      const data = await useFetchIceCreams();
      this.allIceData = data;
    },

    add(productId, route) {
      // Ensure that cartContent is initialized as an object
      if (!this.cartContent) {
        this.cartContent = {};
      }

      // Now you can safely use hasOwnProperty
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

      // Update localStorage
      localStorage.setItem("cartContent", JSON.stringify(this.cartContent));

      navigateTo("/cart");
    },

    remove(productId) {
      if (!this.cartContent[productId]) {
        return;
      }
      this.cartContent[productId].quantity -= 1;

      if (this.cartContent[productId].quantity === 0) {
        delete this.cartContent[productId];
      }
    },

    removeProduct(productId) {
      delete this.cartContent[productId];
    },
  },

  getters: {
    cartInfo() {
      return Object.keys(this.cartContent).map((productId) => {
        const product = this.cartContent[productId];

        // console.log(typeof +product.productId);
        // console.log(
        //   this.allIceData.find((x) => x.id === product.productId).name
        // );

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
        const product = this.allIceData.find((p) => p.id === id);
        if (product) {
          return acc + product.price * this.cartContent[id].quantity;
        }
        return acc + 0;
      }, 0);
    },
    // productsTotal() {
    //   return Object.keys(this.cartContent).reduce((acc, id) => {
    //     return acc + this.cartContent[id].quantity;
    //   }, 0);
    // },
  },
});
