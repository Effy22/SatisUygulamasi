import React, { useState } from 'react'

import sepetSlice, {urunEkle, urunCikart} from '../../store/features/sepetSlice';

import { useDispatch, useSelector } from 'react-redux';

//Global state'te kaç ürünün eklendiğini tutmamız lazım ki takip edebilrsinler.

const UrunKarti = (props) => {
    const dispatch = useDispatch();
    const urun = props.urun; //kısaltma yaptık. rahat kullanmak için

    const [isActive, setIsActive] = useState(false);
    const [sepetSayisi, setSepetSayisi] = useState(0);
    const sepetAdedi = useSelector(state=>state.sepet.sepetAdedi);

    const buttonClick = (()=> {
        if(isActive){ //aktifse sepetten çıkart
            dispatch(urunCikart());
        }else{ //sepete ekle
            dispatch(urunEkle());
        }
        setIsActive(!isActive)
    });

  return (
    <>
        <div className="card p-3 m-3" style={{width: 300}}>
            <img src={urun.resim} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{urun.ad}</h5>
                <p className="card-text">{urun.aciklama}</p>
                <p className='card-text'>{urun.fiyat}</p>
                <br/>
                {
                    sepetAdedi < 3 || isActive //seçildiyse butonu görelim diye.
                    ?
                        isActive 
                        ? <button style={{backgroundColor: 'orange', border: '#FF6000'}} onClick={buttonClick} className='btn btn-info'>Sepetten Çıkart</button>
                        : <button style={{backgroundColor: 'orange', border: '#FF6000'}} onClick={buttonClick} className='btn btn-info'>Sepete Ekle</button>

                    : null
                }
                    
            </div>
        </div>  
    </>
  )
}

export default UrunKarti
