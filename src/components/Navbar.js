import React from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
      <nav className='nav-class'>     
            <div class="logo">
                  <a href="http://localhost:3000/">
                        <h5>
                            CryptOcean     
                        </h5>
                  </a>
            </div>
      </nav>
      )
}

export default Navbar;