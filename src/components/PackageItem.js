import React from 'react'
import '../styles/PackageItem.css'

export const PackageItem = props => {
  const {item} = props
  return (
    <li>
        <i className={item.i}></i>
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
    </li>
  )
}