import logo from './logo.svg';
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from './pages/LoginPage/LoginPage';
import WalletCard from './wallet-connection/WalletCard';

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      
        <Navbar/>
        
        <BrowserRouter>
          <Routes>
          
            <Route path='/' element = {<MainPage/>} /> {/*  MainPage url de / geldiğinde hangi sayfayı getireceğini belirtiyor.  */}
            <Route path='LoginPage' element = {<LoginPage/>} />
        
          </Routes>
        </BrowserRouter> 
        
    </div>
  );
}

export default App;
