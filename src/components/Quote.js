import React from 'react'

export const Quote = props => {
  const {quote} = props
  return (
    <div>
      <p className="quote">{quote.quote}</p>
      <p className="author">{quote.author}</p>
    </div>
  )
}