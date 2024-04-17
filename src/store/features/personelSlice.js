import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import userController from '../../config/UserController'

const personelInitialState = {
    token:'',
    data: {},
    isLogin: false,
    isLoadingFetchLogin: false, //fetch işlemi devam ediyo mu etmiyo mu
    isLoadingFetchRegister: false //fetch işlemi devam ediyo mu etmiyo mu
};

/**
 * Burada 2 farklı işlemimiz olacak;
 * 1. fetch işlemlerini yöneteceğimiz kısım.
 * 2. State bilgilerini güncellediğimiz kısım.
 * state bilgilerini fetch işlemlerinin sonuçlarına göre takip edilerek setlenebilirler.
 */

/**
 * DİKKAT!!
 * Burada asyncThunk'lara verdiğimiz isimler benzersiz olmalıdır. Kopyala yapıştır ile işlem yapılırken genellikle işlemler değiştirilmeden işlem yapılmaya çalışılır bu nedenle sonuçlar hatalı çalışır.
 * 
 * createAsyncThunk diye yazdığımız işlem, asenkron bir işlemdir.
 * payload=> bu metodu kullanmak isteyen birisi metoda parametre girmek istiyor ise bunu kullanılır. Yani bu metoda girilen tüm * değişkenler bu payload değişkenine atanır.
 * fetchLogin(usename,password)-> username,password = payload
 * 
 *  public String getName(){
 *      return Ali;
 *  } dememiz gibi. bu işlemin de (async) bişey return etmesi lazım.
 * 
 * DİKKAT!!
 * async işlemler zaman alan işlemlerdir ve kendileri tetiklendikten sonra diğer kodların çalışmasına izin verirler. Ancak eğer * bu işlemin neticesi beklenecek ise o zaman asenkron işlemin bitişinin bekletilebilmesi için metot önüne "await" eklenir. * İşlemin sonucu belirlenene kadar bekle demiş oluyoruz.
 */

export const fetchLogin = createAsyncThunk(
    'personel/fetchLogin', //dosyanınAdı/buDeğişkeninAdi
    async (payload)=>{
        try{
        const result = await fetch(userController.login,{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(payload) //payload.username falan diycez sayfanın içindeyken.buraya username,password yazmamıza gerek yok genel taşıyıcı gibi.
        }).then(data=> data.json())
        .then(data=>data);
        
        return result;
    }catch(error) {
        console.log('ERROR: prsonel/fetchLogin...: ' , error);
    }
    }
);

export const fetchRegister = createAsyncThunk(
    'personel/fetchRegister',
    async (payload) =>{
        try{
        const result = await fetch(userController.register,{
            method: 'POST',
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify(payload)
        }).then(data => data.json()).then(data=>data);
        return result;
    }catch(error) {
        console.log('ERROR: personel/fetchRegister...: ', error);
    }
    }
);

const personelSlice = createSlice({
    name: 'personel',
    initialState: personelInitialState,
    /**
     * Default değerleri almak ve yönetmek için kullanıyoruz.Çünkü slice içinde bu değerleri sunucudan gelen değerler ile setlememiz gerekiyor. Bu işlemleri yapmak için kullanıyoruz.
     */
    reducers: {},
    extraReducers: (build)=>{
        /**
         * bir sunucu request işlemi 3 aşamada takip edilir.
         * 1- İşlemin başladığı an.
         * 2- İşlemin başaı ile tamamlandığı an.
         * 3- İşlemin başarısız olduğu an. 
         * 
         * Bunları hepsi için burada bir aksiyon yazmamız gerekecektir. 
         * Mesela işlem başladığında bunu belirten bir loading ikonu çıkartmak 
         * işlem bittiğinde bunu kapatmak gibi işlemler burada yapılır. Sunucudan gelen veriler
         * stateler içine aktarılır ya da bir hata olduğunda hata kullanıcıya iletilir.
         */
        build.addCase(fetchLogin.pending,(state)=>{
            state.isLoadingFetchLogin = true;
        }); // işlemin devam ettiği an
        build.addCase(fetchLogin.fulfilled,(state,action)=>{
            state.isLoadingFetchLogin = false;
            if(action.payload.status===null || action.payload.status!==200){
              alert('hata...:'+ action.payload.message);  
            }else{   
                console.log("gelen data....: ", action.payload);               
                state.data = action.payload.data;
                state.isLogin = true;
               // sessionStorage.setItem("token", action.payload.data);
            }
           
        }); // işlem tamamlandı
        build.addCase(fetchLogin.rejected,(state)=>{
            state.isLoadingFetchLogin=false;
        }); // işlem iptal oldu
        build.addCase(fetchRegister.pending,(state)=>{
            state.isLoadingFetchRegister= true;
        });
        build.addCase(fetchRegister.fulfilled,(state,action)=>{
            state.isLoadingFetchRegister = false;
            console.log(action.payload);
        });
        build.addCase(fetchRegister.rejected,(state)=>{
            state.isLoadingFetchRegister = false;
        });
    }

});
export default personelSlice.reducer;
