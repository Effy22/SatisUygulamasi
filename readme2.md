# Bu proje hakkında;
Frontend ile back endi birleştirmek istediğimiz projedir. satış adındaki spring java projesini (intelli j'deki) bununla harmanladık.

# 1 terminal açıyoruz yeni react eklemek için 
npm install react-router-dom dedik.
package.json içine de girdi dosyalar

# 2. index.js içerisine işlemi tanımlıyoruz
# 3. Bootstrapten belli kodları link ve script olarak aldık index.html'ye ekledik. Bootstrap eklentileri
yine bootsnipten login.css ve login.js i aldı yapıştırdı direkt hcoa
login gibi dosyalar içinde kendi css i ve js 'sni ekledik

# REDUX EKLEDİK sayfaların yönetimi için
https://redux-toolkit.js.org/introduction/getting-started

```bash
    npm install @reduxjs/toolkit
```
kurmamız lazm

# redux un amaçları;
 1-fetch işlemleri yapmak ve kendi bünyesinde var olan parametreleri setlemek 2 amacı var.

# Nasıl ilerledik?
-sonra react redux gelir package.json' dosyasına yüklendi eklentiler.
-yeni klasör açtık store diye.
-store ve altındakileri ekledik. 

## features içine ekleme yaptık. slice'ler setleyeceklerimiz
1- içine import {createAsyncThunk, createSlice} from '@reduxjs/toolkit' bunu import etmemiz gerekiyor.

const login = ()=>{
        fetch(UserController.login,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', //neler olabilir başka?;     https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type     text, multipart/form-data (resim, dosya için), 
                // 'Authentication' koyarsak bearertoken gönderebiliriz.
            },
            body: JSON.stringify({
                username,      
                password // password: password
                 //  normalde 'username': username şeklinde ya da username: username şeklinde yazabiliriz key-value şeklinde gider.Eğer key ve value aynı değişken ile ifade ediliyor ise ayrı ayrı yazmanıza gerek yoktur. (yani key ve value değerleri aynıysa.)
            })
        }).then(data=>data.json())
        .then(data=>{
            if(data.code===200 || data.status===200)
                console.log(data);
            else
                alert('Hata...'+ data.message);
        })
        .catch(error=>{           
            console.log(error);
        });
    }
# export default

export ile verdiklerin geliyor
ama ama import PersonelSlice from'..' deseydik default olanı import eder. Ama diğerlerine erişim sağlamak istiyosak;
import {islem1, islem2} from '..' haricen bu işlemleri dön diyorsun. default olmayanlar!

createAsyncThunk ile asenkron işlemleri takip etcez. Bu işlemlerin başlangıç, bitiş ya da sorunlu bitişlerini ise 
 build.addCase(fetchRegister.pending,(state)=>{
            state.isLoadingFetchRegister=true;
        }) ile takip ediyoruz.

Bunu yapmamızın sebebi bunların birbirinden haberdar olması lazım bu yüzden tek bi çatı altında bu görevlere sahip olması lazım.
Bak ben şu işe başladım haberin olsun demesi diğerlerinin tetiklenmesi için

# main index.js dosyasını;
  <React.StrictMode>
    <Provider store={store}> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>
    
  </React.StrictMode>
  bu şekilde yazmamız gerekiyor çünkü Provider vermemiz lazım neden?

  Uyhulamamın tamamına store'u uyguladım. admin panelde personel bilgisini bu store'dan alıyorum. personel bilgisi ise personelSlice'tan geliyo. initialState'inden geliyo. bunu createSlice diyerek personel olarak bi state yaratıyorum.

  Statei reduce ettiğim kısmı reducer export ediyorum tüm sistemimizde yayınlanıyo statelerin durumlarını analiz etmek için 

  Önce herşeyi Admin Panele koymuştuk, şimdi hepsini böldük Ürünekleme, UserProfile Menü falan diye.

# useMemo
  Sayfa tekrar tekrar render olmasın diye önüne geçmek için kullanılır.

  # bİLEŞEN SEÇİMİ YAPMAK İÇİN; 
  let OrtaAlan = ()=> {
        if(menuId===4)
            return <UrunEkleme/>
        else if(menuId===1)
            return <PersonelEkleme/>
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
                    <Menu secimYapildi= {(secim)=>{
                        console.log('admin panel seçilen... ', secim);
                        setMenuId(secim);
                    }}/>
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

Bu bir yöntemdir. fonksiyon olarak tanımlayabiliriz. Ama tavsiye edilen bir yöntem değil. Onun yerine

# Seçilen bir menüden component getirmek için;

1. önce kendi Slice dosyasında;

const initMenuState = {
    menuList: [],
    isLoading: false,
    activeMenuId: 0
};

activeMenuId diye bir değişken tanımladık.

2. sonra; useSelector ile takip etmek istedik AdminPanel sayfasında;

function AdminPanel(){
    const dispatch = useDispatch();
    const menuId = useSelector(state => state.menu.activeMenuId)
    ...
}

3. sonra OrtaAlan değişsin istedğimiz için şu şekilde bir seçim koşulu yazdık;

let OrtaAlan = ()=> {
        if(menuId===4)
            return <UrunEkleme/>
        else if(menuId===1)
            return <PersonelEkleme/>
        else
            return null;
    }

# GİTHUB SIFIRDAN PUSHLAMAK;

1. git init
2. git remote add origin <GitHub_depo_URL>
3.  git add .
    git commit -m "Initial commit"
    git push -u origin master

# GİTHUB PUSHLADIKTAN SONRA UPDATE ETME;
Sol alt köşedeki Git simgesine tıklayın veya klavyede Ctrl + Shift + G tuşlarına basın.
Yapmak istediğiniz işlemi seçin (örneğin, "Changes" sekmesinde değişiklikleri gözden geçirin ve ardından "..." simgesine tıklayarak "Push" seçeneğini seçin).
Bu adımları izleyerek, Visual Studio Code üzerinden kolayca Git işlemlerini yapabilirsiniz. Diğer kod düzenleyicileri veya IDE'lerde de benzer entegrasyonlar bulunabilir, bu yüzden kullandığınız aracı kontrol edin ve belgelere göz atın.

Sepet slice yazcaz. Eklendikçe ordaki sayı değişsin eklenen ürünleri bi yerde tutmamız gerekiyor.