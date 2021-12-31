import React from 'react'

export const Button = (props) => {
    
    return (
      <button style={{backgroundColor: props.color}}>{props.children}</button>
   )
}
