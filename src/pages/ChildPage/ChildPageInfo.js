import React from "react"
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import Button from '@mui/material/Button';
import "./ChildPage.css"



export default function ChildInfo() {
    return (
    <div className="container">
    <h2>Çocuklarım</h2>
        <div className="child-container">
            <h4>Ad Soyad</h4>
            <h4>Devredilcek Miktar</h4>
            <h4>Devir Tarihi</h4>

            <div className="new-child"> 
                Ayşe yılmaz 190 eth 20 0cak 2023
                
                    <img src="./img/sellbuy.svg" ></img>
                    <img src="./img/cek-butonu.svg"></img>
               
                
            </div>
            <img src="./img/ekle-button.svg"></img>
            <img src="./img/cikar-button.svg"></img>
            <img src="./img/guncelle-button.svg"></img>
        
        </div>
  

    
    
    </div>


    )
}
