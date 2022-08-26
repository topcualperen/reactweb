import React from 'react'
import "./MainPage.css"
import {Link} from "react-router-dom"


 const MainPage = () => {
  return (
   
    <div class="row">
      <div class="col-1">
          <h1>
                Kolay, Güvenilir ve<br/>Hızlı Kripto Cüzdanı
          </h1>
          <div class="buttons">
          <Link to = "LoginPage"> {/* url de nereye gideceğini belirtiyor */}
                     Cüzdanı Bağlayınız
                  </Link>
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
              <div class="InfoButton">
                <Link to = "InfoMain"> {/* url de nereye gideceğini belirtiyor */}
                      Bilgi Al
                  </Link>
              </div>
              <div class="ContactButton">
                <Link to = "Contact"> {/* url de nereye gideceğini belirtiyor */}
                        İletişim
                  </Link>
              </div>          
          </div>
      </div>
    </div>

  


  )
}

export default MainPage;
