import logo from './logo.svg';
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage/MainPage";
import ChildPage from './pages/ChildPage/ChildPage';
import LoginPage from './pages/LoginPage/LoginPage';
import WalletCard from './wallet-connection/WalletCard';
import ParentMainPage from './pages/ParentMainPage/ParentMainPage';


function App() {
  return (
    <div className="App">
      
        <Navbar/>
        
        <ParentMainPage /> 
        
    </div>
  );
}

export default App;
