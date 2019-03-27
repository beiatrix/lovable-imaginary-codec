import React from 'react'
import '../styles/Quote.css'

export const Quote = props => {
  const {quote} = props
  return (
    <div>
      <p className="quote">{quote.quote}</p>
      <p className="author">{quote.author}</p>
    </div>
  )
}