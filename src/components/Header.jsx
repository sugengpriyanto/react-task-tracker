import React from 'react'
import Button from './Button'

export default function Header({ name, action, text, color }) {
  return(
    <div className="d-flex justify-content-between p-3">
      <h1>{name}'s Task Tracker</h1>
      <Button action={action} text={text} color={color} />
    </div>
  )
}

Header.defaultProps = {
  name: "Sugeng",
  text: "Add",
  color: "btn btn-warning"
}

