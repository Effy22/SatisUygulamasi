import React, { useState } from 'react';
import './Register.css'
import UserController from '../../config/UserController'

function Register(){
    //register submit butonuna basıldığında, Spring satış projemiz ile haberleştirmek için burada bir metot tanımlamamız lazım. istek atabilsin diye;
    const [adsoyad, setAdsoyad] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const register= ()=>{
        
        /**
         * Bu butona tıklandığında olması gerekenler;
         * 1- Gerekli olan girişlerin alınması [adsoyad, username, password]
         * 2- Almış olduğum bilgileri sunucuya iletmem gerekiyor. [fetch -> post ] 
         * 3- Login page'e döncez sonrasında.
         */

        //1. kısım url, 2 fetch ile alakalı configler;
        fetch(UserController.register,{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json' //çünkü requestbody'de json istiyorum satış uygulaması controller.register metodu.
            },
            body: JSON.stringify({
                //burada parametreler girilir. String olarak gönderiyorum json olarak iletsin
                'adsoyad':  adsoyad,
                'username': username,
                'password' : password
            })
        }).then(data=>data.json())
        .then(data=>{
            console.log(data);
            //alert verirsen kullanıcı görür.
        })

    }

    return(
        <>
        <div className="wrapper fadeInDown">
            <div id="formContent">                
                <div className="fadeIn first mt-2 p-4">
                    <img src="/lock_icon.jpeg" id="icon" alt="User Icon" />
                    <h1 className="mt-5">Üye Ol</h1>
                </div>
                <form>
                    <input onChange={(evnt)=>{
                        setAdsoyad(evnt.target.value);
                    }} //input içerisine yazmaya başladığımz andan itibaren 
                    type="text" id="name" className="fadeIn third" name="login" placeholder="name surname" />
                    <input onChange={(evnt)=>{
                        setUsername(evnt.target.value);
                    }}   type="text" id="login" className="fadeIn second" name="login" placeholder="username" />
                    <input onChange={(evnt)=>{
                        setPassword(evnt.target.value);
                    }}  type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                    <input type="button" className="fadeIn fourth" value="Register" onClick={register} />
                </form>
               
                <div id="formFooter">
                    <a className="underlineHover" href="/login">Go to the Login</a>
                </div>
 
            </div>
        </div>
        </>
    )
}
export default Register;