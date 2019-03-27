import React from 'react'
import '../styles/Contact.css'

export const Contact = props => {
  return (
    <section className="contact">
      <h3 class="title">Learn more</h3>
      <p>Want to know about our upcoming mountain-related events, or come to one of our mixers? Just sign up for our mailing list. No spam from us, we promise! Except for the spam we give you to keep up your energy while you're hiking through the mountains. We have tons of that.</p>
      <hr />
      <form>
        <input type="email" placeholder="Email">
        </input>
        <a href="#" className="btn">Subscribe now</a>
      </form>
    </section>
  )
}