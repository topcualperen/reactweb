import logo from './logo.svg';
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage/MainPage";
import ChildPage from './pages/ChildPage/ChildPage';
import LoginPage from './pages/LoginPage/LoginPage';
import WalletCard from './wallet-connection/WalletCard';


function App() {
  return (
    <div className="App">
      
        <Navbar/>
        
        <WalletCard/> 
        
    </div>
  );
}

export default App;
