import logo from './logo.svg';
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage/MainPage";

import LoginPage from './pages/LoginPage/LoginPage';
import WalletCard from './wallet-connection/WalletCard';


function App() {
  return (
    <div className="App">
      
        <Navbar/>
        
        <MainPage/> 
        
    </div>
  );
}

export default App;
