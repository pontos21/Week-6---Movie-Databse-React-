import React from 'react'
import './Navbar.css'
import movielogo from '../assets/movielogo.png'



function Navbar() {
  return (
    <>
        <div className='navbar'>
            <div className='navbar__container'>
                <a href="/">
                    <img src={movielogo} className='navbar__logo' alt="" />
                </a>
                <ul className='nav__links'>
                <li className='nav__list'>
                    <a href="/" className='nav__link'>
                        Home
                    </a>
                </li>
                <li className='nav__list'>
                    <a href="/movies" className='nav__link nav__link--primary'>
                        Movies
                    </a>
                </li>
                </ul>
            </div>
            
        </div>
    </>
  )
}

export default Navbar