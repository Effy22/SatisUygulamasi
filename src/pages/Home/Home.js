import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUrunListele } from "../../store/features/urunSlice";
import UserProfile from "../../components/molecules/UserProfile";
import UrunListele from "../../components/molecules/UrunListele";


function Home(){

    const dispatch = useDispatch();
    const sepetAdedi = useSelector(state=>state.sepet.sepetAdedi);
    const sepetListesi = useSelector(state=>state.sepet.sepetList);
 
    useEffect(()=>{
        dispatch(fetchUrunListele());
    }, [dispatch]); //Bunu tetiklemezsek ürünler gelmez

    return(
        <>
            <div className="container border border-secondary">
                <div className="row border border-primary">
                    <div className="col-10 text-center">
                        <label  style={{color: '#FF6000' ,fontSize: '100px'}}>Hepsiburada</label>
                    </div>
                <div className="col-2 p-3 border border-danger" >
                    <UserProfile />
                    <button type="button" className="btn btn-primary position-relative" >
                                <i class="fa-solid fa-cart-shopping"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {sepetAdedi}
                                
                                  <span className="visually-hidden">unread messages</span>
                                </span>
                                
                    </button>
                </div>  
                </div>
                <div className="row mt-1 p-3 border border-success">
                    <div className="row border-secondary">
                        {
                            <UrunListele/>
                        }
                        
                    </div>
                
                </div>

            </div>
        </>
    )
}

export default Home;