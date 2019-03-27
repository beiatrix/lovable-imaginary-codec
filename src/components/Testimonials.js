import React from 'react'
import {Quote} from './Quote'

const data = [
  {
    quote: "Wow! This tour made me realize how much I love mountains. After going on one of these tours, I can safely say that they are my favorite geographic feature, and my favorite word that starts with M.",
    author: "- Colt Steele"
  },
  {
    quote: "I never understood why people cared so much about mountains. But then I went on one of these tours. Now I can't understand people who *don't* care about mountains!",
    author: "- Elie Schoppik"
  },
  {
    quote: "If you want to understand the universe, head to the mountains. I mean, seriously. It's like, woah. You know? It's like that.",
    author: "- Tim Garcia"
  }
]

export const Testimonials = props => {
  return (
    <section className="testimonials">
      <h3 className="title">Testimonials from our adventurers:</h3>
      <hr />
      {
        data.map((quote, idx) => {
          return <Quote key={`Quote-${idx}`} quote={quote} />
        })
      }
    </section>
  )
}