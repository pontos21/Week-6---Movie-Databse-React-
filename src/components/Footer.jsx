import React from 'react'
import './Footer.css'
import movielogo from '../assets/movielogo.png'

function Footer() {
  return (
    <div className='footer'>
        <div className="container">
            <div className="row footer__row">
                <figure>
                    <img src={movielogo} className="footer__logo" alt="" />
                </figure>
                <div className="footer__list">
                    <a href="#" className="footer__link link__hover-effect">Home</a>
                    <a href="" className="footer__link link__hover-effect">Genre</a>
                    <a href="" className="footer__link link__hover-effect">About</a>
                </div>
                <div className="footer__copyright">
                    Copyright © Paul Serafim 2022
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer