import React from 'react'
import {Navbar} from './Navbar'
import '../styles/Header.css';

export const Header = props => {
  return (
    <header>
      <h2>
        <a href="#">Mountain Travel</a>
      </h2>
      <Navbar />
    </header>
  )
}