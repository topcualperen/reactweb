import React, {useState} from 'react'
import {ethers} from 'ethers'
import abi from "../data/contract.json";

const CONTRACT_ADDRESS = "0xD4F35a14eb8D9882beCB22594c9A4BaDBAe5C5d1";

const WalletCard = () => {

	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

	const connectWalletHandler = async () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			try {
				
				const result = await window.ethereum.request({ method: 'eth_requestAccounts'})
				//eth_getAccounts
				accountChangedHandler(result[0]);
				setConnButtonText('Connect Wallet');
				getAccountBalance(result[0]);
				const provider = new ethers.providers.Web3Provider(window.ethereum);
				window.contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider.getSigner());
			
			} catch (error) {
				setErrorMessage(error.message);
			}

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	// update account, will cause component re-render
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());

	}

	const getAccountBalance = (account) => {
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));
		})
		.catch(error => {
			setErrorMessage(error.message);
		});
	};

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}


	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);
	
	return (
		<div className='walletCard'>
		<h4> {"Connection to MetaMask"} </h4>
			<button onClick={connectWalletHandler}>{connButtonText}</button>
			<div className='accountDisplay'>
				<h3>Address: {defaultAccount}</h3>
			</div>
			<div className='balanceDisplay'>
				<h3>Balance: {userBalance}</h3>
			</div>
			{errorMessage}
			{		console.log("contract: ", window.contract)}
		</div>
	);
}

export default WalletCard;