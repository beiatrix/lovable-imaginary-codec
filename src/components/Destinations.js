import React from 'react'
import mtn1 from '../img/mountain1.jpg'
import mtn2 from '../img/mountain2.jpg'
import mtn3 from '../img/mountain3.jpg'
import mtn4 from '../img/mountain4.jpg'
import '../styles/Destinations.css'


export const Destinations = props => {
  return (
    <section className="destinations">
      <h3 className="title">Some of our destinations:</h3>
      <p>Tired of the ocean? Are the plains too plain? Come along with us on one of our mountain adventures. Here are some pictures from people who have had elevated experiences with us.</p>
      <hr></hr>
      <ul className="grid">
        <li className="small" style={{backgroundImage: `url(${mtn1})`}}></li>
        <li className="large" style={{backgroundImage: `url(${mtn2})`}}></li>
        <li className="large" style={{backgroundImage: `url(${mtn3})`}}></li>
        <li className="small" style={{backgroundImage: `url(${mtn4})`}}></li>
      </ul>
    </section>
  )
}