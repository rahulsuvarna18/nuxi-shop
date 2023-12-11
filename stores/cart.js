// import { defineStore } from "pinia";
// import { toRaw } from "vue";
// // import { useLocalStorage } from "@vueuse/core";

// export const useCartStore = defineStore("cart", {
//   state: () => ({
//     // allIceData: toRaw([]),
//     allIceData: ref([]),
//     cartContent: useLocalStorage("cartContent", {}),
//   }),

//   actions: {
//     async getData() {
//       const data = await useFetchIceCreams();
//       // const data = await res.json();

//       this.allIceData = data;
//     },

//     add(productId) {
//       // if (route === "menu") {
//       //   alert("Added to cart");
//       // }
//       // if (route === "cart") return;
//       if (this.cartContent.hasOwnProperty(productId)) {
//         this.cartContent[productId] = {
//           productId,
//           quantity: this.cartContent[productId].quantity + 1,
//         };
//       } else {
//         this.cartContent[productId] = {
//           productId,
//           quantity: 1,
//         };
//       }
//       navigateTo("/cart");
//     },

//     remove(productId) {
//       if (!this.cartContent[productId]) {
//         return;
//       }
//       this.cartContent[productId].quantity -= 1;

//       if (this.cartContent[productId].quantity === 0) {
//         delete this.cartContent[productId];
//       }
//     },

//     removeProduct(productId) {
//       delete this.cartContent[productId];
//     },
//   },

//   getters: {
//     cartInfo() {
//       // console.log(this.allIceData);
//       return Object.keys(this.cartContent).map((productId) => {
//         const product = this.cartContent[productId];

//         // console.log(typeof +product.productId);
//         // console.log(
//         //   this.allIceData.find((x) => x.id === product.productId).name
//         // );

//         return {
//           id: product.productId,
//           quantity: product.quantity,
//           name: this.allIceData.find((x) => x.id === product.productId).name,
//           price: this.allIceData.find((x) => x.id === product.productId).price,
//           totalPrice:
//             product.quantity *
//             this.allIceData.find((x) => x.id === product.productId).price,
//         };
//       });
//     },

//     total() {
//       return Object.keys(this.cartContent).reduce((acc, id) => {
//         const product = this.allIceData.find((p) => p.id === id);
//         if (product) {
//           return acc + product.price * this.cartContent[id].quantity;
//         }
//         return acc + 0;
//       }, 0);
//     },
//     // productsTotal() {
//     //   return Object.keys(this.cartContent).reduce((acc, id) => {
//     //     return acc + this.cartContent[id].quantity;
//     //   }, 0);
//     // },
//   },
// });

/// CHATGPT Code

// import { defineStore } from "pinia";
// import { useLocalStorage } from "@vueuse/core"; // Correct import
// import { ref } from "vue"; // Import ref

// export const useCartStore = defineStore("cart", {
//   state: () => ({
//     allIceData: ref([]), // Use ref for reactive properties
//     cartContent: useLocalStorage("cartContent", {}), // useLocalStorage directly
//   }),

//   actions: {
//     async getData() {
//       const data = await useFetchIceCreams();
//       this.allIceData.value = data;
//     },

//     add(productId) {
//       if (this.cartContent.value.hasOwnProperty(productId)) {
//         this.cartContent.value[productId] = {
//           productId,
//           quantity: this.cartContent.value[productId].quantity + 1,
//         };
//       } else {
//         this.cartContent.value[productId] = {
//           productId,
//           quantity: 1,
//         };
//       }
//       navigateTo("/cart");
//     },

// remove(productId) {
//   if (!this.cartContent.value[productId]) {
//     return;
//   }
//   this.cartContent.value[productId].quantity -= 1;

//   if (this.cartContent.value[productId].quantity === 0) {
//     delete this.cartContent.value[productId];
//   }
// },

// removeProduct(productId) {
//   delete this.cartContent.value[productId];
// },
// },

//   getters: {
//     cartInfo() {
//       return Object.keys(this.cartContent.value).map((productId) => {
//         const product = this.cartContent.value[productId];

//         return {
//           id: product.productId,
//           quantity: product.quantity,
//           name: this.allIceData.value.find((x) => x.id === product.productId)
//             .name,
//           price: this.allIceData.value.find((x) => x.id === product.productId)
//             .price,
//           totalPrice:
//             product.quantity *
//             this.allIceData.value.find((x) => x.id === product.productId).price,
//         };
//       });
//     },

//     total() {
//       return Object.keys(this.cartContent.value).reduce((acc, id) => {
//         const product = this.allIceData.value.find((p) => p.id === id);
//         if (product) {
//           return acc + product.price * this.cartContent.value[id].quantity;
//         }
//         return acc + 0;
//       }, 0);
//     },
//   },
// });

// Import necessary modules
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { ref } from "vue";

// Define the store
export const useCartStore = defineStore("cart", {
  state: () => ({
    allIceData: ref([]),
    data: useLocalStorage("cart", {}),
    cartContent: useLocalStorage("cartContent", {}), // Initialize with an empty object
  }),

  actions: {
    async getData() {
      const data = await useFetchIceCreams();
      this.allIceData = data;
    },

    // add(productId) {
    //   this.cartContent = { name: productId };
    // },

    add(productId) {
      // Ensure that cartContent is initialized and is an object
      if (!this.cartContent || typeof this.cartContent !== "object") {
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
      // Ensure that cartContent is initialized and is an object

      // console.log(this.cartContent);

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
      // Ensure that cartContent is initialized and is an object
      if (!this.cartContent || typeof this.cartContent !== "object") {
        return 0;
      }

      return Object.keys(this.cartContent).reduce((acc, id) => {
        const product = this.allIceData.find((p) => p.id === id);
        if (product) {
          return acc + product.price * this.cartContent[id].quantity;
        }
        return acc + 0;
      }, 0);
    },
  },
});
