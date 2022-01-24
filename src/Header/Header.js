import React from 'react'
import './Header.css'

export default function Header(props) {
  console.log(props)
  return <header>Alchemy Astrology, by {props.name}</header>
}
