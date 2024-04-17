import React, { useState } from 'react'
import urunSlice, { setSepetSayisi } from '../../store/features/urunSlice';
import { useSelector } from 'react-redux';

const UrunKarti = (props) => {
    const urun = props.urun; //kısaltma yaptık. rahat kullanmak için

    const [eklendiMi, setEklendiMi] = useState(false);
    const sepetSayisi = useSelector(state => state.urun.setSepetSayisi);

    const sepeteEkleme = (()=> {
        setEklendiMi(true);
       sepetSayisi= sepetSayisi+1;

    });


  return (
    <>
        <div className="card p-3 m-3" style={{width: 300}}>
            <img src={urun.resim} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{urun.ad}</h5>
                <p className="card-text">{urun.aciklama}</p>
                <p className='card-text'>{urun.fiyat}</p>
                    <button onClick={sepeteEkleme} className='btn btn-success' style={{backgroundColor: 'orange', border: '#FF6000'}}>{eklendiMi ? 'Eklendi' : 'Sepete Ekle'}</button>
            </div>
        </div>  
    </>
  )
}

export default UrunKarti
