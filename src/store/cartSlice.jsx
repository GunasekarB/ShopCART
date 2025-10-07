import { createSlice } from "@reduxjs/toolkit";

let datafromWeb = JSON.parse(localStorage.getItem("cart"));

const cartSlice = createSlice({
  name: "cart1",
  initialState: datafromWeb || [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);

      localStorage.setItem("cart", JSON.stringify([...state]));
    },
    removeItem(state, action) {
      let itemId = action.payload; //1
      let newProducts = state.filter(
        (cartProduct) => cartProduct.id !== itemId
      );
      localStorage.setItem("cart", JSON.stringify([...newProducts]));

      return newProducts;
    },
    // change quantity by a delta: { id, delta }
    changeQuantity(state, action) {
      const { id, delta } = action.payload;
      const newProducts = state.map((p) => {
        if (p.id === id) {
          const newQty = (p.quantity || 1) + delta;
          return { ...p, quantity: newQty < 1 ? 1 : newQty };
        }
        return p;
      });
      localStorage.setItem("cart", JSON.stringify([...newProducts]));
      return newProducts;
    },
    // clear the whole cart (used after placing an order)
    clearCart() {
      localStorage.setItem("cart", JSON.stringify([]));
      return [];
    },
  },
});

export default cartSlice.reducer;

export let { addItem, removeItem, changeQuantity, clearCart } =
  cartSlice.actions;
