import { useDispatch, useSelector } from "react-redux";

import { setActiveMenuId } from "../../store/features/menuSlice";



function Menu (){
    const dispatch = useDispatch();
    const menuListesi = useSelector(state=> state.menu.menuList);
    const aktif = useSelector(state=>state.menu.activeMenuId);
    // const [aktif,setAktif] = useState(0); buna gerek yok
    const secildi = (secilenId)=>{
        console.log('seçildi...: ', secilenId);

       //  setAktif(secilenId);
        /**
         * Aşağıda props içerisine bir metot tanımı yapmış oluyoruz.
         * Propstan gelen metodu adminpanel'de setledik.
         */

       // props.secimYapildi(secilenId); //bu component için
       dispatch(setActiveMenuId(secilenId));
    }
    return(
        <ul className="list-group">
            {
                menuListesi.map((menu,index)=>{
                    if(index===aktif)
                        return(
                            <li key={index} className="list-group-item active" aria-current="true">{menu.ad}</li>
                        )
                    else
                        return(
                            <li key={index}  onClick={()=>secildi(index)} className="list-group-item">{menu.ad}</li>
                        )
                })
            }
        </ul>   

    )
}
export default Menu;
