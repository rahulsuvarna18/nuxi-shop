import { defineStore } from "pinia";

type AllIceData = {
  id: number;
  name: string;
  description: string;
  price: number;
  listerId: string;
};

type CartContent = {
  productId: number;
  quantity: number;
};

type State = {
  allIceData: AllIceData[] | null;
  cartContent: CartContent[];
  isLoading: boolean;
};

export const useCartStore = defineStore("cart", {
  state: (): State => ({
    allIceData: null,
    cartContent: [],
    isLoading: false,
  }),

  persist: true,

  actions: {
    async getData() {
      const { value: data } = await useFetchIceCreams();
      this.allIceData = data;
    },

    add(productId: number) {
      if (!this.cartContent || typeof this.cartContent !== "object") {
        this.cartContent = [];
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

    remove(productId: number) {
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

    removeProduct(productId: number) {
      this.isLoading = true;
      delete this.cartContent[productId];
      this.isLoading = false;
    },
  },

  getters: {
    cartInfo(): object[] {
      if (!this.cartContent || typeof this.cartContent !== "object") {
        return [];
      }

      return Object.keys(this.cartContent).map((productId) => {
        const pId = parseFloat(productId);
        const product = this.cartContent[pId];

        const iceCream = this.allIceData?.find(
          (x) => x.id === product.productId
        );

        return {
          id: product.productId,
          quantity: product.quantity,
          name: iceCream?.name,
          price: iceCream?.price,
          totalPrice: product.quantity * (iceCream?.price ?? 0),
        };
      });
    },

    total(): number {
      return Object.keys(this.cartContent).reduce((acc, id) => {
        if (this.allIceData !== null) {
          const product = this.allIceData.find((p) => p.id === parseInt(id));
          if (product) {
            const pId = parseFloat(id);
            return acc + product.price * this.cartContent[pId].quantity;
          }
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
