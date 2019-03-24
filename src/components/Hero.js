import React from 'react'
import '../styles/Hero.css'
import main from '../img/main.jpg'

export const Hero = props => {
  return (
    <section className="hero">
      <div className="background-image">
        <img src={main} alt="main" />
      </div>
      <div className="hero-content-area">
        <h1>Mountain Travel</h1>
        <h3>Unmissable Adventure Tours Around The World</h3>
        <a href="#" className="btn">Contact Us</a>
      </div>
    </section>
  )
}
