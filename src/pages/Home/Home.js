import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUrunListele } from "../../store/features/urunSlice";
import UserProfile from "../../components/molecules/UserProfile";
import UrunListele from "../../components/molecules/UrunListele";



function Home(){

    const dispatch = useDispatch();
   
    useEffect(()=>{
        dispatch(fetchUrunListele());
    }, [dispatch]);

    return(
        <>
            <div className="container border border-secondary">
                <div className="row border border-primary">
                <div className="col-10 text-center">
                    <label  style={{color: '#FF6000' ,fontSize: '100px'}}>Hepsiburada</label>
                </div>
                <div className="col-2 p-3 border border-danger" >
                    <UserProfile />
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