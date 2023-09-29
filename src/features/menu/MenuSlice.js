import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pizzasList: [],
  error: '',
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    menuLoad: (state, action) => {
      state.pizzasList = action.payload;
    },
    catchError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { menuLoad, catchError } = menuSlice.actions;
export default menuSlice.reducer;
