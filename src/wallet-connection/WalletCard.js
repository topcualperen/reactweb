import { ethers } from "ethers";
import abi from "../data/contract.json";

const CONTRACT_ADDRESS = "0xD4F35a14eb8D9882beCB22594c9A4BaDBAe5C5d1";

export const getContract = async () => {
  if (window.contract) return window.contract;

  if (await checkConnection()) {
    initContract();
    return window.contract;
  }

  await connectWallet();
  return window.contract;
};

const initContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  window.contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    abi,
    provider.getSigner()
  );
};

const checkConnection = async () => {
  checkMetamaskAvailable();

  const accounts = await window.ethereum.request({ method: "eth_accounts" });
  return accounts && accounts.length > 0;
};

const connectWallet = async () => {
  checkMetamaskAvailable();

  await window.ethereum.request({ method: "eth_requestAccounts" });
  initContract();
};

const checkMetamaskAvailable = () => {
  const available = window.ethereum && window.ethereum.isMetaMask;

  if (!available) throw new Error("Need to install MetaMask");
};

export default null;
