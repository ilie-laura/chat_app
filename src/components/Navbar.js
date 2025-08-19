import React from 'react'
import '../styles/Navbar.css'
import {navLists }from './index_c.js'
import {appleImg, bagImg, searchImg} from '../helpers/index.js';
function Navbar() {
  return (
    <header className="header">
        <nav className="nav">
          <a href='/App'>
            <img src={appleImg} alt="Apple" width={14} height={18} />
          </a>
          <div className='nav-items'>
            {navLists.map((nav,i)=>(
                <div key={i}>
                    {nav}
                </div>
            ))}
          </div>
          <div className='nav-icons'>
            <img src={searchImg} alt="Search" />
            <img src={bagImg} alt="Bag" />
          </div>
        </nav>
    </header>
  )
}

export default Navbar
