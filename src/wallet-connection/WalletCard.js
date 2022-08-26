import { ethers } from "ethers";
import abi from "../data/contract.json";

const CONTRACT_ADDRESS = "0x9f0100e8cbae8e769b3b92413c4b2e7b3cc0a77e";

let selectedAddress;

export const getContract = async () => {
  if (window.contract) return window.contract;

  if (await checkConnection()) {
    await initContract();
    return window.contract;
  }

  await connectWallet();
  return window.contract;
};

export const getSelectedAddress = async () => {
  await getContract();
  return selectedAddress;
};

const initContract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  window.contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

  selectedAddress = await signer.getAddress();
};

const checkConnection = async () => {
  checkMetamaskAvailable();

  const accounts = await window.ethereum.request({ method: "eth_accounts" });
  return accounts && accounts.length > 0;
};

const connectWallet = async () => {
  checkMetamaskAvailable();

  await window.ethereum.request({ method: "eth_requestAccounts" });
  await initContract();
};

const checkMetamaskAvailable = () => {
  const available = window.ethereum && window.ethereum.isMetaMask;

  if (!available) throw new Error("Need to install MetaMask");
};

export default null;
