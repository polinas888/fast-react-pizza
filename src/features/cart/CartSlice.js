import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzas: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.pizzas = [...state.pizzas, action.payload];
    },
    deleteItem: (state, action) => {
      state.pizzas = state.pizzas.filter(
        (pizza) => pizza.pizzaId !== action.payload,
      );
    },
    increaseItemQuantity: (state, action) => {
      const { pizzaId } = action.payload;
      state.pizzas = state.pizzas.map((pizza) =>
        pizza.pizzaId === pizzaId
          ? {
              ...pizza,
              quantity: pizza.quantity + 1,
              totalPrice: pizza.unitPrice * (pizza.quantity + 1),
            }
          : pizza,
      );
    },
    decreaseItemQuantity: (state, action) => {
      const { pizzaId } = action.payload;
      const targetPizza = state.pizzas.find(
        (pizza) => pizza.pizzaId === pizzaId,
      );

      if (targetPizza && targetPizza.quantity === 1) {
        state.pizzas = state.pizzas.filter(
          (pizza) => pizza.pizzaId !== pizzaId,
        );
      } else {
        state.pizzas = state.pizzas.map((pizza) =>
          pizza.pizzaId === pizzaId && pizza.quantity > 1
            ? {
                ...pizza,
                quantity: pizza.quantity - 1,
                totalPrice: pizza.unitPrice * (pizza.quantity - 1),
              }
            : pizza,
        );
      }
    },
    clearCart: (state, action) => {
      state.pizzas = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export const getTotalPizzasQuantity = (state) =>
  state.cart.pizzas.reduce((sum, pizza) => {
    return sum + pizza.quantity;
  }, 0);

export const getTotalPizzasPrice = (state) =>
  state.cart.pizzas.reduce((sum, pizza) => {
    return sum + pizza.totalPrice;
  }, 0);

export const getPizzaQuantity = (id) => (state) =>
  state.cart.pizzas.find((pizza) => pizza.pizzaId === id)?.quantity || 0;

export default cartSlice.reducer;
