import React from "react"
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import Button from '@mui/material/Button';
import "./ChildMainPage.css"



export default function ChildInfo() {
    return (
    <div className="container">
    <h2>Çekilebilecek Miktar</h2>
    <input type="text" ></input>
    <h2>Devir Tarihi</h2>
    <input type="text" ></input>
    <Button variant="contained" startIcon={<LocalAtmIcon />} className="container_button">
        Yatırımı Çek
    </Button>

    
    
    </div>


    )
}
