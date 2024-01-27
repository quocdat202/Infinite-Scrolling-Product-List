// src/features/posts/postsSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    introduce: [],
};

const introduceSlice = createSlice({
    name: 'introduce',
    initialState,
    reducers: {
        fetchMenber: (state, action: PayloadAction<any>) => {

        },
        fetchMenberSuccess: (state: any, action: PayloadAction<any>) => {
            state.introduce = action.payload;
        }
    },
});

export const introduce = (state: any) => state.introduce;

export const { fetchMenber, fetchMenberSuccess } = introduceSlice.actions;

const introduceReducer = introduceSlice.reducer;
export default introduceReducer;
