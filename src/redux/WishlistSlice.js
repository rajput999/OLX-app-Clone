import {createSlice} from '@reduxjs/toolkit';

export const WishListSlice = createSlice({
    name:'wishlist',
    initialState:{
        data:[],
    },
    reducers:{
        addToWishlist(state,action){
            state.data.push(action.payload);
        },
    },
});

export const {addToWishlist} = WishListSlice.actions;
export default WishListSlice.reducer;