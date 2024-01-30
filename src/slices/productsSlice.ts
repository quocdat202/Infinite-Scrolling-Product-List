// src/features/posts/postsSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { responseType } from 'models';

const initialState: responseType = {
    messageResponse: '',
    statusCode: 200,
    data: [],
    isLoading: true
}

const productsSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        fetchProducts: (state, action: PayloadAction<any>) => { },
        fetchSearchProducts: (state, action: PayloadAction<any>) => { },

        fetchProductsSuccess: (state, action: PayloadAction<any>) => {
            state.data = action.payload
            state.isLoading = false
            state.statusCode = 200
            state.messageResponse = 'Success'
        },
        fetchSearchProductsSuccess: (state, action: PayloadAction<any>) => {
            state.data = action.payload
            state.isLoading = true
            state.statusCode = 200
            state.messageResponse = 'Success'
        },
    },
});

export const products = (state: any) => state.data;

export const { fetchProducts, fetchSearchProducts, fetchProductsSuccess, fetchSearchProductsSuccess } = productsSlice.actions;

const productsReducer = productsSlice.reducer;
export default productsReducer;
