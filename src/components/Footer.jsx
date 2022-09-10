import React from 'react'
import './Footer.css'
import movielogo from '../assets/movielogo.png'

function Footer() {
  return (
    <div class="footer">
        <div class="container">
            <div class="row footer__row">
                <figure>
                    <img src={movielogo} class="footer__logo" alt="" />
                </figure>
                <div class="footer__list">
                    <a href="#" class="footer__link link__hover-effect">Home</a>
                    <a href="" class="footer__link link__hover-effect">Genre</a>
                    <a href="" class="footer__link link__hover-effect">About</a>
                </div>
                <div class="footer__copyright">
                    Copyright © Paul Serafim 2022
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer