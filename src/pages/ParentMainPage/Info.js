import React from "react"
import Box from '@mui/material/Box';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


export default function Info() {
    return (
    <Box
      sx={{
        width: 800,
        height: 300,
        borderRadius: 12,
        //boxShadow: inset 0 4 40 rgba(0, 0, 0, 0.25),
        background: '#ffffff',
        margin: 10,
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    className="box--component">
      <div style={{display:"flex"}} >
            <h5 style={{color:"black",padding:"10px"}}>Cüzdanım</h5>
            <AccountBalanceWalletIcon style={{width:"30px", height:"30px", margin:"20px"}}/>
      </div>
      <p className="eth--component"></p> 
  
    </Box>


    )
}
