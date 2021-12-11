import React from 'react'

export default function Button({text, color, action}) {
  return <button className={color} onClick={action}>{text}</button>
}