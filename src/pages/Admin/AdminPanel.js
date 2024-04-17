import { useDispatch, useSelector } from "react-redux";
import UserProfile from "../../components/molecules/UserProfile";
import { useEffect } from "react";
import {  fetchUrunListele } from "../../store/features/urunSlice";
import { fetchMenuListele } from "../../store/features/menuSlice";
import Menu from "../../components/molecules/Menu";
import UrunEkleme from "../../components/organisms/UrunEkleme";
import PersonelEkleme from "../../components/organisms/PersonelEkleme";




function AdminPanel(){
    const dispatch = useDispatch();
    const menuId = useSelector(state => state.menu.activeMenuId);
    //onchange olayı buraya arrow funct olarak yazılabilir aşağıda inputların içine yapıştırılabilir

    //useEffect constructor gibi çalışyo, değişiklikleri kontrol ediyo bu sayfa reload olduğunda çalışır.
    
    useEffect(()=>{
        dispatch(fetchUrunListele());
        dispatch(fetchMenuListele());
    }, [dispatch]);

    let OrtaAlan = ()=>{
        if(menuId===4)
            return <UrunEkleme />
        else if(menuId===1)
            return <PersonelEkleme />
        else
            return null;
    }
    console.log('Admin Panel render oldu');

    return(
        <div className="container">
            <div className="row mt-5 p-3 border border-primary">
                <div className="col-10"></div>
                <div className="col-2 p-3 border border-danger" >
                    <UserProfile />
                </div>                    
            </div>
            <div className="row mt-1 p-3 border border-success">
                <div className="col-3 ">
                {
                        /**
                         * 
                         *  <Menu secimYapildi={(secim)=>{
                                console.log('admin panel secilen....: ', secim);
                                setMenuId(secim);
                            }} />
                         * 
                         */
                    }
                   <Menu />
                  
                </div>
                <div className="col-9">
                    {
                        <OrtaAlan/>
                    }

    
                </div>
            </div>
        </div>

    )
}
export default AdminPanel;