import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import cartReducer from './features/cart/CartSlice';
import menuReducer from './features/menu/MenuSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    menu: menuReducer,
  },
});

export default store;
