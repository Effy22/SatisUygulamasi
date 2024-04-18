import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import UrunKarti from '../atoms/UrunKarti';




function UrunListele(){
    
    const dispatch = useDispatch();
    const urunListesi = useSelector(state=> state.urun.urunList);
    console.log("Ürünler gelmiştir???", urunListesi);
    
    return(
        <>
        {
            urunListesi.map((urun,index)=>{
                return(
                    <UrunKarti key={index} urun={urun} /> //Ürün propsu verdik.
                )
            })
        }
      
        </>
    )

}

export default UrunListele;
