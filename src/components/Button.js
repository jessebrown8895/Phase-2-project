import React from 'react'
import { useNavigate } from "react-router-dom";

export const Button = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(props.path, {state: {data: props.data}})
    }
    return (
      <button onClick={handleClick} style={{backgroundColor: props.color}}>{props.children}</button>
   )
}
