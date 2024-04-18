import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initSepetState = {
    sepetList : [],
    sepetAdedi:0,
    isLoading: false,
}

const sepetSlice = createSlice ({
    name: 'sepet',
    initialState: initSepetState,
    reducers: {
    
        //setlycez yeni ürün ekliycez
        urunEkle(state,action){
            state.sepetAdedi = state.sepetAdedi +1;
            state.sepetList += action.payload.index;
        },
        urunCikart(state,action){
            state.sepetAdedi = state.sepetAdedi - 1;
            state.sepetList -= action.payload.index;
        }
    },
});

export const {urunCikart, urunEkle} = sepetSlice.actions;
export default sepetSlice.reducer;