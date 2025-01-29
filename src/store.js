import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '/src/pages/CartSlice.jsx';
 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store
