//Geçici ön bellekleme yeri gibi düşünebilirz.İsteyen isteyen yerden erişim sağlıyor. Orada bir değişken değiştiği anda onu normal component'in içerisinde onu takip eden tüm sayfalarda render oluyor.

//features içindeki index.js leri kopyalamam gerekiyor.

import { configureStore} from "@reduxjs/toolkit";
import { 
    personelSlice,
    urunSlice,
    menuSlice
} from './features';

const store = configureStore({
    reducer: {
        personel: personelSlice,
        urun: urunSlice,
        menu: menuSlice
    }
});

export default store;

