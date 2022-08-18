import React from 'react'
import "./ChildPage.css"

const ChildPage = () => {
  return (
     <div class="row">
     <div class="col-1">
          <h1>
               Genç, Dinamik ve Hızlı<br/>Kripto Cüzdanı
          </h1>
          <div class="buttons">
               <button>
                    Giriş
               </button>
               <a href="#">
                    Üye Ol
               </a> 
          </div>
          <div>
               <img src="img/btcSmall.svg"/>
               <img src="img/eter.svg"/>
               <img src="img/doge.svg"/>
          </div>
     </div>
     <div class="glass">
          <div>
               <img src="img/bigBtc.svg" alt="btc"/>
          </div>
          <div class="buttons2">
               <button>
                    Bilgi Al
               </button>
               <a href="#">
                    İletişim
               </a>
          </div>
     </div>
</div>
  )
}


export default ChildPage;
