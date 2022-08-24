import logo from './logo.svg';
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage/MainPage";
import ChildMainPage from './pages/ChildMainPage/ChildMainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import WalletCard from './wallet-connection/WalletCard';
import ParentMainPage from './pages/ParentMainPage/ParentMainPage';
import ChildPage from './pages/ChildPage/ChildPage.js';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
      
        <Navbar/>
        <Routes>
        
        <Route path="/main" element={<MainPage />} />
        <Route path="/child" element={<ChildMainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/wallet" element={<WalletCard />} />
        <Route path="/parentMain" element={<ParentMainPage />} />
        <Route path="childPage" element={<ChildPage />}/>
        </Routes>
        
      
      
      </div>

    </Router>

  );
}

export default App;
