import {useSelector}  from 'react-redux'

const Sepet = () => {
    const sepetListesi = useSelector(state=>state.sepet.sepetListesi)
    
  return (
    <div>
            <h2>Sepetteki Ürünler</h2>
            <ul>
                {sepetListesi.map((sepet, index) => (
                    <li key={index}>
                        {/* Ürün bilgilerini göster */}
                        ID: {urun.id}, Adı: {urun.ad}, Fiyatı: {urun.fiyat}
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default Sepet
