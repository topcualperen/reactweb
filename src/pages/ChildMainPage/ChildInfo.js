import React from "react"
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import Button from '@mui/material/Button';
import "./ChildMainPage.css"
import { getContract } from "../../wallet-connection/WalletCard";
import {useEffect,useState} from "react";
import {ethers} from  "ethers";   



export default function ChildInfo() {
    let [childBalance, setChildBalance] = useState();
    let [childWithdrawDate, setChildWithdrawDate] = useState();
    const getChildBalance = async () => {
        const contract = await getContract();
        const address = await contract.signer.getAddress();
        const child = await contract.getChild(address);
        setChildBalance(ethers.utils.formatEther(child.balance));
        console.log("balance of child ",child.balance);
    }
    useEffect(()=> {
        getChildBalance();
    },[]);

    const getChildWithdrawDate = async () => {
        const contract = await getContract();
        const address = await contract.signer.getAddress();
        const child = await contract.getChild(address);
        setChildWithdrawDate(child.withdrawDate);
        console.log("child withdraw date: ", child.withdrawDate);
    }
    useEffect(()=>{
        getChildWithdrawDate();
    },[]);

    return (
    <div className="container">
    <h2>Çekilebilecek Miktar</h2>

    <p className="child-info">{childBalance}</p>
    <h2>Devir Tarihi</h2>
    <p className="child-info"> {childWithdrawDate}</p>
    <Button variant="contained" startIcon={<LocalAtmIcon />} className="container_button">
        Yatırımı Çek
    </Button>

    
    
    </div>


    )
}
