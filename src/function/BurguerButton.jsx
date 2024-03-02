import React from 'react'

export default function BurguerButton(props) {
  return (
      <div onClick={props.handleClick} id='nav-icon3'
        className={`${props.clicked ? 'open' : ''}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
  )
}

