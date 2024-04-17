//fetch işlemleri, slice burda takibi yapılacak
import urunUrl from "../../config/UrunController"; 
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import menuSlice from "./menuSlice";
const initUrunState={
    urunList: [],
    isLoadingAdd: false,
    isLoadingListele: false,
    sepetSayisi: 0
}
//end pointimiz: ürün/urunEkleme!
export const fetchUrunEkleme =createAsyncThunk(
    'urun/fetchUrunEkleme',
    async (payload)=>{
        try{
          const result = await fetch(urunUrl.urunEkle, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload) // {ad, açıklama, fiyat,resim} gelmesi lazım ki bu bilgi gitsin.
          }).then(data=>data.json()) 
          //result ile dönen şey daime bir String olarak döner bunu json'a çevirmemiz lazım. html sayfası da bir metindir.
          .then(data=>data);

          return result;

        }catch(error){

            console.log('HATA fetchUrunEkleme.....: ', error);
        }
    }

);

//end pointimiz: ürün/ürünlistele!
export const fetchUrunListele = createAsyncThunk(
    'urun/fetchUrunListele', //async() içine eğer parametresiz metot ise  bişey yazmıyoruz içine payload gibi
   async ()=>{
        const result=await fetch(urunUrl.urunListele,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data=>data.json())
        .then(data=>data);
        return result;
    }
);

const urunSlice = createSlice({
    name: 'urun',
    initialState: initUrunState,
    reducers: {
        setSepetSayisi(state, action){
            state.sepetSayisi = action.payload;
        }
    },
    extraReducers: (build)=>{

            build.addCase(fetchUrunEkleme.pending, (state)=>{state.isLoadingAdd=true;});
            build.addCase(fetchUrunEkleme.fulfilled, (state,action)=>{
                state.isLoadingAdd=false;
                if(action.payload.data){
                    alert('Ürün Başarı ile eklendi.')
                }
            });
            build.addCase(fetchUrunEkleme.rejected, (state)=>{state.isLoadingAdd=false;});

            build.addCase(fetchUrunListele.pending, (state)=>{state.isLoadingListele=true;});
            build.addCase(fetchUrunListele.fulfilled, (state,action)=>{
                state.isLoadingListele=false;
                if(action.payload.status===200){
                    state.urunList = action.payload.data;
                }
            });
            build.addCase(fetchUrunListele.rejected, (state)=>{state.isLoadingListele=false;});

    }
});

export const {setSepetSayisi} =urunSlice.actions;
export default urunSlice.reducer;

