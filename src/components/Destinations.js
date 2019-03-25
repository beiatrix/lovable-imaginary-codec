import React from 'react'
import mtn1 from '../img/mountain1.jpg'
import mtn2 from '../img/mountain2.jpg'
import mtn3 from '../img/mountain3.jpg'
import mtn4 from '../img/mountain4.jpg'

export const Destinations = props => {
  return (
    <section class="destinations">
      <h3 class="title">Some of our destinations:</h3>
      <p>Tired of the ocean? Are the plains too plain? Come along with us on one of our mountain adventures. Here are some pictures from people who have had elevated experiences with us.</p>
      <hr></hr>
      <ul class="grid">
        <li class="small"><img src={mtn1} alt="main" /></li>
        <li class="small"><img src={mtn2} alt="main" /></li>
        <li class="small"><img src={mtn3} alt="main" /></li>
        <li class="small"><img src={mtn4} alt="main" /></li>
      </ul>
    </section>
  )
}