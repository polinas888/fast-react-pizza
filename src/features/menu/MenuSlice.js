import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pizzasList: [],
  error: '',
  loading: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    menuLoad: (state, action) => {
      state.pizzasList = action.payload;
      state.loading = false;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    catchError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { menuLoad, catchError, startLoading } = menuSlice.actions;
export default menuSlice.reducer;
