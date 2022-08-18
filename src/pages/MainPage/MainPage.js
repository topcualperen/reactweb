import React from 'react'
import "./MainPage.css"



 const MainPage = () => {
  return (
   
    <div class="row">
      <div class="col-1">
          <h1>
                Kolay, Güvenilir ve<br/>Hızlı Kripto Cüzdanı
          </h1>
          <div class="buttons">
                <button>
                    Cüzdanı Bağlayınız
                </button>
          </div>
          <div>
                <img src="/img/btcSmall.svg"/>
                <img src="/img/eter.svg"/>
                <img src="/img/doge.svg"/>
          </div>
      </div>
      <div class="glass">
          <div>
                <img src="/img/bigBtc.svg" alt="btc"/>
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

export default MainPage;