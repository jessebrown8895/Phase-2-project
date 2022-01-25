import React from "react";
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  console.log(props);
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(props.path, { state: { data: props.data } });
  };
  return (
    <div>
      <button
        className="changeColor"
        style={{ margin: "10px", padding: "10px" }}
        onClick={handleClick}
      >
        {props.children}
      </button>
    </div>
  );
};
export default Button;
