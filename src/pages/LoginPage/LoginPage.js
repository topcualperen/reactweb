import React from 'react'
import "./LoginPage.css"

 const LoginPage = () => {
  return (
   
     <div class="main">
     <h5>
          Hesap Oluşturma
     </h5>
     <div class="col">
          <div class="one">
               <form action="NAMEE">
                    <input type="text" name = "name" placeholder="İsim Soyisim"/>
               </form>
               <form action="">
                    <input type="number" name = "tc" placeholder ="Tc Kimlik No"/>
               </form>
               <form action="">
                    <input type="email" name = "e-mail" placeholder="E-mail"/>
               </form> 
          </div>

          <div class="two">
               <form action="">
                    <input type="number" name = "tel" placeholder="Telefon numarası"/>
               </form>
               <form action="">
                    <input type="date" name = "tarih" placeholder="Doğum Tarihi"/>
               </form>
               <form action="">
                    <input type="password" id = "pass" name = "sifre" placeholder="Şifre"/>
                      
               </form>

               <div class="button">
                    <button>
                         Kayıt Ol/Güncelle
                    </button>
               </div>

          </div>
          
     </div>
</div>

  )
}

export default LoginPage;
