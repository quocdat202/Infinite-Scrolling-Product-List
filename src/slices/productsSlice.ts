// src/features/posts/postsSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    products: [],
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProducts: (state, action: PayloadAction<any>) => { },

        fetchProductsSuccess: (state, action: PayloadAction<any>) => {
            state.products = action.payload
        },
    },
});

export const products = (state: any) => state.products;

export const { fetchProducts, fetchProductsSuccess } = productsSlice.actions;

const productsReducer = productsSlice.reducer;
export default productsReducer;
